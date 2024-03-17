import { useState } from 'react'
import './App.css'
import Login from './Login'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     {/* <Login/> */}
     <Home/>
    </>
  )
}

export default App
