import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { ADMIN_USER_ID } from "@/lib/admin";
import { getDB } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";

// Increase body size limit for large image uploads
export const config = {
  api: {
    bodyParser: { sizeLimit: "50mb" },
  },
};

// GET all gallery images
export async function GET() {
  try {
    const db = await getDB();
    const images = await db.collection("gallery").find().toArray();
    const formattedImages = images.map((img) => ({
      _id: img._id.toString(),
      title: img.title,
      image: img.image,
    }));
    return NextResponse.json(formattedImages);
  } catch (err) {
    console.error("Gallery GET error:", err);
    return NextResponse.json({ error: "Failed to fetch gallery images" }, { status: 500 });
  }
}

// POST new gallery image (ADMIN ONLY)
export async function POST(req: Request) {
  try {
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

    const uploadResult: any = await new Promise((resolve, reject) => {
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
  } catch (err) {
    console.error("Gallery POST error:", err);
    return NextResponse.json({ error: "Failed to add gallery image" }, { status: 500 });
  }
}
