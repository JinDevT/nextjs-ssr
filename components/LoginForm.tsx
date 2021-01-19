import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { loginRequestAction } from "../reducers/user";

import useInput from "../hooks/useInput";

import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { RootState } from "../reducers";

function LoginForm() {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state: RootState) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);
  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">이메일</label>
      </div>
      <div>
        <Input name="user-id" type="email" value={email} onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor="user-id">비밀번호</label>
      </div>
      <div>
        <Input
          type="password"
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>

      {/* 객체로 스타일을 주면 리렌더링 됨 {} === {} -> false */}
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
}

const FormWrapper = styled(Form)`
  margin: 20px 12px;
  padding: 10px;
  border: 1px solid #f0f0f0;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

export default LoginForm;
