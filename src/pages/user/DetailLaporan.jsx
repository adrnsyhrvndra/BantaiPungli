import Head from 'next/head';
import SidebarUserMenu from '@/components/SidebarUserMenu';
import React, { useEffect } from 'react'
import Breadcumb from '@/components/Breadcumb';
import UserActiveListCard from '@/components/UserActiveListCard';
import StatistikPungliCard from '@/components/StatistikPungliCard';
import DetailPostPungli from '@/components/DetailPostPungli';
import FormCommentPostPungli from '@/components/FormCommentPostPungli';
import CommentPungli from '@/components/CommentPungli';

const DetailLaporan = () => {

      useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                  document.body.style.overflow = ''; 
            };
      }, []);

      return (
            <div className='overflow-hidden'>
                  <Head>
				<title>Halaman Detail Laporan | Bantai Pungli</title>
			</Head>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-2 px-8 overflow-y-scroll h-screen pb-40'>
                              <SidebarUserMenu/>
                        </div>
                        <div className='col-span-10 bg-[#F1F3F4] overflow-y-auto h-screen pb-48'>
                              <Breadcumb/>
                              <div className='grid grid-cols-12 px-6 gap-6 mt-10'>
                                    <div className='col-span-8'>
                                          <DetailPostPungli/>
                                          <FormCommentPostPungli/>
                                          <CommentPungli/>
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

export default DetailLaporan