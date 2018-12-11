import React, { Component } from "react";
import Image1 from "./images/img1.jpg";

class Hover1 extends Component {
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
          className="img1"
          src={Image1}
          alt=""
        />

        {this.state.isHovering && (
          <h3 className="article__img__title__1">
            Marina Remezova
            <br />
            <br />
            Experienced Teacher
            <br />
            <br />
            Founder ED_SPACE
          </h3>
        )}
      </div>
    );
  }
}

export default Hover1;
