import React from "react";
import {FaAngleRight} from "react-icons/fa";
import {FaAngleLeft} from "react-icons/fa";

import Slider from "react-slick";


const SamplePrevArrow = (props) => {
    const { className, onClick } = props
    return (
        <div 
            className={className}
            onClick={onClick}>
            <FaAngleLeft className="carouselArrow"
                color="#000"
                size="2x"
            />
        </div>
    );
}

const SampleNextArrow = (props) => {
    const { className, onClick } = props
    return (
        <div 
            className={className}
            onClick={onClick}>
            <FaAngleRight
                color="#000"
                size="2x"
            />
        </div>
    );
}

function getImages(images_list){
    let result = [];
    result.push(
    <img className="image img-fluid" 
         key="primary" 
         src={images_list[0].PrimaryImage[0].image}
         alt={images_list[0].PrimaryImage[0].image}>
    </img>)
  for(let i=0;i<images_list[0].imageCount-1;i++){
    result.push(
      <img className="image carousel-images" 
           key={i} 
           src={images_list[0].AlternateImages[i].image} 
           alt={images_list[0].AlternateImages[i].image}>
      </img>);
  }
  return result
}

function ReactSlickDemo(props){
  if (!props.images || props.images === undefined) {
      return null;
  } else {
    var image_list = getImages(props.images)
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: -1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="container">
        <Slider {...settings}>
            {image_list}
        </Slider>
      </div>
    );
  }
}
export default ReactSlickDemo