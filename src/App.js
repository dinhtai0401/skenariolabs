import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="bulding-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>

          <Switch>
            
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
