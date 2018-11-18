import React from "react";
import ReactDOM from "react-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <p>&copy; Coderslab 2018</p>
      </footer>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Footer />, document.getElementById("app"));
});

export default Footer;
