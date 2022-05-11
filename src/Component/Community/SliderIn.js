import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class SliderM extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      fade:true
      
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div >
            <div className="firsti si1"></div>
          </div>
          <div>
          <div className="firsti si2"></div>
          </div>
          <div >
            <div className="firsti si3"></div>
          </div>
          <div>
          <div className="firsti si4"></div>
          </div>
         


        </Slider>
      </div>
    );
  }
}