import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Redirect exact from="/" to="/building" />

            <Route path="/building" component={Building} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
