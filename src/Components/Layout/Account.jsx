import React from "react";
import { Link } from "react-router-dom";

export default function Account(props) {
  const { text, children, href } = props;

  return (
    <div>
      <div className="flex flex-col gap-3 items-center">
        <span>
          Anda {text} Memiliki akun ? <Link to={href} className="underline text-sky-700 font-semibold">{children}</Link>
        </span>
        <span><Link to="/" className="text-sky-700 font-semibold">Home</Link></span>
      </div>
    </div>
  );
}
