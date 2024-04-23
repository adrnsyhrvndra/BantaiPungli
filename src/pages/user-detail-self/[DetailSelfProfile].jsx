import CardInformasiLengkapProfil from '@/components/CardInformasiLengkapProfil';
import CardProfileSelf from '@/components/CardProfileSelf';
import Head from 'next/head';
import SearchLaporanDetailProfil from '@/components/SearchLaporanDetailProfil';
import PungliCardPost from '@/components/PungliCardPost';
import Pagination from '@/components/Paginations';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import * as cookie from 'cookie'
import axios from 'axios';
import NavbarUser from '@/components/NavbarUser';

const DetailSelfProfile = ({userById,laporanPungli,komentarLaporanPungli,kategoriPungli}) => {

      const nama_lengkap = Cookies.get('nama_lengkap');
      const [namaLengkap,setNamaLengkap] = useState('');
      const [currentPage, setCurrentPage] = useState(1);

      const dataPerPage = 3;

      const handlePageChange = (event, value) => {
            setCurrentPage(value);
      };

      const startIndex = (currentPage - 1) * dataPerPage;
      const endIndex = startIndex + dataPerPage;

      useEffect(() => {
            setNamaLengkap(nama_lengkap);
      },[nama_lengkap]);

      return (

            <>
                  <Head>
                        <title>Halaman Detail Profile By Adriansyah | Bantai Pungli</title>
                  </Head>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                              <NavbarUser
                                    nama_lengkap={userById.nama_lengkap}
                                    foto_profile={userById.foto_profile}
                              />
                        </div>
                  </div>
                  <div className='px-48 pt-10 bg-[#F1F3F4] h-fit pb-32'>
                        <div className='grid grid-cols-12 gap-6'>
                              <div className='col-span-3'>
                                    <CardProfileSelf
                                          userById={userById}
                                    />
                              </div>
                              <div className='col-span-9'>
                                    <CardInformasiLengkapProfil
                                          userById={userById}
                                    />
                              </div>
                              <div className='col-span-12 mt-16'>
                                    <SearchLaporanDetailProfil textUserHeading={namaLengkap} />
                                    <div className='mt-8 flex flex-col gap-8'>
                                          {
                                                laporanPungli.slice(startIndex, endIndex).map((data,index) => {

                                                      return (
                                                            <>
                                                                  <PungliCardPost
                                                                        id={data._id}
                                                                        judul_pelaporan={data.judul_pelaporan}
                                                                        deskripsi_pelaporan={data.deskripsi_pelaporan}
                                                                        tanggal_pelaporan={data.tanggal_pelaporan}
                                                                        status_pelaporan={data.status_pelaporan}
                                                                        bukti_pendukung={data.bukti_pendukung}
                                                                        created_at={data.created_at}
                                                                        updated_at={data.updated_at}
                                                                        kategoriPungliId={data.kategoriPungliId}
                                                                        userId={data.userId}
                                                                        dataKomentarLaporanPungli={komentarLaporanPungli}
                                                                        imageSizeWidth="w-[512px]" 
                                                                        imageSizeHeight="h-[320px]" 
                                                                        judulTextSize="text-3xl" 
                                                                        deskripsiTextSize="text-sm"
                                                                  />
                                                            </>
                                                      )
                                                })
                                          }
                                    </div>
                                    <div className='mt-14 mx-auto w-fit'>
                                          <Pagination
                                                totalItems={laporanPungli.length}
                                                itemsPerPage={dataPerPage}
                                                currentPage={currentPage}
                                                onPageChange={handlePageChange}
                                          />
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default DetailSelfProfile;

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const params = context.params.DetailSelfProfile;

      const userByIdRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users/${params}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const laporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });
      const filterLaporanPungli = laporanPungliRes.data.filter((item) => {
            return item.userId._id === parsedCookies.userId;
      });

      const komentarLaporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/komentarPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const kategoriAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/kategoriPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      return {
            props: {
                  userById: userByIdRes.data,
                  laporanPungli: filterLaporanPungli,
                  komentarLaporanPungli: komentarLaporanPungliRes.data,
                  kategoriPungli: kategoriAllRes.data
            }
      }
}