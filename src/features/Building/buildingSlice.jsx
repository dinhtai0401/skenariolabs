import { createSlice } from "@reduxjs/toolkit";

const building = createSlice({
  name: "buildings",
  initialState: [
    {
      id: 1,
      name: "aa",
      street: "aa",
      number: "aa",
      code: "aa",
      city: "aa",
      municipality: "aa",
      country: "aa",
      description: "aa",
      coordinate: [25.521308, 65.012369],
    },
  ],
  reducers: {
    addBuilding: (state, action) => {
      state.push(action.payload);
    },
    removeBuilding: (state, action) => {
      const removeBuildingId = action.payload;
      return state.filter((building) => building.id !== removeBuildingId);
    },
    updateBuilding: (state, action) => {
      const newBuilding = action.payload;
      const buildingIndex = state.findIndex(
        (building) => building.id === newBuilding.id
      );

      if (buildingIndex >= 0) {
        state[buildingIndex] = newBuilding;
      }
    },
  },
});

const { reducer, actions } = building;
export const { addBuilding, removeBuilding, updateBuilding } = actions;
export default reducer;
