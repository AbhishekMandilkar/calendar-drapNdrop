import { createSlice } from "@reduxjs/toolkit";
// const initialState = ;

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    value: [
      {
        id: 3,
        name: "Person 1",
        treatment: "Root Canal",
        time: "10.00",
        day: "Mon",
        color: "bg-red-500",
      },
      {
        id: 1,
        name: "Person 2",
        treatment: "Tooth cleanup",
        time: "13.00",
        day: "Wed",
        color: "bg-green-500",
      },
      {
        id: 2,
        name: "Person 3",
        treatment: "General Checkup",
        time: "09.00",
        day: "Fri",
        color: "bg-blue-500",
      },
      {
        id: 4,
        name: "Person 4",
        treatment: "Root Canal",
        time: "14.00",
        day: "Thu",
        color: "bg-orange-500",
      },
    ],
  },
  reducers: {
    get: (state) => {
      return state;
    },
    updateAppointment: (state, action) => {
      console.log("action is", action.payload);
      const index = state.value.findIndex(
        (data) => data.id === action.payload.id
      );
      const newArray = [...state.value];
      newArray[index].time = action?.payload?.time;
      newArray[index].day = action?.payload?.day;

      state.value = newArray;
    },
  },
});

export const { get, updateAppointment } = appointmentSlice.actions;
export const selectAppointments = (state) => state.appointment.value;

export default appointmentSlice.reducer;
