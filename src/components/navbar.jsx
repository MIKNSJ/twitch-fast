import twitchLogo from "../assets/twitch_logo.png";
import { HiDotsVertical } from "react-icons/hi";
import searchIcon from "../assets/search_icon.png";
import avatarIcon from "../assets/avatar_icon.png";



export default function NavBar() {
    return (
        <>
            <div className="bg-color-hinted-grey-2 flex justify-between items-center p-2 gap-2 shadow">
                <div className="flex items-center gap-2 sm:gap-6">
                    <button className="flex">
                        <img className="block" src={twitchLogo} alt="twitch_icon" width={30} height={30}/>
                    </button>
                    <a href="#" className="font-bold text-lg hover:text-violet-400"> Browse </a>
                    <a className="hover:bg-neutral-700 p-1" href="#">
                        <HiDotsVertical size={20}/>
                    </a>
                </div>
                <form className="flex items-center md:w-96">
                    <input className="hidden md:block flex-grow bg-color-hinted-grey-2 px-2 py-1 border border-stone-500 hover:border-2 rounded-l outline-none" placeholder="Search" autoComplete="off"/>
                    <button className="flex md:hidden bg-color-opac-gd-1 p-1 rounded">
                        <img src={searchIcon} alt="search_icon" width={26} height={26}/>
                    </button>
                    <button className="hidden md:flex bg-color-opac-gd-1 p-1 rounded-r">
                        <img src={searchIcon} alt="search_icon" width={26} height={26}/>
                    </button>
                </form>
                <div className="flex items-center gap-2 sm:gap-3">
                    <button className="bg-color-opac-gd-1 text-sm font-bold px-3 py-2 rounded hover:bg-neutral-700">Log In</button>
                    <button className="hidden sm:block bg-color-twitch-purple-9 text-sm font-bold px-3 py-2 rounded hover:bg-violet-700">Sign Up</button>
                    <button className="flex hover:bg-neutral-700">
                        <img className="rounded-full" src={avatarIcon} alt="avatar_icon" width={40} height={40}/>
                    </button>
                </div>
            </div>
        </>
    )
}
