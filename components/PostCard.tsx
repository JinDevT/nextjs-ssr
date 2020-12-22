import React from "react";
import { PostsState } from "../@type/post";
interface Props {
  post: PostsState;
}
function PostCard({ post }: Props) {
  console.log("postssssss: ", post);
  return <div>postCard</div>;
}

export default PostCard;
