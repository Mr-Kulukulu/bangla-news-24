'use client'

import { signOut, useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';


const UserInfo = () => {
    const { data: session, isPending } = useSession()
    const user = session?.user


    return (
        <div className="absolute right-4 flex gap-2">
            {isPending ? (
                <div>
                    <span className="loading loading-spinner text-red-700"></span>
                </div>
            ) : user ? (
                <div className="flex items-center gap-3">

                    {/* User Name */}
                    <h2 className="hidden font-bold sm:block">
                        Hey! {user.name}
                    </h2>

                    {/* Avatar */}
                    <Link href={'/profile'}>
                        <div className="avatar">
                            <div className="w-10 overflow-hidden rounded-full ring-2 ring-red-600 ring-offset-2 ring-offset-base-100">
                                <Image
                                    src={user.image || "/default-avatar.png"}
                                    alt={user.name || "User avatar"}
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 object-cover"
                                />
                            </div>
                        </div>
                    </Link>

                    {/* Logout */}
                    <button
                        className="
                    group relative overflow-hidden
                    rounded-lg
                    border border-red-500
                    bg-red-700
                    px-5 py-2
                    font-semibold text-white
                    shadow-md
                    transition-all duration-300
                    hover:scale-105
                    hover:bg-red-800
                    hover:shadow-xl
                    active:scale-95
                "
                        onClick={() => signOut()}
                    >
                        <span className="relative z-10">
                            LogOut
                        </span>

                        <span
                            className="
                        absolute inset-0
                        -translate-x-full
                        bg-white/20
                        transition-transform duration-500
                        group-hover:translate-x-0
                    "
                        />
                    </button>
                </div>
            ) : (
                <div className="flex gap-2">
                    <Link href="/sign-up">
                        <button className="btn bg-red-500 text-white">
                            সাইন আপ
                        </button>
                    </Link>

                    <Link href="/sign-in">
                        <button className="btn">
                            সাইন ইন
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;