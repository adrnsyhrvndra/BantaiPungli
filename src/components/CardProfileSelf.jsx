import React from 'react'
import Image from "next/image";
import ProfileSementara from "../assets/sarjanabrewok.png"
import workSans from '@/libs/FontWorkSans';

const CardProfileSelf = () => {
      return (
            <div className='bg-white rounded-lg pb-10'>
                  <div className='bg-pattern-money-pungli-card-home cover h-40 bg-primary rounded-t-lg bg-blend-multiply'></div>
                  <Image className='rounded-full w-36 h-36 mx-auto -mt-12' src={ProfileSementara}/>
                  <div className='flex flex-col gap-4 justify-center items-center px-16 w-fit mx-auto mt-4'>
                        <h3 className='font-bold text-xl text-center text-font-dark-02' style={workSans.style}>Adriansyah Ravindra</h3>
                        <div className='flex flex-row gap-3 items-center'>
                              <div className='h-3 w-3 rounded-full bg-green-600'></div>
                              <p className='text-[#3A3131] opacity-50 font-medium text-sm' style={workSans.style}>Online</p>
                        </div>
                  </div>
                  <div className='px-20 py-2 rounded-md bg-primary flex items-center justify-center w-fit mx-auto mt-8'>
                        <h5 className='text-white font-normal text-sm' style={workSans.style}>Edit Profil</h5>
                  </div>
            </div>
      )
}

export default CardProfileSelf