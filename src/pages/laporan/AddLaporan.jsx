import AddFormPungliContainer from '@/components/AddFormPungliContainer';
import Breadcumb from '@/components/Breadcumb';
import SidebarUserMenu from '@/components/SidebarUserMenu';
import StatistikPungliCard from '@/components/StatistikPungliCard';
import UserActiveListCard from '@/components/UserActiveListCard';
import Head from 'next/head';
import { useEffect } from 'react';
import * as cookie from 'cookie';
import axios from 'axios';

export default function AddLaporan (props) {
      
      useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                  document.body.style.overflow = ''; 
            };
      }, []);

      return (
            <div className='overflow-hidden'>
                  <Head>
				<title>Halaman Tambah Laporan | Bantai Pungli</title>
			</Head>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-2 px-8 overflow-y-scroll h-screen pb-40'>
                              <SidebarUserMenu/>
                        </div>
                        <div className='col-span-10 bg-[#F1F3F4] overflow-y-auto h-screen pb-48'>
                              <Breadcumb/>
                              <div className='grid grid-cols-12 px-6 gap-6 mt-10'>
                                    <div className='col-span-8'>
                                          <AddFormPungliContainer dataKategoriList={props.kategoriAll}/>
                                    </div>
                                    <div className='col-span-4'>
                                          <div className='grid grid-cols-12 gap-6'>
                                                <div className='col-span-12'>
                                                      <UserActiveListCard/>
                                                </div>
                                                <div className='col-span-12'>
                                                      <StatistikPungliCard
                                                            dataUserAll={props.userAll}
                                                            dataLaporanPungli={props.laporanPungli}
                                                      />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const kategoriAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/kategoriPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const userAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const laporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      return { props: { 
            kategoriAll: kategoriAllRes.data,
            userAll: userAllRes.data,
            laporanPungli: laporanPungliRes.data,
      }}
}