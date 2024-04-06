import React from 'react'
import workSans from '@/libs/FontWorkSans';
import Image from 'next/image';
import SunnyIcon from "../assets/sunny.png";
import MapIcon from "../assets/map-icon.png";

const WeatherCard = () => {
      return (
            <div className='bg-white rounded-lg px-8 py-7 h-fit'>
                  <h6 className='text-sm text-[#8A94A6]' style={workSans.style}>Cuaca Panas</h6>
                  <div className='flex flex-row justify-between items-center mt-4'>
                        <div className='flex flex-row items-center gap-3'>
                              <h4 className='text-6xl font-semibold' style={workSans.style}>8:44</h4>
                              <h4 className='text-5xl font-medium' style={workSans.style}>WIB</h4>
                        </div>
                        <Image src={SunnyIcon} className='w-28'/>
                  </div>
                  <div className='flex flex-row justify-start gap-4 items-center mt-8'>
                        <Image src={MapIcon} />
                        <h6 className='text-[#8A94A6] text-sm' style={workSans.style}>Bandung, West Java</h6>
                  </div>
            </div>
      )
}

export default WeatherCard