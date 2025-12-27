"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { BiCross } from "react-icons/bi";
import { ImCross } from "react-icons/im";

interface GalleryImage {
    _id?: string;
    image: string;
}

export default function AdminGalleryPage() {
    const [images, setImages] = useState<GalleryImage[]>([]);

    // Fetch gallery images
    useEffect(() => {
        async function loadImages() {
            try {
                const res = await fetch("/api/gallery");
                const data = await res.json();
                setImages(data);
            } catch (err) {
                console.error("Failed to fetch gallery images", err);
            }
        }
        loadImages();
    }, []);

    // Add new gallery image
    async function handleAddImage(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/gallery", {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                const newImage = await res.json();
                setImages((prev) => [...prev, newImage]);
                form.reset();
            } else {
                alert("Failed to add image");
            }
        } catch (err) {
            console.error(err);
        }
    }

    // Delete gallery image
    async function handleDelete(id: string) {
        const confirmed = confirm("Are you sure you want to delete this image?");
        if (!confirmed) return;

        const res = await fetch(`/api/gallery/${id}`, { method: "DELETE" });
        if (res.ok) {
            setImages((prev) => prev.filter((img) => img._id !== id));
        } else alert("Failed to delete image");
    }

    return (
        <div className="p-8 bg-[#e4f5eb] min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-[#1a300d] text-center">
                Manage Gallery
            </h1>

            {/* Add Image Form */}
            <form
                onSubmit={handleAddImage}
                className="mb-8 bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 items-center max-w-md mx-auto"
            >
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    required
                />
                <button
                    type="submit"
                    className="w-full px-6 py-2 bg-[#1a300d] text-white rounded-md font-semibold hover:bg-[#27450f] transition"
                >
                    Add Image
                </button>
            </form>

            {/* Gallery Images List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, index) => (
                    <div
                        key={img._id ?? index}
                        className="relative bg-white p-2 rounded-xl shadow hover:shadow-lg transition border border-gray-100"
                    >
                        {/* Delete button on top-right */}
                        <button
                            onClick={() => handleDelete(img._id!)}
                            className="absolute top-2 right-2 w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center font-bold hover:bg-red-700 transition z-10"
                        >
                            <ImCross className="text-sm" />
                        </button>

                        <div className="w-full h-48 relative rounded overflow-hidden">
                            <Image
                                src={img.image}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
