import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./about/bg1.jpg";
import Image2 from "./about/bg2.jpg";
import Image3 from "./about/bg3.jpg";
import More1 from "./more1";
import More2 from "./more2";
import More3 from "./more3";

class About extends React.Component {
  render() {
    return (
      <section>
        <div className="main__logo">
          <div className="container">
            <div className="parallax__1" />
            <div className="container__fill__1">
              <div className="about__container">
                <div className="about__1">
                  <img src={Image1} alt="" />
                  <More1 />
                </div>
                <div className="about__2">
                  <img src={Image2} alt="" />
                  <More2 />
                </div>
                <div className="about__3">
                  <img src={Image3} alt="" />
                  <More3 />
                </div>
              </div>
              <a href="/">Політика конфіденційності</a>
              <a href="/">Публічна оферта</a>
            </div>
          </div>
        </div>
        <footer>
          <p>&copy; #ED_SPACE 2018</p>
          <p>+380-(00)-000-00-00</p>
          <p>вул. Богдана Хмельницького 9. м. Біла Церква</p>
          <Link to="/contact" className="instagram" />
          <Link to="/contact" className="facebook" />
        </footer>
      </section>
    );
  }
}

export default About;
