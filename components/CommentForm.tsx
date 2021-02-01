import React, { useCallback, useEffect } from "react";
import { PostState } from "../@type/post";
import { Form, Input, Button } from "antd";
import useInput from "../hooks/useInput";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

interface Props {
  post: PostState;
}
function CommentForm({ post }: Props) {
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.user.me);
  const { addCommentDone, addCommentLoading } = useSelector((state: RootState) => state.post);
  const [commentText, onChangeCommentText, setCommentText] = useInput("");

  useEffect(() => {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id },
    });
  }, [commentText]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button
          style={{ position: "absolute", right: 0, bottom: -40, zIndex: 1 }}
          type="primary"
          htmlType="submit"
          loading={addCommentLoading}
        >
          등록
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CommentForm;
