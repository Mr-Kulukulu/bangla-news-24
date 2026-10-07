import Image from "next/image";
import { notFound } from "next/navigation";

interface news {
    id:string,
    title:string,
    text:string,
    description:string,
    category:string,
    imageUrl:string,
    firstPublished:string
}

const page = async ({ params }: { params: Promise<{ newsid: string }> } ) => {
    const { newsid } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsid}`);
    if (!res.ok) {
    notFound();
}
    const data = await res.json();
    console.log(data);
    const news: news = data.data
    if (!news) { notFound(); }

    return (
       <div className="max-w-5xl mx-auto my-10 px-4">
  <div className="card bg-base-100 shadow-md p-4 md:p-8">

    {/* Title */}
    <h1 className="text-2xl md:text-4xl font-bold leading-tight border-b-2 border-red-700 pb-3">
      {news.title}
    </h1>

    {/* Published Date */}
    <p className="text-sm text-gray-500 mt-3">
      {news.firstPublished}
    </p>

    {/* News Image */}
    <div className="mt-6">
      <Image
        src={news.imageUrl}
        alt={news.title}
        width={800}
        height={400}
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>

    {/* News Description */}
    <div className="mt-6">
      <p className="text-base md:text-lg leading-8 text-gray-700">
        {news.text}
      </p>
    </div>

  </div>
</div>
    );
};

export default page;