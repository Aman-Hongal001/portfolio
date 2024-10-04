import React, { useState } from "react";
import Left from "./components/Home/Left";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork } from "react-icons/md";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import { GrCertificate } from "react-icons/gr";
import { motion } from "framer-motion"; 
import Project from "./components/projects/Project";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";

function Home() {
  const[about, setAbout]=useState(true);
  const[resume, setResume]=useState(false);
  const[project, setProject]=useState(false);
  const[certificate, setCertificate]=useState(false);
  const[contact, setContact]=useState(false);

  return(
    <div className='w-full lgl:w-[85%] h-full lgl:h-[85%] bg-transparent text-white z-50 flex items-start justify-between p-4 lgl:p-0'>
        <div className="w-16 h-96 bg-transparent hidden lgl:flex flex-col gap-4">

          <div className="w-full h-80 bg-bodyColor py-6 rounded-3xl flex flex-col items-center justify-between">
            <span onClick={()=>
              setAbout(true) &
              setResume(false) &
              setProject(false) &
              setCertificate(false) &
              setContact(false)
              } 
              className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><FaUser/><span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-200 z-20 opacity-0 group-hover:opacity-100">About</span></span>

            <span onClick={()=>
              setAbout(false) &
              setResume(true) &
              setProject(false) &
              setCertificate(false) &
              setContact(false)
              }  className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><IoIosPaper/><span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-200 z-20 opacity-0 group-hover:opacity-100">Resume</span></span>

            <span onClick={()=>
              setAbout(false) &
              setResume(false) &
              setProject(true) &
              setCertificate(false) &
              setContact(false)
              }  className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><MdWork/><span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-200 z-20 opacity-0 group-hover:opacity-100">Projects</span></span>

            <span onClick={()=>
              setAbout(false) &
              setResume(false) &
              setProject(false) &
              setCertificate(true) &
              setContact(false)
              }  className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><GrCertificate/><span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-200 z-20 opacity-0 group-hover:opacity-100">Certificates</span></span>


            <span onClick={()=>
              setAbout(false) &
              setResume(false) &
              setProject(false) &
              setCertificate(false) &
              setContact(true)
              }  className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><FaEnvelope/><span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-10 group-hover:translate-x-12 transition-all duration-200 z-20 opacity-0 group-hover:opacity-100">Contact-Us</span></span>

          </div>
        </div>
        <div className="w-full lgl:w-[94%] h-full bg-transparent flex flex-col gap-6 lgl:gap-0 lgl:flex-row items-center">
            {/* left part */}
            <Left/> 
            {/* Right part */}
            <div className="w-full lgl:w-8/12 h-[95%] bg-bodyColor rounded-2xl flex justify-center items-center">

              {/* ======================== Smaller device content Start ======================== */}
              <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
                <About />
                <Resume />
                <Project />
                <Certificates />
                <Contact />
              </div>
              {/* ======================== Smaller device content End ========================== */}

              <div className="w-full h-[96%] hidden lgl:flex justify-center scrollbar-thin overflow-y-scroll scrollbar-thumb-[#646464] scrollbar-track-bodyColor overflow-x-hidden">
                {about && (
                  <motion.div initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5}}>
                    <About/>
                  </motion.div>
                )}

                {resume && (
                  <motion.div initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5}}>
                    <Resume/>
                  </motion.div>
                )}

                {project && (
                  <motion.div initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5}}>
                    <Project/>
                  </motion.div>
                )}
                
                {certificate && (
                  <motion.div initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5}}>
                    <Certificates/>
                  </motion.div>
                )}

                
                {contact && (
                  <motion.div initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5}}>
                    <Contact/>
                  </motion.div>
                )}
              </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
