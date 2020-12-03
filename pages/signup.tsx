import React, { useCallback, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from "../hooks/useInput";

import styled from "styled-components";

function Signup() {
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickName] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback(e => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);
  return (
    <Layout>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-id">닉네임</label>
          <br />
          <Input name="user-id" value={nickname} required onChange={onChangeNickName} />
        </div>
        <div>
          <label htmlFor="user-id">비밀번호</label>
          <br />
          <Input name="user-id" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-id">비밀번호확인</label>
          <br />
          <Input name="user-id" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            회원가입을 동의합니다.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하지 않았습니다.</ErrorMessage>}
        </div>
        <SignUpButton>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </SignUpButton>
      </Form>
    </Layout>
  );
}

const ErrorMessage = styled.div`
  color: red;
`;

const SignUpButton = styled.div`
  margin-top: 10px;
`;

export default Signup;
