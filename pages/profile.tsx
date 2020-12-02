import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

// 서버를 실행한 후에 추가한 Pages는 인식을 못할 수도 있기 때문에
// 서버를 종료하고 다시 시작하자.
function Profile() {
  return (
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <Layout>프로필 페이지</Layout>
    </>
  );
}

export default Profile;
