import workSans from '@/libs/FontWorkSans'
import { useRouter } from 'next/router';
import React from 'react'

const Breadcumb = () => {
      const router = useRouter();

      return (
            <div className='w-full bg-[#F59198] px-12 py-6 bg-opacity-15'>
                  <div className='flex flex-row justify-between'>
                        {
                              router.pathname === '/user/Home' &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Beranda</h5>
                                    <div className='flex flex-row gap-2 text-[#F59198] font-normal' style={workSans.style}>
                                          <h6>Home</h6>
                                          <h6>-</h6>
                                    </div>
                              </>
                        }
                        {
                              router.pathname === '/user/AddLaporan' &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Tambah Laporan Pungli</h5>
                                    <div className='flex flex-row gap-2 text-[#F59198] font-normal' style={workSans.style}>
                                          <h6>Home</h6>
                                          <h6>-</h6>
                                          <h6>Tambah Pungli</h6>
                                    </div>
                              </>
                        }
                  </div>
            </div>
      )
}

export default Breadcumb