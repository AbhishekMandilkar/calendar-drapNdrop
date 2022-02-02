import React from "react";
import { Day } from "..";

function DayHeader({ weekDays }) {
  return (
    <>
      <div className="flex ">
        <Day />
        {weekDays.map((days) => (
          <Day name={days.toString()} />
        ))}
      </div>
    </>
  );
}

export default DayHeader;
