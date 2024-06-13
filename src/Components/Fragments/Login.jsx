import React from 'react'
import InputLabel from '../Elements/Input/InputLabel'
import Button from '../Elements/Button/Button'

export default function Login() {
  return (
    <div className='flex flex-col gap-3'>
        <InputLabel children="Email" type="text" placeholder="Enter Your Email Here..." name="email" />
        <InputLabel children="Password" type="password" placeholder="*****" name="password" />
        <Button children="Login" />
    </div>
  )
}
