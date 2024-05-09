import React, { useState } from 'react';
import Head from 'next/head';
import Image from "next/image";
import workSans from '@/libs/FontWorkSans';
import FemaleIcon from "../../assets/Female-Icon.png";
import SearchLaporanDetailProfil from '@/components/SearchLaporanDetailProfil';
import PungliCardPost from '@/components/PungliCardPost';
import Pagination from '@/components/Paginations';
import NavbarUser from '@/components/NavbarUser';
import * as cookie from 'cookie'
import axios from 'axios';
import IconDetailSelfLocation from '@/libs/svg/IconDetailSelfLocation';
import IconDetailSelfPhone from '@/libs/svg/IconDetailSelfPhone';
import IconDetailSelfTanggalLahir from '@/libs/svg/IconDetailSelfTanggalLahir';
import IconDetailSelfEmail from '@/libs/svg/IconDetailSelfEmail';

const DetailOtherUser = ({ userById, userByIdSelfRes, laporanPungli, komentarLaporanPungli, kategoriPungli }) => {

      const handleDate = (date) => {
            const newDate = new Date(date);
            return newDate.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      };

      const [currentPage, setCurrentPage] = useState(1);

      const dataPerPage = 3;

      const handlePageChange = (event, value) => {
            setCurrentPage(value);
      };

      const startIndex = (currentPage - 1) * dataPerPage;
      const endIndex = startIndex + dataPerPage;

      return (
            <div className='overflow-hidden'>
                  <Head>
				<title>Halaman Detail User Lain | Bantai Pungli</title>
			</Head>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                              <NavbarUser
                                    nama_lengkap={userByIdSelfRes.nama_lengkap}
                                    foto_profile={userByIdSelfRes.foto_profile}
                              />
                        </div>
                  </div>
                  <div className='grid grid-cols-12 bg-[#F1F3F4] pb-12'>
                        <div className='col-span-12'>
                              <div className='w-full h-[450px] bg-primary bg-pattern-money-pungli-detail-user-other bg-blend-multiply bg-center bg-cover'></div>
                        </div>
                        <div className='col-span-12 px-48 -mt-32'>
                              <div className='flex flex-row gap-40 items-end'>
                                    <div className='flex flex-col'>
                                          <div className='relative rounded-full w-44 h-44 overflow-hidden border-[3px] border-white border-solid'>
                                                <Image className='object-cover object-center' layout='fill' src={userById.foto_profile} alt='profile-user' />
                                          </div>
                                          <div className='flex flex-row items-center mt-8 gap-8'>
                                                <h4 className='font-bold text-4xl text-font-dark-02' style={workSans.style}>
                                                      {userById.nama_lengkap}
                                                </h4>
                                                <Image className='h-16' src={FemaleIcon} alt='profile-user' />
                                          </div>
                                          <div className='mt-4'>
                                                <p className='text-[#8A94A6] font-medium text-base' style={workSans.style}>
                                                      ©{userById.username}
                                                </p>
                                          </div>
                                    </div>
                                    <div className='flex flex-row gap-28'>
                                          <div className='flex flex-col gap-8'>
                                                <div className='flex flex-row gap-4 items-center'>
                                                      <IconDetailSelfLocation/>
                                                      <h6 className='text-xl text-font-dark-02 font-normal' style={workSans.style}>
                                                            Kota {userById.alamat}
                                                      </h6>
                                                </div>
                                                <div className='flex flex-row gap-4 items-center'>
                                                      <IconDetailSelfPhone/>
                                                      <h6 className='text-xl text-font-dark-02 font-normal' style={workSans.style}>
                                                            {userById.no_telp}
                                                      </h6>
                                                </div>
                                          </div>
                                          <div className='flex flex-col gap-8'>
                                                <div className='flex flex-row gap-4 items-center'>
                                                      <IconDetailSelfTanggalLahir/>
                                                      <h6 className='text-xl text-font-dark-02 font-normal' style={workSans.style}>
                                                            {handleDate(userById.tanggal_lahir)}
                                                      </h6>
                                                </div>
                                                <div className='flex flex-row gap-4 items-center'>
                                                      <IconDetailSelfEmail/>
                                                      <h6 className='text-xl text-font-dark-02 font-normal' style={workSans.style}>
                                                            {userById.email}
                                                      </h6>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className='col-span-12 mt-32 px-48'>
                              <SearchLaporanDetailProfil textUserHeading={userById.nama_lengkap} />
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
      )
}

export default DetailOtherUser;

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const params = context.params.DetailOtherUser;

      const userByIdRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users/${params}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });
      
      const userByIdSelfRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users/${parsedCookies.userId}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const laporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const filterLaporanPungli = laporanPungliRes.data.filter((item) => {
            return item.userId._id === params;
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
                  userByIdSelfRes: userByIdSelfRes.data,
                  laporanPungli: filterLaporanPungli,
                  komentarLaporanPungli: komentarLaporanPungliRes.data,
                  kategoriPungli: kategoriAllRes.data
            }
      }
}