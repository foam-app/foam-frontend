import { faChevronLeft, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GradientBtn from '../../components/global/GradientBtn'
import Input from '../../components/forms/Input'
import { Link, useNavigate } from 'react-router-dom'
export default function ResetEmail() {

    const history = useNavigate()

    const handleGoBack = () =>{
        history(-1);
    }
    
    return (
    <>
        <div className="mx-[3%] ">
            <div className="header flex justify-between items-center mt-[20px] text-[12px]" onClick={handleGoBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
                {/* <p>step 1 of 2</p> */}
            </div>

            <div className="mt-[12%] flex flex-col h-[100vh]">
                <p className='text-[24px] font-medium'>Forgot Password</p>

                <div className="mt-[5%] input-boxes">

                    <Input classname="bg-transparent w-[100%] py-[5%] pl-[5px]" placeholder="Email or Phone Number" />
                    <div className="my-[4%]"></div>
                    <p className='flex justify-end items-end text-[#00AABC] text-[14px]'><Link to="/reset-email">Forgot password?</Link></p>
                </div>

                <div className=" w-[100%] my-auto">
                    <GradientBtn name="Verify" />
                    <p className='text-[#212828] text-center mt-3'>
                        Don’t Have An Account? <span className='text-[#00AABC]'><Link to='/signup'>Sign Up</Link></span> 
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
