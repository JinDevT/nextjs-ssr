import React, { useState } from "react";
import Slick from "react-slick";

interface Props {
  images: { src: string }[];
  onClose: () => void;
}
function ImageZoom({ images, onClose }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div>
      <header>
        <h1>상세 이미지</h1>
        <button onClick={onClose}>X</button>
      </header>
      <div>
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
              <div key={v.src}>
                <img src={v.src} alt={v.src} />
              </div>
            ))}
          </Slick>
        </div>
      </div>
    </div>
  );
}

export default ImageZoom;
