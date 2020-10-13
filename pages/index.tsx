import Head from "next/head";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeBlock>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Mains>
        <h1>Next.js + Typesctipt</h1>
      </Mains>
    </HomeBlock>
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
