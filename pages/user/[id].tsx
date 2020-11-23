import React from "react";
import { GetServerSideProps } from "next";

function User() {
  return <div>다이나믹 라우팅</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("query: ", context.query);
  const { id } = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  console.log("users: ", user);
  return {
    props: { user },
  };
};

export default User;
