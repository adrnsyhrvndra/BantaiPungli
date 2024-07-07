import AddFormPungliContainer from '@/components/AddFormPungliContainer';
import Breadcumb from '@/components/Breadcumb';
import SidebarUserMenu from '@/components/SidebarUserMenu';
import StatistikPungliCard from '@/components/StatistikPungliCard';
import UserActiveListCard from '@/components/UserActiveListCard';
import Head from 'next/head';
import { useEffect } from 'react';
import * as cookie from 'cookie';
import axios from 'axios';
import NavbarUser from '@/components/NavbarUser';
import Cookies from 'js-cookie';
import NotLoginImage from '@/components/NotLoginImage';

export default function AddLaporan (props) {

      const GetCookiesToken = Cookies.get('token');
      
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
                        <div className='col-span-12'>
                              <NavbarUser
                                    nama_lengkap={'Login dan Laporkan'}
                                    foto_profile={'https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1720332399/bantai-pungli/Ellipse_2_jpmd5y.png'}
                              />
                        </div>
                  </div>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-2 px-8 overflow-y-scroll h-screen pb-40'>
                              <SidebarUserMenu/>
                        </div>
                        <div className='col-span-10 bg-[#F1F3F4] overflow-y-auto h-screen pb-48'>
                              <Breadcumb namaWelcome={'Silahkan Login Untuk Mengakses Fiturnya'}/>
                              {
                                    (!GetCookiesToken) &&

                                    <>
                                          <NotLoginImage/>
                                    </>
                              }

                              {
                                    (GetCookiesToken) &&

                                    <>
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
                                    </>
                              }

                        </div>
                  </div>
            </div>
      )
}

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);
      let kategoriAllRes = [];
      let userAllRes = [];
      let laporanPungliRes = [];
      let userByIdRes = [];

      // Kalau user login dan ada token.
      if (parsedCookies.token) {

            const kategoriAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/kategoriPungli`, {
                  headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
            });
      
            const userAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users`, {
                  headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
            });
      
            const laporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli`, {
                  headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
            });
      
            const userByIdRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users/${parsedCookies.userId}`, {
                  headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
            });
      
            
      }

      return { 
            
            props: { 
                  kategoriAll: kategoriAllRes.data || [],
                  userAll: userAllRes.data || [],
                  laporanPungli: laporanPungliRes.data || [],
                  userById: userByIdRes.data || [],
            }
      }

}