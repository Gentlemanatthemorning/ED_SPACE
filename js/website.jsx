import React from "react";
import ReactDOM from "react-dom";
require("../scss/style.scss");

import Content from "./content.jsx";
import Ads from "./ads.jsx";
import Footer from "./footer.jsx";
import Header from "./header.jsx";

class WebsiteTemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <article>{this.props.children}</article>;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <WebsiteTemplate>
      <Header />
      <Content />
      <Ads />
      <Footer />
    </WebsiteTemplate>,
    document.getElementById("app")
  );
});

export default WebsiteTemplate;
