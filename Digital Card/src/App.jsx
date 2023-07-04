import { useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-container">
    
      <Header />
      <Content />
      <Footer />
    </div>
    
  )
}

export default App
