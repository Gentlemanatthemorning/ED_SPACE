import React from "react";
import ShowGame from "./show";
import { Link } from "react-router-dom";
import Img1 from "./images/img1.png";
import Img2 from "./images/img2.png";
import Img3 from "./images/img3.png";
import Img4 from "./images/img4.png";

class Games extends React.Component {
  render() {
    return (
      <section>
        <div className="main__logo">
          <div className="container">
            <div className="parallax__3" />
            <div className="container__fill__3">
              <div className="game__container">
                <div className="game__zone__1">
                  <div className="game__zone__1__box__1">
                    <img src={Img1} alt="" />
                    <h2>Творчі проекти</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Esse corporis quasi quas, ea repellat cumque iste optio
                      autem maiores ex repudiandae sint asperiores repellendus
                      vitae temporibus minus culpa eligendi praesentium
                      aspernatur nam. Eaque, maxime numquam. Provident nostrum
                      tempore eos voluptates qui ipsa adipisci aut itaque minus!
                    </p>
                  </div>
                  <div className="game__zone__1__box__2">
                    <img src={Img2} alt="" />
                    <h2>Мотивація і саморозвиток</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Esse corporis quasi quas, ea repellat cumque iste optio
                      autem maiores ex repudiandae sint asperiores repellendus
                      vitae temporibus minus culpa eligendi praesentium
                      aspernatur nam. Eaque, maxime numquam. Provident nostrum
                      tempore eos voluptates qui ipsa adipisci aut itaque minus!
                    </p>
                  </div>
                </div>
                <div className="game__zone__2">
                  <div className="game__zone__2__box__1">
                    <img src={Img3} alt="" />
                    <h2>Креативні проекти</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Esse corporis quasi quas, ea repellat cumque iste optio
                      autem maiores ex repudiandae sint asperiores repellendus
                      vitae temporibus minus culpa eligendi praesentium
                      aspernatur nam. Eaque, maxime numquam. Provident nostrum
                      tempore eos voluptates qui ipsa adipisci aut itaque minus!
                    </p>
                  </div>
                  <div className="game__zone__2__box__2">
                    <img src={Img4} alt="" />
                    <h2>Бізнес діти</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Esse corporis quasi quas, ea repellat cumque iste optio
                      autem maiores ex repudiandae sint asperiores repellendus
                      vitae temporibus minus culpa eligendi praesentium
                      aspernatur nam. Eaque, maxime numquam. Provident nostrum
                      tempore eos voluptates qui ipsa adipisci aut itaque minus!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShowGame />
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

export default Games;
