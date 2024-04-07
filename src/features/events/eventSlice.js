import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  events: [
    {
      id: 1,
      title: "Redux Here Online",
      location: "Dhaka",
    },
  ],
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      const { text, location } = action.payload;
      const event = {
        id: nanoid(),
        title: text,
        location: location,
      };
      state.events.push(event);
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },
  },
});

export const { addEvent, removeEvent } = eventSlice.actions;

export default eventSlice.reducer;
