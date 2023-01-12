import React, { useEffect, useState } from "react";
import Message from "./components/Message";

const App = () => {
  console.log('start')

  const fontStyle = {
    color: 'blue',
  }

  const [num, setNum] = useState(0);

  const onClickCountUp = () => {
    const clickCount = num + 1
    setNum(clickCount)
  }
  const onClickCountDown = () => {
    const clickCountDown = num - 1
    setNum(clickCountDown)
  }


  const [flag, setFlag] = useState(true)

  const onClickSwitch = () => {
    setFlag(!flag)
  }

  useEffect(() => {
  if (num > 0) {
    if (num % 3 === 0) {
      flag || setFlag(true)
    } else {
      flag && setFlag(false)
    }
  }
  }, [num]);

  return (
    <>
      <h1 style ={{color: 'red', fontSize: '18px'}}>Hello</h1>
      <p style={fontStyle}>HelloWorld</p>
      <Message color="black" message="元気です1"/>
      <Message color="pink" message2="元気です2"/>
      <Message color="green">
        元気です3
      </Message>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountDown}>カウントダウン</button>
      <p>{num}</p>
      <button onClick={onClickSwitch}>on/off</button>
      {flag && <p>Σ੧(❛□❛✿)</p>}
    </>
  )
}

export default App