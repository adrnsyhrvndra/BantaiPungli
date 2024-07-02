import workSans from '@/libs/FontWorkSans'
import React from 'react'
import Image from "next/image";

const CommentPungli = ({dataKomentar}) => {

      const handleTime = (date) => {
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
      };

      return (

            <div className='flex flex-col gap-12'>
                  <h3 className='mt-12 text-[#283646] font-bold text-3xl' style={workSans.style}>
                        {dataKomentar.length} Komentar
                  </h3>
                  <div className='flex flex-col gap-10'>
                        {dataKomentar.map((komentar, index) => {

                              return (
                                    <div key={index} className='flex flex-col gap-10'>
                                          <div className='flex flex-col gap-4'>
                                                <div className='flex flex-row gap-4 items-center justify-start'>
                                                      <div className='relative w-14 h-14 rounded-full'>
                                                            <Image 
                                                                  alt='foto-profile'
                                                                  src={komentar.userId.foto_profile} 
                                                                  className='rounded-full object-center object-cover'
                                                                  layout='fill'
                                                            />
                                                      </div>
                                                      <div className='flex flex-col gap-1'>
                                                            <h3 className='font-bold text-xl text-[#283646]' style={workSans.style}>
                                                                  {komentar.userId.nama_lengkap}
                                                            </h3>
                                                            <p className='font-normal text-xs text-[#77808B]' style={workSans.style}>
                                                                  {handleTime(dataKomentar[0].created_at)}
                                                            </p>
                                                      </div>
                                                </div>
                                                <p className='pl-16 text-sm text-[#484D52] font-normal leading-loose' style={workSans.style}>
                                                      {komentar.komentar}
                                                </p>
                                          </div>
                                          <div className='w-full h-[1px] bg-[#CFD3D7]'></div>
                                    </div>
                              )
                        })}
                  </div>
            </div>

      )
}

export default CommentPungli