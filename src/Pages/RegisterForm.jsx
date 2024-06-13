import React from 'react'
import Layout from '../Components/Layout/Layout'
import Register from '../Components/Fragments/Register'
import Account from '../Components/Layout/Account'

function RegisterForm() {
  return (
    <div>
        <Layout title="Register">
            <Register />
            <Account text="sudah" href="/login" children="Login" />     
        </Layout>
    </div>
  )
}

export default RegisterForm