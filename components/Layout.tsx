import React from "react";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";

interface Props {
	children: React.ReactNode;
}

// 일부애들이 공통인 애들
// 반응형: 가로 -> 세로, 모바일 -> 태블릿 -> 데스크탑 순서로 하는게 편함.
function Layout({ children }: Props) {
	return (
		<div>
			<Menu mode="horizontal">
				<Menu.Item>
					<Link href="/">
						<a>홈</a>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/profile">
						<a>프로필</a>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Input.Search style={{ verticalAlign: "middle" }} />
				</Menu.Item>
				<Menu.Item>
					<Link href="/signup">
						<a>회원가입</a>
					</Link>
				</Menu.Item>
			</Menu>
			{/* gutter: 컬럼사이의 간격 */}
			<Row gutter={8}>
				{/* 24등분 한다고 생각하면 됨. 24로 나눈이유: 등분하기 좋은 숫자. */}
				<Col xs={24} md={6}>
					왼쪽메뉴
				</Col>
				<Col xs={24} md={12}>
					{children}
				</Col>
				<Col xs={24} md={6}>
					{/* target="_blank" 를 쓸 때 보안을 위해 rel="noreferrer noopener" 꼭 적어준다*/}
					<a href="https://jindev-t.tistory.com/" target="_blank" rel="noreferrer noopener">
						블로그
					</a>
				</Col>
			</Row>
		</div>
	);
}

export default Layout;
