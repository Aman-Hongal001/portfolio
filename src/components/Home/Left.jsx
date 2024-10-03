import React from "react";
import {profileImg} from "../../image/index"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Left() {
  return (
    <div className="w-5/12 h-full bg-bodyColor rounded-2xl">
        <div className="w-full h-3/5">
            <img className="w-full h-full object-cover rounded-2xl" src={profileImg} alt="Profile Pic" loading= "priority" />
        </div>
        <div className="w-full h-2/5">
            {/* contain intro */}
            <div className="flex flex-col items-center gap-2 py-10">
                <h1 className="text-textColor text-4xl font-semibold">Aman AK Hongal</h1>
                <p className="text-base text-designColor tracking-wide">Web Developer</p>
                <div className="flex justify-center gap-2 mt-2">
                    <span className="hover:text-designColor duration-300 cursor-pointer text-xl"> <FaGithub/> </span>
                    <span className="hover:text-designColor duration-300 cursor-pointer text-xl"> <FaLinkedin/> </span>
                    <span className="hover:text-designColor duration-300 cursor-pointer text-xl"><FiMail/></span>
                    <span className="hover:text-designColor duration-300 cursor-pointer text-xl"><FaWhatsapp/> </span>
                    <span className="hover:text-designColor duration-300 cursor-pointer text-xl"><FaFacebook/></span>
                    <span className="hover:text-designColor duration-300 cursor-pointer text-xl"><FaInstagram/> </span>
                </div>
            </div>
        </div>
        {/* contain Button */}
        <div></div>
    </div>
  );
}

export default Left;
