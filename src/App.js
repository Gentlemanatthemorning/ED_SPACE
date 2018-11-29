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
                      Great Teacher
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
                      Gameing Lessons
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
                  комунікативна методика. Ми також вирішили доповнити курс
                  творчими проектами. І таким чином зробити його ще кращим,
                  різноманітнішим та ефективнішим. Таким чином ми сворюємо
                  реальну коммунікативну ситацію, що допомагає закріпити набуті
                  знання. Раз на місяць ми маємо урок, під час якого студенти
                  створюватимуть власні творчі проекти. Ми будемо ліпити з
                  глини, створювати сімейне дерево, знімати фільми та багато
                  іншого. І все це звичайно англійською. Тема урока відповідає
                  матеріалу, який ми вивчали протягом місяця.
                </p>
                <p>
                  6 осіб - це кількість людей для волейбольної команди або для
                  найбільшої групи в #ED_<span>SPACE</span>.<br></br>Такою тусовкою можна пограти у
                  різноманітні ігри, поставити сценки, створити проект та
                  ефективно вчити англійську мову. А комфортну атмосферу на
                  уроці створить викладач. Який приділить кожному достатньо
                  своєї уваги. Та направить на вірний шлях. Працюючи у групі,
                  можна краще змоделювати реальну життєву ситуацію. Так ваша
                  дитина зможе навчитись справді говорити англійською, а не лише
                  зубрити правила.
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
