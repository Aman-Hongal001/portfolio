import React from "react";

function AboutMe() {
  return(
    <div className="flex pb-6">
        <div className="w-1/2 text-zinc-400  p-6 borderRight flex  flex-col">
            <div className="py-6">
                <h2 className="font-semibold mb-2 text-lg">Hello! I'm Aman Abdulkarim Hongal</h2>
                <p className="text-base leading-6">
                    Software Engineer from India, Goa. I have good understanding of Fundamentals, Also I am good at Web Development. I love to talk with you about our unique.
                </p>
            </div>
        </div>
        <div className="w-1/2 p-6">
            <ul>
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
