export default function LoadingPage() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center bg-base-100">
            <div className="flex flex-col items-center">

                {/* Spinner */}
                <div className="relative flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-red-100 border-t-red-600"></div>

                    <div className="h-5 w-5 animate-pulse rounded-full bg-red-600"></div>
                </div>

                {/* Text */}
                <h2 className="mt-5 text-xl font-bold text-red-600">
                        লোড হচ্ছে...
                </h2>

                <div className="mt-2 flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-red-600"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-red-600 [animation-delay:150ms]"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-red-600 [animation-delay:300ms]"></span>
                </div>

            </div>
        </div>
    );
}