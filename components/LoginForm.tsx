import React, { useState, useCallback } from "react";
import Link from "next/link";

import { Form, Input, Button } from "antd";
import styled from "styled-components";

function LoginForm() {
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	const onChangeId = useCallback(e => {
		setId(e.target.value);
	}, []);

	const onChangePassword = useCallback(e => {
		setPassword(e.target.value);
	}, []);

	return (
		<Form>
			<div>
				<label htmlFor="user-id">아이디</label>
			</div>
			<div>
				<Input name="user-id" value={id} onChange={onChangeId} required />
			</div>
			<div>
				<label htmlFor="user-id">비밀번호</label>
			</div>
			<div>
				<Input name="user-password" value={password} onChange={onChangePassword} required />
			</div>

			{/* 객체로 스타일을 주면 리렌더링 됨 {} === {} -> false */}
			<ButtonWrapper>
				<Button type="primary" htmlType="submit" loading={false}>
					로그인
				</Button>
				<Link href="/signup">
					<a>
						<Button>회원가입</Button>
					</a>
				</Link>
			</ButtonWrapper>
		</Form>
	);
}

const ButtonWrapper = styled.div`
	margin-top: 10px;
`;

export default LoginForm;
