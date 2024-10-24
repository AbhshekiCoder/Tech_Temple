import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './Pages/Signup'
import './App.css'
import './CSS/common.css'

// import Demo from './Components/demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup/>
      {/* <Demo/> */}
    </>
  )
}

export default App
