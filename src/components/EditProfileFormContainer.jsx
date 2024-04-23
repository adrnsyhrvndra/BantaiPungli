import workSans from '@/libs/FontWorkSans';
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import dataSelectOptionsKotaDanProvinsi from '@/libs/DataOptionKotaDanProvinsi';
import Image from "next/image";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { formatISO, set } from 'date-fns';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';

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

const EditProfileFormContainer = ({userById}) => {

      const originalDate = userById.tanggal_lahir;
      const formattedDate = formatISO(new Date(originalDate), { representation: 'date' });

      const [selectedImage, setSelectedImage] = useState(userById.foto_profile);
      const [imageData, setImageData] = useState(userById.foto_profile);
      const router = useRouter();

      const dataSelectJenisKelamin = [
            { value: 'L', label: 'Laki-laki' },
            { value: 'P', label: 'Perempuan' },
      ];

      const [inpNamaLengkap, setInpNamaLengkap] = useState(userById.nama_lengkap);
      const [inpUsername,setInpUsername] = useState(userById.username);
      const [inpPassword,setInpPassword] = useState('');
      const [inpEmail, setInpEmail] = useState(userById.email);
      const [inpTglLahir, setInpTglLahir] = useState(formattedDate);
      const [inpJenisKelamin, setInpJenisKelamin] = useState({
            value: userById.jenis_kelamin,
            label: userById.jenis_kelamin === 'L' ? 'Laki-laki' : 'Perempuan'
      });
      const [inpNoTelp, setInpNoTelp] = useState(userById.no_telp);
      const [inpAlamat, setInpAlamat] = useState({
            value: userById.alamat,
            label: userById.alamat
      });

      const handleFile = (e) => {
            const file = e.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
            setImageData(file);
      };

      const handleRemoveImage = () => {
            setSelectedImage('https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1713847735/bantai-pungli/depositphotos_243263326-stock-illustration-user-avatar-illustration-anonymous-sign_mnhoyy.webp');
            setImageData('https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1713847735/bantai-pungli/depositphotos_243263326-stock-illustration-user-avatar-illustration-anonymous-sign_mnhoyy.webp');
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            if (inpNamaLengkap && inpUsername && inpEmail && inpTglLahir && inpJenisKelamin && inpNoTelp && inpAlamat && imageData && inpPassword) {

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
                        nama_lengkap: inpNamaLengkap,
                        username: inpUsername,
                        password: inpPassword,
                        email: inpEmail,
                        tanggal_lahir: inpTglLahir,
                        alamat: inpAlamat.value,
                        jenis_kelamin: inpJenisKelamin.value,
                        no_telp: inpNoTelp,
                        status_online: 'online',
                        foto_profile: result.secure_url,
                        updated_at: new Date()
                  };
                  
                  try {

                        const res = await axios.put(`/api/editUser/?id=${userById._id}`, data, {
                              headers: {
                                  'Access-Control-Allow-Origin': '*',
                                  'Content-Type': 'application/json',
                                  'Authorization': `Bearer ${Cookies.get('token')}`
                              },
                        });

                        toast.success('Ubah Profile Berhasil! 🤙', {
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

                        console.error("Error:", error);
                        
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

            } else {

                  toast.error(`Tidak Berhasil! Harap Isi Semua Kolom`, {
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
      };

      return (
            <div className='bg-white rounded-lg py-16 px-20' style={workSans.style}>
                  <ToastContainer/>
                  <div className='flex flex-col gap-4'>
                        <h6 className='font-bold text-3xl'>
                              Ubah <span className='text-primary'>Profilmu</span>
                        </h6>
                        <p className='text-[#746B6B] font-normal text-xs leading-loose opacity-60 w-1/2 text-start'>Perbarui profil Anda untuk meningkatkan kesan dan relevansi. Unggah foto terbaru dan update informasi penting Anda sekarang.</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-12 mt-6 gap-8'>
                              <div className='col-span-6'>
                                    <div className='flex flex-col gap-6'>
                                          <input
                                                type="text"
                                                name='nama_lengkap'
                                                value={inpNamaLengkap}
                                                onChange={(e) => setInpNamaLengkap(e.target.value)}
                                                className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                                placeholder="Edit Nama Lengkap"
                                                style={workSans.style}
                                          />
                                          <input
                                                type="text"
                                                name='username'
                                                value={inpUsername}
                                                onChange={(e) => setInpUsername(e.target.value)}
                                                className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                                placeholder="Edit Username"
                                                style={workSans.style}
                                          />
                                          <input
                                                type="email"
                                                name='email'
                                                value={inpEmail}
                                                onChange={(e) => setInpEmail(e.target.value)}
                                                className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                                placeholder="Edit Email"
                                                style={workSans.style}
                                          />
                                          <input
                                                type="date"
                                                name='tanggal_lahir'
                                                value={inpTglLahir}
                                                onChange={(e) => setInpTglLahir(e.target.value)}
                                                className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pr-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                                placeholder="Edit Tangga Lahir"
                                                style={workSans.style}
                                          />
                                    </div>
                              </div>
                              <div className='col-span-6'>
                                    <div className='flex flex-col gap-8 -mt-[100px]'>
                                          <h5 className='text-xl font-semibold text-font-dark-02' style={workSans.style}>
                                                Foto Profil
                                          </h5>
                                          <div className='flex flex-row gap-8 items-center justify-start'>
                                                <div className='rounded-full w-24 h-20 relative overflow-hidden'>
                                                      <Image className='w-full h-full object-center object-cover' src={selectedImage} fill={true} />
                                                </div>
                                                <div className='flex flex-row gap-4 items-center w-full'>
                                                      <div className='w-[60%] flex items-center justify-center rounded-md cursor-pointer'>
                                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full py-3 rounded-lg cursor-pointer bg-none border-[1px] border-primary">
                                                                  <p class="text-xs text-primary font-semibold" style={workSans.style}>
                                                                        Ubah Foto Profil
                                                                  </p>
                                                                  <input id="dropzone-file" type="file" class="hidden" onChange={handleFile}/>
                                                            </label>
                                                      </div>
                                                      <div className='w-[40%] bg-[#F9F7FA] py-3 flex items-center justify-center rounded-md cursor-pointer' onClick={handleRemoveImage}>
                                                            <h6 className='text-primary font-semibold text-xs' style={workSans.style}>
                                                                  Hapus Foto Profil
                                                            </h6>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='flex flex-col gap-6 mt-8'>
                                          <Select
                                                name='alamat'
                                                defaultValue={inpAlamat}
                                                options={dataSelectOptionsKotaDanProvinsi} 
                                                styles={customStyles}
                                                placeholder="Edit Alamat"
                                                onChange={(e) => setInpAlamat(e.value)}
                                          />
                                          <Select
                                                name='jenis_kelamin'
                                                defaultValue={inpJenisKelamin}
                                                options={dataSelectJenisKelamin} 
                                                styles={customStyles}
                                                placeholder="Edit Jenis Kelamin"
                                                onChange={(e) => setInpJenisKelamin(e.value)}
                                          />
                                          <PhoneInput
                                                international
                                                name="no_telp"
                                                value={inpNoTelp}
                                                onChange={(value) => setInpNoTelp(value)}
                                                defaultCountry='ID'
                                                countryCallingCodeEditable={false}
                                                placeholder="Enter phone number"
                                                className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                                style={workSans.style}
                                          />
                                          <input
                                                type="text"
                                                name='password'
                                                value={inpPassword}
                                                onChange={(e) => setInpPassword(e.target.value)}
                                                className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                                placeholder="Masukan Password Mu"
                                                style={workSans.style}
                                          />
                                    </div>
                              </div>
                              <div className='col-span-12 mt-4'>
                                    <button type='submit' className='w-full py-4 bg-[#B31E28] rounded-md text-white font-medium text-base' style={workSans.style}>
                                          Edit Profil
                                    </button>
                              </div>
                        </div>
                  </form>
            </div>
      )
}

export default EditProfileFormContainer