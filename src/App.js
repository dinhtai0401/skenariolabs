import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const Building = React.lazy(() => import("./features/Building"));

function App() {
  return (
    <div className="bulding-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<Building />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
