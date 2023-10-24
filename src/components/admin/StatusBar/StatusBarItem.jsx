import React from "react";
import { HiSpeakerWave } from "react-icons/hi2";
import { CiMenuKebab } from "react-icons/ci";
import { BiSolidPencil } from "react-icons/bi";

const StatusBarItem = ({ role, title, timeStart, timeEnd }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-xl rounded-xl w-full p-6 mb-2">
      <div className="flex">
        {role === "speak" ? (
          <span className="h-[40px] w-[40px] bg-green-600 flex items-center justify-center text-white rounded-md mr-3">
            <HiSpeakerWave />
          </span>
        ) : (
          <span className="h-[40px] w-[40px] bg-red-600 flex items-center justify-center text-white rounded-md mr-3">
            <BiSolidPencil />
          </span>
        )}

        <div className="text-[12px]">
          <div className="font-semibold">{title}</div>
          <div>
            {timeStart} AM - {timeEnd} PM
          </div>
        </div>
      </div>
      <CiMenuKebab />
    </div>
  );
};

export default StatusBarItem;
