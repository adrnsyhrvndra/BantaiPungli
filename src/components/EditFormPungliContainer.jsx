import workSans from '@/libs/FontWorkSans'
import React, { useState } from 'react'
import Creatable from 'react-select/creatable';
import dataSelectOptionsKotaDanProvinsi from '@/libs/DataOptionKotaDanProvinsi';
import Image from "next/image";
import { formatISO } from 'date-fns';
import { useEffect } from 'react';

const customStyles = {
	control: (styles) => ({ 
		...styles, 
		backgroundColor: '#F8FAFB',
		borderWidth: 0,
		height: '3rem',
	}),
	placeholder: (styles) => ({
		...styles,
		color: '#B1BBC6',
		fontFamily: 'Work Sans',
		fontSize: '14px',
		paddingLeft: '10px',
	}),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => {
		return {
			...styles,
			backgroundColor: isDisabled
				? null
				: isSelected
					? '#F8FAFB'
					: isFocused
						? '#F8FAFB'
						: null,
			color: isDisabled
				? '#17181C'
				: isSelected
					? '#17181C'
					: isFocused
						? '#17181C'
						: '#17181C',
			cursor: isDisabled ? 'not-allowed' : 'default',
		};
	},
}

const EditFormPungliContainer = ({laporanPungliById, dataKategoriList}) => {

      const [selectedImage, setSelectedImage] = useState(laporanPungliById.bukti_pendukung);
      const [selectedKategoriPungli, setSelectedKategoriPungli] = useState(laporanPungliById.kategoriPungliId._id);
      const [listArray, setListArray] = useState([]);
      const [filteredKategori, setFilteredKategori] = useState();

      const originalDate = laporanPungliById.tanggal_pelaporan;
      const formattedDate = formatISO(new Date(originalDate), { representation: 'date' });

      dataKategoriList.map((data) => {
            const value = data._id;
            const label = data.nama_kategori_pungli;

            const dataObject = {
                  value: value,
                  label: label
            };

            return listArray.push(dataObject);
      });

      const handleChangeKategoriPungli = (value) => {
            setSelectedKategoriPungli(value);
            setInput({ ...input, kategoriPungliId: value.value });
      };

      const filteredData = listArray.filter(data => {
            return data.value === selectedKategoriPungli;
      });

      const handleFile = (e) => {
            const file = e.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
      };

      const [input, setInput] = useState({
            judul_pelaporan: laporanPungliById.judul_pelaporan,
            deskripsi_pelaporan: laporanPungliById.deskripsi_pelaporan,
            tanggal_pelaporan: formattedDate,
            kategoriPungliId: filteredData[0]
      });

      return (
            <div className='bg-white rounded-lg py-16 px-20' style={workSans.style}>
                  <div className='flex flex-col gap-4'>
                        <h6 className='font-bold text-3xl'>
                              Ayo Laporkan <span className='text-primary'>Pungli-Pungli!</span>
                        </h6>
                        <p className='text-[#746B6B] font-normal text-sm leading-loose opacity-60'>Ayo bersatu melawan pungutan liar! Laporkan setiap tindakan pungli yang merugikan untuk memerangi korupsi. Melalui tindakan kita, kita dapat membangun masyarakat yang berintegritas dan adil. Mari bersama-sama memastikan keadilan dan transparansi dalam setiap aspek kehidupan kita.</p>
                  </div>
                  <div className='grid grid-cols-12 mt-6 gap-6'>
                        <div className='col-span-6'>
                              <div className='flex flex-col gap-6'>
                                    <input
                                          type="text"
                                          className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                          placeholder="Masukan Judul Laporan Pungli"
                                          style={workSans.style}
                                          value={input.judul_pelaporan}
                                    />
                                    <input
                                          type="date"
                                          className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pr-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                          placeholder="Masukan Tanggal Laporan Pungli"
                                          style={workSans.style}
                                          value={input.tanggal_pelaporan}
                                    />
                                    <textarea 
                                          className='w-full rounded-md bg-[#F8FAFB] border border-none pl-4 pt-4 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary' 
                                          name="" 
                                          id="" 
                                          cols="30" 
                                          rows="7" 
                                          placeholder='Masukan Deskripsi Pelaporan'
                                          value={input.deskripsi_pelaporan}
                                    >
                                    </textarea>
                              </div>
                        </div>
                        <div className='col-span-6'>
                              <div className='flex flex-col gap-6'>
                                    <Creatable
                                          isClearable
                                          defaultValue={input.kategoriPungliId}
                                          options={listArray}
                                          styles={customStyles}
                                          placeholder="Masukan Kategori Laporan Pungli"
                                    />
                                    <div className='h-48 w-full overflow-hidden relative rounded-md'>
                                          <Image 
                                                className='w-full h-full object-cover object-center'
                                                src={selectedImage}
                                                fill={true}
                                          />
                                    </div>
                                    <div class="flex items-center justify-center w-full">
                                          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full py-4 rounded-lg cursor-pointer bg-none border-[1px] border-primary">
                                                <p class="text-xs text-primary font-semibold" style={workSans.style}>
                                                      Ubah Foto Laporan
                                                </p>
                                                <input id="dropzone-file" type="file" class="hidden" onChange={handleFile}/>
                                          </label>
                                    </div> 
                              </div>
                        </div>
                        <div className='col-span-12'>
                              <div className='mt-2'>
                                    <div className={`w-full bg-[#B31E28] py-4 text-center text-white overflow-clip cursor-pointer font-semibold text-sm rounded-lg`} style={workSans.style}>
                                          Ubah Laporan Pungli
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default EditFormPungliContainer