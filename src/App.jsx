import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import ClockTime from './components/ClockTime'
function App() {
  return <>
    <ClockHeading/>
    <ClockSlogan/>
    <ClockTime/>
  </>
    
  
}

export default App
