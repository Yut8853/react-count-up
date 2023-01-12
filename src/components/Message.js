import React from "react";

const Message = (props) => {
    const {children} = props
    const fontStyle = {
    color: props.color,
  }
  return (
    <>
      <p style={fontStyle}>{ props.message}</p>
      <p style={fontStyle}>{ props.message2}</p>
      <p style={fontStyle}>{ children }</p>
    </>
  )
}

export default Message