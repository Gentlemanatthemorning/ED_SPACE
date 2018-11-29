import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Main from "./App.js";
import Games from "./games/games.js";
import Lessons from "./lessons/lessons.js";
import About from "./about/about.js";
import Contact from "./contact/contact.js";
// import Episode1 from "./button";

require("./scss/style.scss");

class Header extends React.Component {
  render() {
    return (
      <div className="page__header">
        <div className="page__header__container">
          <h1 className="page__logo">
            <Link to="/" className="page__logo__link">
              <span>#ED</span>
            </Link>
          </h1>
          {/* <div className="click__button">
            <Episode1 />
          </div> */}
          <nav className="page__nav">
            <ul className="page__nav__list">
              <li>
                <Link to="/games">#GAMES</Link>
              </li>
              <li>
                <Link to="/lessons">#LESSONS</Link>
              </li>
              <li>
                <Link to="/about_space">#ABOUT SPACE</Link>
              </li>
              <li>
                <Link to="/contact">#CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
    );
  }
}

class NotFound extends React.Component {
  render() {
    return <h1> Not Found </h1>;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <HashRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/games" component={Games} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/about_space" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>,
    document.getElementById("root")
  );
});
