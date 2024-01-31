import { createSlice } from "@reduxjs/toolkit";
import { AppDataProps } from "../types";

const initialState: AppDataProps = {
  data: [],
  locations: [],
  colors: [],
};
const vehileReducer = createSlice({
  name: "vechile",
  initialState: initialState,
  reducers: {
    addVehicle(state, action) {
      return {
        ...state,
        data: [...state.data, action.payload],
        locations: [...state.locations, action.payload.location],
        colors: [...state.colors, action.payload.color],
      };
    },
  },
});

export default vehileReducer.reducer;

export const { addVehicle } = vehileReducer.actions;
