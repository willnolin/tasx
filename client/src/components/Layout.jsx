import React, { useEffect } from "react";
import Header from "./Header";

export default function Layout(props) {
  const { handleVerify, handleLogout } = props;
  // useEffect(() => {
  //   props.handleVerify()
  // }, [])
  return (
    <div className="layout-parent">
      <Header handleLogout={handleLogout} />
      <div className="layout-children">{props.children}</div>
    </div>
  );
}
