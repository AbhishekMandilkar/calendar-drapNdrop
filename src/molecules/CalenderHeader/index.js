import React from "react";
import CirleBtn from "../../common/Fab";
import SearchInput from "../../common/SearchInput";

function CalenderHeader() {
  return (
    <div className="w-full py-2 flex justify-between items-center px-8 border-b-2">
      <div className="flex items-baseline">
        <span className="flex items-baseline pr-10">
          <i className="far fa-calendar-minus text-2xl text-blue-700"></i>
          <h1 className="font-bold pl-4 text-xl">Calendar</h1>
        </span>
        <span className="font-bold opacity-50 px-4">List</span>
        <span className="font-bold opacity-50 px-4">Monthly</span>
        <span className="font-bold px-4 text-blue-700">Weekly</span>
      </div>
      <div className="flex items-center">
        <SearchInput />
        <CirleBtn
          color={"bg-blue-700"}
          icon={"fas fa-plus"}
          iconColor={"text-white"}
        />
        <CirleBtn
          color={"bg-white"}
          icon={"fas fa-bell"}
          iconColor={"text-gray-400"}
        />
        <div></div>
      </div>
    </div>
  );
}

export default CalenderHeader;
