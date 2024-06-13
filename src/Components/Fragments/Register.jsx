import React from 'react'
import InputLabel from '../Elements/Input/InputLabel'
import Button from '../Elements/Button/Button'

export default function Register() {
  return (
    <div className='flex flex-col gap-3'>
        <InputLabel children="Email" type="text" placeholder="Enter Your Email Here..." name="email" />
        <InputLabel children="Password" type="password" placeholder="*****" name="password" />
        <InputLabel children="Confirm Your Password" type="password" placeholder="*****" name="confirm your password" />
        <Button children="Register" />
    </div>
  )
}
