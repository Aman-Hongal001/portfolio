import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import ResumeCard from "./ResumeCard";
import { GiGraduateCap } from "react-icons/gi";

function Experience() {
  return(
    <div className="w-full grid grid-cols-9 px-6">
        <div className="col-span-4">
            <ResumeTitle title={<MdWork/>}  subTitle={"Experience"}/>
            <ResumeCard  
            badge="July 2023 - Sep 2023" 
            title="Developer / Tester" 
            subTitle="Spintly India Pvt Ltd" 
            des={
                <ul>
                    <li>Integrated backend functionalities using Node.js, improving API performance by 20 %.</li>
                    <li>Performed integration and manual testing using Postman to validate API endpoints, reducing bugs by
                    15%.</li>
                    <li>Collaborated with a cross-functional team to streamline application deployment.</li>
                </ul>
            }
            />
            {/* <ResumeCard  
            badge="" 
            title="Developer/Tester" 
            subTitle="Spintly India Pvt Ltd" 
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere exercitationem harum. Asperiores dolore hic quibusdam nemo harum, quia, aperiam aut, commodi culpa blanditiis perferendis maxime et non eum delectus."
            /> */}
        </div>
        <div className="w-full h-full flex justify-center items-center">
            <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
        </div>
        <div className="col-span-4">
        <ResumeTitle title={<GiGraduateCap/>}  subTitle={"Education"}/>
            <ResumeCard  
            badge="2020 - 2024" 
            title="BE" 
            subTitle="CGPA - 8.61" 
            des="Shree Rayeshwar Institute of Engineering And Information Technology, Shiroda-Goa."
            />
            <ResumeCard  
            badge="2018 - 2020" 
            title="XII" 
            subTitle="Percentage - 64" 
            des="The Pes Higher Secondary School, Ponda-Goa."
            />
            <ResumeCard  
            badge="2018" 
            title="X" 
            subTitle="Percentage - 80" 
            des="MEF's Fatima High School, Ponda-Goa."
            />
        </div>
    </div>
  );
}

export default Experience;
