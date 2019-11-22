import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.js";
import CreateUser from "./components/CreateUser/CreateUser.js";
import ProfileHome from "./components/ProfileHome/ProfileHome.js";
import UserLogin from "./components/UserLogin/UserLogin.js";
import FollowingHome from "./components/FollowingHome/FollowingHome";
import SearchPage from "./components/SearchPage/SearchPage";
import SearchBox from "./components/SearchBox/SearchBox";
import { withRouter } from "react-router-dom";
let RootRoute = (
  <Route
    path="/"
    render={() => {
      return Home;
    }}
  />
);
function App() {
  let userLoggedIn = localStorage.getItem("activeUser") !== null;
  let searchBox = userLoggedIn ? <SearchBox /> : <div />;
  return (
    <div className="App">
      <header>
        <div className="header-space">
          <div className="h1-and-icon">
            <div className="icon"></div>
            <h1 className="header-tweeper">
              <Link exact={true} to="/" className="h1">
                Tweeper
              </Link>
            </h1>
          </div>
          <div className="header-right">
            {searchBox}
            <UserLogin />
          </div>
        </div>
      </header>
      <section>
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
            path="/user/:handle"
            render={renderProps => {
              return <FollowingHome {...renderProps} />;
            }}
          />
          <Route
            exact
            path="/search"
            render={renderProps => {
              return <SearchPage {...renderProps} />;
            }}
          />
        </main>
      </section>
      <footer></footer>
    </div>
  );
}

export default withRouter(App);
