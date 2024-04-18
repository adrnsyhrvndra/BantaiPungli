import workSans from '@/libs/FontWorkSans'
import React from 'react'

const ListCheckBoxFilterLaporan = ({dataKategoriPungli}) => {
      return (
            <div className='flex flex-row items-center justify-start gap-10 bg-white rounded-lg py-10 px-8 mt-6 flex-wrap' style={workSans.style}>
                  {
                        dataKategoriPungli.map((data) => {

                              return (
                                    <div className='flex flex-row items-center gap-4 justify-start opacity-100'>
                                          <input type="checkbox" value={data._id} name="" id="" />
                                          <label htmlFor="" className='font-normal text-base text-[#17181C]'>
                                                {data.nama_kategori_pungli}
                                          </label>
                                    </div>
                              )
                        })
                  }
            </div>
      )
}

export default ListCheckBoxFilterLaporan