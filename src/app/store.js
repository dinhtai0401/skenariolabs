import { configureStore } from "@reduxjs/toolkit";
import buildingReducer from "features/Building/buildingSlice";

const rootReducer = {
  buildings: buildingReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
