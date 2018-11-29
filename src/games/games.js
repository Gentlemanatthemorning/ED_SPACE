import React from "react";
import Game from "./Game";
import { Link } from "react-router-dom";

class Games extends React.Component {
  render() {
    return (
      <section>
        <div className="main__logo">
          <div className="container">
            <div className="parallax__3" />
            <div className="container__fill__3">
              <div className="game__container">
                <Game />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>&copy; #ED_SPACE 2018</p>
          <Link to="/contact" className="instagram" />
          <Link to="/contact" className="facebook" />
        </footer>
      </section>
    );
  }
}

export default Games;
