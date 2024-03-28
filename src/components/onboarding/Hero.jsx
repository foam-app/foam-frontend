import React from 'react'
import Slideshow from './Slideshow'

import {motion} from 'framer-motion'

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

export default function Hero() {
    const slides = [
        { 
            id: "1", 
            image: "../../../src/assets/onboard1.png", 
            text: "Experience convenience and freshness like never before.", 
            class: "absolute top-[10%] left-[0px] scale-[1.5] ",
            textStyle: "mt-[100%]"
         },
    
        { 
            id: "2", 
            image: "../../../src/assets/onboard2.png", 
            text: "Simplify Your Life with Seamless Laundry Pickup and Delivery.", 
            class: "scale-[1.5] absolute top-[10%] left-[90px]",
            textStyle: "mt-[100%]"
        },
    
        { 
            id: "3", 
            image: "../../../src/assets/onboard3.png", 
            text: "Eco-Friendly Cleaning that Cares  for Your Clothes and the Planet", 
            class: "scale-[1.35] absolute top-[-120px] left-[80px]",
            textStyle: "mt-[100%]"

        },
    
        { 
            id: "4", 
            image: "../../../src/assets/onboard4.png", 
            text: "Join Us and Transform the Way You Do Laundry!", 
            class: "absolute top-[10%] left-[0px] scale-[1.5] mb-[115px]",
            textStyle: "mt-[100%]"


        },    
    ];

  return ( 
    <>
      {/* <div className="onboard gradient-bg h-[100vh]">
        <img src={logo} className='mx-[16px] pt-[24px]'/>
        <div className="h-[50vh] w-[100%]">
          <Slideshow slides={slides} />
        </div>
        <div className="h-[30vh] absolute bottom-[-5%] w-[100%]">
         <p className='text-center text-[17px] text-[#212828] py-[10px]'>Schedule your pickup today</p>

          <Link to='/signup' className='flex justify-center items-center'>
            <button className='text-white text-[16px] font-bold rounded-[8px] py-[21.5px] w-[90%] bg-[#001C1F]'>
              Sign me up!
            </button>
          </Link>

          <p className='text-center text-[14px] text-[#212828] py-[10px]'>
            <Link to='login'>Log in with your existing account</Link>
          </p>
        </div>

      </div> */}

      <div className="gradient-bg  w-[100%] px-[2.5%]">

        <div className="w-[100%] py-[5%] px-[2.5%]">
            <img src={logo} alt="" />
        </div>

        <Slideshow slides={slides} />
      </div>
    </>
  )
}
