
import './App.css'
import { RiComputerFill} from "react-icons/ri";
import { BiSolidUserCircle } from "react-icons/bi";
import {BsKeyboardFill} from "react-icons/bs";
import {BsFillTelephoneFill}  from "react-icons/bs";
import {FaTowerCell} from "react-icons/fa6";
function App() {
 

  return (
    <>
      <div className='flex'>
        <div className='min-h-screen w-120 bg-gray-200 pr-2'>
          <ul className='mt-5 ml-2  text-lg cursor-pointer'>
            <li className='mb-1  hover:bg-blue-400 pl-3 rounded-lg  flex hover:text-white pb-1 pr-2'>
            <RiComputerFill className="mt-1.5 mr-1 "  />  
            Computadores
            </li>
            <li className='mb-1  hover:bg-blue-400 pl-3 rounded-lg flex hover:text-white pb-1'>
              <BiSolidUserCircle className="mt-1.5 mr-1 "/>
              Usuário
              
            </li>
            <li className='mb-1  hover:bg-blue-400 pl-3 rounded-lg flex hover:text-white pb-1'>
              <BsKeyboardFill className="mt-1.5 mr-1 "/>
              Periféricos
              
            </li>
            <li className='mb-1  hover:bg-blue-400 pl-3 rounded-lg flex hover:text-white pb-1'>
              <BsFillTelephoneFill className="mt-1.5 mr-1 "/>
              Telefone
              
            </li>
            <li className='mb-1  hover:bg-blue-400 pl-3 rounded-lg flex hover:text-white pb-1'>
              <FaTowerCell className="mt-1.5 mr-1 "/>
              Internet
              
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
