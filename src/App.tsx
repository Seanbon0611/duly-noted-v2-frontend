import { useState, useEffect } from "react";
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
import NotesPage from "./pages/NotesPage";
import NewNotePage from "./pages/NewNotePage";
import NotFound from "./pages/NotFound";

const initialUserState = {
  id: 0,
  email: "",
};

const App = () => {
  const { token, setToken } = useToken();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(initialUserState);

  const logout = () => {
    setUser(initialUserState);
    setLoggedIn(false);
    localStorage.clear();
  };
  //If a user is logged in(has an id other than 0), then make sure we have our login state set to true
  useEffect(() => {
    if (user.id !== 0) {
      setLoggedIn(true);
    }
  }, [user]);

  //Persist user data, using data from local storage if it exists
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  //save user to local storage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  });
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
        <Route path="/notes/new" component={NewNotePage} />
        <Route path="/notes" render={() => <NotesPage id={user.id} />} />
        <Route render={() => <NotFound loggedIn={loggedIn} />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
