import React, { useState } from 'react';
import axios from 'axios';
import * as cookie from 'cookie';
import Head from 'next/head';
import NavbarUser from '@/components/NavbarUser';
import SidebarUserMenu from '@/components/SidebarUserMenu';
import Breadcumb from '@/components/Breadcumb';
import UserActiveListCard from '@/components/UserActiveListCard';
import StatistikPungliCard from '@/components/StatistikPungliCard';
import PungliCardPost from '@/components/PungliCardPost';
import Pagination from '@/components/Paginations';
import workSans from '@/libs/FontWorkSans';

export default function SelesaiLaporan({ GetDataUser, GetDataUserById, GetDataLaporanPungli, GetDataKomentar }) {

      const [currentPage, setCurrentPage] = useState(1);
      const dataPerPage = 2;

      const handlePageChange = (event, value) => {
            setCurrentPage(value);
      };

      const startIndex = (currentPage - 1) * dataPerPage;
      const endIndex = startIndex + dataPerPage;

      const FilteredLaporanPungliYangSelesaiOnly = GetDataLaporanPungli.filter((data) => {
            return data.status_pelaporan === 'Selesai';
      });

      return (

            <div className='overflow-hidden'>
                  <Head>
				<title>Halaman Laporan Pungli Selesai | Bantai Pungli</title>
			</Head>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                              <NavbarUser
                                    nama_lengkap={GetDataUserById.nama_lengkap}
                                    foto_profile={GetDataUserById.foto_profile}
                              />
                        </div>
                  </div>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-2 px-8 overflow-y-scroll h-screen pb-40'>
                              <SidebarUserMenu/>
                        </div>
                        <div className='col-span-10 bg-[#F1F3F4] overflow-y-auto h-screen pb-48'>
                              <Breadcumb namaWelcome={GetDataUserById.nama_lengkap}/>
                              <div className="grid grid-cols-12 px-6 mt-12">
                                    <div className="col-span-12">
                                          <h2 className={`text-left font-semibold text-3xl leading-normal text-[#364045]`} style={workSans.style} >
                                                Laporan Pungli Yang Sudah Selesai ada : <span className='font-bold text-primary'> {FilteredLaporanPungliYangSelesaiOnly.length} laporan </span>
                                          </h2>
                                    </div>
                              </div>
                              <div className='grid grid-cols-12 px-6 gap-6 mt-6'>
                                    <div className='col-span-8'>
                                          <div className='grid grid-cols-12 gap-6'>
                                                <div className='col-span-12'>
                                                      <div className='grid grid-cols-12 gap-7'>
                                                            <div className='col-span-12'>
                                                                  {
                                                                        FilteredLaporanPungliYangSelesaiOnly?.slice(startIndex, endIndex).map((item, index) => {

                                                                              return (
                                                                                    <>
                                                                                          <PungliCardPost
                                                                                                id={item._id}
                                                                                                idForEdit={item._id}
                                                                                                judul_pelaporan={item.judul_pelaporan}
                                                                                                deskripsi_pelaporan={item.deskripsi_pelaporan}
                                                                                                tanggal_pelaporan={item.tanggal_pelaporan}
                                                                                                status_pelaporan={item.status_pelaporan}
                                                                                                bukti_pendukung={item.bukti_pendukung}
                                                                                                created_at={item.created_at}
                                                                                                updated_at={item.updated_at}
                                                                                                kategoriPungliId={item.kategoriPungliId}
                                                                                                userId={item.userId}
                                                                                                idPungliUser={item.userId._id}
                                                                                                dataKomentarLaporanPungli={GetDataKomentar}
                                                                                                imageSizeWidth="w-[470px]" 
                                                                                                imageSizeHeight="h-[320px]" 
                                                                                                judulTextSize="text-2xl" 
                                                                                                deskripsiTextSize="text-xs"
                                                                                          />
                                                                                    </>
                                                                              )
                                                                        })
                                                                  }
                                                            </div>
                                                            <div className='col-span-12'>
                                                                  <Pagination
                                                                        totalItems={FilteredLaporanPungliYangSelesaiOnly?.length || 0}
                                                                        itemsPerPage={dataPerPage}
                                                                        currentPage={currentPage}
                                                                        onPageChange={handlePageChange}
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
                                                      <StatistikPungliCard
                                                            dataUserAll={GetDataUser}
                                                            dataLaporanPungli={GetDataLaporanPungli}
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

      const API_GET_DATA_USERS = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const API_GET_DATA_USERS_BY_ID = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users/${parsedCookies.userId}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const API_GET_DATA_LAPORAN_PUNGLI = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungliNotAuth`);

      const API_GET_DATA_KOMENTAR = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/komentarPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      return { 
            props: {
			GetDataUser: API_GET_DATA_USERS.data,
                  GetDataUserById: API_GET_DATA_USERS_BY_ID.data,
                  GetDataLaporanPungli: API_GET_DATA_LAPORAN_PUNGLI.data,
                  GetDataKomentar: API_GET_DATA_KOMENTAR.data
            }
      }
}
