import React from 'react'
import logo from '../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faInstagram, faPinterestP, faSquarePinterest, faTelegram, faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='bg-[#d4d4d4] p-3'>
        <div className="top flex gap-3 justify-center">
        <img src={logo} alt="" className='w-[28px] h-[28px]' />
            <h1 className="logo text-violet-500 text-2xl font-bold">WoodenWorld</h1>
        </div>
        <div className="bottom flex justify-center text-center my-3">
            <ul >
                <li className='font-semibold cursor-pointer hover:text-violet-500 '>Home</li>
                <li className='font-semibold cursor-pointer hover:text-violet-500'>Mens</li>
                <li className='font-semibold cursor-pointer hover:text-violet-500'>Womens</li>
                <li className='font-semibold cursor-pointer hover:text-violet-500'>Kids</li>
                <li className='font-semibold cursor-pointer hover:text-violet-500'>Contact Us</li>
                <li className='font-semibold cursor-pointer hover:text-violet-500'>About Us</li>
            </ul>
        </div>
        <div className="medias flex justify-center gap-5  mt-3">
            <div>  <FontAwesomeIcon icon={faFacebookF} className='text-3xl cursor-pointer hover:text-violet-500 duration-200 ' /></div>
            <div>  <FontAwesomeIcon icon={faWhatsapp} className='text-3xl cursor-pointer hover:text-violet-500 duration-200' /></div>
            <div>  <FontAwesomeIcon icon={faTelegram} className='text-3xl cursor-pointer hover:text-violet-500 duration-200' /></div>
            <div>  <FontAwesomeIcon icon={faInstagram} className='text-3xl cursor-pointer hover:text-violet-500 duration-200' /></div>
            <div>  <FontAwesomeIcon icon={faPinterestP} className='text-3xl cursor-pointer hover:text-violet-500 duration-200' /></div>
        </div>
        <div className="middle my-2">
            <h1 className='text-center text-md font-semibold cursor-pointer'>WWW.WoodenWorld.com</h1>
            <h1 className='text-center text-white text-md font-semibold cursor-pointer bg-slate-600'>copyright 2024 - All Reserved</h1>
        </div>
    </div>
  )
}

export default Footer