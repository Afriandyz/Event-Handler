import React from 'react'

export default function (props) {
    const {htmlfor, children} = props;
  return (
    <div>
        <label htmlFor={htmlfor}>{children}</label>
    </div>
  )
}
