import React, { useState, useEffect } from 'react'

function Content() {
  let [name, setName] = useState("")


  const handleNameChange = () => {
    const names = ["Juan", "Ninda", "Alif"]
    const index = Math.floor(Math.random() * 3)
    setName(names[index])

  }
  return (
    <main>
      <p onDoubleClick={handleNameChange}>Hello, {name}</p>
      <button onClick={handleNameChange}>Click Me</button>
    </main>
  )
}

export default Content