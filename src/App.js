import React from "react";
import { Link } from "react-router-dom";

import flag from "./images/flag.png";

import calendar from "./images/articles/image1.png";
import clock from "./images/articles/image2.png";
import test from "./images/articles/image3.png";
import free from "./images/articles/image4.png";
import calm from "./images/articles/image5.png";
import grammar from "./images/articles/image6.png";

import Hover1 from "./hover1";
import Hover2 from "./hover2";
import Hover3 from "./hover3";
import Hover4 from "./hover4";

let testLink =
  "https://docs.google.com/forms/d/e/1FAIpQLScMEaI6WY-MuFa59hhZwDaAXNZ3_0IX2effq0yF5Yl-ajcWRA/viewform";

class Main extends React.Component {
  render() {
    return (
      <section>
        <div className="main__logo">
          <div className="container">
            <div className="parallax" />
            <div className="container__fill">
              <article>
                <h2>
                  Space
                  <br />
                  <br />
                  team
                </h2>
                <div>
                  <Hover1 />
                </div>
                <div>
                  <Hover2 />
                </div>
                <div>
                  <Hover3 />
                </div>
                <div>
                  <Hover4 />
                </div>
              </article>
            </div>
            <section className="main__zone">
              <div className="main__zone__1">
                <div className="main__zone__1__box__1">
                  <img src={flag} alt="" />
                  <div className="main__zone__1__text__1">
                    <h2>The most popular language in the world</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Esse corporis quasi quas, ea repellat cumque iste optio
                      autem maiores ex repudiandae sint asperiores repellendus
                      vitae temporibus minus culpa eligendi praesentium
                      aspernatur nam. Eaque, maxime numquam. Provident nostrum
                      tempore eos voluptates qui ipsa adipisci aut itaque minus!
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Esse corporis quasi quas, ea repellat cumque iste optio
                      autem maiores ex repudiandae sint asperiores repellendus
                      vitae temporibus minus culpa eligendi praesentium
                      aspernatur nam. Eaque, maxime numquam. Provident nostrum
                      tempore eos voluptates qui ipsa adipisci aut itaque minus!
                    </p>
                    <h3 className="main__zone__price">Всього 73 грн/год</h3>
                  </div>
                </div>
                <div className="main__zone__2">
                  <div>
                    <img src={calendar} alt="" />
                    <h2>Зручні дні</h2>
                  </div>
                  <div>
                    <h2>ПН-СР-ПТ або ВТ-ЧТ</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Esse corporis quasi quas, ea repellat cumque iste optio
                      autem maiores ex repudiandae sint asperiores repellendus
                      vitae temporibus minus culpa eligendi praesentium
                      aspernatur nam. Eaque, maxime numquam. Provident nostrum
                      tempore eos voluptates qui ipsa adipisci aut itaque minus!
                    </p>
                    <h2>З 9:00 до 21:00</h2>
                  </div>
                  <div>
                    <img src={clock} alt="" />
                    <h2>Зручний час</h2>
                  </div>
                </div>
              </div>
              <div className="main__zone__3">
                <div>
                  <img src={test} alt="" />
                  <h2>Онлайн тест</h2>
                  <button>
                    <a href={testLink}>Test</a>
                  </button>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  corporis quasi quas, ea repellat cumque iste optio autem
                  maiores ex repudiandae sint asperiores repellendus vitae
                  temporibus minus culpa eligendi praesentium aspernatur nam.
                  Eaque, maxime numquam. Provident nostrum tempore eos
                  voluptates qui ipsa adipisci aut itaque minus!
                </p>
                <div>
                  <img src={free} alt="" />
                  <h2>Безкоштовне заняття</h2>
                  <button>
                    <a href="/contact#formSelect">test</a>
                  </button>
                </div>
              </div>
              <div className="main__zone__4">
                <div>
                  <img src={calm} alt="" />
                  <h2>Keep Calm</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  corporis quasi quas, ea repellat cumque iste optio autem
                  maiores ex repudiandae sint asperiores repellendus vitae
                  temporibus minus culpa eligendi praesentium aspernatur nam.
                  Eaque, maxime numquam. Provident nostrum tempore eos
                  voluptates qui ipsa adipisci aut itaque minus!
                </p>
                <div>
                  <img src={grammar} alt="" />
                  <h2>Easy Grammar</h2>
                </div>
              </div>
            </section>
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

export default Main;
