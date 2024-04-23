import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import workSans from '@/libs/FontWorkSans';
import Link from 'next/link';
import Cookies from 'js-cookie';

const CardHomeProfile = () => {
      const [namaLengkap, setNamaLengkap] = useState('');
      const [fotoProfile, setFotoProfile] = useState('');
      const [userId, setUserId] = useState('');

      const nama_lengkap = Cookies.get('nama_lengkap');
      const foto_profile = Cookies.get('foto_profile');
      const user_id = Cookies.get('userId');

      useEffect(() => {
            setNamaLengkap(nama_lengkap);
            setFotoProfile(foto_profile);
            setUserId(user_id);
      }, []);

      return (
            <div className='bg-white rounded-lg h-fit'>
                  <div className='bg-pattern-money-pungli-card-home cover h-20 bg-no-repeat bg-primary bg-blend-multiply rounded-lg'></div>
                  <div className='mt-8 flex flex-row justify-start gap-6 px-6 pb-6'>
                        <div className='w-36 h-36 rounded-full bg-slate-500 -mt-20 border-2 border-white relative'>
                              <Image className='rounded-full object-cover object-center' src={fotoProfile} fill={true} />
                        </div>
                        <div className='flex flex-row justify-start items-start gap-6'>
                              <h4 className='w-[45%] text-2xl font-semibold leading-tight text-[#17181C]' style={workSans.style}>
                                    {namaLengkap}
                              </h4>
                              <Link href={`/user-detail-self/${userId}`}>
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