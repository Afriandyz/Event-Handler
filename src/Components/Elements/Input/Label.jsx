import React from 'react'

export default function (props) {
    const {htmlfor, children} = props;
  return (
    <div className=''>
        <label htmlFor={htmlfor} className='p-2 w-full'>{children}</label>
    </div>
  )
}
