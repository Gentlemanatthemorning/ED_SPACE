import React, { Component } from "react";
import Image2 from "./images/img2.jpg";

class Hover2 extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
      <div>
        <img
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
          className="img2"
          src={Image2}
          alt=""
        />

        {this.state.isHovering && (
          <h3 className="article__img__title__2">
            Great Teacher
            <br />
            <br />
            International Practitioner
            <br />
            <br />
            English Language
          </h3>
        )}
      </div>
    );
  }
}

export default Hover2;
