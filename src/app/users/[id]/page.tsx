import React from "react";
import { cookies } from "next/headers";
import { IUserWithTokens } from "@/models/IUserWithTokens";

type Params = Promise<{ id: string }>;

const SingleUserPage = async (props: { params: Params }) => {
  const { id } = await props.params;

  const cookieStore = await cookies();
  const value = cookieStore.get("user")?.value;
  if (!value) return null;

  const user: IUserWithTokens = JSON.parse(value);

  /* providing access token in bearer */
  const res = await fetch(`https://dummyjson.com/auth/users/${id}`, {
    method: "GET" /* or POST/PUT/PATCH/DELETE */,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);

  return <div>{id}</div>;
};

export default SingleUserPage;
