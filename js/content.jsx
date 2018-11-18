import React from "react";
import ReactDOM from "react-dom";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <div className="main__logo">
          <div className="container">
            <h1 className="main__logo__title">
              #ED_<span>SPACE</span>
            </h1>
          </div>
        </div>
      </section>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Content />, document.getElementById("app"));
});

export default Content;
