import Breadcumb from '@/components/Breadcumb';
import EditFormPungliContainer from '@/components/EditFormPungliContainer';
import SidebarUserMenu from '@/components/SidebarUserMenu';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as cookie from 'cookie'
import axios from 'axios';
import NavbarUser from '@/components/NavbarUser';

export default function EditDataPungli ({GetDataLaporanPungliById, GetDataAdminById, GetDataKategoriLaporanPungli}){

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
				<title>Halaman Admin Edit Laporan | Bantai Pungli</title>
			</Head>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                              <NavbarUser
                                    nama_lengkap={GetDataAdminById.nama_lengkap}
                                    foto_profile={GetDataAdminById.foto_profile}
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
                                    <div className='col-span-12'>
                                          <EditFormPungliContainer
                                                laporanPungliById={GetDataLaporanPungliById}
                                                dataKategoriList={GetDataKategoriLaporanPungli}
                                          />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
};


export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const API_GET_DATA_ADMIN_BY_ID = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/admin/${parsedCookies.userId}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const API_GET_DATA_LAPORAN_PUNGLI_BY_ID  = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli/${context.params.EditDataPungli}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const API_GET_DATA_KATEGORI_LAPORAN_PUNGLI = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/kategoriPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      return {
            props: {
                  GetDataAdminById: API_GET_DATA_ADMIN_BY_ID.data,
                  GetDataLaporanPungliById: API_GET_DATA_LAPORAN_PUNGLI_BY_ID.data,
                  GetDataKategoriLaporanPungli: API_GET_DATA_KATEGORI_LAPORAN_PUNGLI.data
            }
      }

}