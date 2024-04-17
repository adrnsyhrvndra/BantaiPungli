import workSans from '@/libs/FontWorkSans'
import { useRouter } from 'next/router';
import React from 'react'

const Breadcumb = ({namaWelcome}) => {
      const router = useRouter();

      return (
            <div className='w-full bg-[#F59198] px-12 py-6 bg-opacity-15'>
                  <div className='flex flex-row justify-between'>
                        {
                              router.pathname === '/user/Home' &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Halo, {namaWelcome} 👋</h5>
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
                                    <div className='flex flex-row gap-2 font-medium' style={workSans.style}>
                                          <h6 className='text-[#B31E28]'>Home</h6>
                                          <h6 className='text-[#B31E28]'>-</h6>
                                          <h6 className='text-[#F59198]'>Tambah Pungli</h6>
                                    </div>
                              </>
                        }

                        {
                              router.pathname === '/user/CariLaporan' &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Cari Laporan</h5>
                                    <div className='flex flex-row gap-2 font-medium' style={workSans.style}>
                                          <h6 className='text-[#B31E28]'>Home</h6>
                                          <h6 className='text-[#B31E28]'>-</h6>
                                          <h6 className='text-[#F59198]'>Cari Laporan</h6>
                                    </div>
                              </>
                        }

                        {
                              router.pathname === '/user/EditProfile' &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Edit Profil</h5>
                                    <div className='flex flex-row gap-2 font-medium' style={workSans.style}>
                                          <h6 className='text-[#B31E28]'>Home</h6>
                                          <h6 className='text-[#B31E28]'>-</h6>
                                          <h6 className='text-[#F59198]'>Edit Profil</h6>
                                    </div>
                              </>
                        }

                        {
                              router.pathname === '/user/EditLaporan' &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Update Laporan Pungli</h5>
                                    <div className='flex flex-row gap-2 font-medium' style={workSans.style}>
                                          <h6 className='text-[#B31E28]'>Home</h6>
                                          <h6 className='text-[#B31E28]'>-</h6>
                                          <h6 className='text-[#F59198]'>Update Laporan Pungli</h6>
                                    </div>
                              </>
                        }

                        {
                              router.pathname === '/user/DetailLaporan' &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Detail Laporan Pungli</h5>
                                    <div className='flex flex-row gap-2 font-medium' style={workSans.style}>
                                          <h6 className='text-[#B31E28]'>Home</h6>
                                          <h6 className='text-[#B31E28]'>-</h6>
                                          <h6 className='text-[#F59198]'>Detail Laporan Pungli</h6>
                                    </div>
                              </>
                        }

                  </div>
            </div>
      )
}

export default Breadcumb