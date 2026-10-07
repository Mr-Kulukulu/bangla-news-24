import Image from 'next/image';
import Link from 'next/link';

interface news {
    id:string,
    title:string,
    text:string,
    description:string,
    category:string,
    imageUrl:string
}
const NewsCard = ({news}: {news: news}) => {
   
    return (
       
        <Link href={`/news/${news.id}`}>
              <div className="card bg-base-100  shadow-sm ">
                        {/* <p className='text-red-700'>{news.category }</p> */}
                        <figure className='h-100 object-cover w-auto'>
                            
                            <Image
                                src={news.imageUrl}
                                alt={news.title}
                                height={600}
                                width={600}
                            />
                        </figure>
        
                        <div className="card-body">
                            <h2 className="card-title">{news.title}</h2>
                            <p>{news.description}</p>
                        </div>
                    </div></Link>
    );
};

export default NewsCard;