import React from 'react'
import Image from 'next/image';
import SarjanaBrewok from "../assets/sarjanabrewok.png";
import workSans from '@/libs/FontWorkSans'

const UserActive = ({text}) => {
      return (
            <div className='flex flex-col gap-5 mt-4'>
                  <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row justify-start items-center gap-4'>
                              <Image src={SarjanaBrewok} className='w-16 rounded-full'/>
                              <h4 className='text-sm text-[#364045] font-medium' style={workSans.style}>{text}</h4>
                        </div>
                        <span className="relative flex items-center justify-center h-6 w-6">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative rounded-full h-3 w-3 bg-green-600 items-center justify-center"></span>
                        </span>
                  </div>
                  <hr className='h-0.5 opacity-5 bg-[#575151] w-full' />
            </div>
      )
}

export default UserActive