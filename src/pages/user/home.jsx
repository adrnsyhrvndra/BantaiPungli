import Head from 'next/head'
import NavbarUser from '@/components/NavbarUser';
import { useEffect } from 'react';
import SidebarUserMenu from '@/components/SidebarUserMenu';

const home = () => {
      useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                  document.body.style.overflow = ''; 
            };
      }, []);

      return (
            <div className='overflow-hidden'>
                  <Head>
				<title>Halaman Beranda | Bantai Pungli</title>
			</Head>
                  <NavbarUser/>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-2 px-8 overflow-y-auto h-screen pb-40'>
                              <SidebarUserMenu/>
                        </div>
                        <div className='col-span-10 bg-[#F1F3F4] overflow-y-auto h-screen'></div>
                  </div>
            </div>
      )
}

export default home