import React from "react";
import Title from "../Home/Title";
import Experience from "./Experience";
import Skills from "./Skills";

function Resume() {
  return(
    <section id="resume">
        <Title title="My" subtitle="Resume"/>
        <Experience/>
        
        <Title title="My" subtitle="Skills"/>
        <Skills/>
    </section>
  );
}

export default Resume;
