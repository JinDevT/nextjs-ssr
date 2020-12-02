import React, { useState, useCallback } from "react";
import Link from "next/link";

import { Form, Input, Button } from "antd";

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
			<div>
				<Button type="primary" htmlType="submit" loading={false}>
					로그인
				</Button>
				<Link href="/signup">
					<a>
						<Button>회원가입</Button>
					</a>
				</Link>
			</div>
		</Form>
	);
}

export default LoginForm;
