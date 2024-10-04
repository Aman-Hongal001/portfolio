import React from "react";
import { fyImg, pmsImg,toDOImg } from "../../image";
import Title from "../Home/Title";
import ProjectCard from "./ProjectCard";

function Project() {
  return(
    <div>
      <Title title="Recent" subtitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectCard title="Medical Plant Identification And Analysis Through Machine Learning"
            category="Final Year Project"
            image={fyImg}
            url="https://github.com/Aman-Hongal001/BE_Final_Year_Project"/>

          <ProjectCard title="Pharmacy Management System"
            category="DBMS Mini Project"
            image={pmsImg}
            url="https://github.com/Aman-Hongal001/Basic_Pharmacy_Management_Mini_Project"/>


        </div>

        <div className="px-6">
          <a href="https://aman-hongal001.github.io/ToDo-List-withReact/"><ProjectCard title="ToDO List"
          category="React Basics"
          image={toDOImg}
          url="https://github.com/Aman-Hongal001/ToDo-List-withReact"/></a>
        
        </div>
      </div>

    </div>
  );
}

export default Project;
