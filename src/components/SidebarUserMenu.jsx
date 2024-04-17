import React from 'react'
import LogoSidebar from './LogoSidebar'
import workSans from '@/libs/FontWorkSans'
import MenuListSidebar from './MenuListSidebar'
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setAlamat, setEmail, setFotoProfile, setJenisKelamin, setNamaLengkap, setNoTelp, setTanggalLahir, setUsername, set_Id } from '@/store/user';

const SidebarUserMenu = () => {

      const router = useRouter();
      const dispatch = useDispatch();

      const handleLogout = () => {
            Cookies.remove('token');
            Cookies.remove('userId');

            dispatch(set_Id(null));
            dispatch(setUsername(null));
            dispatch(setEmail(null));
            dispatch(setNoTelp(null));
            dispatch(setAlamat(null));
            dispatch(setFotoProfile(null));
            dispatch(setNamaLengkap(null));
            dispatch(setJenisKelamin(null));
            dispatch(setTanggalLahir(null));

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
                              <svg className='w-6 h-6 opacity-20' viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3879 0.643311C8.3334 0.643311 6.325 1.25255 4.61671 2.39399C2.90843 3.53544 1.57698 5.15781 0.790739 7.05596C0.00450093 8.95411 -0.201215 11.0428 0.199606 13.0578C0.600427 15.0729 1.58978 16.9239 3.04256 18.3766C4.49534 19.8294 6.34629 20.8188 8.36136 21.2196C10.3764 21.6204 12.4651 21.4147 14.3632 20.6285C16.2614 19.8422 17.8838 18.5108 19.0252 16.8025C20.1666 15.0942 20.7759 13.0858 20.7759 11.0312C20.7728 8.27715 19.6773 5.63675 17.7299 3.68931C15.7824 1.74187 13.142 0.646428 10.3879 0.643311ZM10.388 17.4239C10.1509 17.4239 9.9192 17.3536 9.72209 17.2219C9.52498 17.0902 9.37135 16.903 9.28063 16.6839C9.18991 16.4649 9.16617 16.2239 9.21242 15.9914C9.25867 15.7589 9.37283 15.5453 9.54045 15.3777C9.70808 15.2101 9.92165 15.0959 10.1542 15.0497C10.3867 15.0034 10.6277 15.0272 10.8467 15.1179C11.0657 15.2086 11.2529 15.3622 11.3846 15.5593C11.5163 15.7565 11.5866 15.9882 11.5866 16.2253C11.5866 16.5431 11.4603 16.848 11.2355 17.0728C11.0108 17.2976 10.7059 17.4239 10.388 17.4239ZM11.187 12.5404V12.6299C11.187 12.8418 11.1028 13.0451 10.953 13.1949C10.8031 13.3448 10.5999 13.429 10.3879 13.429C10.176 13.429 9.97278 13.3448 9.82292 13.1949C9.67307 13.0451 9.58888 12.8418 9.58888 12.6299V11.8308C9.58889 11.6189 9.67308 11.4156 9.82293 11.2658C9.97278 11.1159 10.176 11.0317 10.3879 11.0317C10.7831 11.0317 11.1693 10.9146 11.4978 10.6951C11.8263 10.4756 12.0824 10.1636 12.2336 9.79854C12.3848 9.43351 12.4243 9.03184 12.3472 8.64433C12.2702 8.25682 12.0799 7.90086 11.8005 7.62148C11.5211 7.3421 11.1652 7.15184 10.7777 7.07476C10.3902 6.99768 9.9885 7.03724 9.62347 7.18844C9.25844 7.33964 8.94645 7.59569 8.72694 7.92421C8.50743 8.25272 8.39027 8.63895 8.39027 9.03406C8.39027 9.24598 8.30608 9.44923 8.15623 9.59909C8.00637 9.74894 7.80312 9.83313 7.5912 9.83313C7.37927 9.83313 7.17602 9.74894 7.02617 9.59909C6.87631 9.44923 6.79212 9.24598 6.79212 9.03406C6.79221 8.35717 6.98335 7.69405 7.34357 7.12097C7.70378 6.54788 8.21843 6.08811 8.82834 5.79452C9.43825 5.50094 10.1186 5.38546 10.7913 5.46138C11.4639 5.5373 12.1014 5.80153 12.6305 6.22368C13.1596 6.64583 13.5589 7.20875 13.7823 7.84771C14.0057 8.48666 14.0442 9.17571 13.8934 9.83558C13.7426 10.4955 13.4086 11.0994 12.9299 11.5779C12.4511 12.0564 11.847 12.39 11.187 12.5404Z" fill="black"/>
                              </svg>
                              <h6 className='text-black text-[15px] font-normal opacity-30' style={workSans.style}>Bantuan</h6>
                        </div>
                        <Link href={"/"} onClick={handleLogout}>
                              <div className='flex flex-row justify-start items-center gap-4'>
                                    <svg className='w-6 h-6 opacity-20' viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M17.3809 9.12134L21.5749 13.3165L17.3809 17.5116" stroke="black" strokeWidth="2.13086" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M10.3879 13.3164H21.572" stroke="black" strokeWidth="2.13086" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M10.3879 22.1062H4.79443C4.58251 22.1062 4.37926 22.022 4.2294 21.8722C4.07955 21.7223 3.99536 21.5191 3.99536 21.3071V5.32568C3.99536 5.11376 4.07955 4.91051 4.2294 4.76065C4.37926 4.6108 4.58251 4.52661 4.79443 4.52661H10.3879" stroke="black" strokeWidth="2.13086" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <h6 className='text-black text-[15px] font-normal opacity-30' style={workSans.style}>Logout</h6>
                              </div>
                        </Link>
                  </div>
            </>

      )
}

export default SidebarUserMenu