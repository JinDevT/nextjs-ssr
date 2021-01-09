import React, { useState } from "react";
import Slick from "react-slick";

import styled from "styled-components";
interface Props {
  images: { src: string }[];
  onClose: () => void;
}
function ImagesZoom({ images, onClose }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <ImagesZoomBlock>
      <Header>
        <h1>상세 이미지</h1>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initailSlide={0}
            afterChange={slide => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToshow={1}
            slidesToScroll={1}
          >
            {images.map(v => (
              <ImageWrapper key={v.src}>
                <img src={v.src} alt={v.src} />
              </ImageWrapper>
            ))}
          </Slick>
        </div>
      </SlickWrapper>
    </ImagesZoomBlock>
  );
}

// 함수를 백틱 두개로도 호출 가능. 즉 div 함수를 호출하는 것 이다.
const ImagesZoomBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5000;
`;

const Header = styled.header`
  position: relative;
  height: 44px;
  padding: 0;
  background-color: white;
  text-align: center;

  & > h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;

const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background-color: #090909;
`;

const ImageWrapper = styled.div`
  padding: 32px;
  text-align: center;

  & > img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

const Indicator = styled.div`
  text-align: center;

  & > div {
    width: 75px;
    height: 38px;
    line-height: 38px;
    border-radius: 15px;
    background-color: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

export default ImagesZoom;
