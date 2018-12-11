import React, { Component } from "react";
import Image4 from "./images/img4.jpg";

class Hover4 extends Component {
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
          className="img4"
          src={Image4}
          alt=""
        />

        {this.state.isHovering && (
          <h3 className="article__img__title__4">
            Art Teacher
            <br />
            <br />
            Art Critic
            <br />
            <br />
            Creative Projects
          </h3>
        )}
      </div>
    );
  }
}

export default Hover4;
