
'use client'

import { signIn, signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";

import { toast } from "react-toastify";


const SignUpPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, image: string, password: string }

        const { data, error } = await signUp.email({
            ...user,
            callbackURL: '/'
        })
        if (data) {
            console.log(data);
            redirect("/")

        }
        if (error) {
            toast.error(error?.message)
        }
    }
    const handleGoogleSignIn = async () => {
        await signIn.social({
            provider: 'google'

        })
    }
    const handleGithub = async () => {
        await signIn.social({
            provider: "github"
        })
    }
    return (


        <div className="flex min-h-[70vh] items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">

                {/* Heading */}
                <div className="mb-6 text-center">
                    <h2 className="text-3xl font-bold text-red-600">
                        সাইন আপ
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        নতুন অ্যাকাউন্ট তৈরি করুন
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-2xl border bg-base-100 p-6 shadow-lg">

                    <form onSubmit={onSubmit} className="space-y-4">

                        {/* Name */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold">
                                নাম
                            </label>

                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="আপনার নাম লিখুন"
                                className="input w-full focus:border-red-600"
                            />
                        </div>

                        {/* Image */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold">
                                ছবি
                            </label>

                            <input
                                name="image"
                                type="url"
                                placeholder="ছবির URL দিন"
                                className="input w-full focus:border-red-600"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold">
                                ইমেইল
                            </label>

                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="আপনার ইমেইল লিখুন"
                                className="input w-full focus:border-red-600"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold">
                                পাসওয়ার্ড
                            </label>

                            <input
                                name="password"
                                type="password"
                                required
                                placeholder="আপনার পাসওয়ার্ড লিখুন"
                                className="input w-full focus:border-red-600"
                            />
                        </div>

                        {/* Sign Up */}
                        <button
                            type="submit"
                            className="
                        btn w-full
                        border-none
                        bg-red-600
                        text-white
                        shadow-md
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:bg-red-700
                        hover:shadow-lg
                        active:scale-95
                    "
                        >
                            সাইন আপ
                        </button>

                    </form>
                    {/* Social Sign Up */}
<div className="mt-5 space-y-3">

    {/* Google */}
    <button
        type="button"
        onClick={handleGoogleSignIn}
        className="
            btn w-full
            border border-gray-300
            bg-white text-gray-700
            shadow-sm
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-red-300
            hover:bg-gray-50
            hover:shadow-md
            active:scale-95
        "
    >
        <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                fill="#4285F4"
                d="M21.35 12.27c0-.71-.06-1.39-.18-2.05H12v3.88h5.23a4.47 4.47 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.92-4.18 2.92-7.22z"
            />
            <path
                fill="#34A853"
                d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.75z"
            />
            <path
                fill="#FBBC05"
                d="M6.54 13.84A5.86 5.86 0 0 1 6.23 12c0-.64.11-1.26.31-1.84V7.63H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.37l3.24-2.53z"
            />
            <path
                fill="#EA4335"
                d="M12 6.13c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 3.19 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.7 5.38l3.24 2.53c.77-2.31 2.92-4.03 5.46-4.03z"
            />
        </svg>

        Google দিয়ে সাইন আপ করুন
    </button>

    {/* GitHub */}
    <button
        type="button"
        onClick={handleGithub}
        className="
            btn w-full
            border border-gray-300
            bg-gray-900 text-white
            shadow-sm
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-gray-800
            hover:shadow-md
            active:scale-95
        "
    >
        <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.23-3.37-1.23-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.93c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.54 1.41.2 2.45.1 2.71.63.72 1.02 1.63 1.02 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>

        GitHub দিয়ে সাইন আপ করুন
    </button>

</div>

                </div>

                {/* Sign In */}
                <p className="mt-4 text-center text-sm text-gray-500">
                    ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
                    <a
                        href="/sign-in"
                        className="font-semibold text-red-600 hover:text-red-700 hover:underline"
                    >
                        সাইন ইন করুন
                    </a>
                </p>

            </div>
        </div>




    );
};

export default SignUpPage;