import React from "react";

function ResumeCard({badge,title, subTitle, des}) {
  return(
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800 ">
        {badge === "" ?(
            <h6 className="w-[150px] text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm">2024 - present</h6>
        ):(
            <h6 className="w-[150px] text-center text-sm py-[1px] text-[#999] border-[1px] border-zinc-500 rounded-sm">{badge}</h6>
        )}
        
        <h2 className="text-lg font-titleFont text-gray-200 font-medium">{title}</h2>
        <p className="text-sm text-[#999] -mt-2">{subTitle}</p>
        <p className="text-base text-[#999] font-medium pr-10">{des}</p>
    </div>
  );
}

export default ResumeCard;
