import React from "react";

function AboutMe() {
  return(
    <div className="flex flex-col md:flex-row pb-6">
        <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
            <div className="py-6">
                <h2 className="font-semibold mb-2 text-lg">Hello! I'm Aman Abdulkarim Hongal</h2>
                <p className="text-base leading-6">
                    Software Engineer from Goa, India. I have a solid grasp of software fundamentals and a strong passion for web development and Automation. I'm always eager to explore new technologies and engage in meaningful conversations about unique ideas and innovations.
                </p>
            </div>
        </div>
        <div className="w-full md:w-1/2 p-6">
            <ul className="flex flex-col gap-1">
                <li className="aboutRightLi"><span className="aboutRightLiSpan">Age:</span>22</li>
                <li className="aboutRightLi"><span className="aboutRightLiSpan">Residence:</span>India</li>
                <li className="aboutRightLi"><span className="aboutRightLiSpan">Freelance:</span>Available</li>
                <li className="aboutRightLi"><span className="aboutRightLiSpan">Address:</span>Ponda-Goa</li>
            </ul>
        </div>
    </div>
  );
}

export default AboutMe;
