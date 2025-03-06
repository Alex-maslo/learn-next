"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { IUserWithTokens } from "@/models/IUserWithTokens";

export const loginUserAndGetTokens = async () => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 30, // optional, defaults to 60
    }),
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  });

  if (!res.ok) redirect("/error");

  const user: IUserWithTokens = await res.json();
  const cookieStore = await cookies();
  cookieStore.set("user", JSON.stringify(user));
};
