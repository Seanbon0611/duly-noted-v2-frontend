import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import DemoPage from "./pages/DemoPage";
import ContactPage from "./pages/ContactPage";
import SignIn from "./pages/SignIn";
import "./assets/output.css";
import useToken from "./hooks/useToken";

const initialUserState = {
  email: "",
  notes: [],
};

const App = () => {
  const { token, setToken } = useToken();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(initialUserState);

  const logout = () => {
    localStorage.clear();
    setUser(initialUserState);
    setLoggedIn(false);
  };
  return (
    <div>
      <Header loggedIn={loggedIn} logout={logout} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUp} />
        <Route
          path="/signin"
          render={() => (
            <SignIn
              setToken={setToken}
              setUser={setUser}
              setLoggedIn={setLoggedIn}
            />
          )}
        />
        <Route path="/demo" component={DemoPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
