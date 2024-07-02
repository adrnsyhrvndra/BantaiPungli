import workSans from '@/libs/FontWorkSans'
import React, { useEffect } from 'react'
import SearchIcon from "../assets/search-normal.png";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import { setLaporanSearch } from '@/store/laporan';

const SearchLaporan = ({totalItems}) => {

      const dispatch = useDispatch();
      const laporanSearch = useSelector(state => state.laporanReducerRedux.laporanSearch);

      const handleInputSearch = (e) => {
            dispatch(setLaporanSearch(e.target.value));
      }

      useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                  document.body.style.overflow = ''; 
            };
      }, []);

      return (
            <div className='grid grid-cols-12 mt-10 '>
                  <div className='col-start-1 col-end-8'>
                        <div className='relative'>
                              <input
                                    value={laporanSearch}
                                    onChange={handleInputSearch}
                                    type="text" 
                                    className='w-full h-12 bg-white rounded-md px-14 py-3 placeholder:text-base placeholder:text-[#757B8C]'
                                    placeholder='Cari Laporan...'
                                    style={workSans.style}
                              />
                              <Image alt='search-icon' src={SearchIcon} className='absolute top-1/2 left-6 -translate-y-1/2'/>
                        </div>
                  </div>
                  <div className='col-start-10 col-end-13 place-self-end'>
                        <h6 className='font-semibold text-sm text-[#6F7F95]' style={workSans.style}>
                              Total Pungli : {totalItems} Laporan
                        </h6>
                  </div>
            </div>
      )
}

export default SearchLaporan