import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-2xl font-semibold">Opps...</h1>
        <p>Halaman Tidak Ditemukan</p>
        <div>{error.message || error.status}</div>
      </div>
    </div>
  );
}
