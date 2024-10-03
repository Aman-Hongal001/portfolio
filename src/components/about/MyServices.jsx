import React from "react";
import ServicesCard from "./ServicesCard";
import { BiCodeAlt } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { AiFillAppstore, AiTwotoneAppstore } from "react-icons/ai";
import { FaBugSlash } from "react-icons/fa6";

function MyServices() {
  return( 
    <div className="grid grid-cols-2">
        <ServicesCard icon={<BiCodeAlt/>} 
        title="Web Development"
        subTitle="Expertise: HTML, CSS, JavaScript, React, and Bootstrap. Proficient in building responsive, scalable web applications. Delivering dynamic user experiences through clean code and modern design principles."/>
        
        <ServicesCard icon={<FaPython/>} 
        title="Python Development"
        subTitle="Proficient in Python 3 with cleared basics in Django framework. Familiar with data structures and algorithms. Building web applications, and web scraping through Selenium."/>

        <ServicesCard icon={<FaBugSlash/>} 
        title="Software Testing"
        subTitle="Experienced in manual & API testing (REST, SOAP). Eager to expand expertise in automation testing (Selenium, Pytest) and CI/CD, ensuring top-notch software quality"/>

        <ServicesCard icon={<AiFillAppstore/>} 
        title="Mobile Application Development"
        subTitle="Eager to explore mobile app development for Android, Interested in learning cross-platform frameworks like React Native and Flutter. Looking to build intuitive, user-friendly mobile apps with robust performance."/>
        
    </div>
);
}

export default MyServices;
