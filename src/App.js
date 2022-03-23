import React, { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';
import AddItem from './components/AddItem';

function App() {
  const dataFromLocalStorage = localStorage.getItem('shoppingList')
  const [items, setItems] = useState(dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : [])
  const [newItem, setNewItem] = useState('')

  const handleCheck = (id) => {
    const listItems = [...items]
    const index = listItems.findIndex((item) => item.id === id)
    listItems[index].checked = !listItems[index].checked
    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    setItems((prev) => {
      // prev isinya adalah nilai dari state items sebelumnya
      const listAfterDelete = prev.filter((item) => item.id !== id)
      localStorage.setItem('shoppingList', JSON.stringify(listAfterDelete))
      return listAfterDelete
    })
  }

  const addItem = (item) => {
    const id = items.length === 0 ? 1 : items[items.length - 1].id + 1
    const myNewItem = {
      id,
      checked: false,
      item: item
    }
    // const currentItem = [...items]
    // currentItem.push(myNewItem)
    const listItems = [...items, myNewItem]
    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems))

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newItem) {
      addItem(newItem)
      setNewItem('')
    }

  }


  // JSX 
  // javascript xml
  return (
    <div className="App">
      <Header />
      {/* props */}
      <AddItem handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem} />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
