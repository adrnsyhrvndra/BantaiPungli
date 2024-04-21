import CardInformasiLengkapProfil from '@/components/CardInformasiLengkapProfil';
import CardProfileSelf from '@/components/CardProfileSelf';
import Head from 'next/head';
import SearchLaporanDetailProfil from '@/components/SearchLaporanDetailProfil';
import PungliCardPost from '@/components/PungliCardPost';
import Pagination from '@/components/Paginations';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const DetailSelfProfile = ({idUser,dataUser,dataLaporanPungli,dataKomentarLaporanPungli}) => {

      const nama_lengkap = Cookies.get('nama_lengkap');
      const [namaLengkap,setNamaLengkap] = useState('');

      useEffect(() => {
            setNamaLengkap(nama_lengkap);
      },[nama_lengkap])

      return (
            <div className='px-48 pt-10 bg-[#F1F3F4] h-fit pb-32'>
                  <Head>
                        <title>Halaman Detail Profile By Adriansyah | Bantai Pungli</title>
                  </Head>
                  <div className='grid grid-cols-12 gap-6'>
                        <div className='col-span-3'>
                              <CardProfileSelf/>
                        </div>
                        <div className='col-span-9'>
                              <CardInformasiLengkapProfil/>
                        </div>
                        <div className='col-span-12 mt-16'>
                              <SearchLaporanDetailProfil textUserHeading={namaLengkap} />
                              <div className='mt-8 flex flex-col gap-8'>
                                    {
                                          dataLaporanPungli.map((data,index) => {

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
                                                                  kategoriPungliId={data.kategoriPungliId._id}
                                                                  userId={data.userId}
                                                                  dataKomentarLaporanPungli={dataKomentarLaporanPungli}
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
                                    <Pagination/>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default DetailSelfProfile