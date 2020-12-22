import React from "react";
import { PostState, PostsState } from "../@type/post";
interface Props {
  post: any;
}
function PostCard({ post }: Props) {
  console.log("postssssss: ", post);
  return <div>postCard</div>;
}

export default PostCard;
