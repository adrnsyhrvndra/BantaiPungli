import workSans from '@/libs/FontWorkSans'
import Select from 'react-select';
import React from 'react'
import dataSelectOptionsKotaDanProvinsi from '@/libs/DataOptionKotaDanProvinsi';
import ProfileSementara from "../assets/logo-bantai-punli-form-login.png"
import Image from "next/image"

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

const EditProfileFormContainer = () => {

      const dataSelectJenisKelamin = [
            { value: 'Laki-laki', label: 'Laki-laki' },
            { value: 'Perempuan', label: 'Perempuan' },
      ];

      return (
            <div className='bg-white rounded-lg py-16 px-20' style={workSans.style}>
            <div className='flex flex-col gap-4'>
                  <h6 className='font-bold text-3xl'>
                        Ubah <span className='text-primary'>Profilmu</span>
                  </h6>
                  <p className='text-[#746B6B] font-normal text-xs leading-loose opacity-60 w-1/2 text-start'>Perbarui profil Anda untuk meningkatkan kesan dan relevansi. Unggah foto terbaru dan update informasi penting Anda sekarang.</p>
            </div>
            <div className='grid grid-cols-12 mt-6 gap-8'>
                  <div className='col-span-6'>
                        <div className='flex flex-col gap-6'>
                              <input
                                    type="text"
                                    className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                    placeholder="Edit Username"
                                    style={workSans.style}
                              />
                              <input
                                    type="text"
                                    className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                    placeholder="Edit Password"
                                    style={workSans.style}
                              />
                              <input
                                    type="text"
                                    className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                    placeholder="Edit Email"
                                    style={workSans.style}
                              />
                              <input
                                    type="date"
                                    className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pr-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                    placeholder="Edit Tangga Lahir"
                                    style={workSans.style}
                              />
                        </div>
                  </div>
                  <div className='col-span-6'>
                        <div className='flex flex-col gap-8 -mt-[100px]'>
                              <h5 className='text-xl font-semibold text-font-dark-02' style={workSans.style}>Foto Profil</h5>
                              <div className='flex flex-row gap-8 items-center justify-start'>
                                    <Image className='rounded-full w-20 h-20' src={ProfileSementara} />
                                    <div className='flex flex-row gap-4 items-center w-full'>
                                          <div className='w-[60%] border-[1px] border-primary py-3 flex items-center justify-center rounded-md cursor-pointer'>
                                                <h6 className='text-primary font-semibold text-xs' style={workSans.style} >Upload Foto Profil Baru</h6>
                                          </div>
                                          <div className='w-[40%] bg-[#F9F7FA] py-3 flex items-center justify-center rounded-md cursor-pointer'>
                                                <h6 className='text-primary font-semibold text-xs' style={workSans.style} >Hapus Foto Profil</h6>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className='flex flex-col gap-6 mt-8'>
                              <Select
                                    options={dataSelectJenisKelamin} 
                                    styles={customStyles}
                                    placeholder="Edit Jenis Kelamin"
                              />
                              <input
                                    type="text"
                                    className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
                                    placeholder="Edit No Telepon"
                                    style={workSans.style}
                              />
                              <Select
                                    options={dataSelectOptionsKotaDanProvinsi} 
                                    styles={customStyles}
                                    placeholder="Edit Alamat"
                              />
                        </div>
                  </div>
                  <div className='col-span-12 mt-4'>
                        <button className='w-full py-4 bg-[#B31E28] rounded-md text-white font-medium text-base' style={workSans.style}>
                              Edit Profil
                        </button>
                  </div>
            </div>
      </div>
      )
}

export default EditProfileFormContainer