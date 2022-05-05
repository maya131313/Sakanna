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
            <div className="first s1"></div>
          </div>
          <div>
          <div className="first s2"></div>
          </div>
          <div >
            <div className="first s3"></div>
          </div>
          <div>
          <div className="first s4"></div>
          </div>
          <div >
            <div className="first s5"></div>
          </div>
          <div>
          <div className="first s6"></div>
          </div>
          <div >
            <div className="first s7"></div>
          </div>
          <div>
          <div className="first s8"></div>
          </div>

        </Slider>
      </div>
    );
  }
}