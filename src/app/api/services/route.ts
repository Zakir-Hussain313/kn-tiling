import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { ADMIN_USER_ID } from "@/lib/admin";
import { getDB } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import slugify from "slugify";

// POST a new service (ADMIN only)
export async function POST(req: Request) {
  const user = await currentUser();
  if (!user || user.id !== ADMIN_USER_ID) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const imageFile = formData.get("image") as File | null;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    // Generate slug (unique enough)
    const slug = slugify(title, { lower: true, strict: true });

    // Upload image to Cloudinary
    let imageUrl = "";
    if (imageFile && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());

      const uploadResult: any = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "services" },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });

      imageUrl = uploadResult.secure_url;
    }

    const db = await getDB();
    const result = await db.collection("services").insertOne({
      title,
      description,
      image: imageUrl,
      slug,
      createdAt: new Date(),
    });

    return NextResponse.json({
      _id: result.insertedId.toString(),
      title,
      description,
      image: imageUrl,
      slug,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to add service" }, { status: 500 });
  }
}

// GET all services
export async function GET() {
  try {
    const db = await getDB();
    const services = await db.collection("services").find().toArray();

    // Return services with string _id
    const formattedServices = services.map((s) => ({
      _id: s._id.toString(),
      title: s.title,
      description: s.description,
      image: s.image,
      slug: s.slug,
    }));

    return NextResponse.json(formattedServices);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
  }
}
