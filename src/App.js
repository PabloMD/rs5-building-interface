import { useState } from "react";

import "./App.css";
import { DialogExample } from "./pages";
import Section, { Button } from "./components/Layout";
import SnackbarExample from "./pages/SnackbarExample";
import NavMenu from "./components/NavMenu";
import {
  BrowserRouter as Router,
  NavLink, Link,
  Route,
  Switch,
} from "react-router-dom";
import UsersContainer from "./components/UsersContainer";

function App() {
  const [menuShow, setMenuShow] = useState(false);
  const toggleSHowMenu = () => {
    setMenuShow((s) => !s);
  };
  const onMenuShow = () => {
    setMenuShow(true);
  };

  const onMenuHide = () => {
    setMenuShow(false);
  };

  return (
    <div className="App">
      <Router>
        <NavMenu show={menuShow} onShow={onMenuShow} onHide={onMenuHide}>
          <NavLink to="/1-dialog">1. Dialog window</NavLink>
          <NavLink to="/2-snackbar">2. Snackbars</NavLink>
          <NavLink to="/4-users">4. UsersContainer</NavLink>
          <Link onClick={toggleSHowMenu} to="#">Close</Link>
        </NavMenu>
        <div>
          <Button handleClick={toggleSHowMenu}>Show Menu</Button>
        </div>

        <Switch>
          <Route path="/1-dialog">
            <Section title="1. Dialog window">
              <DialogExample />
            </Section>
          </Route>
          <Route path="/2-snackbar">
            <Section title="2. Snackbar">
              <SnackbarExample />
            </Section>
          </Route>
          <Route path="/4-users">
            <Section title="4. UsersContainer">
              <UsersContainer></UsersContainer>
            </Section>
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
