import React, { useCallback, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import styled from "styled-components";
interface PostImagesProps {
  images: { src: string }[];
}

function PostImages({ images }: PostImagesProps) {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  if (images.length === 1) {
    return (
      <>
        {/* onClick은 보통 button, a tag에 많이 사용하는데
          img tag에 클릭이벤트를 할 때, 장애인이나 고령자분들에게
          '굳이 클릭할 필요가 없다'라고 표기할 때, role="presentation"을 사용해 주는게 좋다.

        */}
        <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
      </>
    );
  }

  if (images.length === 2) {
    return (
      <div style={{ display: "flex" }}>
        <img
          role="presentation"
          width="50%"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          width="50%"
          src={images[1].src}
          alt={images[0].src}
          onClick={onZoom}
        />
      </div>
    );
  }
  return (
    <>
      <PostImagesBlock>
        <img
          role="presentation"
          width="50%"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1} 개의 사진 더보기
        </div>
      </PostImagesBlock>
    </>
  );
}

const PostImagesBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f0f0f0;
`;
export default PostImages;
