import NewsCard from "@/app/components/NewsCard";
    
interface news {
    id:string,
    title:string,
    text:string,
    description:string,
    category:string,
    imageUrl:string
}
const page = async ({params}: { params: Promise<{ categoryid: string }> }) => {
    const {categoryid} = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryid}`);
    const data = await res.json();
    const categoryNews = data.data
    
    return (
       
        <div className="">
            <h1 className="text-2xl font-bold border-b-2 border-red-700 ">{data.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {categoryNews.map((news: news) => (
                    <NewsCard key={news.id} news={news} />
                ))}
            </div>
        </div>
       
    );
};

export default page;