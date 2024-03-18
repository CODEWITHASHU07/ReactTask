import { useState } from 'react'
import './App.css'
import Login from './Login'
import Home from './Home'
import Chart from './Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     {/* <Login/> */}
     {/* <Home/> */}
     <Chart/>
    </>
  )
}

export default App
