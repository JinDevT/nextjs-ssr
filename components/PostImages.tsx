import React, { useCallback, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import ImagesZoom from "./ImagesZoom";

import styled from "styled-components";
interface PostImagesProps {
  images: { src: string }[];
}

function PostImages({ images }: PostImagesProps) {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, [showImagesZoom]);

  const onCloseZoom = useCallback(() => {
    setShowImagesZoom(false);
  }, [showImagesZoom]);

  if (images.length === 1) {
    return (
      <>
        {/* onClick은 보통 button, a tag에 많이 사용하는데
          img tag에 클릭이벤트를 할 때, 장애인이나 고령자분들에게
          '굳이 클릭할 필요가 없다'라고 표기할 때, role="presentation"을 사용해 주는게 좋다.

        */}
        <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onCloseZoom} />}
      </>
    );
  }

  if (images.length === 2) {
    return (
      <TwoInImasgesBlock>
        <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <img role="presentation" src={images[1].src} alt={images[0].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onCloseZoom} />}
      </TwoInImasgesBlock>
    );
  }
  return (
    <>
      <PostImagesBlock>
        <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <ImagePlusBlock role="presentation" onClick={onZoom}>
          <PlusOutlined />
          <br />
          {images.length - 1} 개의 사진 더보기
        </ImagePlusBlock>
      </PostImagesBlock>
      {showImagesZoom && <ImagesZoom images={images} onClose={onCloseZoom} />}
    </>
  );
}

const PostImagesBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f0f0f0;

  img {
    width: 50%;
  }
`;

const TwoInImasgesBlock = styled.div`
  display: flex;
`;

const ImagePlusBlock = styled.div`
  display: inline-block;
  width: 50%;
  text-align: center;
  vertical-align: middle;

  img {
    width: 50%;
  }
`;
export default PostImages;
