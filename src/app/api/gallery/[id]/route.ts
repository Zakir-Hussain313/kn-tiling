import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { ADMIN_USER_ID } from "@/lib/admin";
import { getDB } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import { ObjectId } from "mongodb";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await currentUser();
  if (!user || user.id !== ADMIN_USER_ID) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ✅ Await params to get id
  const resolvedParams = await params;
  const { id } = resolvedParams;

  if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

  const db = await getDB();
  const imageDoc = await db.collection("gallery").findOne({ _id: new ObjectId(id) });

  if (!imageDoc) return NextResponse.json({ error: "Image not found" }, { status: 404 });

  // Delete image from Cloudinary if exists
  if (imageDoc.image) {
    try {
      const urlParts = imageDoc.image.split("/");
      const filenameWithExt = urlParts[urlParts.length - 1]; // e.g., "abc123.jpg"
      const publicId = `gallery/${filenameWithExt.split(".")[0]}`; // folder + filename without extension
      await cloudinary.uploader.destroy(publicId);
    } catch (err) {
      console.error("Failed to delete image from Cloudinary:", err);
    }
  }

  // Delete image from DB
  await db.collection("gallery").deleteOne({ _id: new ObjectId(id) });

  return NextResponse.json({ success: true });
}
