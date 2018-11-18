import React from "react";
import ReactDOM from "react-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="page__nav">
        <ul className="page__nav__list">
          <li>
            <a href="">#NEWS</a>
          </li>
          <li>
            <a href="">#LESSONS</a>
          </li>
          <li>
            <a href="">#ABOUT SPACE</a>
          </li>
          <li>
            <a href="">#CONTACT</a>
          </li>
        </ul>
      </nav>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Menu />, document.getElementById("app"));
});

export default Menu;
