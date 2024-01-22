import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  return (
    <div className='my-5'>
        <form>  
      <div className='main flex flex-col m-auto w-[400px] h-[400px] border-2 p-4 rounded-lg'>
        <h1 className='bg-[tomato] text-2xl font-bold text-white text-center p-2 mb-3 rounded-2xl'>Login</h1>
        <label htmlFor="" className='text-lg font-semibold'>Email :</label>
        <input type="email" className='border-2 mb-2 px-2 py-1' required/>
        <label htmlFor="" className='text-lg font-semibold'> Password :</label>
        <input type="password" className='border-2 mb-5 px-2 py-1' required/>
        <div className='mb-5'>

        <input type="checkbox" name="" id="" /> Terms & conditions 
        </div>
        
        <button type='submit' className='bg-violet-500 py-1 text-lg text-white font-semibold mb-4'>Submit</button>

        <div>
         <span><a href="" className='text-blue-600 font-bold'><Link to="/Signup">New signup <FontAwesomeIcon icon={faArrowRight}/></Link></a></span>
        </div>
      </div>
        </form>
    </div>
  )
}

export default Login