import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import workSans from '@/libs/FontWorkSans'
import Link from 'next/link';
import IconPungliCardUpvote from '@/libs/svg/IconPungliCardUpvote';
import IconPungliCardKomentar from '@/libs/svg/IconPungliCardKomentar';
import IconPungliCardStatus from '@/libs/svg/IconPungliCardStatus';
import IconPungliCardKategori from '@/libs/svg/IconPungliCardKategori';
import Cookies from 'js-cookie';

const PungliCardPost = ({imageSizeWidth,imageSizeHeight,judulTextSize,deskripsiTextSize, judul_pelaporan,deskripsi_pelaporan,tanggal_pelaporan,status_pelaporan,bukti_pendukung,created_at,updated_at,kategoriPungliId,userId,id,dataKomentarLaporanPungli,idPungliUser,idForEdit}) => {

      const userIdFromCookies = Cookies.get('userId'); 

      const [gambarBuktiPendukung, setGambarBuktiPendukung] = useState();
      const [fotoProfile, setFotoProfile] = useState();
      const [userIdCookies, setUserIdCookies] = useState();
      const [arrayIdLaporan, setArrayIdLaporan] = useState([]);

      const dataKomentarFilter = dataKomentarLaporanPungli.filter((item) => {
            const pelaporanPungliIdFromKomentarData = item.pelaporanPungliId._id;
            const idLaporanPungli = arrayIdLaporan;

            return pelaporanPungliIdFromKomentarData === idLaporanPungli;
      });

      const handleDeskripsiLaporanLimitString = (deskripsi_pelaporan) => {
            if (deskripsi_pelaporan.length >= 126) {
                  return deskripsi_pelaporan.slice(0, 125) + '...';
            } else {
                  return deskripsi_pelaporan;
            }
      }

      const handleDateTimeFormat = (date) => {
            const dateNow = new Date();
            const datePost = new Date(date);
            const diffTime = Math.abs(dateNow - datePost);
            
            if (diffTime < 3600000) {

                  return Math.floor(diffTime / 60000) + ' Menit Yang Lalu';

            } else if (diffTime < 86400000) {

                  return Math.floor(diffTime / 3600000) + ' Jam Yang Lalu';

            } else {

                  return Math.floor(diffTime / 86400000) + ' Hari Yang Lalu';

            }
      }

      const DetailLaporan = id;
      const EditLaporan = idForEdit;

      const handleButtonPungliDetail = (firstId,secondId,type) => {

            if (firstId !== secondId) {
                  return (
                      <Link href={`/laporan-detail/${DetailLaporan}`}>
                          <button type='button' className='w-full py-4 bg-primary mt-8 text-white rounded-md font-medium text-xs' style={workSans.style}>
                              Detail Laporan Pungli
                          </button>
                      </Link>
                  );
              } else {
                  return (
                      <div className='flex flex-row gap-2'>
                          <Link href={`/laporan-detail/${EditLaporan}`} className='w-1/2'>
                              <button type='button' className='w-full py-4 bg-primary mt-8 text-white rounded-md font-medium text-xs' style={workSans.style}>
                                  Detail Laporan Pungli
                              </button>
                          </Link>
                          <Link href={`/laporan-edit/${DetailLaporan}`} className='w-1/2'>
                              <button type='button' className='w-full py-4 bg-[#E2E9EC] mt-8 text-primary rounded-md font-medium text-xs' style={workSans.style}>
                                  Update Laporan Pungli
                              </button>
                          </Link>
                      </div>
                  );
            }
      }

      useEffect(() => {
            setArrayIdLaporan(id);      
            setGambarBuktiPendukung(bukti_pendukung);
            setFotoProfile(userId.foto_profile);
            setUserIdCookies(userIdFromCookies);
      }, [bukti_pendukung, userId.foto_profile, id, userIdFromCookies]);

      return (
            <div className='bg-white px-12 py-10 rounded-lg h-fit mb-3'>
                  <div className='flex flex-row gap-8 items-center'>
                        <div className={`${imageSizeWidth} ${imageSizeHeight} overflow-hidden relative rounded-lg`}>
                              <Image className='object-cover object-center rounded-lg' src={gambarBuktiPendukung} fill={true} alt='laporan-pungli' />
                        </div>
                        <div className='w-full'>
                              <div className='flex flex-col gap-2'>
                                    <h2 className={`text-left font-semibold ${judulTextSize} leading-normal text-[#364045]`} style={workSans.style} >
                                          {judul_pelaporan}
                                    </h2>
                                    <Link href={`/laporan/${id}`}>
                                          <p className={`${deskripsiTextSize} font-normal text-[#48555C]`} style={workSans.style}>
                                                {handleDeskripsiLaporanLimitString(deskripsi_pelaporan)}...
                                                <span className='text-primary font-extrabold leading-loose underline cursor-pointer' style={workSans.style}>LIHAT LEBIH DETAIL</span>
                                          </p>
                                    </Link>
                              </div>
                              <div className='flex flex-row items-center gap-8 mt-8'>
                                    <div className='flex flex-row gap-5 items-center'>
                                          <div className='relative w-12 h-12 rounded-full'>
                                                <Image 
                                                      className='rounded-full object-cover object-center w-12 h-12' 
                                                      src={fotoProfile} 
                                                      fill={true}
                                                      alt='user-profile'
                                                />
                                                <div className='h-3 w-3 bg-green-600 rounded-full absolute top-0.5 -right-0.5'></div>
                                          </div>
                                          <div className='flex flex-col gap-1'>
                                                <h6 className='font-semibold text-base text-[#48555B]' style={workSans.style}>
                                                      {userId.nama_lengkap}
                                                </h6>
                                                <p className='text-xs font-normal text-[#5E6F78]' style={workSans.style}>
                                                      {handleDateTimeFormat(created_at)}
                                                </p>
                                          </div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                          <div className='flex flex-row gap-2 items-center'>
                                                <IconPungliCardUpvote/>
                                                <h6 className='font-normal text-xs text-[#48555C] opacity-90' style={workSans.style}>124 Upvote</h6>
                                          </div>
                                          <div className='flex flex-row gap-2 items-center'>
                                                <IconPungliCardKomentar/>
                                                <h6 className='font-normal text-xs text-[#48555C] opacity-90' style={workSans.style}>{dataKomentarFilter.length} Komentar</h6>
                                          </div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                          <div className='flex flex-row gap-2 items-center'>
                                                <IconPungliCardStatus/>
                                                <h6 className='font-normal text-xs text-[#48555C] opacity-90' style={workSans.style}>
                                                      {status_pelaporan} Ditanggapi
                                                </h6>
                                          </div>
                                          <div className='flex flex-row gap-2 items-center'>
                                                <IconPungliCardKategori/>
                                                <h6 className='font-normal text-xs text-[#48555C] opacity-90' style={workSans.style}>
                                                      {kategoriPungliId.nama_kategori_pungli}
                                                </h6>
                                          </div>
                                    </div>
                              </div>
                              {
                                    handleButtonPungliDetail(userIdCookies,idPungliUser)
                              }
                        </div>
                  </div>

            </div>
      )
}

export default PungliCardPost