import React from 'react'

export default function Layout(props) {
    const {title, children} = props;
  return (
    <div className='space-y-5'>
        <h1>{title}</h1>
        <p>Please Enter Your Email and Password!</p>
        <div>{children}</div>
    </div>
  )
}
