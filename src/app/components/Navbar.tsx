import Link from "next/link"


interface Idata {
    slug: string
    title: string
    topicId: string | null
    url: string
    scrapable: boolean

}
const Navbar = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await res.json();
    
    const navLink:Idata[] = data.data
    const navs = navLink.filter( n => n.scrapable)
    return (
        <div className="flex justify-center gap-2.5">
            {navs.map((nav,ind) =><Link href={`/category/${nav.slug}`} key={ind}>{nav.title}</Link>)}
        </div>
    );
};

export default Navbar;