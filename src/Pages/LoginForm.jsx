import React from "react";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Fragments/Login";
import Account from "../Components/Layout/Account";

export default function LoginForm() {
  return (
    <div>
      <Layout title="Login">
        <Login />
        <Account text="belum" href="/register" children="Register" />
      </Layout>
    </div>
  );
}
