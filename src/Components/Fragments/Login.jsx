import React from "react";
import InputLabel from "../Elements/Input/InputLabel";
import Button from "../Elements/Button/Button";

export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    if (event.target.email.value == "" && event.target.password.value == "") {
      alert("Form Login harus Di isi");
    } else {
      localStorage.setItem("email", event.target.email.value);
      localStorage.setItem("password", event.target.password.value);
      console.log("Login Success");
      window.location.href = "/product";
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleLogin}>
      <InputLabel
        children="Email"
        type="text"
        placeholder="Enter Your Email Here..."
        name="email"
      />
      <InputLabel
        children="Password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <Button children="Login" type="submit" />
    </form>
  );
}
