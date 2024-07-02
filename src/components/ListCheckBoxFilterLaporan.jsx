import workSans from '@/libs/FontWorkSans'
import { setLaporanFilter } from '@/store/laporan';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ListCheckBoxFilterLaporan = ({dataKategoriPungli}) => {
      const [listArray, setListArray] = useState([]);

      const dispatch = useDispatch();
      const laporanFilter = useSelector(state => state.laporanReducerRedux.laporanFilter);

      const handleFilterCheckbox = (e) => {
            const grabValue = e.target.value;
            const grabName = e.target.name;

            const lowerCaseData = dataKategoriPungli.map((data) => {
                  const dataListNamaToLowerCase = data.nama_kategori_pungli.toLowerCase();
                  return dataListNamaToLowerCase;
            });

            const filterGrabNameSameWithLowercasedata = lowerCaseData.filter((list) => {
                  return list === grabName;
            });

            if (grabName === filterGrabNameSameWithLowercasedata[0] && e.target.checked === false) {
                  // Buat menjadi null nilainya
                  setListArray([]);
            }

            if (grabName === filterGrabNameSameWithLowercasedata[0] && e.target.checked === true) {
                  setListArray([...listArray, grabValue]);
            }
      };

      useEffect(() => {
            dispatch(setLaporanFilter(listArray));
      }, [listArray, dispatch]);

      return (
            <div className='flex flex-row items-center justify-start gap-10 bg-white rounded-lg py-10 px-8 mt-6 flex-wrap' style={workSans.style}>
                  {
                        dataKategoriPungli.map((data, index) => {

                              const dataListNamaToLowerCase = data.nama_kategori_pungli.toLowerCase();

                              return (
                                    <div key={index} className='flex flex-row items-center gap-4 justify-start opacity-100'>
                                          <input 
                                                type="checkbox" 
                                                value={data._id}
                                                onChange={handleFilterCheckbox}
                                                name={dataListNamaToLowerCase}
                                                id={data._id}
                                          />
                                          <label htmlFor={data._id} className='font-normal text-base text-[#17181C]'>
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