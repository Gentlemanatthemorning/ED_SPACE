import React from "react";
import SideBar from "../sidebar.js";


import Img1 from "./article/img1.png";
import Img2 from "./article/img2.png";
import Img3 from "./article/img3.png";
import Img4 from "./article/img4.png";
import Img5 from "./article/img5.png";
import Img6 from "./article/img6.png";
import Img7 from "./article/img7.png";

let instagram = "https://www.instagram.com/ed_space_ua/";
let facebook = "https://www.facebook.com/ed.space.ua/";

class Lessons extends React.Component {
  render() {
    return (
      <div id="App">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap">
          <section>
            <div className="main__logo">
              <div className="container">
                <div className="parallax__2" />
                <div className="container__fill__2">
                  <div className="tags__zone">
                    <div className="tags__zone__1">
                      <div className="tags__zone__1__box__1">
                        <img src={Img1} alt="" />
                        <h2>Тільки жива комунікація</h2>
                        <p>
                          Ідея наших курсів полягає в тому щоб навчити Вас
                          сучасній англійскій граматиці та лексиці і створити
                          реальні життеві ситуації для її використання. В цьому
                          нам допомагає комунікативна методика.
                        </p>
                      </div>
                      <div className="tags__zone__1__box__2">
                        <img src={Img2} alt="" />
                        <h2>Вільне спілкування з викладачем</h2>
                        <p>
                          На уроці викладач зможе в повній мірі приділити
                          кожному достатньо своєї уваги. Направити на вірний
                          шлях. Допомогти в пошуках правильної відповіді на
                          поставлене запитання. Також працюючи у групі, можна
                          краще змоделювати реальну життєву ситуацію.
                        </p>
                      </div>
                      <div className="tags__zone__1__box__3">
                        <img src={Img3} alt="" />
                        <h2>Невеликі групи занять</h2>
                        <p>
                          6 осіб - це кількість людей для волейбольної команди
                          або для найбільшої групи в #ED_SPACE. Такою тусовкою
                          можна пограти у різноманітні ігри, поставити сценки,
                          створити проект та вчити англійську мову.
                        </p>
                      </div>
                    </div>
                    <div className="tags__zone__2">
                      <div className="tags__zone__2__box__1">
                        <img src={Img4} alt="" />
                        <h2>Цікаві креативні заняття</h2>
                        <p>
                          Ми також вирішили доповнити курс творчими проектами.
                          Раз на місяць ми маємо урок, під час якого учні
                          створюватимуть власні проекти, такі як: ліпка з глини,
                          створення сімейного дерева, зйомка фільмів та багато
                          іншого.
                        </p>
                      </div>
                      <div className="tags__zone__2__box__2">
                        <img src={Img5} alt="" />
                        <h2>Ніяких нудних книжок</h2>
                        <p>
                          Наші викладачі відібрали найкращі матеріали з вже
                          існючих книг. Пропустили неважливе, та закцентували
                          увагу на потрібному. Жодної непотрібної вправи. Лише
                          якісний «контент». Більше ніякого «London is the
                          capital of Great Britain»!
                        </p>
                      </div>
                      <div className="tags__zone__2__box__3">
                        <img src={Img6} alt="" />
                        <h2>Регулярний зворотній зв’язок</h2>
                        <p>
                          Регулярний зворотній зв’язок - важко переоцінити, аби
                          мати розуміння своїх успіхів для ефективного навчання.
                          Ви будете розуміти, на що ми робимо акценти при роботі
                          з вашою дитиною. Таким чином, ви постійно залучені до
                          процесу освіти дитини, матимете розуміння прогресу у
                          навчанні та її емоційного стану.
                        </p>
                      </div>
                    </div>
                    <div className="tags__zone__3">
                      <div className="tags__zone__3__box__1">
                        <img src={Img7} alt="" />
                        <h2>Постійна онлайн підтримка</h2>
                        <p>
                          Всі учбові матеріали в постійному онлайн доступі.
                          Можна їх скачати, перечитати, розібрати спокійно
                          вдома. При виникненні питань можна написати до
                          групового чату і отримати допомогу онлайн від колег з
                          групи або від викладача.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text__zone">
                    <h2>
                      <span>
                        І все це звичайно англійською!
                        <br />
                      </span>
                      Тема урока відповідає матеріалу, який ми вивчали протягом
                      місяця.
                      <br />
                      Так ваша дитина зможе навчитись справді говорити
                      англійською, а не лише зубрити правила.
                    </h2>
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

export default Lessons;
