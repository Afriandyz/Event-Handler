import React from "react";
import CardProduct from "../Components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt aliquid, deserunt tenetur nesciunt totam corrupti pariatur laborum possimus.",
    price: "Rp 1.000.000,00",
  },
];

export default function Product() {
  return (
    <div>
      <CardProduct>
        <CardProduct.Header></CardProduct.Header>
        <CardProduct.Body></CardProduct.Body>
        <CardProduct.Footer></CardProduct.Footer>
      </CardProduct>
    </div>
  );
}
