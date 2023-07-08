
import './App.css'
import { FaComputer } from 'react-icons/fa'

function App() {
 

  return (
    <>
      <div className='flex'>
        <div className='min-h-screen w-40 bg-gray-200 pr-2'>
          <ul className='mt-5 ml-2  text-lg cursor-pointer'>
            <li className='mb-1  hover:bg-blue-400 pl-3 rounded-lg flex hover:text-white pb-1'>
              Computadores
            </li>
            <li className='mb-1  hover:bg-blue-400 pl-3 rounded-lg flex hover:text-white pb-1'>
              Usuário
              <FaComputer/>
            </li>
          </ul>

        </div>
        <div className='ml-5'>
          teste
        </div>

      </div>
      
    </>
  )
}

export default App
