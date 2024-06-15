import React from "react";
import Layout from "../Components/Layout/Layout";
import Register from "../Components/Fragments/Register";
import Account from "../Components/Layout/Account";

function RegisterForm() {
  return (
    <div>
      <Layout title="Register">
        <Register />
        <Account text="Sudah" href="/Login" children="Log In" />
      </Layout>
    </div>
  );
}

export default RegisterForm;
