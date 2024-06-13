import React from 'react'

export default function Button(props) {
    const {children} = props;

  return (
    <div>
        <button>{children}</button>
    </div>
  )
}
