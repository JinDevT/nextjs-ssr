import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
import { RootState } from "../reducers";

interface Props {
  children: React.ReactNode;
}

// 일부애들이 공통인 애들
// 반응형: 가로 -> 세로, 모바일 -> 태블릿 -> 데스크탑 순서로 하는게 편함.
function Layout({ children }: Props) {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  console.log("is: ", isLoggedIn);

  // 리렌더링 : 리렌더링은 return 부분이 리렌더링 되는게 아니라
  // 이전 컴포넌트 virtual dom과 지금 컴포넌트 virtual dom과 비교해서 달라진 부분만 다시 리레더링 된다
  // 어쩔 수 없이 인라인으로 넣어야할 때는 useMemo를 사용하자.
  const style = useMemo(() => ({ marginTop: 10 }), []);
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
          <Input.Search style={style} enterButton />
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
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
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

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

export default Layout;
