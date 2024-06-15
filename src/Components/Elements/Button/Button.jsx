import React from "react";

export default function Button(props) {
  const { children } = props;

  return (
    <div className="flex justify-center">
      <button className="p-2 bg-sky-800 text-white w-full max-w-md rounded-md">
        {children}
      </button>
    </div>
  );
}
