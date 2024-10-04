import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {profileImg} from "../../image/index"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsCloudLightningFill } from "react-icons/bs";
import { resume } from "../../image/index";

function Left() {
    const [text] = useTypewriter({
        words: ["Web Developer","Frontend Developer","Python Developer","Software Engineer"],
        loop: true,
        typeSpeed: 40,
        deleteSpeed: 20,
        delaySpeed:2000,
    });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10 overflow-y-scroll scrollbar-none">
        <div className="w-full h-3/5">
            <img className="w-full h-full object-cover rounded-2xl" src={profileImg} alt="Profile Pic" loading= "priority" />
        </div>
        <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        {/* contain intro */}
            <div className="flex flex-col items-center gap-2 py-10">
                <h1 className="text-textColor text-4xl font-semibold">Aman AK Hongal</h1>
                <p className="text-base text-designColor tracking-wide">{text}<Cursor cursorBlinking="false" cursorStyle="|"/></p>
                <div className="flex justify-center gap-2 mt-2">
                    <span className="hover:text-designColor duration-300 cursor-pointer text-xl"> <FaGithub/> </span>
                    <span className="hover:text-designColor duration-300 cursor-pointer text-xl"> <FaLinkedin/> </span>
                    <span className="hover:text-designColor duration-300 cursor-pointer text-xl"><FiMail/></span>
                    <span className="hover:text-designColor duration-300 cursor-pointer text-xl"><FaWhatsapp/> </span>
                    <span className="hover:text-designColor duration-300 cursor-pointer text-xl"><FaFacebook/></span>
                    <span className="hover:text-designColor duration-300 cursor-pointer text-xl"><FaInstagram/> </span>
                </div>
            </div>

            {/* contain Button */}
            <div className="flex h-14">
                <a className="w-full h-full flex justify-center items-center gap-2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor duration-300" href={resume} target="blank" rel="noreferrer">
                    <button className="flex w-full h-full justify-center items-center gap-2">
                        Download CV <BsCloudLightningFill/>
                    </button>
                </a>
            </div>
        </div>
    </div>
  );
}

export default Left;
