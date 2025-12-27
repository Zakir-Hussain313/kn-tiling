// src/app/admin/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ADMIN_USER_ID } from "@/lib/admin";
import { SignOutButton } from "@clerk/nextjs";

export default async function AdminDashboard() {
    const user = await currentUser(); // returns full user object

    // If no user or not the admin, redirect
    if (!user || user.id !== ADMIN_USER_ID) {
        redirect("/sign-in");
    }

    return (
        <div className="p-8">
            <h1>Admin Dashboard</h1>
            <p>Only the admin can see this page.</p>
            <SignOutButton>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                    Logout
                </button>
            </SignOutButton>
        </div>
    );
}
