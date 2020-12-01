import React from "react";
import Link from "next/link";
import { Menu } from "antd";

interface Props {
	children: React.ReactNode;
}

// 일부애들이 공통인 애들
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
					<Link href="/signup">
						<a>회원가입</a>
					</Link>
				</Menu.Item>
			</Menu>
			{children}
		</div>
	);
}

export default Layout;
