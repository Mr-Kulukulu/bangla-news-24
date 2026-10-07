import MainNews from "./components/MainNews";

import MostRead from "./components/MostRead";
import NewsCard from "./components/NewsCard";

interface news {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  text:string
}

export default async function HomePage() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data
  const mainNews = sections[0].articles
  const otherNews = sections.slice(1)
  return (
    <div>
      

      <div className="max-w-7xl mx-auto my-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main News */}
          <div className="lg:col-span-2 space-y-6">
            <MainNews news={mainNews} />

            <div className="space-y-6">
              {otherNews.map((on: { curationId: string; title: string; articles: news[] }) => (
                <div key={on.curationId}>

                  {/* Section Title */}
                  <h1 className="font-bold text-xl mb-3 border-b-4 border-red-600">
                    {on.title}
                  </h1>

                  {/* News Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  " >
                    {on.articles.map((news: news) => (
                      <NewsCard
                        key={news.id}
                        news={news}
                      />
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className=" min-h-75 rounded-lg">
              <MostRead></MostRead>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
