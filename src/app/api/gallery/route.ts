import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { ADMIN_USER_ID } from "@/lib/admin";
import { getDB } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";

// GET all gallery images
export async function GET() {
  const db = await getDB();
  const images = await db.collection("gallery").find().toArray();
  return NextResponse.json(images);
}

// POST new gallery image (ADMIN ONLY)
export async function POST(req: Request) {
  const user = await currentUser();
  if (!user || user.id !== ADMIN_USER_ID) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const title = formData.get("title")?.toString() ?? "";
  const imageFile = formData.get("image") as File | null;

  if (!imageFile || imageFile.size === 0) {
    return NextResponse.json({ error: "Image is required" }, { status: 400 });
  }

  const buffer = Buffer.from(await imageFile.arrayBuffer());

  const uploadResult = await new Promise<any>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "gallery" },
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
    stream.end(buffer);
  });

  const db = await getDB();
  const result = await db.collection("gallery").insertOne({
    title,
    image: uploadResult.secure_url,
    createdAt: new Date(),
  });

  return NextResponse.json({
    _id: result.insertedId.toString(),
    title,
    image: uploadResult.secure_url,
  });
}
