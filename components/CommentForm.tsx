import React, { useCallback } from "react";
import { PostState } from "../@type/post";
import { Form, Input, Button } from "antd";
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

interface Props {
  post: PostState;
}
function CommentForm({ post }: Props) {
  const id = useSelector((state: RootState) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button type="primary" htmlType="submit">
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CommentForm;
