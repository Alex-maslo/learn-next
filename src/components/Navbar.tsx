import React from "react";
import { loginUserAndGetTokens } from "@/service-action/loginUserAndGetTokens";
import Link from "next/link";
import SearchComponent from "@/components/SearchComponent";
import { cookies } from "next/headers";
import { exitUser } from "@/service-action/exitUser";

const Navbar = async () => {
  const cookieStore = await cookies();
  const isAuth = cookieStore.has("user");

  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-around">
      {isAuth ? (
        <>
          <SearchComponent />
          <Link className="btn btn-ghost text-xl" href={"/"}>
            Home
          </Link>
          <Link className="btn btn-ghost text-xl" href={"/recipes"}>
            Recipes
          </Link>

          <Link className="btn btn-ghost text-xl" href={"/users"}>
            Users
          </Link>

          <button onClick={exitUser} className="btn btn-secondary text-xl">
            Exit
          </button>
        </>
      ) : (
        <>
          <button
            onClick={loginUserAndGetTokens}
            className="btn btn-ghost text-xl"
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Navbar;
