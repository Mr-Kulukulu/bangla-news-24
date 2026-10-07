import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface IheadLines {
    id: string
    title: string
    description: string
    link: string
    imageUrl: string
    imageAlt: string
    category: string
    type: string
    isLive: boolean
    firstPublished: string
    lastPublished: string
    source: string
}

const Marquee = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    const data = await res.json()
    const headLines: IheadLines[] = data.data

    return (
        <div className="bg-red-600 text-white">
            <div className="relative mx-auto flex min-h-10 w-full max-w-7xl items-center">

                {/* সর্বশেষ Button */}
                <div className="absolute left-7 top-1/2 z-10 -translate-y-1/2">
                    <button className="btn rounded-none border-none bg-red-800 px-4 text-white hover:bg-red-900">
                        সর্বশেষ
                    </button>
                </div>

                {/* Marquee */}
                <div className="w-full overflow-hidden pl-24">
                    <MarqueeText direction="right" duration={10}>
                        {headLines.map((h, ind) => (
                           
                                <span key={ind} className="whitespace-nowrap hover:underline">
                                     <Link href={`/news/${h.id}`} key={ind}> <span>{h.title}</span></Link>
                                   
                                    
                                    <span className="mx-2">•</span>
                                </span>
                           
                        ))}
                    </MarqueeText>
                </div>

            </div>
        </div>
    );
};

export default Marquee;