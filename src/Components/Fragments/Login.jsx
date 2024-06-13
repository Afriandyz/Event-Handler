import React from 'react'
import InputLabel from '../Elements/Input/InputLabel'

export default function Login() {
  return (
    <div>
        <InputLabel children="Email" type="text" placeholder="Enter Your Email Here..." name="email" />
        <InputLabel children="Password" type="password" placeholder="*****" name="password" />
    </div>
  )
}
