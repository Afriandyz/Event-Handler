import React from 'react'
import Account from './Account';

export default function Layout(props) {
    const {title, children} = props;
  return (
    <div className="flex min-h-screen justify-center items-center">
    <div className='space-y-5 shadow-lg p-4 rounded-md bg-slate-50'>
        <h1 className='text-center text-2xl text-sky-600 font-bold'>{title}</h1>
        <p className='text-md text-slate-800'>Please Enter Your Email and Password!</p>
        <div>{children}</div>
    </div>
    </div>
  )
}
