import React from "react";
import { GetServerSideProps } from "next";

import { UsersType, UserType } from "../@type/user";

interface Props {
  users: UsersType;
}

function Users({ users }: Props) {
  // getServerSideProps에서 return한 users
  console.log(users);
  return (
    <>
      <div>유저의 정보</div>
      <ul>
        {users.slice(0, 3).map((user: UserType) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users },
  };
};
export default Users;
