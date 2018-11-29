import React, { Component } from "react";

class CardView extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!this.props.matched && !this.props.imageUp) {
      this.props.onClick(this.props.id, this.props.image);
    }
  }

  render() {
    let imPath = "./images/";
    if (this.props.imageUp) {
      imPath = imPath + this.props.image + ".jpg";
    } else {
      imPath = imPath + "back.jpg";
    }

    let className = "card";
    if (this.props.matched) {
      className = className + " matched";
    }

    return (
      <img
        className={className}
        src={require(`${imPath}`)}
        alt=""
        onClick={this.onClick}
      />
    );
  }
}

export default CardView;
