import React from 'react'

function Content() {
  const handleNameChange = () => {
    const name = ["Juan", "Ninda", "Alif"]
    const index = Math.floor(Math.random() * 3)
    return name[index]
  }

  const handleClick = () => {
    console.log("Click")
  }
  const handleClick2 = (name) => {
    console.log("Click " + name)
  }
  const handleClick3 = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.innerText)
  }


  return (
    <main>
      <p onDoubleClick={handleClick}>Hello, {handleNameChange()}</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => { handleClick2("Ricky") }}>Click Me 2</button>
      {/* anonymous function pada event listener akan otomatis dapet parameter e (event) */}
      <button onClick={(e) => { handleClick3(e) }}>Click Me 3</button>

    </main>
  )
}

export default Content