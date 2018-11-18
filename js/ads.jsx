import React from "react";
import ReactDOM from "react-dom";

class Ads extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="fill__page">
        <div className="fill__page__box" />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Ads />, document.getElementById("app"));
});

export default Ads;
