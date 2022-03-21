import React, { useState } from 'react'

function Content() {
  // contoh salah
  // let counter = 0
  // const increment = () => {
  //   counter = counter + 1
  //   console.log(counter)
  // }
  // use state punya initial value
  // const isiState = useState("string")
  // console.log(isiState)
  const [counter, setCounter] = useState(5)

  const increment = () => {
    // counter = counter + 1
    setCounter(counter + 1)
  }
  return (
    <main>
      {counter}
      <button onClick={increment}>Click To Add 1</button>
    </main>
  )
}

export default Content