import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AddEditPage from "./pages/AddEdit";
import MainPage from "./pages/Main";

function Building(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="add" element={<AddEditPage />} />
      <Route path=":buildingId" element={<AddEditPage />} />

      <Route path="*" component={NotFound} />
    </Routes>
  );
}

export default Building;
