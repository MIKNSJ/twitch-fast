import jcBanner from "../assets/just_chatting_banner.jpg"
import marvelRBanner from "../assets/marvel_rivals_banner.jpg"
import sEventsBanner from "../assets/special_events_banner.jpg"
import poe2Banner from "../assets/poe2_banner.jpg"
import fnBanner from "../assets/fortnite_banner.jpg"
import wowBanner from "../assets/wow_banner.png"
import lolBanner from "../assets/lol_banner.png"
import irlBanner from "../assets/irl_banner.png"
import mcBanner from "../assets/mc_banner.jpg"
import bo6Banner from "../assets/bo6_banner.png"



function generateCategories() {
    const divCategories = [];
    const combinedTags = [];
    
    const categories = [
        {banner: jcBanner, status: "old", title: "Just Chatting", views: "314K", tags: ["IRL"]},
        {banner: marvelRBanner, status: "new", title: "Marvel Rivals", views: "141K", tags: ["Fighting", "Shooter"]},
        {banner: sEventsBanner, status: "old", title: "Special Events", views: "4.4K", tags: ["IRL"]},
        {banner: poe2Banner, status: "new", title: "Path of Exile 2", views: "70.1K", tags: ["RPG", "Action"]},
        {banner: fnBanner, status: "old", title: "Fortnite", views: "101K", tags: ["Shooter", "RPG"]},
        {banner: wowBanner, status: "old", title: "World of Warcraft", views: "89.7K", tags: ["RPG"]},
        {banner: lolBanner, status: "old", title: "League of Legends", views: "68K", tags: ["RPG", "Strategy"]},
        {banner: irlBanner, status: "old", title: "IRL", views: "25.8K", tags: ["IRL"]}, 
        {banner: mcBanner, status: "old", title: "Minecraft", views: "58.7K", tags: ["Simulation"]},
        {banner: bo6Banner, status: "old", title: "Call of Duty: Black Ops 6", views: "27K", tags: ["FPS", "Shooter"]}
    ];

    for (let i = 0; i < categories.length; i++) {
        var currTags = [];
        for (let j = 0; j < categories[i].tags.length; j++) {
            currTags.push(
                <a key={`tag${i}_${j}`} href="#" className="rounded-full px-2 py-1 text-zinc-300 bg-zinc-700 hover:bg-zinc-600">{categories[i].tags[j]}</a>
            )
        }
        const copyCurrTags = [...currTags];
        combinedTags.push(copyCurrTags);
    }

    for (let i = 0; i < categories.length; i++) {
        divCategories.push(
            <div key={i} className="flex flex-col gap-2">
                <a className="relative flex" href="#">
                    <img className="max-w-[9.5rem] ease-in-out delay-1 duration-75 border-transparent hover:border-l-[7px] hover:border-b-[7px] hover:border-violet-700" src={categories[i].banner} alt_icon={`categories_${i}`}/>
                    {categories[i].status === "new" ? <h5 className="absolute rounded-full text-xs text-black px-2 bg-fuchsia-400 font-bold uppercase w-fit top-[0.6rem] right-[0.6rem]">New</h5> : null}
                </a>
                <div className="flex flex-col">
                    <a href="#" className="text-sm font-bold hover:text-violet-500 w-36 truncate">{categories[i].title}</a>
                    <h5 className="text-xs text-neutral-300">{categories[i].views} viewers</h5>
    
                    <div className="mt-2 flex text-xs font-bold gap-2">
                        {combinedTags[i]}
                    </div>
                </div>
            </div>
        )
    }
    
    return divCategories
}


export default function Category() {
    return (
        <>
            <div className="px-7">
                <a className="text-lg text-violet-300 font-bold" href="#">{"Categories we think you'll like"}</a>
                <div className="mt-2 flex gap-2 justify-between items-center pb-4 overflow-x-scroll">
                    {generateCategories()}
                </div>
                <div className="border border-b border-w-[0.05rem] border-neutral-800 rounded-full"></div>
            </div>
        </>
    )
}
