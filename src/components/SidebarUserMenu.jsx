import React from 'react'
import LogoSidebar from './LogoSidebar'
import workSans from '@/libs/FontWorkSans'
import MenuListSidebar from './MenuListSidebar'
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import IconSidebarHelp from '@/libs/svg/IconSidebarHelp';
import IconSidebarLogout from '@/libs/svg/IconSidebarLogout';

const SidebarUserMenu = () => {

      const router = useRouter();

      const handleLogout = () => {
            Cookies.remove('token');
            Cookies.remove('userId');
            Cookies.remove('nama_lengkap');
            Cookies.remove('foto_profile');

            router.push('/');
      }

      return (

            <>
                  <LogoSidebar/>
                  <div className='flex flex-col justify-start gap-10 mt-16'>
                        <MenuListSidebar/>
                  </div>
                  <div className='mt-56 flex flex-col justify-start gap-8'>
                        <div className='flex flex-row justify-start items-center gap-4'>
                              <IconSidebarHelp/>
                              <h6 className='text-black text-[15px] font-normal opacity-30' style={workSans.style}>Bantuan</h6>
                        </div>
                        {
                              (router.pathname === "/") &&

                              <Link href={"/auth/login"}>
                                    <div className='flex flex-row justify-start items-center gap-4'>
                                          <IconSidebarLogout/>
                                          <h6 className='text-black text-[15px] font-normal opacity-30' style={workSans.style}>Login</h6>
                                    </div>
                              </Link>
                        }
                        {
                              (router.pathname !== "/") &&
                              <Link href={"/"} onClick={handleLogout}>
                                    <div className='flex flex-row justify-start items-center gap-4'>
                                          <IconSidebarLogout/>
                                          <h6 className='text-black text-[15px] font-normal opacity-30' style={workSans.style}>Logout</h6>
                                    </div>
                              </Link>
                        }
                  </div>
            </>

      )
}

export default SidebarUserMenu