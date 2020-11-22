import React from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

type UsersType = {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
      street: string;
      suite: string;
      zipconde: string;
    };
    company: {
      bs: string;
      catchPhrase: string;
      name: string;
    };
  };
  name: string;
  email: string;
  id: number;
  phone: string;
  username: string;
  website: string;
};

interface Props {
  users: UsersType[];
}

function User({ users }: Props) {
  console.log(users);
  return (
    <>
      <div>유저의 정보</div>
      <ul>
        {users.map((user: UsersType) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log("res: ", res);
  return {
    props: { users },
  };
}
export default User;
