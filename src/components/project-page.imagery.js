import React from "react";
import Slider from "react-slick";

export default function ProjectPageImagery(props) {
  const imagery = props.imageryProp.map((image, index) => {
    return (
      <img
        key={btoa(index)}
        className="project-page-imagery"
        src={image}
        alt="project imagery"
      />
    );
  });

  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    adaptiveHeight: true,
  };

  return (
    <div className="page-media slick-container">
      <Slider {...settings}>{imagery}</Slider>
    </div>
  );
}
