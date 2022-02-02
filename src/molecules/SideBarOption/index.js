import React from "react";

function SideBarOption({ name, icon, isActive, bottom }) {
  return (
    <div
      className={`${
        isActive && "bg-blue-600 text-white"
      } flex flex-row p-4 items-center ${bottom && "absolute bottom-0"}`}
    >
      <i
        className={`${icon} ${isActive ? "text-white" : "opacity-50"} pr-6 `}
      ></i>
      <span className={`font-bold text-sm`}>{name}</span>
    </div>
  );
}

export default SideBarOption;
