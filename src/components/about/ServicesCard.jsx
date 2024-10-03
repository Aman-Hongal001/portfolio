import React from "react";
import { BiCodeAlt } from "react-icons/bi";

function ServicesCard({icon,title,subTitle}) {
  return (
    <div className="py-8 px-6 flex flex-col items-center  gap2 borderRight borderBottom">
        <span className="text-4xl text-designColor mb-2">{icon}</span>
        <h2 className="font-titleFont text-lg font-semibold">{title}</h2>
        <p className="text-base text-center text-zinc-400 px-6">{subTitle}</p>
    </div>
  );
}

export default ServicesCard;
