import { useState } from 'react'
import './App.css'
import StopPropagation from './components/StopPropagation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StopPropagation/>
    </>
  )
}

export default App
