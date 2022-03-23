import React from 'react'
import { FaPlus } from "react-icons/fa";
function AddItem({ handleSubmit, newItem, setNewItem }) {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        id='addItem'
        type="text"
        required
        placeholder='Tambahkan Daftar Belanja'
        value={newItem}
        onChange={(event) => {
          setNewItem(event.target.value)
        }}
      />
      <button type='submit'>
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem