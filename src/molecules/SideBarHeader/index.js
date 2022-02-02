import React from "react";
import SideBarLogo from "../../assets/images/logoWithText.png";

function SideBarHeader() {
  return (
    <div className="flex items-center px-2">
      <img src={SideBarLogo} alt="logo" className=" object-contain h-16 " />
      <span className="flex flex-col px-4 flex-1">
        <h1 className="font-extrabold text-xl">Zendenta</h1>
        <h3 className="text-xs opacity-50">Cabut gigi tanpa saket</h3>
      </span>
      <i className="fas fa-sliders-h opacity-50 p-4"></i>
    </div>
  );
}

export default SideBarHeader;
