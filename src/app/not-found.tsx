
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center">

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-red-600">
                    404
                </h1>

                {/* Heading */}
                <h2 className="mt-4 text-2xl md:text-3xl font-bold">
                    সংবাদটি পাওয়া যায়নি
                </h2>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-md text-gray-500">
                    দুঃখিত, আপনি যে সংবাদটি খুঁজছেন সেটি পাওয়া যায়নি।
                    সংবাদটি হয়তো মুছে ফেলা হয়েছে।
                </p>

                {/* Back Home */}
                <Link
                    href="/"
                    className="mt-6 inline-block rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                    ← হোম পেজে ফিরে যান
                </Link>

            </div>
        </div>
    );
}

