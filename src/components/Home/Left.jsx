import React from "react";
import {profileImg} from "../../image/index"

function Left() {
  return (
    <div className="w-5/12 h-full bg-bodyColor rounded-2xl">
        <div className="w-full h-3/5">
            <img className="w-full h-full object-cover rounded-2xl" src={profileImg} alt="Profile Pic" loading= "priority" />
        </div>
        <div className="w-full h-2/5">

        </div>
    </div>
  );
}

export default Left;
