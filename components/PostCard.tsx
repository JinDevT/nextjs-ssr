import React from "react";
import { PostState } from "../@type/post";
interface Props {
  post: PostState;
}
function PostCard({ post }: Props) {
  console.log("post: ", post);
  return <div>postCard</div>;
}

export default PostCard;
