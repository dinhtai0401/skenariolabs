import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.scss";
import Footer from "./components/Footer";
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
            <Route path="/" component={Building} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
