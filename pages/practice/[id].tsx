import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

function User({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Dynamic routing</h1>
      <br />
      <div>
        <p>
          {"이름:"} {user.name}
        </p>
        <p>
          {"주소:"} {user.address.city}
        </p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
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
