import Head from 'next/head';
import SidebarUserMenu from '@/components/SidebarUserMenu';
import React, { useEffect, useState } from 'react'
import Breadcumb from '@/components/Breadcumb';
import UserActiveListCard from '@/components/UserActiveListCard';
import StatistikPungliCard from '@/components/StatistikPungliCard';
import DetailPostPungli from '@/components/DetailPostPungli';
import FormCommentPostPungli from '@/components/FormCommentPostPungli';
import CommentPungli from '@/components/CommentPungli';
import { useRouter } from 'next/router';
import * as cookie from 'cookie'
import axios from 'axios';

export default function DetailLaporan ({ laporanPungliById, komentarLaporanPungli,userAll, laporanPungli }) {

      const router = useRouter();
      const { id } = router.query;

      console.log(userAll);

      const [komentar, setKomentar] = useState(komentarLaporanPungli);

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
                                          <DetailPostPungli
                                                id={laporanPungliById._id}
                                                dataUser={laporanPungliById.userId}
                                                dataKategoriPungli={laporanPungliById.kategoriPungliId}
                                                judul_pelaporan={laporanPungliById.judul_pelaporan}
                                                deskripsi_pelaporan={laporanPungliById.deskripsi_pelaporan}
                                                tanggal_pelaporan={laporanPungliById.tanggal_pelaporan}
                                                status_pelaporan={laporanPungliById.status_pelaporan}
                                                bukti_pendukung={laporanPungliById.bukti_pendukung}
                                                created_at={laporanPungliById.created_at}
                                                updated_at={laporanPungliById.updated_at}
                                          />
                                          <FormCommentPostPungli
                                                userId={laporanPungliById.userId._id}
                                                pelaporanPungliId={laporanPungliById._id}
                                          />
                                          <CommentPungli
                                                dataKomentar={komentarLaporanPungli}
                                          />
                                    </div>
                                    <div className='col-span-4'>
                                          <div className='grid grid-cols-12 gap-6'>
                                                <div className='col-span-12'>
                                                      <UserActiveListCard/>
                                                </div>
                                                <div className='col-span-12'>
                                                      <StatistikPungliCard
                                                            dataUserAll={userAll}
                                                            dataLaporanPungli={laporanPungli}
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

      const laporanPungliByIdRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli/${context.params.id}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const getAllKomentarLaporanPungli = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/komentarPungli`, {
            headers: {'Authorization': `Bearer ${parsedCookies.token}`}
      });
      const dataKomentarAllPungli = getAllKomentarLaporanPungli.data;
      const filterKomentarSesuaiIdLaporanPungli = dataKomentarAllPungli.filter((data) => data.pelaporanPungliId._id === context.params.id);

      const userAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const laporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      return {
            props: {
                  laporanPungliById: laporanPungliByIdRes.data,
                  komentarLaporanPungli: filterKomentarSesuaiIdLaporanPungli,
                  userAll: userAllRes.data,
                  laporanPungli: laporanPungliRes.data
            }
      }
}