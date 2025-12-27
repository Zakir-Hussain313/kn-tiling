// src/app/admin/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ADMIN_USER_ID } from "@/lib/admin";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function AdminDashboard() {
  const user = await currentUser();

  // If no user or not the admin, redirect
  if (!user || user.id !== ADMIN_USER_ID) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Admin Dashboard</h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/admin/gallery">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Go to Gallery
            </button>
          </Link>
          <Link href="/admin/services">
            <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
              Go to Services
            </button>
          </Link>
        </div>

        {/* Sign Out */}
        <SignOutButton>
          <button className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
            Logout
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}
