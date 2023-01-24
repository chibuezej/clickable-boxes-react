import { useState } from 'react'
import './App.css'
import boxes from './componets/boxes'
import Box from './componets/box'

function App() {
  const [squares, setSquares] = useState(boxes)

  function toggle(id) {
    setSquares(prevSquares => {
     return prevSquares.map((square) => {
      return square.id === id ? {...square, on: !square.on} : square
     })
    })
  }

  const squareElements = squares.map((square) => (

   <Box 
   key={square.id} 
   on={square.on} 
   toggle={() => toggle(square.id)} />
  ))

  return (

      <main>
     <h1>{squareElements}</h1>
    </main>
  )
}

export default App
