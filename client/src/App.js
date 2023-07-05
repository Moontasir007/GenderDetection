import Home from "./pages/home/Home"

import Settings from "./pages/settings/settings"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import TopBar from "./components/topbar/topbar";
import { Context } from "./context/Context";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useContext } from "react"
import Classify from "./pages/classify/Classify"
import Contact from "./pages/contact/Contact"
import Tutorial from "./pages/Explore/Explore"

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/classify">
          {user ? <Classify /> : <Register />}
        </Route>
        <Route path="/contact">
          {user ? <Contact /> : <Register />}
        </Route>
        <Route path="/tutorial">
          {user ? <Tutorial /> : <Register />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
