import { useState } from 'react'
import './App.css'
import Login from './Login'
import Home from './Home'

function App() {
 
  let [LoginStatus, setLoginStatus] = useState(false)

  return (
    <>

       {
         LoginStatus?<Home/> : <Login setLoginStatus= {setLoginStatus} /> 
       }
     
    </>
  )
}

export default App