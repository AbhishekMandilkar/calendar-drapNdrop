import { castDraft } from "immer";
import React from "react";
import { useDrag } from "react-dnd";
function AppointMentCard({ id, name, treatment, time, color }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={`w-36  ${
        isDragging ? "drop-shadow-xl" : "drop-shadow-2xl"
      } bg-white rounded-md cursor-pointer flex flex-col`}
    >
      <div className={`h-1  rounded-t-md ${color}`}></div>
      <div className="h-20 px-2 py-1 flex flex-col">
        <span className="text-sm font-bold">{name}</span>
        <span className="text-xs opacity-50">{treatment}</span>
        <span className="text-xs opacity-50 absolute bottom-0">{time}</span>
      </div>
    </div>
  );
}

export default AppointMentCard;
