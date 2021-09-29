import React, { useEffect } from 'react'
import Header from './Header'

export default function Layout(props) {
  // useEffect(() => {
  //   props.handleVerify()
  // }, [])
  return (
    <div className="layout-parent">
      <Header />
      <div className="layout-children">
      {props.children}
      </div>
    </div>
  )
}
