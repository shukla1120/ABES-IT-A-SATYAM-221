import React from 'react'
import Ad from './Components/Ad'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Navbar college="Abes"/>
      <br />
      <Ad name="Satyam" age={19}/>
      <br />
      <Ad name="shivam"age={18} />
      <br />
      <Ad name="shiva" age={19} />
    </div>
  )
}

export default App