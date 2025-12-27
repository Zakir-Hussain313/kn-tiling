"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";

interface Service {
    _id?: string;
    title: string;
    description: string;
    image?: string;
}

export default function AdminServicesPage() {
    const [services, setServices] = useState<Service[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingTitle, setEditingTitle] = useState("");
    const [editingDescription, setEditingDescription] = useState("");
    const [editingImage, setEditingImage] = useState<File | null>(null);

    // Fetch services
    useEffect(() => {
        async function loadServices() {
            try {
                const res = await fetch("/api/services");
                const data = await res.json();
                setServices(data);
            } catch (err) {
                console.error("Failed to fetch services", err);
            }
        }
        loadServices();
    }, []);

    async function handleAddService(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/services", {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                const newService = await res.json();
                setServices((prev) => [...prev, newService]);
                form.reset();
            } else {
                alert("Failed to add service");
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function handleEditService(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!editingId) return;

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch(`/api/services/${editingId}`, {
                method: "PUT",
                body: formData,
            });
            if (res.ok) {
                const updated = await res.json();
                setServices((prev) =>
                    prev.map((s) => (s._id === editingId ? updated : s))
                );
                setEditingId(null);
                setEditingTitle("");
                setEditingDescription("");
                setEditingImage(null);
            } else {
                alert("Failed to update service");
            }
        } catch (err) {
            console.error(err);
        }
    }

    function startEdit(service: Service) {
        setEditingId(service._id!);
        setEditingTitle(service.title);
        setEditingDescription(service.description);
        setEditingImage(null);
    }

    async function handleDelete(id: string) {
        const confirmed = confirm("Are you sure you want to delete this service?");
        if (!confirmed) return;

        const res = await fetch(`/api/services/${id}`, { method: "DELETE" });
        if (res.ok) {
            setServices((prev) => prev.filter((s) => s._id !== id));
        } else alert("Failed to delete service");
    }

    return (
        <div className="p-8 bg-[#e4f5eb] min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-[#1a300d] text-center">
                Manage Services
            </h1>

            {/* Add Service Form */}
            <form
                onSubmit={handleAddService}
                className="mb-8 bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 items-center max-w-md mx-auto"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Service Title"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <button
                    type="submit"
                    className="w-full px-6 py-2 bg-[#1a300d] text-white rounded-md font-semibold hover:bg-[#27450f] transition"
                >
                    Add Service
                </button>
            </form>

            {/* Edit Form */}
            {editingId && (
                <form
                    onSubmit={handleEditService}
                    className="mb-8 bg-yellow-50 p-6 rounded-xl shadow-md flex flex-col gap-4 items-center max-w-md mx-auto"
                >
                    <input
                        type="text"
                        name="title"
                        value={editingTitle}
                        onChange={(e) => setEditingTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        value={editingDescription}
                        onChange={(e) => setEditingDescription(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                    />

                    {/* Show current image */}
                    {editingImage ? (
                        <div className="w-full h-40 relative mb-4 rounded overflow-hidden">
                            <Image
                                src={URL.createObjectURL(editingImage)}
                                alt="Preview"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    ) : (
                        services
                            .filter((s) => s._id === editingId && s.image)
                            .map((s) => (
                                <div
                                    key={s._id}
                                    className="w-full h-40 relative mb-4 rounded overflow-hidden"
                                >
                                    <Image
                                        src={s.image!}
                                        alt={s.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            ))
                    )}

                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(e) =>
                            setEditingImage(e.target.files ? e.target.files[0] : null)
                        }
                        className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />

                    <button
                        type="submit"
                        className="w-full px-6 py-2 bg-yellow-600 text-white rounded-md font-semibold hover:bg-yellow-700 transition"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="w-full px-6 py-2 bg-gray-400 text-white rounded-md font-semibold hover:bg-gray-500 transition"
                        onClick={() => setEditingId(null)}
                    >
                        Cancel
                    </button>
                </form>
            )}

            {/* Services List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={service._id ?? service.title + index}
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-100 flex flex-col items-start"
                    >
                        {service.image && (
                            <div className="w-full h-40 relative mb-4 rounded overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        )}
                        <h2 className="text-xl font-bold mb-2 text-[#1a300d]">{service.title}</h2>
                        <p className="text-gray-700 mb-4">{service.description}</p>
                        <div className="flex gap-2 w-full">
                            <button
                                className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                                onClick={() => startEdit(service)}
                            >
                                Edit
                            </button>
                            <button
                                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                                onClick={() => handleDelete(service._id!)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
