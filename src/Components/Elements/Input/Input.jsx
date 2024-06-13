import React from 'react'

export default function Input(props) {
    const {text, placeholder, name} = props;
  return (
    <div>
        <input type={text} placeholder={placeholder} name={name} />
    </div>
  )
}
