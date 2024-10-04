import React from "react";
import ResumeTitle from "./ResumeTitle";
// import { SiArtstation } from "react-icons/si";
import { FaCode, FaGithub } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { VscDebugDisconnect, VscVscode } from "react-icons/vsc";
import { SiPostman, SiPycharm } from "react-icons/si";

function Skills() {
  return(
    <div className="w-full grid grid-cols-9 px-6">
        <div className="col-span-4">
            <ResumeTitle subTitle="Coding" title={<FaCode/>}/>
            <div className="py-4">
                {/* python  */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Python</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>

                {/* JavaScript */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">JavaScript</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[70%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>

                {/* Html/Css  */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">HTML/CSS</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>

                {/* Reactjs  */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Reactjs</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[65%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>

                {/* Mysql  */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Mysql</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[70%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>

                {/* git  */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Git</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>

                {/* c++  */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">C++</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[50%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                {/* java  */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Java</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[40%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>

            </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
            <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
        </div>
        <div className="col-span-4">
            <ResumeTitle subTitle="Language" title={<IoLanguageSharp/>}/>
            <div className="py-4">
                {/* English  */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">English</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>

                {/* Hindi */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Hindi</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                
                {/* Marathi */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Marathi</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[60%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>

                {/* Konkani */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Konkani</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                
                {/* Urdu */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Urdu</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[50%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
            </div>
            <ResumeTitle subTitle="Developer Tools" title={<VscDebugDisconnect/>}/>
            <div className="py-4">
                {/* English  */}
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5 flex items-center gap-2"><span><FaGithub/></span>Github</p>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5 flex items-center gap-2"><span><VscVscode/></span> VS Code</p>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5 flex items-center gap-2"><span><SiPycharm/></span>PyCharm</p>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5 flex items-center gap-2"><span><SiPostman/></span>Postman</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills;
