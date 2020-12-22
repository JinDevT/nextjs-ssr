import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../reducers";

import Layout from "../components/Layout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

import styled from "styled-components";
// pages folder 안에 파일들을 코드 스플리팅된 코드로 만들어진다.
// pages 는 무조건 pages

const Home = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const { mainPosts } = useSelector((state: RootState) => state.post);
  console.log("post: ", mainPosts);
  return (
    <Layout>
      <HomeBlock>
        <Main>
          {isLoggedIn && <PostForm />}
          {mainPosts.map(post => (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </Main>
      </HomeBlock>
    </Layout>
  );
};

const HomeBlock = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }
`;

export default Home;
