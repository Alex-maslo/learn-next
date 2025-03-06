import React from "react";
import { loginUserAndGetTokens } from "@/service-action/loginUserAndGetTokens";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-around">
      <button onClick={loginUserAndGetTokens} className="btn btn-ghost text-xl">
        Login
      </button>

      <Link className="btn btn-ghost text-xl" href={"/users"}>
        Users
      </Link>
    </div>
  );
};

export default Navbar;
