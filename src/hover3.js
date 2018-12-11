import React, { Component } from "react";
import Image3 from "./images/img3.jpg";

class Hover3 extends Component {
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
          className="img3"
          src={Image3}
          alt=""
        />

        {this.state.isHovering && (
          <h3 className="article__img__title__3">
            Business Teacher
            <br />
            <br />
            Business Mentor
            <br />
            <br />
            Gaming Lessons
          </h3>
        )}
      </div>
    );
  }
}

export default Hover3;
