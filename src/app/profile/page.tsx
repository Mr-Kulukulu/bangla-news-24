"use client";

import React, { useState } from "react";
import { updateUser, useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";


export default function ProfilePage() {
    const { data: session } = useSession();

    const [name, setName] = useState(session?.user?.name || "");
    const [image, setImage] = useState(session?.user?.image || "");
    const [loading, setLoading] = useState(false);
    const [toggle, setToggle] = useState(false)
    const originalName = session?.user?.name || "";
    const originalImage = session?.user?.image || "";
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        setLoading(true);
        if (
            name.trim() === originalName &&
            image.trim() === originalImage
        ) {
            toast.error("Nothing changed!");
            setLoading(false);
            return;
        }
        try {
            await updateUser({
                name,
                image,
            });

            toast.success("Profile updated successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Profile update failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-8">
            <img src={`${session?.user?.image}`} alt="" className="h-[100px] rounded-full object-cover" />
            {session?.user.name}
            <p>Email: {session?.user.email}</p>
            <button
                className="btn mb-6 bg-red-600 text-white hover:bg-red-700"
                onClick={() => setToggle(!toggle)}
            >
                {toggle ? "Close Profile" : "Edit Profile"}
            </button>

            {toggle && (
                <div className="w-full max-w-md">

                    <div className="mb-6 text-center">
                        <h2 className="text-3xl font-bold text-red-600">
                            প্রোফাইল আপডেট
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            আপনার নাম ও ছবি পরিবর্তন করুন
                        </p>
                    </div>

                    <div className="rounded-2xl border bg-base-100 p-6 shadow-lg">
                        <form onSubmit={onSubmit} className="space-y-4">

                            <div>
                                <label className="mb-1 block text-sm font-semibold">
                                    নাম
                                </label>

                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="আপনার নাম"
                                    className="input w-full focus:border-red-600"
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-semibold">
                                    ছবির URL
                                </label>

                                <input
                                    type="url"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder="https://example.com/image.jpg"
                                    className="input w-full focus:border-red-600"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn w-full border-none bg-red-600 text-white transition-all duration-300 hover:bg-red-700 active:scale-95"
                            >
                                {loading ? "Updating..." : "Update Profile"}
                            </button>

                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}