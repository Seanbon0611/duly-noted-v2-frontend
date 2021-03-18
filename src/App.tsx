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

const App = () => {
  const { token, setToken } = useToken();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ id: "", email: "" });
  console.log(token);

  const logout = () => {
    setUser({ id: "", email: "" });
    setLoggedIn(false);
    localStorage.clear();
  };
  //If a user is logged in(has an id other than 0), then make sure we have our login state set to true
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  }, [token]);

  //Persist user data, using data from local storage if it exists
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  //save user to local storage
  useEffect(() => {
    localStorage.setItem("user_id", JSON.stringify(user.id));
    localStorage.setItem("user", JSON.stringify(user.email));
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
        <Route path="/contact" component={ContactPage} />
        <Route path="/notes/new" component={NewNotePage} />
        <Route path="/notes" render={() => <NotesPage />} />
        <Route render={() => <NotFound loggedIn={loggedIn} />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
