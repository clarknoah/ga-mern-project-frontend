import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.js";
import CreateUser from "./components/CreateUser/CreateUser.js";
import ProfileHome from "./components/ProfileHome/ProfileHome.js";
import UserLogin from "./components/UserLogin/UserLogin.js";
import FollowingHome from "./components/FollowingHome/FollowingHome";
let RootRoute = (
  <Route
    path="/"
    render={() => {
      return Home;
    }}
  />
);
function App() {
  return (
    <div className="App">
      <header>
        <div className="header-space">
          <h1>
            <i>
              <Link exact={true} to="/" className="h1">
                Tweeper
              </Link>
            </i>
          </h1>
          <Link exact={true} to="/createUser">
            Link
          </Link>
          <UserLogin />
        </div>
      </header>
      <main>
        <Route
          exact={true}
          path="/"
          render={() => {
            return <Home />;
          }}
        />

        <Route
          exact={true}
          path="/createUser"
          render={() => {
            return <CreateUser />;
          }}
        />
        <Route
          exact
          path="/home"
          render={renderProps => {
            return <ProfileHome {...renderProps} />;
          }}
        />
        <Route
          exact
          path="/user:handle"
          render={renderProps => {
            return <FollowingHome {...renderProps} />;
          }}
        />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
