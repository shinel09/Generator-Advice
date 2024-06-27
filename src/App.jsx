import { useState } from 'react'
import Generator from './Generator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Generator/>
    </>
  )
}

export default App
