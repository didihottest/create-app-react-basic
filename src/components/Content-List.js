import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Telur"
    },
    {
      id: 2,
      checked: true,
      item: "Terigu",
    },
    {
      id: 3,
      checked: false,
      item: "Gula"
    }
  ])

  const handleCheck = (id) => {
    const listItems = [...items]
    const index = listItems.findIndex((item) => item.id === id)
    listItems[index].checked = !listItems[index].checked
    setItems(listItems)
  }

  const handleDelete = (id) => {
    setItems((prev) => {
      // prev isinya adalah nilai dari state items sebelumnya
      return prev.filter((item) => item.id !== id)
    })

  }

  // jsx bisa render array yang isinya tag html 
  const array = [<p key={"1"}>Ini array 1</p>, <p key={"2"}>ini array 2</p>, <p key={"3"}>ini array 3</p>]

  const array2 = [1, 2, 3]
  const array2Map = array2.map((item) => {
    return item + 2
  })

  const RenderArray = () => {
    return items.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.checked.toString()}</td>
          <td>{item.item}</td>
        </tr>
      )
    })
  }

  console.log(array2)
  console.log(array2Map);
  return (
    <main>
      {/* <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>CHECKED</td>
            <td>ITEM BELANJA</td>
          </tr>
        </thead>
        <tbody>
          {RenderArray()}
        </tbody>

      </table > */}
      {/* {array} */}
      <ul>
        {items.length > 0 ?
          items.map((item) => {
            return (
              <li className='item' key={item.id}>
                <input type="checkbox" checked={item.checked} onChange={() => {
                  handleCheck(item.id)
                }} />
                <label style={{
                  // contoh tidak bagus
                  // "text-decoration": "line-through",
                  textDecoration: item.checked ? "line-through" : ""
                }}>{item.item}</label>
                <FaTrashAlt onClick={() => {
                  handleDelete(item.id)
                }} />
              </li>
            )
          })
          :
          <p>List Belanja Kosong</p>
        }
      </ul>
    </main >
  )
}

export default Content