import moment from "moment";
import React from "react";
import { CalenderHeader, Week } from "../../molecules/";
function Calendar() {
  const weekDays = moment.weekdaysShort();
  console.log(weekDays);
  return (
    <div className="flex-1 bg-blue-50 flex-col">
      <CalenderHeader />
      <Week weekDays={weekDays} />
    </div>
  );
}

export default Calendar;
