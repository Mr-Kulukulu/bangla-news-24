import Link from 'next/link';
import React from 'react';
interface news {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string
}
const MostRead = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
    const news = data.data
    return (
        <div className="card">
            <h1>Most Read News</h1>
            <div>
                {news.slice(1).map((n: news, i: number) => (
                    <Link key={n.id} href={`/news/${n.id}`}>
                        <div className='flex gap-2' >

                            <p>{i + 1}.</p> <h2 className='text-lg font-bold'>{n.title}</h2>
                            <p>{n.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MostRead;