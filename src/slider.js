import React from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import Image1 from "./images/slider/slide1.jpg";
import Image2 from "./images/slider/slide2.jpg";
import Image3 from "./images/slider/slide3.jpg";
import Image4 from "./images/slider/slide4.jpg";
import Image5 from "./images/slider/slide5.jpg";
import Image6 from "./images/slider/slide6.jpg";
import Image7 from "./images/slider/slide7.jpg";


class Slider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <RBCarousel
          animation={true}
          autoplay={this.state.autoplay}
          slideshowSpeed={2000}
          defaultActiveIndex={0}
          onSelect={this.onSelect}
        >
          <div style={{ height: 360 }}>
            <img
              style={{ width: "360px", height: "360px", backgroundSize: "contain", justifyContent: "center" }}
              src={Image1}
              alt=""
            />
            <div className="carousel-caption"></div>
          </div>
          <div style={{ height: 360 }}>
            <img
              style={{ width: "360px", height: "360px" }}
              src={Image2}
              alt=""
            />
            <div className="carousel-caption"></div>
          </div>
          <div style={{ height: 360 }}>
            <img
              style={{ width: "360px", height: "360px" }}
              src={Image3}
              alt=""
            />
            <div className="carousel-caption"></div>
          </div>
          <div style={{ height: 360 }}>
            <img
              style={{ width: "360px", height: "360px" }}
              src={Image4}
              alt=""
            />
            <div className="carousel-caption"></div>
          </div>
          <div style={{ height: 360 }}>
            <img
              style={{ width: "360px", height: "360px" }}
              src={Image5}
              alt=""
            />
            <div className="carousel-caption"></div>
          </div>
          <div style={{ height: 360 }}>
            <img
              style={{ width: "360px", height: "360px" }}
              src={Image6}
              alt=""
            />
            <div className="carousel-caption"></div>
          </div>
          <div style={{ height: 360 }}>
            <img
              style={{ width: "360px", height: "360px" }}
              src={Image7}
              alt=""
            />
            <div className="carousel-caption"></div>
          </div>
        </RBCarousel>
      </div>
    );
  }
}

export default Slider;
