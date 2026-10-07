import Image from 'next/image';
import Link from 'next/link';

interface news {
    id:string,
    title:string,
    description:string,
    category:string,
    imageUrl:string
}

const MainNews = ({ news }: { news: news[] }) => {

    const [firstNews, ...otherNews] = news;
    console.log(firstNews);


    return (
        <div className="flex gap-4">
            <Link href={`/news/${firstNews.id}`}>
            <div className="card bg-base-100 w-96 shadow-sm ">
                <p className='text-red-700'>{firstNews.category }</p>
                <figure>
                    
                    <Image
                        src={firstNews.imageUrl}
                        alt={firstNews.title}
                        height={100}
                        width={100}
                    />
                </figure>

                <div className="card-body">
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                </div>
            </div>
            </Link>

            <div className="flex flex-col gap-2 ">
                 
                 
                {otherNews.slice(0, 4).map((news: news) => (
                   
                    <div key={news.id} className="border p-2 card h-full">
                        <Link href={`/news/${news.id}`}>
                        <p className='text-red-500'>{news.category}</p>
                        {news.title}
                        </Link>
                    </div>
                ))}
               
            </div>
        </div>
    );
};

export default MainNews;