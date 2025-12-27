import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { ADMIN_USER_ID } from "@/lib/admin";
import { getDB } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import { ObjectId } from "mongodb";

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await currentUser();
    if (!user || user.id !== ADMIN_USER_ID) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    if (!id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    const db = await getDB();
    const imageDoc = await db
      .collection("gallery")
      .findOne({ _id: new ObjectId(id) });

    if (!imageDoc) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    // Delete from Cloudinary (safe)
    if (imageDoc.image) {
      try {
        const urlParts = imageDoc.image.split("/");
        const filename = urlParts[urlParts.length - 1];
        const publicId = `gallery/${filename.split(".")[0]}`;
        await cloudinary.uploader.destroy(publicId);
      } catch (err) {
        console.error("Cloudinary delete failed:", err);
      }
    }

    // Delete from MongoDB
    await db.collection("gallery").deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Gallery DELETE error:", err);
    return NextResponse.json(
      { error: "Failed to delete gallery image" },
      { status: 500 }
    );
  }
}
