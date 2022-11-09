import {FaHome} from 'react-icons/fa'
import {HiMenuAlt3 } from 'react-icons/hi'
import { useRef } from "react"
import userEvent from '@testing-library/user-event';

function Navbar() {

    const btnRef  = useRef()

    function showMenu(){
            if(btnRef.current.className === 'hidden'){
                btnRef.current.className = ""
            }
            else{
                btnRef.current.className = 'hidden'
            }

    }

    return ( <>
        <nav className= 'flex items-center text-lg py-3 justify-between m-auto pr-3'>
            <div className='flex gap-1 text-navlogocolor '>
            <FaHome className='m-auto text-3xl '/>
            <h1 className=' pr-8 text-2xl m-auto  '>Estatery</h1>

            </div>


            <div className='hidden lg:flex'>     
            <ul className='list-none flex gap-5 m-auto'>
                    <a href=""><li className='  text-black  rounded px-2 py-1 hover:bg-navlinkcolor hover:text-white'>Rest</li></a>
                    <a href=""><li className=' text-black  rounded px-2 py-1 hover:bg-navlinkcolor hover:text-white'>Buy</li></a>
                    <a href=""><li className='text-black  rounded px-2 py-1 hover:bg-navlinkcolor hover:text-white'>Sell</li></a>

                    <a href=""><li className='text-black  rounded px-2 py-1 hover:bg-navlinkcolor hover:text-white whitespace-nowrap'>Manage Property </li></a>
                    <a href=""><li className='text-black  rounded px-2 py-1 hover:bg-navlinkcolor hover:text-white'> Resources </li></a>

            </ul>
            </div>
            
            <div className='hidden lg:flex'>
                <ul className='list-none flex gap-2 m-auto'>
                <li className=' bg-loginbuttoncolor text-white rounded px-2 py-1 hover:text-yellow-300 ' > SignUp </li>
                </ul>
            </div>


            {/* Mobile button */}
            <div className='lg:hidden flex items-center text-2xl'>
                <button onClick={() => showMenu()}>
                <HiMenuAlt3/>
                </button>

            </div>

        </nav>

        
            {/* Mobile Menu */}
            <div ref = {btnRef} className='hidden '>
                <div className='flex-col '>
                <a href="" className='text-black  rounded text-center py-3 hover:bg-navlinkcolor hover:text-white block'>Rest</a>
                    <a href="" className='text-black  rounded text-center py-3 hover:bg-navlinkcolor hover:text-white block'>Buys</a>
                    <a href="" className='text-black  rounded text-center py-3 hover:bg-navlinkcolor hover:text-white block'>Sell</a>
                    <a href="" className='text-black  rounded text-center py-3 hover:bg-navlinkcolor hover:text-white block'>Manage Property </a>
                    <a href="" className='text-black  rounded text-center py-3 hover:bg-navlinkcolor hover:text-white block'>Resources</a>

    
                    <a href="#" className='text-black  rounded text-center py-3 hover:bg-navlinkcolor hover:text-white block'> Login </a> 
                    <a href="#" className='text-black  rounded text-center py-3 hover:bg-navlinkcolor hover:text-white block'>SignUp</a>
                  
                    </div>
            </div>
            </>
     );
}

export default Navbar;