import moment from "moment";
import React from "react";

function Day({ name }) {
  const todayDay = moment().format("ddd");
  return (
    <div
      className={`p-2 flex justify-center font-bold ${
        name === todayDay ? "text-blue-700" : "text-gray-400"
      }  ${!name ? "w-16" : "w-40"}`}
    >
      {name ? name : <i class="far fa-clock"></i>}
    </div>
  );
}

export default Day;
