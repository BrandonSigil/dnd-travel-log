import { useState } from 'react'
import logo from './logo.svg'
import './App.sass'
import Card from './components/Card'
import data from './data'
import Header from './components/Header'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <div className='card-container'>
        {cards}
      </div>
    </div>
  )
}

export default App
