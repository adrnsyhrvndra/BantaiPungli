import workSans from '@/libs/FontWorkSans'
import IconStatistikLaporanBelumSelesai from '@/libs/svg/IconStatistikLaporanBelumSelesai'
import IconStatistikLaporanKeseluruhan from '@/libs/svg/IconStatistikLaporanKeseluruhan'
import IconStatistikLaporanSelesai from '@/libs/svg/IconStatistikLaporanSelesai'
import IconStatistikUser from '@/libs/svg/IconStatistikUser'
import React, { useEffect, useState } from 'react'

const StatistikPungliCard = ({dataLaporanPungli,dataUserAll}) => {
      const [countLaporanKeseluruhan, setCountLaporanKeseluruhan] = useState(0);
      const [presentasiWidthLaporanKeseluruhan, setPresentasiWidthLaporanKeseluruhan] = useState(0);
      
      const [countUser, setCountUser] = useState(0);
      const [presentasiWidthUser, setPresentasiWidthUser] = useState(0);
      
      useEffect(() => {

            const jumlahLaporanKeseluruhan = dataLaporanPungli.length;
            const presentaseJumlahKeseluruhanLaporan = jumlahLaporanKeseluruhan / 100 * 100
            const presentaseLaporanKeseluruhan = presentaseJumlahKeseluruhanLaporan + '%';
            
            const jumlahUser = dataUserAll.length;
            const presentaseJumlahUser = jumlahUser / 100 * 100
            const presentaseUser = presentaseJumlahUser + '%';

            setPresentasiWidthLaporanKeseluruhan(presentaseLaporanKeseluruhan);
            setCountLaporanKeseluruhan(jumlahLaporanKeseluruhan);

            setPresentasiWidthUser(presentaseUser);
            setCountUser(jumlahUser);

      }, [dataLaporanPungli, dataUserAll]);

      return (
            <div className='bg-white rounded-lg px-8 pt-7 pb-14 h-fit'>
                  <h6 className='text-xl font-semibold text-font-dark-02' style={workSans.style}>
                        Statistik Pungli
                  </h6>
                  <div className='flex flex-col gap-10 mt-10'>
                        <div className='flex flex-row gap-14 items-center'>
                              <div className='flex flex-row gap-6 items-start w-[50%]'>
                                    <div className='w-5 h-5'>
                                          <IconStatistikUser />
                                    </div>
                                    <div className='flex flex-col gap-0.5'>
                                          <h6 className='font-semibold text-[10px] text-[#6F7F95]' style={workSans.style}>
                                                Member Pengguna
                                          </h6>
                                          <h3 className='font-bold text-xl text-[#3B3551]' style={workSans.style}>
                                                {countUser}
                                          </h3>
                                    </div>
                              </div>
                              <div className='relative w-[50%]'>
                                    <div className='w-[100%] h-4 bg-[#EBEBEB] absolute z-0'></div>
                                    <div style={{ width: presentasiWidthUser }} className='w-[80%] h-4 bg-primary absolute z-50 flex justify-end items-center'>
                                          <div className='w-1 h-6 bg-secondary text-right'></div>
                                    </div>
                              </div>
                        </div>
                        <div className='flex flex-row gap-14 items-center'>
                              <div className={`flex flex-row gap-6 items-start w-[50%]`}>
                                    <div className='w-5 h-5'>
                                          <IconStatistikLaporanKeseluruhan/>
                                    </div>
                                    <div className='flex flex-col gap-0.5'>
                                          <h6 className='font-semibold text-[10px] text-[#6F7F95]' style={workSans.style}>
                                                Laporan Keseluruhan
                                          </h6>
                                          <h3 className='font-bold text-xl text-[#3B3551]' style={workSans.style}>
                                                {countLaporanKeseluruhan}
                                          </h3>
                                    </div>
                              </div>
                              <div className='relative w-[50%]'>
                                    <div className='w-[100%] h-4 bg-[#EBEBEB] absolute z-0'></div>
                                    <div style={{ width: presentasiWidthLaporanKeseluruhan }} className='h-4 bg-primary absolute z-50 flex justify-end items-center'>
                                          <div className='w-1 h-6 bg-secondary text-right'></div>
                                    </div>
                              </div>
                        </div>
                        <div className='flex flex-row gap-14 items-center'>
                              <div className='flex flex-row gap-6 items-start w-[50%]'>
                                    <div className='w-5 h-5'>
                                          <IconStatistikLaporanSelesai/>
                                    </div>
                                    <div className='flex flex-col gap-0.5'>
                                          <h6 className='font-semibold text-[10px] text-[#6F7F95]' style={workSans.style}>
                                                Laporan Selesai
                                          </h6>
                                          <h3 className='font-bold text-xl text-[#3B3551]' style={workSans.style}>
                                                7,365
                                          </h3>
                                    </div>
                              </div>
                              <div className='relative w-[50%]'>
                                    <div className='w-[100%] h-4 bg-[#EBEBEB] absolute z-0'></div>
                                    <div className='w-[80%] h-4 bg-primary absolute z-50 flex justify-end items-center'>
                                          <div className='w-1 h-6 bg-secondary text-right'></div>
                                    </div>
                              </div>
                        </div>
                        <div className='flex flex-row gap-14 items-center'>
                              <div className='flex flex-row gap-6 items-start w-[50%]'>
                                    <div className='w-5 h-5'>
                                          <IconStatistikLaporanBelumSelesai/>
                                    </div>
                                    <div className='flex flex-col gap-0.5'>
                                          <h6 className='font-semibold text-[10px] text-[#6F7F95]' style={workSans.style}>
                                                Laporan Belum Selesai
                                          </h6>
                                          <h3 className='font-bold text-xl text-[#3B3551]' style={workSans.style}>
                                                7,365
                                          </h3>
                                    </div>
                              </div>
                              <div className='relative w-[50%]'>
                                    <div className='w-[100%] h-4 bg-[#EBEBEB] absolute z-0'></div>
                                    <div className='w-[80%] h-4 bg-primary absolute z-50 flex justify-end items-center'>
                                          <div className='w-1 h-6 bg-secondary text-right'></div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default StatistikPungliCard