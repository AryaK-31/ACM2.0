import React from 'react'
import {FaInstagram} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
        
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-3xl pb-6'>
                    PCCOE <span className='text-blue-600'>ACM</span>
                </p>
                <p className='text-gray-800 text-xl pb-5 max-w-md'>
                    Established in 2012, PCCOE <span className='text-blue-600'>ACM</span> Student Chapter is a leading student chapter in Pune. It increases events and participation each year, guided by passionate faculty sponsors and volunteers. Celebrating its eleventh year, the chapter continues to thrive and improve.
                </p>
            </ul>
            
            
        </div>
        <div className="p-5">
            <ul>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Helpful resources</p>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Home</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>ACM-Home</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>ACM India-Home</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>ACMW</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>ACM-XRDS</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>ACM Digital Library</li>
            </ul>
        </div>
        
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-2xl pb-4 text-blue-600'>Contact Us</p>
                <p className='text-gray-800 text-xl pb-5 max-w-md'>
                          Pimpri Chinchwad College of Engineering.
                          Near Akurdi Railway Station Rd, Sector No. 26, Pradhikaran, Nigdi, Pimpri-Chinchwad, Maharashtra 411044.
                </p>
                <div className='flex gap-6 pb-5'>
                    <FaInstagram className='text-2xl curson-pointer hover:text-red-600' />
                    <FaTwitter className='text-2xl curson-pointer hover:text-blue-600' />
                    <FaLinkedin className='text-2xl curson-pointer hover:text-blue-600' />
                    <FaYoutube className='text-2xl curson-pointer hover:text-red-600' />
                </div>
            </ul>

        </div>
    </div>
    <div className='flex flex-col justify-center items-center text-center p-5 bg-gray-50'>
        <h1 className='text-gray-800 font-semoibold'>© 2022-2023 All rights reserved | Build with 💙 by Students of PCCOE</h1>
    </div>
    </>
  )
}
