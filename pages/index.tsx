import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import styled from "styled-components";

// pages folder 안에 파일들을 코드 스플리팅된 코드로 만들어진다.
// pages 는 무조건 pages

const Home = () => {
	return (
		<Layout>
			<HomeBlock>
				<Mains>
					<h1>Next.js + Typesctipt</h1>
				</Mains>
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

const Mains = styled.main`
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
