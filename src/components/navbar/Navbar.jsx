import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faMultiply } from '@fortawesome/free-solid-svg-icons'
import logo from '../Assets/logo.png'

import { Link } from 'react-router-dom'
export const Navbar = () => {

  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-violet-600 p-4">
      <div className="container mx-auto flex justify-around items-center">
        <div className='flex items-center gap-3'>
        <img src={logo} alt="" className='w-[28px] h-[28px]' />
        <a href="#" className="text-white text-2xl font-bold">
          Shoping.com
        </a>

        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white font-semibold">
           <Link to="/">Home</Link> 
          </a>
          <a href="#" className="text-white font-semibold">
          <Link to="/Mens">Mens</Link> 
          </a>
          <a href="#" className="text-white font-semibold">
          <Link to="/Womens">Womens</Link> 
          </a>
          <a href="#" className="text-white font-semibold">
          <Link to="/Kids">Kids</Link> 
          </a>
        </div>
         <div className='hidden md:flex md:items-center md:gap-4' >
         <Link to="/cart"><FontAwesomeIcon icon={faCartPlus} className=" text-white text-xl cursor-pointer "/></Link> 
          <span className=' relative w-[18px] h-[18px] flex items-center justify-center text-white bg-red-500 right-5 bottom-2  rounded-full '>0</span>
          <button className='text-white text-xl font-semibold'><Link to="/Login">Login</Link> </button>
         </div>

       
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
      {
        isMobileMenuOpen ? <FontAwesomeIcon icon={faMultiply} className='text-2xl font-bold'/> : <FontAwesomeIcon icon={faBars} className='text-2xl font-bold' />
      }
           
          </button>
        </div>
      </div>
           
      
      
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-700 p-4`}
      >
        <a href="#" className="block text-white mb-2 hover:text-violet-300 duration-200 font-semibold">
        <Link to="/">Home</Link> 
        </a>
        <a href="#" className="block text-white mb-2 hover:text-violet-300 duration-200 font-semibold">
        <Link to="/mens">Mens</Link> 
        </a>
        <a href="#" className="block text-white mb-2 hover:text-violet-300 duration-200 font-semibold">
        <Link to="/womens">Women</Link> 
        </a>
        <a href="#" className="block text-white mb-2 hover:text-violet-300 duration-200 font-semibold">
        <Link to="/Kids">Kids</Link> 
        </a>
        <div>
        
        <Link to="cart"><FontAwesomeIcon icon={faCartPlus} className='block text-white mb-2 hover:text-violet-300 duration-200 font-semibold text-xl' /></Link>
        <span className=' relative w-[18px] h-[18px] flex items-center justify-center text-white bg-red-500 bottom-9 left-4 rounded-full p-2'>0</span>
       </div>
        <button className='block text-white mb-2 hover:text-violet-300 duration-200 font-semibold'><Link to="/login">Login</Link> </button>
      </div>
    </nav>




  )
}
export default Navbar;
