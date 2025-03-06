import React from "react";
import { IData, IUser } from "@/models/IData";
import Link from "next/link";
import { cookies } from "next/headers";
import { IUserWithTokens } from "@/models/IUserWithTokens";

const Page = async () => {
  const cookieStore = await cookies();
  const value = cookieStore.get("user")?.value;
  if (!value) return null;

  const user: IUserWithTokens = JSON.parse(value);

  const res = await fetch("https://dummyjson.com/auth/users", {
    method: "GET" /* or POST/PUT/PATCH/DELETE */,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    return (
      <div>
        <h2> {res.statusText}</h2>
        <Link className={`btn btn-accent`} href="/">
          Reset
        </Link>
      </div>
    );
  }

  const data: IData = await res.json();

  const users: IUser[] = data.users;

  if (!users) {
    return <div className="flex justify-center p-5">No users found</div>;
  }
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.firstName}</div>
      ))}
    </div>
  );
};

export default Page;
