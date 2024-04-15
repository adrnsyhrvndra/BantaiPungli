import React from 'react'
import SearchIcon from "../assets/search-normal.png";
import Image from "next/image";
import workSans from '@/libs/FontWorkSans';

const SearchLaporanDetailProfil = ({textUserHeading}) => {

      return (
            <>
                  <h3 className='text-2xl font-bold text-left' style={workSans.style}>
                        Laporan Laporan Pungli By {textUserHeading}
                  </h3>
                  <div className='flex flex-row items-end justify-between mt-8'>
                        <div className='relative w-[45%]'>
                              <input 
                                    type="text" 
                                    className='w-full h-12 bg-white rounded-md px-14 py-3 placeholder:text-base placeholder:text-[#757B8C]'
                                    placeholder='Cari Laporan...'
                                    style={workSans.style}
                              />
                              <Image src={SearchIcon} className='absolute top-1/2 left-6 -translate-y-1/2'/>
                        </div>
                        <h6 className='font-semibold text-sm text-[#6F7F95]' style={workSans.style}>Total Pungli : 2 Laporan</h6>
                  </div>
            </>
      )
}

export default SearchLaporanDetailProfil