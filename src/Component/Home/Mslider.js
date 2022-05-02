import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from "react-router-dom";




export default class Responsive extends Component {
  render() {
    var settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>

        <Slider {...settings} className="mt" >
        
          <div><NavLink to="/community">
            <div className="box-sli"  >
              <div className="name-res">
                <span className="mn"> MELIA</span> <br />
                Residence</div>
            </div>
            </NavLink>
          </div>
          <div>
          <div className="box-sli">
              <div className="name-res">
                <span className="mn"> MELIA</span> <br />
                Residence</div>
            </div>
          </div>
          <div>
          <div className="box-sli">
              <div className="name-res">
                <span className="mn"> MELIA</span> <br />
                Residence</div>
            </div>
          </div>
          <div>
          <div className="box-sli">
              <div className="name-res">
                <span className="mn"> MELIA</span> <br />
                Residence</div>
            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",color: "#523f3f00" ,position:"absolute", top:"-56", right:"50"  }}
      onClick={onClick}
    >
<svg width="92" height="56" viewBox="0 0 92 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.975 28H61.825" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M45.9 18.2L61.825 28L45.9 37.8" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
    
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#523f3f00" }}
      onClick={onClick}
    >
      <svg width="91" height="56" viewBox="0 0 91 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M61.425 28H29.575" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M45.5 18.2L29.575 28L45.5 37.8" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
  );
}