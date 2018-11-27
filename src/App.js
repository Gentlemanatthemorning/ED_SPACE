import React from "react";
import { Link } from "react-router-dom";

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
                    <h3 class="article__img__title">
                      Great Teacher
                      <br />
                      Founder ED_SPACE
                    </h3>
                  </div>
                </div>
                <div className="img2">
                  <div>
                    <h3 class="article__img__title">
                      Great Teacher
                      <br />
                      English Language
                    </h3>
                  </div>
                </div>
                <div className="img3">
                  <div>
                    <h3 class="article__img__title">
                      Great Teacher
                      <br />
                      Gameing Lessons
                    </h3>
                  </div>
                </div>
                <div className="img4">
                  <div>
                    <h3 class="article__img__title">
                      Great Teacher
                      <br />
                      Art Projects
                    </h3>
                  </div>
                </div>
                <div className="img5">
                  <div>
                    <h3 class="article__img__title">
                      Great Teacher
                      <br />
                      Young Business
                    </h3>
                  </div>
                </div>
              </article>
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
