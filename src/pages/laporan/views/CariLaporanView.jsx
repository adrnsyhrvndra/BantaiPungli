import Breadcumb from '@/components/Breadcumb'
import SidebarUserMenu from '@/components/SidebarUserMenu'
import StatistikPungliCard from '@/components/StatistikPungliCard'
import UserActiveListCard from '@/components/UserActiveListCard'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import workSans from '@/libs/FontWorkSans'
import ListCheckBoxFilterLaporan from '@/components/ListCheckBoxFilterLaporan'
import SearchLaporan from '@/components/SearchLaporan'
import PungliCardPost from '@/components/PungliCardPost'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Paginations from '@/components/Paginations'

const CariLaporanView = ({dataKategoriPungli,dataLaporanPungli,komentarLaporanPungli,dataUserAll}) => {

      const [arrayLaporanPungli, setArrayLaporanPungli] = useState(null);
      const [currentPage, setCurrentPage] = useState(1);
      const dataPerPage = 2;

      const router = useRouter();
      const laporanSearch = useSelector(state => state.laporanReducerRedux.laporanSearch);
      const laporanFilter = useSelector(state => state.laporanReducerRedux.laporanFilter);

      const handlePageChange = (event, value) => {
            setCurrentPage(value);
      };

      const startIndex = (currentPage - 1) * dataPerPage;
      const endIndex = startIndex + dataPerPage;

      useEffect(() => {

            if (laporanSearch.length >= 1 || laporanFilter.length >= 1) {

                  const filterSearch = dataLaporanPungli
                  .filter((data) => {
                        const matchedSearch = data.judul_pelaporan.toLowerCase().includes(laporanSearch.toLowerCase());
                        const matchedFilter = data.kategoriPungliId._id.includes(laporanFilter);
                        return matchedSearch && matchedFilter;
                  });

                  router.replace(router.asPath);
                  setArrayLaporanPungli(filterSearch);
            }

            if (laporanSearch === '' && laporanFilter.length === 0) {
                  setArrayLaporanPungli(dataLaporanPungli);
            }

      }, [laporanSearch, laporanFilter]);

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
                                                      <SearchLaporan totalItems={dataLaporanPungli.length}/>
                                                      <div className='flex flex-col gap-6 mt-6'>
                                                            {
                                                                  arrayLaporanPungli && (
                                                                        
                                                                        arrayLaporanPungli.slice(startIndex, endIndex).map((item, index) => {

                                                                        return (
                                                                              <>
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
                                                                                          dataKomentarLaporanPungli={komentarLaporanPungli}
                                                                                          imageSizeWidth="w-[470px]" 
                                                                                          imageSizeHeight="h-[320px]" 
                                                                                          judulTextSize="text-2xl" 
                                                                                          deskripsiTextSize="text-xs"
                                                                                    />
                                                                              </>
                                                                        )})
                                                                  )
                                                            }

                                                            {
                                                                  arrayLaporanPungli === null && (
                                                                        
                                                                        dataLaporanPungli.slice(startIndex, endIndex).map((item,index) => {

                                                                              return (
                                                                                    <>
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
                                                                                                dataKomentarLaporanPungli={komentarLaporanPungli}
                                                                                                imageSizeWidth="w-[470px]" 
                                                                                                imageSizeHeight="h-[320px]" 
                                                                                                judulTextSize="text-2xl" 
                                                                                                deskripsiTextSize="text-xs"
                                                                                          />
                                                                                    </>
                                                                              )

                                                                        })
                                                                  )
                                                            }

                                                      </div>
                                                </div>
                                                <div className='col-span-12'>
                                                      <Paginations
                                                            totalItems={dataLaporanPungli.length}
                                                            itemsPerPage={dataPerPage}
                                                            currentPage={currentPage}
                                                            onPageChange={handlePageChange}
                                                      />
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
                                                            dataUserAll={dataUserAll}
                                                            dataLaporanPungli={dataLaporanPungli}
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

export default CariLaporanView