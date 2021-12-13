import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';

function Building(props) {

  return (
    <Routes>
      <Route exact path="" element={<MainPage />} />

      <Route path="add" component={AddEditPage} />
      <Route path=":buildingId" component={AddEditPage} />

      <Route component={NotFound} />
    </Routes>
  );
}

export default Building;