import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from "react-router-dom";
import {useState , useEffect} from "react";
import Slide from 'react-reveal/Slide';
import Axios from 'axios'





const Mslider = () => {
  
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
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
     
          }
        }
      ]
    };

    // const [data, setData] = useState([]);

  //   const arrslider = data.map((data, index) => {
  //     return (
        
  //           <span className="mn"> {data.name}</span> 
  //     )
  // })
  const [data, setData] = useState([]);
  useEffect(() => {
      Axios.get("http://api.mayaameenbasha.com/public/api/communities")
      .then(res =>{
           console.log("getting from ;;;" ,res.data)
           setData(res.data)
  }).catch(err => console.log(err))
  }, []);
    return (
      <div>

        <Slider {...settings} className="mt" >
        
          <div>
            <NavLink to="/community">
          <Slide right >
            <div className="box-sli mel"  >
              <div className="name-res">
                <span className="mn"> MELIA</span> <br />
                Residence</div>
            </div>
            </Slide>
            </NavLink>
          </div>
          <div>
            <NavLink to="/community">
          <Slide right >
            <div className="box-sli car"  >
              <div className="name-res">
                <span className="mn"> CARMEN</span> <br />
                Residence</div>
            </div>
            </Slide>
            </NavLink>
          </div>
          <div>
            <NavLink to="/community">
          <Slide right >
            <div className="box-sli lana"  >
              <div className="name-res">
                <span className="mn"> LANA</span> <br />
                Residence</div>
            </div>
            </Slide>
            </NavLink>
          </div>
          <div>
            <NavLink to="/community">
          <Slide right cascade>
            <div className="box-sli orc"  >
              <div className="name-res">
                <span className="mn"> ORCHID</span> <br />
                Residence</div>
            </div>
            </Slide>
            </NavLink>
          </div>

          
        </Slider>
      </div>
    );
  
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",color: "#523f3f00" ,position:"absolute", top:"-56", right:"50"  }}
      onClick={onClick}
    >
<svg className="svgs" viewBox="0 0 92 56" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <svg className="svgs" viewBox="0 0 91 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M61.425 28H29.575" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M45.5 18.2L29.575 28L45.5 37.8" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
  );
}
export default Mslider;
