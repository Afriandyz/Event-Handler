import React from "react";

export default function Layout(props) {
  const { title, children } = props;
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="h-screen w-full sm:h-1/2 sm:w-1/2 md:w-1/4 space-y-5 shadow-2xl p-4 rounded-md bg-slate-50">
        <h1 className="text-center text-2xl text-sky-600 font-bold">{title}</h1>
        <p className="text-md text-slate-800">
          Please Enter Your Email and Password!
        </p>
        <div>{children}</div>
      </div>
    </div>
  );
}
