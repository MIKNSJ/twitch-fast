import twitchLogo from "../assets/twitch_logo.png";
import { HiDotsVertical } from "react-icons/hi";
import { CgCrown } from "react-icons/cg";
import { LuGlobe } from "react-icons/lu";
import { FaTwitch } from "react-icons/fa";
import { AiFillMoon } from "react-icons/ai";
import { IoMdInformationCircle } from "react-icons/io";
import { ImEyeBlocked } from "react-icons/im";
import { MdOutlineLogin } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import searchIcon from "../assets/search_icon.png";
import avatarIcon from "../assets/avatar_icon.png";



export default function NavBar() {
    return (
        <>
            <div className="sticky top-0 z-20 bg-color-hinted-grey-2 flex justify-between items-center p-2 gap-2 border-b border-black">
                <div className="flex items-center gap-2 sm:gap-6">
                    <button className="flex">
                        <img className="block" src={twitchLogo} alt="twitch_icon" width={30} height={30}/>
                    </button>
                    <a href="#" className="font-bold text-lg hover:text-violet-400"> Browse </a>
                    
                    <div className="hidden lg:dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                            <HiDotsVertical size={20}/>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-color-hinted-grey-3 rounded-lg z-[1] w-52 p-2 shadow-2xl">
                            <div className="flex flex-col max-h-screen overflow-y-scroll">
                                <li className="pointer-events-none"><h5 className="text-sm font-bold text-neutral-400 uppercase">General</h5></li>
                                <li><a className="text-xs">About</a></li>
                                <li><a className="text-xs">Advertisers</a></li>
                                <li><a className="text-xs">Blog</a></li>
                                <li><a className="text-xs">Download Apps</a></li>
                                <li><a className="text-xs">Gift Card</a></li>
                                <li><a className="text-xs">IDGB</a></li>
                                <li><a className="text-xs">Jobs</a></li>
                                <li><a className="text-xs">Loot Cave - Merch Store</a></li>
                                <li><a className="text-xs">Luna</a></li>
                                <li><a className="text-xs">Music on Twitch</a></li>
                                <li><a className="text-xs">Partners</a></li>
                                <li><a className="text-xs">Press</a></li>
                                <li><a className="text-xs">Turbo</a></li>
                                <li className="pointer-events-none border border-b border-w-[0.05rem] border-neutral-300 rounded-full"></li>
                                <li className="pointer-events-none"><h5 className="text-sm text-neutral-400 uppercase">Help & Legal</h5></li>
                                <li><a className="text-xs">Accessibility Statement</a></li>
                                <li><a className="text-xs">Ad Choices</a></li>
                                <li><a className="text-xs">Community Guidelines</a></li>
                                <li><a className="text-xs">Cookie Policy</a></li>
                                <li><a className="text-xs">Help</a></li>
                                <li><a className="text-xs">Privacy Policy</a></li>
                                <li><a className="text-xs">Privacy Center</a></li>
                                <li><a className="text-xs">Safety Center</a></li>
                                <li><a className="text-xs">Security</a></li>
                                <li><a className="text-xs">Terms</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
                <form className="flex items-center md:w-96">
                    <input className="hidden md:block flex-grow bg-color-hinted-grey-2 px-2 py-1 border border-stone-500 rounded-l focus:outline focus:outline-[0.20rem] focus:outline-violet-400" placeholder="Search" autoComplete="off"/>
                    <button className="flex md:hidden bg-color-opac-gd-1 p-1 rounded">
                        <img src={searchIcon} alt="search_icon" width={26} height={26}/>
                    </button>
                    <button className="hidden md:flex bg-color-opac-gd-1 p-1 rounded-r">
                        <img src={searchIcon} alt="search_icon" width={26} height={26}/>
                    </button>
                </form>
                <div className="flex items-center gap-2 sm:gap-3">
                    <button className="hidden lg:block p-1 hover:bg-neutral-700 rounded">
                        <CgCrown size={25}/>
                    </button>
                    <button className="bg-color-opac-gd-1 text-sm font-bold px-3 py-2 rounded hover:bg-neutral-700">Log In</button>
                    <button className="hidden sm:block bg-color-twitch-purple-9 text-sm font-bold px-3 py-2 rounded hover:bg-violet-700">Sign Up</button>

                    <div className="hidden lg:dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-0">
                            <img className="rounded-full" src={avatarIcon} alt="avatar_icon" width={35}/>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-color-hinted-grey-3 rounded-lg z-[1] w-56 p-2 shadow-2xl">
                            <div className="flex flex-col max-h-screen overflow-y-scroll">
                                <li>
                                    <a className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <LuGlobe size={20}/>
                                            <h5 className="text-sm">Language</h5>
                                        </div>
                                        <MdArrowForwardIos size={15}/>
                                    </a>
                                </li>
                                <li className="pointer-events-none border border-b border-w-[0.05rem] border-neutral-300 rounded-full"></li>
                                <li>
                                    <a className="flex">
                                        <FaTwitch size={20}/>
                                        <h5 className="text-sm">Twitch Recap</h5>
                                    </a>
                                </li>
                                <li className="pointer-events-none border border-b border-w-[0.05rem] border-neutral-300 rounded-full"></li>
                                <li>
                                    <a className="flex">
                                        <AiFillMoon size={20}/>
                                        <h5 className="text-sm">Dark Mode</h5>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex">
                                        <IoMdInformationCircle size={20}/>
                                        <h5 className="text-sm">Opt-out Preferences</h5>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex">
                                        <ImEyeBlocked size={20}/>
                                        <h5 className="text-sm">Labeled Content</h5>
                                    </a>
                                </li>
                                <li className="pointer-events-none border border-b border-w-[0.05rem] border-neutral-300 rounded-full"></li>
                                <li>
                                    <a className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <MdOutlineLogin size={20}/>
                                            <h5 className="text-sm">Log In</h5>
                                        </div>
                                        <MdArrowForwardIos size={15}/>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
