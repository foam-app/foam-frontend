import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Input from '../../components/forms/Input'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import GradientBtn from '../../components/global/GradientBtn'
import { useNavigate } from 'react-router-dom'

export default function Address() {
    const history = useNavigate()

    const handleGoBack =() =>{
        history(-1)
    }
  return (
    <>
        <div className="mx-[3%] ">
            <div className="header flex justify-between items-center mt-[20px] text-[12px]" onClick={handleGoBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <p>step 1 of 2</p>
            </div>

            <div className="mt-[12%] flex flex-col h-[100vh]">
                <p className='text-[24px] font-medium'>Pick up address</p>

                <div className="mt-[5%] input-boxes">

                    <Input classname="bg-transparent w-[100%] py-[5%] pl-[5px]" placeholder="Address" />
                    <div className="my-[4%]"></div>
                    <Input classname="bg-transparent w-[100%] py-[5%] pl-[10px]" placeholder="City" />
                    <div className="my-[4%]"></div>
                    <Input classname="bg-transparent w-[100%] py-[5%] pl-[10px]" placeholder="Pick up and delivery instructions" />
                </div>

                <div className="my-auto w-[100%]">
                    <GradientBtn name="Create account" link="/pin"/>
                </div>
            </div>
        </div>
    </>
  )
}
