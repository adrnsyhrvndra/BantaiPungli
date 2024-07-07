import workSans from '@/libs/FontWorkSans'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotLoginImage() {

      return (

            <div className='grid grid-cols-12 px-6 mt-10' style={workSans.style}>
                  <div className="col-span-12">
                        <div className="mt-20 w-full flex flex-row justify-center items-center">
                              <div className="flex flex-col items-center gap-y-6">
                                    <div className='relative w-96 h-72'>
                                          <Image 
                                                alt='error-page-icon-bantai-pungli' 
                                                src={'https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1720362899/bantai-pungli/Error-Page-Icon_tqxmfx.png'}
                                                fill={true}
                                                className='object-cover object-center'
                                          />
                                    </div>
                                    <h5 className='text-3xl text-slate-900 font-semibold text-center'>
                                          <span className='font-bold text-primary underline'>
                                                <Link href={'/auth/login'}>
                                                      Login terlebih dahulu 
                                                </Link>
                                          </span> untuk meng-akses halaman ini
                                    </h5>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
