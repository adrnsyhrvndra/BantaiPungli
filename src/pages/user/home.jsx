import Head from 'next/head'
import SidebarUserMenu from '@/components/SidebarUserMenu';
import CardHomeProfile from '@/components/CardHomeProfile';
import WeatherCard from '@/components/WeatherCard';
import UserActiveListCard from '@/components/UserActiveListCard';
import PungliCardPost from '@/components/PungliCardPost';
import StatistikPungliCard from '@/components/StatistikPungliCard';
import Breadcumb from '@/components/Breadcumb';
import { useEffect } from 'react';

const Home = () => {

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
                  <div className='grid grid-cols-12'>
                        <div className='col-span-2 px-8 overflow-y-scroll h-screen pb-40'>
                              <SidebarUserMenu/>
                        </div>
                        <div className='col-span-10 bg-[#F1F3F4] overflow-y-auto h-screen pb-48'>
                              <Breadcumb/>
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
                                                                  <PungliCardPost/>
                                                            </div>
                                                            <div className='col-span-12'>
                                                                  <PungliCardPost/>
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
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Home