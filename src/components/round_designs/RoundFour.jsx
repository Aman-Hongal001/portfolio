import React from "react";

function RoundFour() {
  return(
    <div className='w-[800px] h-[800px] absolute rounded-full top-0 left-1/3'>
      <div className="w-full h-full relative animate-reverse-spin">
        <div className='w-52 h-52 rounded-full bg-blue-600 absolute top-0 blur-xl'></div>
        <div className='w-28 h-28 rounded-full bg-gray-400 absolute -bottom-10 left-16 blur-xl'></div>
        <div className='w-28 h-28 rounded-full bg-designColor absolute top-32 -right-10 blur-2xl'></div>
      </div>
    </div>
  );
}

export default RoundFour;
