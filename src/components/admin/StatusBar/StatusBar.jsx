import React from "react";

import { BiBell } from "react-icons/bi";
import StatusBarItem from "./StatusBarItem";

const StatusBar = () => {
  return (
    <div className="flex flex-col items-start  text-textColor ">
      <div className="h-[300px] w-[300px] flex justify-center items-center bg-white shadow-xl rounded-xl">
        <img
          className="p-2"
          src="https://raw.githubusercontent.com/notVinh/PORTFOLIO-v2/main/public/assets/icons/favicon.png"
          alt="logo"
          width={150}
        />
      </div>
      <div className="flex justify-between items-center w-full pb-3 pt-7">
        <div className="text-[18px] font-semibold">Reminders</div>
        <span className="rounded-full bg-white h-[44px] w-[44px] flex justify-center items-center text-[18px] shadow-lg">
          <BiBell />
        </span>
      </div>
      <StatusBarItem
        role={"speak"}
        title={"Workshop"}
        timeStart={"08:00"}
        timeEnd={"12:00"}
      />
      <StatusBarItem
        role={"write"}
        title={"Store"}
        timeStart={"09:00"}
        timeEnd={"10:00"}
      />
    </div>
  );
};

export default StatusBar;
