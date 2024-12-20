import primeMusic from "../assets/prime_music.png";
import primeMusicIcon from "../assets/prime_music_icon.png";
import caseOhStream from "../assets/caseoh_featured.png";
import oneGStream from "../assets/oneG_featured.png";
import cenatStream from "../assets/cenat_featured.png";
import hasanStream from "../assets/hasan_featured.png";
import passionStream from "../assets/passion_featured.png";
import { FaPlay } from "react-icons/fa";
import { FaVolumeLow } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
import { RiFullscreenFill } from "react-icons/ri";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";



export default function Hero() {
    return (
        <>
            <div className="hidden lg:block relative h-[22rem] px-7">
                <div className="relative flex justify-evenly items-center h-full">
                    <button className="bg-neutral-800 p-2 self-center rounded hover:bg-neutral-700">
                        <MdArrowBackIosNew size={20}/>
                    </button>
                    <div className="relative hidden xl:flex items-center">
                        <img src={caseOhStream} alt_icon="caseoh_stream" className="blur-[1px] max-w-[21rem]"/> 
                        <img src={cenatStream} alt_icon="cenat_stream" className="blur-[1px] max-w-[21rem]"/> 
                        <img src={hasanStream} alt_icon="hasan_stream" className="blur-[1px] max-w-[21rem]"/> 
                    </div>
    
                    <div className="absolute hidden xl:flex justify-evenly items-center w-[60rem]">
                        <img src={oneGStream} alt_icon="oneG_stream" className="blur-[1px] max-w-[27rem]"/> 
                        <img src={passionStream} alt_icon="passion_stream" className="blur-[1px] max-w-[27rem]"/> 
                    </div>

                    <button className="bg-neutral-800 p-2 self-center rounded hover:bg-neutral-700">
                        <MdArrowForwardIos size={20}/>
                    </button>

                    <div className="absolute flex shadow-lg">
                        <a href="#" className="relative">
                            <img className="max-w-full h-full" src={primeMusic} alt_icon="prime_music" width={525}/>
                            <div className="absolute w-[100%] h-[100%] top-0" style={{boxShadow: "inset 10px 10px 75px 20px rgba(0, 0, 0, 0.75)"}}></div>
                            <h5 className="absolute text-sm px-1 bg-red-600 font-bold uppercase rounded-md w-fit top-[0.6rem] left-[0.6rem] right-0">Live</h5>
                            <div className="absolute flex gap-3 bottom-5 left-5 right-0">
                                <FaPlay />
                                <FaVolumeLow />
                            </div>

                            <div className="absolute flex gap-3 bottom-5 left-[29rem] right-0">
                                <LuSettings />
                                <RiFullscreenFill />
                            </div>
                        </a>

                        <div className="z-10 flex flex-col bg-color-hinted-grey-3 w-60 p-3 gap-3">
                            <div className="flex gap-3"> 
                                <img className="rounded-full" src={primeMusicIcon} alt_icon="prime_music_icon" width={60}/>
                                <div className="flex flex-col">
                                    <a className="text-violet-400 text-sm" href="#">AmazonMusic</a>
                                    <a className="text-violet-400 text-sm" href="#">Music</a>
                                    <h5 className="text-sm">98.1K viewers</h5>
                                </div>
                            </div>

                            <div className="flex text-xs font-bold gap-2">
                                <a href="#" className="rounded-full px-2 py-1 text-zinc-300 bg-zinc-700 hover:bg-zinc-600">MusicTalk</a>
                                <a href="#" className="rounded-full px-2 py-1 text-zinc-300 bg-zinc-700 hover:bg-zinc-600">MusicEvents</a>
                            </div>

                            <p className="text-sm">
                                Tune in now for the official Rolling Loud music festival in Miami! Watch a star-studded
                                lineup from the biggest hip hop festival in the world. Brought to you by Amazon Music.
                                Sponsored by Sprite and Verizon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
