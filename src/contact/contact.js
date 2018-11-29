import React from "react";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <section>
        <div className="main__logo">
          <div className="container">
            <div className="parallax__4" />
            <div className="container__fill__4" />
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

export default Contact;
