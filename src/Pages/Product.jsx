import React from "react";
import CardProduct from "../Components/Fragments/CardProduct";
import Button from "../Components/Elements/Button/Button";

const products = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt aliquid, deserunt tenetur nesciunt totam corrupti pariatur laborum possimus.",
    price: "Rp 1.000.000,00",
  },
];

const email = localStorage.getItem("email");

const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/";
};

export default function Product() {
  return (
    <>
      <div className="navbar bg-blue-500 h-9 text-white flex justify-end items-center p-3 text-lg gap-x-2">
        {email}
        <button className="text-white rounded-md" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <div>
        <CardProduct>
          <CardProduct.Header></CardProduct.Header>
          <CardProduct.Body></CardProduct.Body>
          <CardProduct.Footer></CardProduct.Footer>
        </CardProduct>
      </div>
    </>
  );
}
