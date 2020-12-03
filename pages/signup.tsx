import React, { useCallback, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Form, Input } from "antd";
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

  const onSubmit = useCallback(() => {}, []);
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
      </Form>
    </Layout>
  );
}

const ErrorMessage = styled.div`
  color: red;
`;

export default Signup;
