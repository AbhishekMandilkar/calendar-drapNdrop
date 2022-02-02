import moment from "moment";
import React from "react";
import { DayHeader } from "..";
import { TimeSlotGroup } from "../../components";

function Week({ weekDays }) {
  console.log(moment().isoWeekday());
  return (
    <>
      <div className="flex-1">
        <DayHeader weekDays={weekDays} />
        <div className="h-full flex-1  flex">
          <TimeSlotGroup isWeek />
          {weekDays.map((days) => (
            <TimeSlotGroup day={days} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Week;
