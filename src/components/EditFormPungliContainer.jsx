import workSans from '@/libs/FontWorkSans';
import React, { useState } from 'react';
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import Image from "next/image";
import { formatISO } from 'date-fns';
import Cookies from 'js-cookie';
import dataSelectOptionStatusPelaporan from '@/libs/DataOptionStatusPelaporan';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useRouter } from 'next/router';

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

      const id_user = Cookies.get('userId');
      const [selectedImage, setSelectedImage] = useState(laporanPungliById.bukti_pendukung);
      const [imageData, setImageData] = useState(laporanPungliById.bukti_pendukung);
      const [selectedKategoriPungli, setSelectedKategoriPungli] = useState(laporanPungliById.kategoriPungliId._id);
      const [listArray, setListArray] = useState([]);
      const router = useRouter();

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

      const filteredData = listArray.filter(data => {
            return data.value === selectedKategoriPungli;
      });

      const handleFile = (e) => {
            const file = e.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
            setImageData(file);
      };

      const [input, setInput] = useState({
            judul_pelaporan: laporanPungliById.judul_pelaporan,
            deskripsi_pelaporan: laporanPungliById.deskripsi_pelaporan,
            tanggal_pelaporan: formattedDate,
            kategoriPungliId: filteredData[0],
            status_pelaporan: {
                  value: laporanPungliById.status_pelaporan,
                  label: laporanPungliById.status_pelaporan
            },
      });

      const handleChangeKategoriPungli = (value) => {
            setSelectedKategoriPungli(value);
            setInput({ ...input, kategoriPungliId: {
                  value: value.value,
                  label: value.label
            }});
      };

      const handleChangeStatusPelaporan = (value) => {
            setInput({ ...input, status_pelaporan: {
                  value: value.value,
                  label: value.label
            }});
      };

      const handleInput = (e) => {
            if (e.target.name === "judul_pelaporan") {
                  setInput({
                        ...input,
                        judul_pelaporan: e.target.value
                  })
            } 
            
            else if (e.target.name === "tanggal_pelaporan") {
                  setInput({
                        ...input,
                        tanggal_pelaporan: e.target.value
                  })
            } 
            
            else if (e.target.name === "deskripsi_pelaporan") {
                  setInput({
                        ...input,
                        deskripsi_pelaporan: e.target.value
                  })
            }
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            // Clodinary Upload Image
            const formData = new FormData();
            formData.append('file', imageData);
            formData.append('upload_preset', 'bantai_pungli');

            const response = await fetch('https://api.cloudinary.com/v1_1/adriansyah-course-laravel7/image/upload', {
                  method: 'POST',
                  body: formData
            });
            const result = await response.json();

            const data = {
                  userId: id_user,
                  kategoriPungliId: input.kategoriPungliId.value,
                  judul_pelaporan: input.judul_pelaporan,
                  deskripsi_pelaporan: input.deskripsi_pelaporan,
                  tanggal_pelaporan: input.tanggal_pelaporan,
                  status_pelaporan : input.status_pelaporan.value,
                  bukti_pendukung: result.secure_url,
                  updated_at: new Date()
            };

            console.log(data);

            if (input.judul_pelaporan && input.tanggal_pelaporan && input.deskripsi_pelaporan && input.kategoriPungliId && id_user && input.status_pelaporan.value) {
                  
                  try {

                        const res = await axios.put(`/api/editLaporan/?id=${laporanPungliById._id}`, data, {
                              headers: {
                                  'Access-Control-Allow-Origin': '*',
                                  'Content-Type': 'application/json',
                                  'Authorization': `Bearer ${Cookies.get('token')}`
                              },
                        });
      
                        toast.success('Ubah Laporan Berhasil! 🤙', {
                              position: "top-right",
                              autoClose: 9000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                              transition: Bounce,
                        });

                        router.replace(router.asPath);
                        
                  } catch (error) {
                        
                        toast.error(`Tidak Berhasil! Karena ${error} 😰`, {
                              position: "top-right",
                              autoClose: 4993,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                              transition: Bounce,
                        });

                  }

            }
      };

      return (
            <div className='bg-white rounded-lg py-16 px-20' style={workSans.style}>
                  <ToastContainer/>
                  <div className='flex flex-col gap-4'>
                        <h6 className='font-bold text-3xl'>
                              Ayo Laporkan <span className='text-primary'>Pungli-Pungli!</span>
                        </h6>
                        <p className='text-[#746B6B] font-normal text-sm leading-loose opacity-60'>Ayo bersatu melawan pungutan liar! Laporkan setiap tindakan pungli yang merugikan untuk memerangi korupsi. Melalui tindakan kita, kita dapat membangun masyarakat yang berintegritas dan adil. Mari bersama-sama memastikan keadilan dan transparansi dalam setiap aspek kehidupan kita.</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-12 mt-6 gap-6'>
                              <div className='col-span-6'>
                                    <div className='flex flex-col gap-6'>
                                          <input 
                                                type="hidden" 
                                                name="userId"
                                                value={id_user}
                                          />
                                          <input
                                                type="text"
                                                name='judul_pelaporan'
                                                onChange={handleInput}
                                                className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                                placeholder="Masukan Judul Laporan Pungli"
                                                style={workSans.style}
                                                value={input.judul_pelaporan}
                                          />
                                          <input
                                                type="date"
                                                name='tanggal_pelaporan'
                                                onChange={handleInput}
                                                className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pr-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                                placeholder="Masukan Tanggal Laporan Pungli"
                                                style={workSans.style}
                                                value={input.tanggal_pelaporan}
                                          />
                                          <textarea 
                                                name='deskripsi_pelaporan'
                                                onChange={handleInput}
                                                className='w-full rounded-md bg-[#F8FAFB] border border-none pl-4 pt-4 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary'
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
                                                isClearable={false}
                                                defaultValue={input.kategoriPungliId}
                                                options={listArray}
                                                styles={customStyles}
                                                placeholder="Masukan Kategori Laporan Pungli"
                                                onChange={handleChangeKategoriPungli}
                                          />
                                          <Select
                                                name="status_pelaporan"
                                                defaultValue={input.status_pelaporan}
                                                styles={customStyles}
                                                options={dataSelectOptionStatusPelaporan}
                                                placeholder="Masukan Status Laporan Pungli"
                                                onChange={handleChangeStatusPelaporan}
                                          />
                                          <div className='h-48 w-full overflow-hidden relative rounded-md'>
                                                <Image 
                                                      alt='selected-image'
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
                                    <button type='submit' className='mt-8 w-full'>
                                          <div className={`w-full bg-[#B31E28] py-4 text-center text-white overflow-clip font-semibold text-xs rounded-lg`} style={workSans.style}>
                                                Update Laporan Pungli
                                          </div>
                                    </button>
                              </div>
                        </div>
                  </form>
            </div>
      )
}

export default EditFormPungliContainer