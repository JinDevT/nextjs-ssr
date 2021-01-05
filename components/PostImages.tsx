import React from "react";

interface PostImagesProps {
  images: { src: string }[];
}
function PostImages({ images }: PostImagesProps) {
  console.log(images);
  return <div>구현중</div>;
}

export default PostImages;
