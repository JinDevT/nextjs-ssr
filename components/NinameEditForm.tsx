import React from "react";
import { Form, Input } from "antd";
import styled from "styled-components";
import { colors } from "../styles/theme";

function NickNameEditForm() {
  return (
    <Form>
      <InputBox addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
}

const InputBox = styled(Input.Search)`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid ${colors.b070};
`;
export default NickNameEditForm;
