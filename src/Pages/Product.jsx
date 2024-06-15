import React from "react";
import CardProduct from "../Components/Fragments/CardProduct";

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
