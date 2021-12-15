import { createSlice } from "@reduxjs/toolkit";

const initialStates = [
  {
    id: 1,
    name: "test",
    street: "test",
    number: "test",
    code: "test",
    city: "test",
    municipality: "test",
    country: "test",
    description: "test",
    coordinate: [25.521308, 65.012369],
  },
];

const building = createSlice({
  name: "buildings",
  initialState: initialStates,
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
