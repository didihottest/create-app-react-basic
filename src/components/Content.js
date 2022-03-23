import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

function Content({ items, handleCheck, handleDelete }) {

  return (
    <main>
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
          <p style={{ textAlign: "center" }}>List Belanja Kosong</p>
        }
      </ul>
    </main >
  )
}

export default Content