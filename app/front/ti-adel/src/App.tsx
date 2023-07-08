import { useState } from 'react'
import { VscArrowCircleLeft } from "react-icons/vsc";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
        <div className={`w-72 h-screen bg-dark-purple`}>
          <VscArrowCircleLeft size={35}/>
        </div>
        <div className='p-7 text-2x1 font-semibold flex-1 h-screen'>ddfdf</div>
      </div>
    </>
  )
}

export default App
