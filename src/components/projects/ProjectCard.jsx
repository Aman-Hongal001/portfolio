import React from "react";
import { FaCode } from "react-icons/fa";

function ProjectCard({title,category,image,url}) {
  return(
    <div className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800">
        <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group">
            <img className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer" src={image} alt="cardImage" />
            <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-r from-green-600 via-green-600 to-green-200 opacity-20"></div>
        </div>
        <div>
            <h3 className="font-titleFont text-lg font-semibold text-[#ccc]">{title}</h3>
            <a href={url}  className=""><p className="text-base text-gray-400 -mt-1 flex gap-2">{category}<span className="text-designColor py-1.5"><FaCode/></span></p></a>
        </div>
    </div>
  );
}

{/* <h1 className="text-lg text-gray-300 uppercase font-medium flex items-center gap-2 py-3 border-b-[1px] border-b-zinc-800"><span className="text-designColor text-2xl">{title}</span>{subTitle}</h1> */}

export default ProjectCard;
