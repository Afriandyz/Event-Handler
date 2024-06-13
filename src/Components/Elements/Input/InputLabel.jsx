import React from 'react'
import Input from './Input'
import Label from './Label'

export default function InputLabel(props) {
    const {htmlfor, children, type, placeholder, name} = props;

  return (
    <div className='space-y-3'>
        <Label htmlfor={htmlfor}>{children}</Label>
        <Input type={type} placeholder={placeholder} name={name} />
    </div>
  )
}
