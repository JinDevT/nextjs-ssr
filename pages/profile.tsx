import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import NickNameEditForm from "../components/NinameEditForm";
import FollowList from "../components/FollowList";

// 서버를 실행한 후에 추가한 Pages는 인식을 못할 수도 있기 때문에
// 서버를 종료하고 다시 시작하자.

function Profile() {
  const followerList = [{ nickname: "jintae" }, { nickname: "max" }];
  const followingList = [{ nickname: "jintae" }, { nickname: "max" }];
  return (
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <Layout>
        <NickNameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </Layout>
    </>
  );
}

export default Profile;
