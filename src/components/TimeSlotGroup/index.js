import React from "react";
import { timeSlots } from "../../assets/dummyData";
import { TimeSlot } from "../../molecules";

function TimeSlotGroup({ isWeek, day }) {
  console.log(day);
  return (
    <div className="flex flex-col">
      {timeSlots.map(({ time }) => (
        <TimeSlot isWeek={isWeek} time={time} day={day} />
      ))}
    </div>
  );
}

export default TimeSlotGroup;
