import React from "react";
import { IData, IUser } from "@/models/IData";
import User from "@/components/User";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const result = await searchParams;

  const query = result.query;

  if (query && typeof query === "string" && /^\d+$/.test(query)) {
    const res = await fetch(`https://dummyjson.com/users/${query}`, {});

    if (!res.ok) {
      const errorData = await res.json();
      return (
        <h2 className="text-2xl font-semibold text-red-500">
          {errorData.message}
        </h2>
      );
    }

    const user: IUser = await res.json();
    return <User user={user} />;
  }

  const res = await fetch(
    `https://dummyjson.com/users/search?q=${result.query}`,
  );

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

export default SearchPage;
