import React from "react";

interface Props {
  post: any;
}
function PostCard({ post }: Props) {
  console.log("post: ", post);
  return <div>postCard</div>;
}

export default PostCard;
