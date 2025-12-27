import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDB } from "@/lib/mongodb";
import { currentUser } from "@clerk/nextjs/server";
import { ADMIN_USER_ID } from "@/lib/admin";
import cloudinary from "@/lib/cloudinary";

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const user = await currentUser();
  if (!user || user.id !== ADMIN_USER_ID) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = await getDB();
  const service = await db.collection("services").findOne({ _id: new ObjectId(id) });

  if (!service) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Delete image from Cloudinary if exists
  if (service.image) {
    // Extract public_id from URL
    const parts = service.image.split("/");
    const publicIdWithExt = parts[parts.length - 1]; // e.g. service-12345.png
    const publicId = `services/${publicIdWithExt.split(".")[0]}`;
    await cloudinary.uploader.destroy(publicId);
  }

  await db.collection("services").deleteOne({ _id: new ObjectId(id) });

  return NextResponse.json({ success: true });
}


export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  const user = await currentUser();
  if (!user || user.id !== ADMIN_USER_ID) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const imageFile = formData.get("image") as File | null;

  if (!title || !description) {
    return NextResponse.json({ error: "Title and description are required" }, { status: 400 });
  }

  const update: any = { title, description, slug: title.toLowerCase().replace(/\s+/g, "-") };

  // If new image uploaded
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

    update.image = uploadResult.secure_url;
  }

  const db = await getDB();
  await db.collection("services").updateOne(
    { _id: new ObjectId(id) },
    { $set: update }
  );

  const updatedService = await db.collection("services").findOne({ _id: new ObjectId(id) });

  return NextResponse.json({
    _id: updatedService!._id.toString(),
    title: updatedService!.title,
    description: updatedService!.description,
    image: updatedService!.image,
    slug: updatedService!.slug,
  });
}