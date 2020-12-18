import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import "./assets/output.css";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={LandingPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
