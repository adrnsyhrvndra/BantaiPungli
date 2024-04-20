import React from 'react'
import Image from 'next/image';
import workSans from '@/libs/FontWorkSans';
import Link from 'next/link';
import Cookies from 'js-cookie';

const CardHomeProfile = () => {

      const nama_lengkap = Cookies.get('nama_lengkap');
      const foto_profile = Cookies.get('foto_profile');

      return (
            <div className='bg-white rounded-lg h-fit'>
                  <div className='bg-pattern-money-pungli-card-home cover h-20 bg-no-repeat bg-primary bg-blend-multiply rounded-lg'></div>
                  <div className='mt-8 flex flex-row justify-start gap-6 px-6 pb-6'>
                        <div className='w-36 h-36 rounded-full bg-slate-500 -mt-20 border-2 border-white relative'>
                              <Image className='rounded-full object-cover object-center' src={foto_profile} fill={true} />
                        </div>
                        <div className='flex flex-row justify-start items-start gap-6'>
                              <h4 className='w-[45%] text-2xl font-semibold leading-tight text-[#17181C]' style={workSans.style}>
                                    {nama_lengkap}
                              </h4>
                              <Link href={"DetailSelfProfile"}>
                                    <button className='bg-secondary px-7 py-3 text-xs text-white rounded-lg' style={workSans.style}>
                                          Detail Profil
                                    </button>
                              </Link>
                        </div>
                  </div>
            </div>
      )
}

export default CardHomeProfile