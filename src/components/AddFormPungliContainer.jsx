import workSans from '@/libs/FontWorkSans'
import React, { useState } from 'react'
import Creatable from 'react-select/creatable';
import arrowUploadFilesIcon from '../assets/export.png';
import Image from "next/image";
import Cookies from 'js-cookie';
import axios from 'axios';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const AddFormPungliContainer = ({dataKategoriList}) => {

      const [selectedImage, setSelectedImage] = useState(null);
      const [listArray, setListArray] = useState([]);
      const id_user = Cookies.get('userId');

      const [input,setInput] = useState({
            judul_pelaporan: '',
            tanggal_pelaporan: '',
            deskripsi_pelaporan: '',
            userId: id_user,
            kategoriPungliId: '',
      });

      const [selectedKategoriPungli, setSelectedKategoriPungli] = useState(null);

      const router = useRouter();

      dataKategoriList.map((data) => {
            const value = data._id;
            const label = data.nama_kategori_pungli;

            const dataObject = {
                  value: value,
                  label: label
            };

            return listArray.push(dataObject);
      });

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
      }

      const handleChangeKategoriPungli = (value) => {
            setSelectedKategoriPungli(value);
            setInput({ ...input, kategoriPungliId: value.value });
        };

      const handleFile = (e) => {
            const file = e.target.files[0];
            setSelectedImage(file);
      }

      const handleFileNameStatus = () => {
            if (selectedImage) {
                  return selectedImage.name;
            } else {
                  return 'PNG or JPG (MAX. 800x800px)';
            }
      }

      const handleSubmit = async (e) => {
            e.preventDefault();

            // Clodinary Upload Image
            const formData = new FormData();
            formData.append('file', selectedImage);
            formData.append('upload_preset', 'bantai_pungli');

            const response = await fetch('https://api.cloudinary.com/v1_1/adriansyah-course-laravel7/image/upload', {
                  method: 'POST',
                  body: formData
            });
            const result = await response.json();

            const data = {
                  userId: id_user,
                  kategoriPungliId: input.kategoriPungliId,
                  judul_pelaporan: input.judul_pelaporan,
                  deskripsi_pelaporan: input.deskripsi_pelaporan,
                  tanggal_pelaporan: input.tanggal_pelaporan,
                  status_pelaporan : 'Belum Selesai',
                  bukti_pendukung: result.secure_url,
                  created_at: new Date(),
                  updated_at: new Date()
            };

            if (input.judul_pelaporan && input.tanggal_pelaporan && input.deskripsi_pelaporan && input.kategoriPungliId && id_user) {

                  try {

                        const res = await axios.post('/api/addLaporan', data, {
                              headers: {
                                  'Access-Control-Allow-Origin': '*',
                                  'Content-Type': 'application/json',
                                  'Authorization': `Bearer ${Cookies.get('token')}`
                              },
                        });

                        console.log(res);
      
                        toast.success('Tambah Laporan Berhasil! 🤙', {
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

                        // Remove All Input Value
                        setInput({
                              judul_pelaporan: '',
                              tanggal_pelaporan: '',
                              deskripsi_pelaporan: '',
                        });
                        setSelectedImage(null);
                        router.replace(router.asPath);
                        
                  } catch (error) {

                        toast.error(`Tidak Berhasil! Karena ${error.response.data.message} 😰`, {
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
                                                value={input.judul_pelaporan}
                                                className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                                placeholder="Masukan Judul Laporan Pungli"
                                                style={workSans.style}
                                          />
                                          <input
                                                type="date"
                                                name='tanggal_pelaporan'
                                                onChange={handleInput}
                                                value={input.tanggal_pelaporan}
                                                className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pr-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                                placeholder="Masukan Tanggal Laporan Pungli"
                                                style={workSans.style}
                                          />
                                          <textarea 
                                                className='w-full rounded-md bg-[#F8FAFB] border border-none pl-4 pt-4 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary' 
                                                name="deskripsi_pelaporan"
                                                onChange={handleInput}
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
                                                name='kategoriPungliId'
                                                onChange={handleChangeKategoriPungli}
                                                options={listArray} 
                                                styles={customStyles}
                                                placeholder="Masukan Kategori Laporan Pungli"
                                          />
                                          <div className="flex items-center justify-center w-full">
                                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#F8F8F7]">
                                                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <Image className='w-8 h-8 mb-4' src={arrowUploadFilesIcon}/>
                                                            <p className="mb-2 text-sm text-[#252C32] font-bold" style={workSans.style}>
                                                                  Upload Bukti Laporan (Optional)*
                                                            </p>
                                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                                  {handleFileNameStatus()}
                                                            </p>
                                                      </div>
                                                      <input onChange={handleFile} name='file' id="dropzone-file" type="file" className="hidden" />
                                                </label>
                                          </div> 
                                    </div>
                                    <button type='submit' className='mt-8 w-full'>
                                          <div className={`w-full bg-[#B31E28] py-4 text-center text-white overflow-clip font-semibold text-xs rounded-lg`} style={workSans.style}>
                                                Tambah Laporan Pungli
                                          </div>
                                    </button>
                              </div>
                        </div>
                  </form>
            </div>
      )
}

export default AddFormPungliContainer