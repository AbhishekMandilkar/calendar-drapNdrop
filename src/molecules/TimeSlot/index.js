import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppointMentCard } from "../";
import { selectAppointments } from "../../slice/appointmentSlice";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { updateAppointment } from "../../slice/appointmentSlice";
function TimeSlot({ isWeek, time, day }) {
  const dispatch = useDispatch();
  let data = useSelector(selectAppointments);
  const [appointment, setAppointment] = useState(data);

  useEffect(() => {
    setAppointment(
      data.filter((data) => {
        if (data.day === day && data.time === time) {
          return { name: data.name, day: data.day };
        }
      })
    );
  }, [appointment]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => handleItemChange(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleItemChange = (id) => {
    let newArr = appointment.filter((app) => app.id === id);
    dispatch(
      updateAppointment({
        name: newArr[0].name,
        id: newArr[0].id,
        treatment: newArr[0].treatment,
        time: time,
        day: day,
      })
    );
  };

  return (
    <div
      ref={drop}
      className={`
  ${isWeek ? "w-20 text-xs flex justify-end pr-2" : "w-40 border"}
   h-20 ${isOver && "border-dashed border-4 rounded-lg border-blue-700"}`}
    >
      {isWeek && <p className="text-gray-400 font-bold">{time}</p>}

      <>
        {appointment?.map(({ id, name, treatment, time, color }) => (
          <AppointMentCard
            key={id}
            id={id}
            name={name}
            treatment={treatment}
            time={time}
            color={color}
          />
        ))}
      </>
    </div>
  );
}

export default TimeSlot;
