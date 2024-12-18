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



function generateFeaturedChannels() {
    const divFeaturedChannels = []

    const channels = [
        {stream: caseStream, icon: caseIcon, title: "HARDCORE MINECRAFT", username: "caseoh_", game: "Minecraft"},
        {stream: oneGStream, icon: oneGIcon, title: "wow 60 hardcore stuff @starforgesystems", username: "summit1g", game: "World of Warcraft"},
        {stream: cenatStream, icon: cenatIcon, title: "MAFIATHON 3 ! DAY 1 ! AMP ROUNDUP", username: "KaiCenat", game: "Just Chatting"},
        {stream: hasanStream, icon: hasanIcon, title: "PENTAGON CONFIRMS UFOS?!!!", username: "HasanAbi", game: "Just Chatting"},
        {stream: passionStream, icon: passionIcon, title: "ALGS CHAMPS SCRIMS (10 min delay)", username: "ImperialHal__", game: "Apex Legends"}
    ]

    for (let i = 0; i < channels.length; i++) {
        divFeaturedChannels.push(
            <div key={i} className="flex flex-col gap-2">
                <a href="#">
                    <img className="hover:border-l-8 hover:border-b-8 hover:border-violet-700 max-width-80" src={channels[i].stream} alt_icon={`stream_${i}`}/>
                </a>
                <div className="flex gap-5">
                    <a href="#">
                        <img className="rounded-full self-start max-w-[3rem]" src={channels[i].icon} alt_icon={`${i}_icon`}/>
                    </a>
                    <div className="flex flex-col">
                        <a href="#" className="text-sm font-bold hover:text-violet-500 w-60 truncate">{channels[i].title}</a>
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

    return divFeaturedChannels
}


export default function Featured() {
    return (
        <>
            <div className="mt-5 md:mt-0 px-7">
                <a className="text-lg text-violet-300 font-bold" href="#">Live on Twitch</a>
                <div className="mt-2 flex gap-2 justify-between items-center pb-4 overflow-x-scroll">
                    {generateFeaturedChannels()}
                </div>
            </div>
        </>
    )
}
