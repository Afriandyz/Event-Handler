import React from "react";
import Button from "../Elements/Button/Button";

export default function CardProduct(props) {
  const { children } = props;

  return (
    <div className="flex justify-center mt-4">
      <div className="w-full max-w-sm bg-gray-600 flex flex-col p-5 gap-y-6 rounded-md shadow-lg">
        {children}
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <img src="/public/vite.svg" alt="" />
    </div>
  );
};

const Body = () => {
  return (
    <div className="body text-white font-sm">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro
        deserunt dolores cum laboriosam sed eligendi ipsum voluptatibus ut harum
        suscipit earum rerum molestias sint commodi, autem provident eveniet?
        Ad?
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer flex justify-between items-center">
      <p className="text-white text-lg font-bold">Rp 1.000.000,00</p>
      <Button children="Buy" />
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
