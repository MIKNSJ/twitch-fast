import caseStream from "../assets/caseoh_featured.png"
import oneGStream from "../assets/oneG_featured.png"
import passionStream from "../assets/passion_featured.png"
import cenatStream from "../assets/cenat_featured.png"
import hasanStream from "../assets/hasan_featured.png"
import oneGIcon from "../assets/1g_icon.jpg"
import caseIcon from "../assets/case_icon.png"
import passionIcon from "../assets/passion_icon.png"
import cenatIcon from "../assets/cenat_icon.png"
import hasanIcon from "../assets/hasanabi_icon.jpeg"
import { VscVerifiedFilled } from "react-icons/vsc";



const divFeaturedChannels = [];
function generateChannels() {
    const channels = [
        {stream: caseStream, views: "15.7K", icon: caseIcon, title: "HARDCORE MINECRAFT", username: "caseoh_", game: "Minecraft"},
        {stream: oneGStream, views: "21.2K", icon: oneGIcon, title: "wow 60 hardcore stuff @starforgesystems", username: "summit1g", game: "World of Warcraft"},
        {stream: cenatStream, views: "201K", icon: cenatIcon, title: "MAFIATHON 3 ! DAY 1 ! AMP ROUNDUP", username: "KaiCenat", game: "Just Chatting"},
        {stream: hasanStream, views: "15.3K", icon: hasanIcon, title: "PENTAGON CONFIRMS UFOS?!!!", username: "HasanAbi", game: "Just Chatting"},
        {stream: passionStream, views: "5.6K", icon: passionIcon, title: "ALGS CHAMPS SCRIMS (10 min delay)", username: "ImperialHal__", game: "Apex Legends"}
    ]

    for (let i = 0; i < channels.length; i++) {
        divFeaturedChannels.push(
            <div key={i} className="flex flex-col gap-2">
                <a href="#" className="relative flex">
                    <img className="max-width-80" src={channels[i].stream} alt_icon={`stream_${i}`}/>
                    <h5 className="absolute text-sm px-1 bg-red-600 font-bold uppercase rounded-md w-fit top-[0.6rem] left-[0.6rem] right-0">Live</h5>
                    <h5 className="absolute text-sm px-1 bg-[#00000090] w-fit bottom-[0.6rem] left-[0.6rem] right-0">{`${channels[i].views} viewers`}</h5>
                </a>
                <div className="flex gap-3">
                    <a href="#">
                        <img className="rounded-full self-start max-w-[3rem]" src={channels[i].icon} alt_icon={`${i}_icon`}/>
                    </a>
                    <div className="flex flex-col">
                        <a href="#" className="text-sm font-bold hover:text-violet-500 line-clamp-1">{channels[i].title}</a>
                        <a href="#" className="mt-2 flex gap-1">
                            <h5 className="text-xs text-neutral-300">{channels[i].username}</h5>
                            <VscVerifiedFilled color={"violet"}/>
                        </a>
                        <a href="#" className="text-xs text-neutral-300 hover:text-violet-500">{channels[i].game}</a>

                        <div className="mt-2 flex text-xs font-bold gap-2">
                            <a href="#" className="rounded-full px-2 py-1 text-zinc-300 bg-zinc-700 hover:bg-zinc-600">DropsEnabled</a>
                            <a href="#" className="rounded-full px-2 py-1 text-zinc-300 bg-zinc-700 hover:bg-zinc-600">English</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function shuffleChannels(channels) {
    // Fisher-Yates Algorithm
    for (let i = channels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = channels[i];
        channels[i] = channels[j];
        channels[j] = temp;
    }
}


function generateMoreFeaturedChannels() {
    if (divFeaturedChannels.length === 0) {
        generateChannels();
    }

    const divMoreFeaturedChannels = [];
    const titles = [
        "Recommended Minecraft Channels",
        "New Games",
        "MMORPGs",
        "Recommended Path of Exile 2 Channels",
        "Recommended World of Warcraft Channels",
        "What's Hot",
        "Recommended Popular Channels",
        "Recommended Rising Channels",
        "First-Person Shooters Channels",
        "Battle Royale Channels"
    ];

    for (let i = 0; i < titles.length; i++) {
        const modifiedDivFeaturedChannels = [...divFeaturedChannels];
        shuffleChannels(modifiedDivFeaturedChannels);
        divMoreFeaturedChannels.push(
            <div key={i} className="mt-5 lg:mt-0 px-7">
                <a className="text-lg text-violet-300 font-bold" href="#">{titles[i]}</a>
                <div className="mt-2 flex gap-2 justify-between items-center pb-4 overflow-x-scroll">
                    {modifiedDivFeaturedChannels}
                </div>
                <div className="border border-b border-w-[0.05rem] border-neutral-800 rounded-full"></div>
            </div>
        )
    }

    return divMoreFeaturedChannels
}


export default function MoreFeatured() {
    return (
        <>
            {generateMoreFeaturedChannels()}
        </>
    )
}
