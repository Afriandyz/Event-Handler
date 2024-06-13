import React from 'react'

export default function Input(props) {
    const {text, placeholder, name} = props;
  return (
    <div className=''>
        <input type={text} placeholder={placeholder} name={name} className='p-2 w-full' />
    </div>
  )
}
