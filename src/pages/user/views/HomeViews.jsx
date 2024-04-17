import Head from 'next/head'
import SidebarUserMenu from '@/components/SidebarUserMenu';
import CardHomeProfile from '@/components/CardHomeProfile';
import WeatherCard from '@/components/WeatherCard';
import UserActiveListCard from '@/components/UserActiveListCard';
import PungliCardPost from '@/components/PungliCardPost';
import StatistikPungliCard from '@/components/StatistikPungliCard';
import Breadcumb from '@/components/Breadcumb';
import { useEffect } from 'react';
import Pagination from '@/components/Pagination';
import Cookies from 'js-cookie';

export default function ({ _id, username, nama_lengkap, email, no_telp, alamat, status_online,tanggal_lahir,jenis_kelamin, foto_profile, created_at, updated_at }) {

      Cookies.set('username', username, { expires: 1 });
      Cookies.set('email', email, { expires: 1 });
      Cookies.set('no_telp', no_telp, { expires: 1 });
      Cookies.set('alamat', alamat, { expires: 1 });
      Cookies.set('status_online', status_online, { expires: 1 });
      Cookies.set('tanggal_lahir', tanggal_lahir, { expires: 1 });
      Cookies.set('jenis_kelamin', jenis_kelamin, { expires: 1 });
      Cookies.set('foto_profile', foto_profile, { expires: 1 });

      useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                  document.body.style.overflow = ''; 
            };
      }, []);

      return (
            <div className='overflow-hidden'>
                  <Head>
				<title>Halaman Berandas | Bantai Pungli</title>
			</Head>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-2 px-8 overflow-y-scroll h-screen pb-40'>
                              <SidebarUserMenu/>
                        </div>
                        <div className='col-span-10 bg-[#F1F3F4] overflow-y-auto h-screen pb-48'>
                              <Breadcumb namaWelcome={nama_lengkap}/>
                              <div className='grid grid-cols-12 px-6 gap-6 mt-10'>
                                    <div className='col-span-8'>
                                          <div className='grid grid-cols-12 gap-6'>
                                                <div className='col-span-6'>
                                                      <CardHomeProfile/>
                                                </div>
                                                <div className='col-span-6'>
                                                      <WeatherCard/>
                                                </div>
                                                <div className='col-span-12'>
                                                      <div className='grid grid-cols-12 gap-6'>
                                                            <div className='col-span-12'>
                                                                  <PungliCardPost 
                                                                        imageSizeWidth="w-[470px]" 
                                                                        imageSizeHeight="h-[320px]" 
                                                                        judulTextSize="text-2xl" 
                                                                        deskripsiTextSize="text-xs"
                                                                  />
                                                            </div>
                                                            <div className='col-span-12'>
                                                                  <PungliCardPost 
                                                                        imageSizeWidth="w-[470px]" 
                                                                        imageSizeHeight="h-[320px]" 
                                                                        judulTextSize="text-2xl" 
                                                                        deskripsiTextSize="text-xs"
                                                                  />
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='col-span-4'>
                                          <div className='grid grid-cols-12 gap-6'>
                                                <div className='col-span-12'>
                                                      <UserActiveListCard/>
                                                </div>
                                                <div className='col-span-12'>
                                                      <StatistikPungliCard/>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='col-span-12 mt-4'>
                                          <Pagination/>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
};