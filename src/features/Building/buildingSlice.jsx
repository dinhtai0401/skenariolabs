import { createSlice } from "@reduxjs/toolkit";

const building = createSlice({
  name: "buildings",
  initialState: [],
  reducers: {
    addBuilding: (state, action) => {
      state.push(action.payload);
    },
  },
});

const { reducer, actions } = building;
export const { addBuilding } = actions;
export default reducer;
