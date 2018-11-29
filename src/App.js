import React from "react";
import { Link } from "react-router-dom";
import Slider from "./slider";

class Main extends React.Component {
  render() {
    return (
      <section>
        <div className="main__logo">
          <div className="container">
            <div className="parallax" />
            <div className="container__fill">
              <article>
                <div className="img1">
                  <div>
                    <h3 className="article__img__title">
                      Marina Remezova
                      <br />
                      Founder ED_SPACE
                    </h3>
                  </div>
                </div>
                <div className="img2">
                  <div>
                    <h3 className="article__img__title">
                      Great Teacher
                      <br />
                      English Language
                    </h3>
                  </div>
                </div>
                <div className="img3">
                  <div>
                    <h3 className="article__img__title">
                      Great Teacher
                      <br />
                      Gaming Lessons
                    </h3>
                  </div>
                </div>
                <div className="img4">
                  <div>
                    <h3 className="article__img__title">
                      Great Teacher
                      <br />
                      Art Projects
                    </h3>
                  </div>
                </div>
                <div className="img5">
                  <div>
                    <h3 className="article__img__title">
                      Great Teacher
                      <br />
                      Young Business
                    </h3>
                  </div>
                </div>
              </article>
              <div className="slide-zone">
                <Slider />
                <p>
                  Ідея наших курсів полягає в тому щоб навчити Вас сучасній
                  англійскій граматиці та лексиці і створити реальні життеві
                  ситуації для її використання. В цьому нам допомагає
                  комунікативна методика.
                  <br />
                  На уроці викладач зможе в повній мірі приділити кожному
                  достатньо своєї уваги. Направити на вірний шлях. Допомогти в
                  пошуках правильної відповіді на поставлене запитання. Також
                  працюючи у групі, можна краще змоделювати реальну життєву
                  ситуацію.
                  <br />
                  <br />
                  <span>
                    І все це звичайно англійською. Тема урока відповідає
                    матеріалу, який ми вивчали протягом місяця.
                  </span>
                </p>
                <p>
                  <span>
                    6 осіб - це кількість людей для волейбольної команди або для
                    найбільшої групи в #ED_SPACE
                  </span>
                  .<br />
                  <br />
                  Такою тусовкою можна пограти у різноманітні ігри, поставити
                  сценки, створити проект та вчити англійську мову.<br />Ми також
                  вирішили доповнити курс творчими проектами. Раз на місяць ми
                  маємо урок, під час якого учні створюватимуть власні проекти,
                  такі як: ліпка з глини, створення сімейного дерева, зйомка
                  фільмів та багато іншого.
                  <br />
                  І таким чином зробити заняття ще кращими, різноманітнішими та
                  ефективнішими. Так ми сворюємо реальну коммунікативну
                  ситацію, що допомагає закріпити набуті знання.
                  <br />
                  Так ваша дитина зможе навчитись справді говорити англійською,
                  а не лише зубрити правила.
                </p>
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

export default Main;
