import avatarIcon from "../assets/avatar_icon.png"
import oneGIcon from "../assets/1g_icon.jpg"
import caseIcon from "../assets/case_icon.png"
import cenatIcon from "../assets/cenat_icon.png"
import hasanIcon from "../assets/hasanabi_icon.jpeg"
import moistIcon from "../assets/moist_icon.png"
import shroudIcon from "../assets/shroud_icon.png"
import xqcIcon from "../assets/xqc_icon.jpeg"
import passionIcon from "../assets/passion_icon.png"
import freakIcon from "../assets/freak_icon.png"
import { GoDotFill } from "react-icons/go";
import { MdOutlineVideocam } from "react-icons/md";



function generateRecommendedChannels() {
    const recommendedChannels = []
    const channelIcons = [
        avatarIcon,
        oneGIcon,
        caseIcon,
        cenatIcon,
        hasanIcon,
        moistIcon,
        shroudIcon,
        xqcIcon,
        passionIcon,
        freakIcon
    ]

    const channelNames = [
        "Joker",
        "summit1g",
        "caseoh_",
        "KaiCenat",
        "HasanAbi",
        "moistcr1tikal",
        "shroud",
        "xQc",
        "ImperialHal__",
        "freakazoid"
    ]

    const gameNames = [
        "Batman: Arkham Knight",
        "Grand Theft Auto V",
        "Games + Demos",
        "Just Chatting",
        "Just Chatting",
        "Dark Souls",
        "Deadlock",
        "Just Chatting",
        "Apex Legends",
        "Counter-Strike"
    ]

    const channelViews = [
        25.3,
        21.2,
        15.7,
        201,
        15.3,
        3.6,
        13.7,
        35.3,
        5.6,
        3.4
    ]

    for (let i = 0; i < 10; i++) {
        recommendedChannels.push(
            <a key={i} href="#" className="flex items-center w-[100%] gap-3 px-2 py-1 hover:bg-neutral-700">
                <img className="rounded-full" src={channelIcons[i]} width={32} height={32} alt_icon={`avatar_icon_${i}`}/>
                <div className="hidden md:flex flex-col">
                    <h5 className="font-bold text-sm">{channelNames[i]}</h5>
                    <h5 className="text-xs text-neutral-300 truncate w-28">{gameNames[i]}</h5>
                </div>
                <div className="hidden md:flex self-start ml-auto mt-1">
                    <GoDotFill color={"red"}/>
                    <h5 className="text-xs">{`${channelViews[i]}K`}</h5>
                </div>
            </a>
        )
    }

    return recommendedChannels
}


export default function Sidebar() {
    return (
        <>
            <div className="bg-color-hinted-grey-3 w-12 md:w-60 min-h-screen flex flex-col gap-3">
                <h5 className="hidden md:block uppercase px-2 pt-3 font-bold text-sm"> Recommended Channels </h5>
                <nav className="flex flex-col items-center gap-1 pt-3 md:pt-0">
                    <MdOutlineVideocam className="md:hidden" color={"white"} size={20}/>
                    {generateRecommendedChannels()}
                </nav>
            </div>
        </>
    )
}
