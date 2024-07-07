import Breadcumb from '@/components/Breadcumb';
import EditFormPungliContainer from '@/components/EditFormPungliContainer';
import SidebarUserMenu from '@/components/SidebarUserMenu';
import StatistikPungliCard from '@/components/StatistikPungliCard';
import UserActiveListCard from '@/components/UserActiveListCard';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as cookie from 'cookie'
import axios from 'axios';
import NavbarUser from '@/components/NavbarUser';

const EditLaporan = (props) => {

      const router = useRouter();
      
      useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                  document.body.style.overflow = ''; 
            };
      }, []);

      return (
            <div className='overflow-hidden'>
                  <Head>
				<title>Halaman Edit Laporan | Bantai Pungli</title>
			</Head>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                              <NavbarUser
                                    nama_lengkap={props.userById.nama_lengkap}
                                    foto_profile={props.userById.foto_profile}
                              />
                        </div>
                  </div>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-2 px-8 overflow-y-scroll h-screen pb-40'>
                              <SidebarUserMenu/>
                        </div>
                        <div className='col-span-10 bg-[#F1F3F4] overflow-y-auto h-screen pb-48'>
                              <Breadcumb/>
                              <div className='grid grid-cols-12 px-6 gap-6 mt-10'>
                                    <div className='col-span-8'>
                                          <EditFormPungliContainer
                                                laporanPungliById={props.laporanPungliById}
                                                dataKategoriList={props.kategoriAll}
                                          />
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

export default EditLaporan

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const laporanPungliByIdRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli/${context.params.EditLaporan}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const getAllKomentarLaporanPungli = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/komentarPungli`, {
            headers: {'Authorization': `Bearer ${parsedCookies.token}`}
      });
      const dataKomentarAllPungli = getAllKomentarLaporanPungli.data;
      const filterKomentarSesuaiIdLaporanPungli = dataKomentarAllPungli.filter((data) => data.pelaporanPungliId._id === context.params.EditLaporan);

      const userAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const laporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const kategoriAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/kategoriPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const userByIdRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users/${parsedCookies.userId}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      return {
            props: {
                  laporanPungliById: laporanPungliByIdRes.data,
                  komentarLaporanPungli: filterKomentarSesuaiIdLaporanPungli,
                  userAll: userAllRes.data,
                  laporanPungli: laporanPungliRes.data,
                  kategoriAll: kategoriAllRes.data,
                  userById: userByIdRes.data
            }
      }
}