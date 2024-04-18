import Breadcumb from '@/components/Breadcumb'
import SidebarUserMenu from '@/components/SidebarUserMenu'
import StatistikPungliCard from '@/components/StatistikPungliCard'
import UserActiveListCard from '@/components/UserActiveListCard'
import React, { useEffect } from 'react'
import Head from 'next/head'
import workSans from '@/libs/FontWorkSans'
import ListCheckBoxFilterLaporan from '@/components/ListCheckBoxFilterLaporan'
import SearchLaporan from '@/components/SearchLaporan'
import PungliCardPost from '@/components/PungliCardPost'
import Pagination from '@/components/Pagination'

const CariLaporanView = ({dataKategoriPungli,dataLaporanPungli,dataKomentarLaporanPungli}) => {

      useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                  document.body.style.overflow = ''; 
            };
      }, []);

      return (
            <div className='overflow-hidden'>
                  <Head>
                        <title>Halaman Cari Laporan | Bantai Pungli</title>
                  </Head>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-2 px-8 overflow-y-scroll h-screen pb-40'>
                              <SidebarUserMenu/>
                        </div>
                        <div className='col-span-10 bg-[#F1F3F4] overflow-y-auto h-screen pb-48'>
                              <Breadcumb/>
                              <div className='grid grid-cols-12 px-6 gap-6 mt-10'>
                                    <div className='col-span-8'>
                                          <div className='grid grid-cols-12 gap-12'>
                                                <div className='col-span-12'>
                                                      <h4 className='text-xl text-[#17181C] font-medium' style={workSans.style}>
                                                            Filter Berdasarkan Kategori Pungli
                                                      </h4>
                                                      <ListCheckBoxFilterLaporan dataKategoriPungli={dataKategoriPungli}/>
                                                      <SearchLaporan/>
                                                      <div className='flex flex-col gap-6 mt-6'>
                                                            {
                                                                  dataLaporanPungli.map((item, index) => {

                                                                        return (
                                                                              <PungliCardPost
                                                                                    id={item._id}
                                                                                    judul_pelaporan={item.judul_pelaporan}
                                                                                    deskripsi_pelaporan={item.deskripsi_pelaporan}
                                                                                    tanggal_pelaporan={item.tanggal_pelaporan}
                                                                                    status_pelaporan={item.status_pelaporan}
                                                                                    bukti_pendukung={item.bukti_pendukung}
                                                                                    created_at={item.created_at}
                                                                                    updated_at={item.updated_at}
                                                                                    kategoriPungliId={item.kategoriPungliId}
                                                                                    userId={item.userId}
                                                                                    imageSizeWidth="w-[470px]" 
                                                                                    imageSizeHeight="h-[320px]" 
                                                                                    judulTextSize="text-2xl" 
                                                                                    deskripsiTextSize="text-xs"
                                                                              />
                                                                        )
                                                                  })
                                                            }
                                                      </div>
                                                </div>
                                                <div className='col-span-12'>
                                                      <Pagination/>
                                                </div>
                                          </div>
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

export default CariLaporanView