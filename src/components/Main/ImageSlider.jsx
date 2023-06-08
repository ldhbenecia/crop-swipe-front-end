import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./ImageSlider.scss";

import exImage from "../../assets/images/eximage.jpg";
import exImage2 from "../../assets/images/eximage2.jpg";
import exImage3 from "../../assets/images/eximage3.jpg";

const Image = styled.img`
  width: 100%;
  height: 50px;
  background: red;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <Slider {...settings}>
          <div>
            <Image className="ab" src={exImage} alt="exImage"></Image>
          </div>
          <div>
            <Image className="ab" src={exImage2} alt="exImage"></Image>
          </div>
          <div>
            <Image className="ab" src={exImage3} alt="exImage"></Image>
          </div>
        </Slider>
      </>
    );
  }
}
