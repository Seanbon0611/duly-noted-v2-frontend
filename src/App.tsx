import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import "./assets/output.css";
import SignUp from "./pages/SignUp";
import DemoPage from "./pages/DemoPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/demo" component={DemoPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
