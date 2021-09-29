import React, { useEffect } from 'react'
import Header from './Header'

export default function Layout(props) {
  // useEffect(() => {
  //   props.handleVerify()
  // }, [])
  return (
    <div className="">
      <Header />
      <div>
      {props.children}
      </div>
    </div>
  )
}
