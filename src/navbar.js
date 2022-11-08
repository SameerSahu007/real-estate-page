import {FaHome} from 'react-icons/fa'

function Navbar() {
    return ( 
        <nav className= 'flex items-center text-lg py-3 justify-between m-auto'>

  

            <div className='flex gap-1 text-navlogocolor '>
            <FaHome className='m-auto text-2xl '/>
            <h1 className=' pr-8 text-xl m-auto '>Estatery</h1>

            <ul className='list-none flex gap-5 '>
                    <li className='  text-black border-2 border-black rounded px-2 py-1 hover:bg-navlinkcolor hover:text-white'>Rest</li>
                    <li className=' ext-black border-2 border-black rounded px-2 py-1 hover:bg-navlinkcolor hover:text-white'>Buy</li>
                    <li className='ext-black border-2 border-black rounded px-2 py-1 hover:bg-navlinkcolor hover:text-white'>Sell</li>

                    <li className='ext-black border-2 border-black rounded px-2 py-1 hover:bg-navlinkcolor hover:text-white'>Manage Property </li>
                    <li className='ext-black border-2 border-black rounded px-2 py-1 hover:bg-navlinkcolor hover:text-white'> Resources </li>

                </ul>
            </div>
         
           

            <div>
       
            </div>
            

            

            <div>
                <ul className='list-none flex gap-2 '>
                <li className=' text-loginbuttoncolor bg-white rounded px-2 py-1b border-2 border-black ' >Login</li>
                    <li className=' bg-loginbuttoncolor text-white rounded px-2 py-1'>SignUp</li>
                    

                </ul>
            </div>
        </nav>
     );
}

export default Navbar;