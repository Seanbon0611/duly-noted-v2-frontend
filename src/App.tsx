import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import DemoPage from "./pages/DemoPage";
import ContactPage from "./pages/ContactPage";
import SignIn from "./pages/SignIn";
import "./assets/output.css";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/demo" component={DemoPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
