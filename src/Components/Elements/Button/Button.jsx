import React from "react";

export default function Button(props) {
  const { children, onClick = () => {}, type = "button" } = props;

  return (
    <div className="flex justify-center">
      <button
        className="p-2 bg-sky-800 text-white w-full max-w-md rounded-md"
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
}
