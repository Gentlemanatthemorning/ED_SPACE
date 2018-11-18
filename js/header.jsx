import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="page__header">
        <div className="page__header__container">
          <h1 className="page__logo">
            <a href="" className="page__logo__link">
              #ED
            </a>
          </h1>
          <Menu />
        </div>
      </header>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Header />, document.getElementById("app"));
});

export default Header;
