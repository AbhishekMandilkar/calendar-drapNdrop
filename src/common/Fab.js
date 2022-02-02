import React from "react";

function CirleBtn({ color, icon, iconColor }) {
  return (
    <div
      className={`w-10 h-10 rounded-full mx-1 flex justify-center items-center ${color}`}
    >
      <i className={`${icon} ${iconColor}`}></i>
    </div>
  );
}

export default CirleBtn;
