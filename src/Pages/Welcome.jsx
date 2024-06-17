import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1 className="mx-auto text-2xl">Welcome To This Page</h1>
      <span className="flex flex-col gap-2 justify-center items-center mt-3">
        <Link className="font-bold text-sky-700" to="/login">
          Login
        </Link>
        <Link className="font-bold text-sky-700" to="/register">
          Register
        </Link>
        <Link className="font-bold text-sky-700" to="/product">
          Product
        </Link>
        <Link className="font-bold text-sky-700" to="/rendering">
          Rendering List
        </Link>
      </span>
    </div>
  );
}
