import React from "react";
import Title from "../Home/Title";
// import { FiSend } from "react-icons/fi";

function Contact() {
  return (
    <div>
      <Title title="Get" subtitle="in Touch"/>
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-600">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">Address: </span>Ponda-Goa, India
          </p>

          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-600">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">Phone: </span>7620228780
          </p>
        </div>

        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-600">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">Email: </span>amanhongal@gmail.com
          </p>

          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-600">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">Freelance: </span>Available
          </p>
        </div>
      </div>
      {/* <div className="w-full mt-10">
        <Title title="Send" subtitle="Message"/>
        <form className="p-6 flex flex-col gap-6">
          <div className="w-full flex justify-between gap-10">
            <input className="w-full bg-transparent border-2 px-4 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300"
            type="text" 
            placeholder="Email Address"/>
            <input className="w-full bg-transparent border-2 px-4 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300"
            type="email" 
            placeholder="Full Name"/>
          </div>
          <textarea className="w-full bg-transparent border-2 px-4 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300 resize-none" 
          cols="30"  
          rows="4"
          placeholder="Enter Message"/>
          <button className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200">Send Message <span className="mt-1 text-designColor"><FiSend/></span></button>
        </form> */}
      {/* </div> */}
    </div>
  );
}

export default Contact;
