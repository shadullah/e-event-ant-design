import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  error: false,
};

export const fetchEvent = createAsyncThunk("fetchEvent", async () => {
  const data = await fetch("/data.json");
  return data.json();
});

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      const { text, location } = action.payload;
      const event = {
        id: nanoid(),
        name: text,
        location: location,
      };
      state.data.push(event);
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchEvent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchEvent.rejected, (state) => {
      state.error = true;
    });
  },
});

export const { addEvent, removeEvent } = eventSlice.actions;

export default eventSlice.reducer;
