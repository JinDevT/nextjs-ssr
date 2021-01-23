import React, { useCallback, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../reducers";

import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { addPostAction } from "../reducers/post";
import useInput from "../hooks/useInput";

function PostForm() {
  const { imagePaths, addPostDone } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef<HTMLInputElement>(null);
  const [text, onChangeText, setText] = useInput("");

  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    dispatch(addPostAction(text));
  }, [text]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <PostFormBlock encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map(v => (
          <ImagBox>
            <img src={v} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </ImagBox>
        ))}
      </div>
    </PostFormBlock>
  );
}

const PostFormBlock = styled(Form)`
  margin: 10px 0 20px;
`;

const ImagBox = styled.div`
  display: inline-block;
  img {
    width: 200px;
  }
`;

export default PostForm;
