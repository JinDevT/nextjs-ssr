import React, { useCallback, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../reducers";

import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { addPostAction } from "../reducers/post";

function PostForm() {
  const { imagePaths } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const onChangeText = useCallback(e => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback(e => {
    dispatch(addPostAction);
    setText("");
  }, []);
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
