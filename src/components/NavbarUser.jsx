import React, { useEffect, useState } from 'react';
import SearchIcon from "../assets/search-icon.png";
import ArrowIconNav from "../assets/arrow-icon-bottom.png";
import Image from 'next/image';
import Link from 'next/link';
import workSans from '@/libs/FontWorkSans';
import Cookies from 'js-cookie';
import IconNavbarHome from '@/libs/svg/IconNavbarHome';
import IconNavbarNotif from '@/libs/svg/IconNavbarNotif';
import IconNavbarLaporanPungli from '@/libs/svg/IconNavbarLaporanPungli';

const NavbarUser = () => {
      const [namaLengkap, setNamaLengkap] = useState('');
      const [fotoProfile, setFotoProfile] = useState('');

      const nama_lengkap = Cookies.get('nama_lengkap');
      const foto_profile = Cookies.get('foto_profile');

      useEffect(() => {
            setNamaLengkap(nama_lengkap);
            setFotoProfile(foto_profile);
      }, []);
      
      return (

            <div className='py-6 px-8 bg-whitew-full flex'>
                  <div className='flex flex-row justify-start items-center gap-[72px] w-[60%]'>
                        <div className='relative w-full'>
                              <input 
                                    type="text" 
                                    className='rounded-full bg-[#EEF0F2] pl-16 py-4 w-full focus:outline-primary' 
                                    placeholder='Search..' 
                                    style={workSans.style} 
                              />
                              <Image src={SearchIcon} className='absolute top-1/2 left-6 -translate-y-1/2' />
                        </div>
                        <div className='flex flex-row gap-14 justify-start items-center w-full'>
                              <Link href={'/user/Home'}>
                                    <div className='flex flex-row justify-start items-center gap-4'>
                                          <div className='p-3 rounded-full bg-primary'>
                                                <IconNavbarHome />
                                          </div>
                                          <h4 className='text-base text-[#364045] font-medium' style={workSans.style}>
                                                Beranda
                                          </h4>
                                    </div>
                              </Link>
                              <div className='flex flex-row justify-start items-center gap-4'>
                                    <div className='p-3 rounded-full bg-[#E3E4E4]'>
                                          <IconNavbarLaporanPungli/>
                                    </div>
                                    <h4 className='text-base text-[#364045] font-medium' style={workSans.style}>
                                          Laporan Laporan Pungli
                                    </h4>
                              </div>
                        </div>
                  </div>
                  <div className='flex flex-row justify-end w-[40%] items-center'>
                        <div className='flex flex-row items-center gap-5'>
                              <div className='p-3 rounded-full bg-[#E3E4E4]'>
                                    <IconNavbarNotif/>
                              </div>
                              <div className='w-[1.5px] h-6 bg-[#D1D8DB]'></div>
                              <div className='flex flex-row items-center justify-start gap-12'>
                                    <div className='flex flex-row items-center justify-start gap-4'>
                                          <div className='w-10 h-10 rounded-full bg-[#F2F2F2] relative'>
                                                <Image 
                                                      src={fotoProfile} 
                                                      className='object-cover object-center rounded-full' 
                                                      fill={true}
                                                />
                                          </div>
                                          <h4 className='text-lg font-medium text-[#364045]' style={workSans.style}>
                                                {namaLengkap}
                                          </h4>
                                    </div>
                                    <Image src={ArrowIconNav} />
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default NavbarUser;
