import React from "react";
import SideBar from "../sidebar.js";

import star from "../contact/images/stars.png";

let instagram = "https://www.instagram.com/ed_space_ua/";
let facebook = "https://www.facebook.com/ed.space.ua/";

class Contact extends React.Component {
  render() {
    return (
      <div id="App">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap">
          <section>
            <div className="main__logo">
              <div className="container">
                <div className="parallax__4" />
                <div className="container__fill__4" id="formSelect">
                  <h2>
                    <span>Заповни форму</span> та отримай можливість прийняти
                    участь в <span>космічному </span>
                    занятті в нашому освітньому просторі
                  </h2>
                  <div className="form__container">
                    <form className="form">
                      <div className="form__left">
                        <div className="form__row">
                          <label htmlFor="name" className="visuallyhidden">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form__control"
                            id="name"
                            name="name"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form__row">
                          <label htmlFor="email" className="visuallyhidden">
                            E-mail
                          </label>
                          <input
                            type="email"
                            className="form__control"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                          />
                        </div>
                        <div className="form__row">
                          <label htmlFor="msg" className="visuallyhidden">
                            Text Us
                          </label>
                          <textarea
                            className="form__control"
                            id="msg"
                            name="msg"
                            placeholder="Text Us"
                          />
                        </div>
                        <h2>
                          <span>Просто вибери</span> заняття на яке хочеш
                          записатись!
                        </h2>
                        <label className="container__round">
                          Безкоштовне заняття
                          <input type="radio" name="radio" />
                          <span className="checkmark" />
                        </label>
                        <label className="container__round">
                          Регулярні заняття
                          <input type="radio" name="radio" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="form__right">
                        <div className="form__img">
                          <img src={star} alt="" />
                        </div>
                        <div className="form__row">
                          <label className="form__checkbox">
                            <input
                              type="checkbox"
                              id="agree"
                              name="regulations"
                            />
                            <span>I agree with company's privacy policy.</span>
                          </label>
                        </div>
                        <div className="form__row">
                          <button type="submit" className="form__submit">
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
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

export default Contact;
