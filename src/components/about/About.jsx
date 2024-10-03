import React from "react";
import Title from "../Home/Title";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";

function About() {
  return (
    <section id="about" className="w-full">
        <Title title="About" subtitle="Me"/>
        <AboutMe/>
        <Title title="My" subtitle="Services"/>
        <MyServices/>
    </section>
  );
}

export default About;
