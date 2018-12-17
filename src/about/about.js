import React from "react";
import More1 from "./more1.js";
import More2 from "./more2.js";
import More3 from "./more3.js";
import SideBar from "../sidebar.js";

import Image1 from "./about/bg1.jpg";
import Image2 from "./about/bg2.jpg";
import Image3 from "./about/bg3.jpg";

let instagram = "https://www.instagram.com/ed_space_ua/";
let facebook = "https://www.facebook.com/ed.space.ua/";

class About extends React.Component {
  render() {
    return (
      <div id="App">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap">
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
                </div>
              </div>
            </div>
            <footer>
              <p>&copy; #ED_SPACE 2018</p>
              <p>+380-(00)-000-00-00</p>
              <p>вул. Богдана Хмельницького 9. м. Біла Церква</p>
              {/* eslint-disable-next-line */}
              <a href={instagram} className="instagram" />
              {/* eslint-disable-next-line */}
              <a href={facebook} className="facebook" />
              <a className="rules" href="/">
                Політика конфіденційності
              </a>
              <a className="rules" href="/">
                Публічна оферта
              </a>
            </footer>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
