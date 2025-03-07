import Link from "next/link";
import { cookies } from "next/headers";
import { IUserWithTokens } from "@/models/IUserWithTokens";
import User from "@/components/User";
import { IData, IUser } from "@/models/IData";

const Users = async () => {
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
    const error = await res.json();

    return (
      <div>
        <h2> {error.message}</h2>
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
    <>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};

export default Users;
