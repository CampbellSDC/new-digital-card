import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './Header'
// import Content from '/Content.jsx'
import imgStephen from './assets/Stephen.jpg'
import './App.css'

const imgUrl = [imgStephen]


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className ="img-container">
        {
          imgUrl.map(image => 
            <div className="image">
              <img src={image} alt="" />
            </div>
          )
        }
      </div>
      <Header />
      
    </div>
    
  )
}

export default App
