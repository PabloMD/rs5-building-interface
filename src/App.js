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
import UsersContainer, { UserProfile } from "./components/UsersContainer";

function App() {
  const [menuShow, setMenuShow] = useState(false);
  const [user, setUser] = useState();

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
          <NavLink to="/users">4. Users Container</NavLink>
          <NavLink to="/user-profile">5. User profile</NavLink>
          <Link onClick={toggleSHowMenu} to="#">
            Close
          </Link>
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
          <Route path="/users">
            <Section title="4. UsersContainer">
              <UsersContainer selectedUser={user} setUser={(userData) => setUser(userData)} />
            </Section>
          </Route>
          <Route path="/user-profile">
            <Section title="5. User Profile">
              <UserProfile user={user} />
            </Section>
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
