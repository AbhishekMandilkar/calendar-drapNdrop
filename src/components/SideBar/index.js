import React from "react";
import { sideBarCategories } from "../../assets/dummyData";
import { SideBarOption } from "../../molecules";
import SideBarHeader from "../../molecules/SideBarHeader";
function SideBar() {
  return (
    <div className="w-72 h-screen">
      <SideBarHeader />
      {sideBarCategories.map(({ name, icon, id }) => (
        <SideBarOption
          name={name}
          icon={icon}
          key={id}
          isActive={name === "Calendar" && true}
          bottom={name === "Help ?" && true}
        />
      ))}
    </div>
  );
}

export default SideBar;
