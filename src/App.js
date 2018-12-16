import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import Image1 from "./images/img1.jpg";
import Image2 from "./images/img2.jpg";
import Image3 from "./images/img3.jpg";
import Image4 from "./images/img4.jpg";

import flag from "./images/flag.png";

import calendar from "./images/articles/image1.png";
import clock from "./images/articles/image2.png";
import test from "./images/articles/image3.png";
import free from "./images/articles/image4.png";
import calm from "./images/articles/image5.png";
import grammar from "./images/articles/image6.png";

let testLink =
  "https://docs.google.com/forms/d/e/1FAIpQLScMEaI6WY-MuFa59hhZwDaAXNZ3_0IX2effq0yF5Yl-ajcWRA/viewform";
let instagram = "https://www.instagram.com/ed_space_ua/";
let facebook = "https://www.facebook.com/ed.space.ua/";

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
                  <img className="img1" src={Image1} alt="" />
                  <h3 className="article__img__title__1">
                    Marina Remezova
                    <br />
                    <br />
                    Experienced Teacher
                    <br />
                    <br />
                    Founder ED_SPACE
                  </h3>
                </div>
                <div>
                  <img className="img2" src={Image2} alt="" />
                  <h3 className="article__img__title__2">
                    Great Teacher
                    <br />
                    <br />
                    International Practitioner
                    <br />
                    <br />
                    English Language
                  </h3>
                </div>
                <div>
                  <img className="img3" src={Image3} alt="" />
                  <h3 className="article__img__title__3">
                    Business Teacher
                    <br />
                    <br />
                    Business Mentor
                    <br />
                    <br />
                    Gaming Lessons
                  </h3>
                </div>
                <div>
                  <img className="img4" src={Image4} alt="" />
                  <h3 className="article__img__title__4">
                    Art Teacher
                    <br />
                    <br />
                    Art Critic
                    <br />
                    <br />
                    Creative Projects
                  </h3>
                </div>
              </article>
            </div>
            <section className="main__zone">
              <div className="main__zone__1">
                <img src={flag} alt="" />
                <div className="main__zone__1__text__1">
                  <h2>The most popular language in the world</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Esse corporis quasi quas, ea repellat cumque iste optio
                    autem maiores ex repudiandae sint asperiores repellendus
                    vitae temporibus minus culpa eligendi praesentium aspernatur
                    nam. Eaque, maxime numquam. Provident nostrum tempore eos
                    voluptates qui ipsa adipisci aut itaque minus! Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Esse corporis
                    quasi quas, ea repellat cumque iste optio autem maiores ex
                    repudiandae sint asperiores repellendus vitae temporibus
                    minus culpa eligendi praesentium aspernatur nam. Eaque,
                    maxime numquam. Provident nostrum tempore eos voluptates qui
                    ipsa adipisci aut itaque minus!
                  </p>
                  <h3 className="main__zone__price">Всього 73 грн/год</h3>
                </div>
              </div>
              <div className="main__zone__2">
                <div>
                  <img src={calendar} alt="" />
                  <h2>Зручні дні</h2>
                </div>
                <div className="main__zone__2__text">
                  <h2>ПН-СР-ПТ або ВТ-ЧТ</h2>
                  <p>
                    Ми розуміємо що у дітей є багато справ як в школі, так і після школи.
                    Обирайте зручний графік самостійно
                  </p>
                  <h2>З 9:00 до 21:00</h2>
                </div>
                <div>
                  <img src={clock} alt="" />
                  <h2>Зручний час</h2>
                </div>
              </div>
              <div className="main__zone__3">
                <div>
                  <img src={test} alt="" />
                  <h2>Онлайн тест</h2>
                  <button>
                    <a href={testLink}>Пройти тест</a>
                  </button>
                </div>
                <div className="main__zone__3__text">
                  <h2>Рекордний час проходження тесту: 7 хв.</h2>
                  <p>
                    Для результативного навчання потрібно з самого початку
                    підібрати для студента комфортну групу. А як зрозуміти що
                    група вам підходить? Все просто - пройти тестування та
                    прийти на безкоштовне заняття. Заодно зможете оцінити наше
                    місцезнаходження та викладача
                  </p>
                  <h2>Повноцінне пробне заняття в групі</h2>
                </div>
                <div>
                  <img src={free} alt="" />
                  <h2>Безкоштовне заняття</h2>
                  <button>
                    <Link to="/contact#formSelect">Стати зіркою</Link>
                  </button>
                </div>
              </div>
              <div className="main__zone__4">
                <div>
                  <img src={calm} alt="" />
                  <h2>Keep Calm</h2>
                </div>
                <div className="main__zone__4__text">
                  <h2>Keep calm і все буде добре</h2>
                  <p>
                    Ми як ніхто інший розуміємо як іноді важко дитині
                    пристосуватися до нового середовища. Тому в нашій команді,
                    кожен вчитель виконує важливу місію старшого наставника та
                    мудрого керівника. Заняття в ігровій та комунікативній формі
                    сприяють швидкому засвоєнню пройденного матеріалу та
                    утворенню командного духу групи.
                  </p>
                  <h2>Це буде easy граматика</h2>
                </div>
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
          {/* eslint-disable-next-line */}
          <a href={instagram} className="instagram" />
          {/* eslint-disable-next-line */}
          <a href={facebook} className="facebook" />
        </footer>
      </section>
    );
  }
}

export default Main;
