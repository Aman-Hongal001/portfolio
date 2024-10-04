import React from "react";
import CertificateCard from "./CertificateCard";
import { iitBomPython, iitBomC, internShip, iitBomCPP, iitBomHTML, bigPython, coreJava, oopsPython, nptelPM, nptelPython, nptelSPM } from "../../image";
import Title from "../Home/Title";

function Certificates() {
  return(
    <div>
      <Title title="My" subtitle="Certificates" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a href="https://drive.google.com/file/d/1gKGcN7QeQ65FWBUWdSTxtxBmO2npIA59/view?usp=drive_link"><CertificateCard title="Python 3.4.3"
          category="IIT Bombay"
          image={iitBomPython}/></a>

          <a href="https://drive.google.com/file/d/1gKGcN7QeQ65FWBUWdSTxtxBmO2npIA59/view?usp=drive_link"><CertificateCard title="Principles Of Management"
          category="NPTEL"
          image={nptelPM}/></a>

          <a href="https://drive.google.com/file/d/1gKGcN7QeQ65FWBUWdSTxtxBmO2npIA59/view?usp=drive_link"><CertificateCard title="Core JAVA"
          category="Internshala"
          image={coreJava}/></a>

          <a href="https://drive.google.com/file/d/1gKGcN7QeQ65FWBUWdSTxtxBmO2npIA59/view?usp=drive_link"><CertificateCard title="Advanced CPP Training"
          category="IIT Bombay"
          image={iitBomCPP}/></a>

          <a href="https://drive.google.com/file/d/1gKGcN7QeQ65FWBUWdSTxtxBmO2npIA59/view?usp=drive_link"><CertificateCard title="Python for Absolute Beginners"
          category="Youtube"
          image={bigPython}/></a>

          <a href="https://drive.google.com/file/d/1gKGcN7QeQ65FWBUWdSTxtxBmO2npIA59/view?usp=drive_link"><CertificateCard title="Mastering Object Oriented Programming"
          category="Youtube"
          image={oopsPython}/></a>

        </div>

        <div className="px-6">
          <a href="https://drive.google.com/file/d/1gKGcN7QeQ65FWBUWdSTxtxBmO2npIA59/view?usp=drive_link"><CertificateCard title="The Joy Of Computing Using Python"
          category="NPTEL"
          image={nptelPython}/></a>

          
          <a href="https://drive.google.com/file/d/1gKGcN7QeQ65FWBUWdSTxtxBmO2npIA59/view?usp=drive_link"><CertificateCard title="HTML Training"
          category="IIT Bombay"
          image={iitBomHTML}/></a>

          <a href="https://drive.google.com/file/d/1gKGcN7QeQ65FWBUWdSTxtxBmO2npIA59/view?usp=drive_link"><CertificateCard title="Software Project Management"
          category="NPTEL"
          image={nptelSPM}/></a>

          <a href="https://drive.google.com/file/d/1gKGcN7QeQ65FWBUWdSTxtxBmO2npIA59/view?usp=drive_link"><CertificateCard title="C Training "
          category="IIT Bombay"
          image={iitBomC}/></a>

          <a href="https://drive.google.com/file/d/1gKGcN7QeQ65FWBUWdSTxtxBmO2npIA59/view?usp=drive_link"><CertificateCard title="Internship Certificate"
          category="Spintly"
          image={internShip}/></a>
        </div>
      </div>

    </div>
  );
}

export default Certificates;
