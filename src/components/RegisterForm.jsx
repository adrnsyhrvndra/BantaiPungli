import workSans from '@/libs/FontWorkSans'
import React from 'react'
import eyeClose from "../assets/eye-close.png";
import eyeOpen from "../assets/eye-open.png";
import { useDispatch, useSelector } from 'react-redux';
import { setEyePassword } from '@/store/auth';
import Image from 'next/image';
import Select from 'react-select';
import dataSelectOptionsJenisKelamin from '@/libs/DataOptionJenisKelamin';
import dataSelectOptionsKotaDanProvinsi from '@/libs/DataOptionKotaDanProvinsi';
import arrowUploadFilesIcon from '../assets/export.png';

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

const RegisterForm = () => {
	const dispatch = useDispatch();
	const eyePassword = useSelector(state => state.authReducerRedux.eyePassword);

	const handleEyePassword = () => {
		dispatch(setEyePassword(!eyePassword));
	};

	return (
		<div aria-label="Container Group Register Form" className="w-[80%] mx-auto mt-8">
			<div className='grid grid-cols-12 gap-6'>
				<div className='col-span-6'>
					<input
						type="text"
						className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
						placeholder="Masukan Username"
						style={workSans.style}
					/>
				</div>
				<div className='col-span-6'>
					<div aria-label="input-group" className="relative">
						{eyePassword === false && (
							<Image
								onClick={handleEyePassword}
								className="absolute top-1/2 right-6 -translate-y-1/2 opacity-60 cursor-pointer"
								src={eyeClose}
							/>
						)}
						{eyePassword === true && (
							<Image
								onClick={handleEyePassword}
								className="absolute top-1/2 right-6 -translate-y-1/2 opacity-30 cursor-pointer"
								src={eyeOpen}
							/>
						)}
						<input
							type={eyePassword === true ? "text" : "password"}
							className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
							placeholder="Masukan Password"
							style={workSans.style}
						/>
					</div>
				</div>
				<div className='col-span-6'>
					<input
						type="text"
						className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
						placeholder="Masukan Email"
						style={workSans.style}
					/>
				</div>
				<div className='col-span-6'>
					<input
						type="text"
						className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
						placeholder="Masukan Nama Lengkap"
						style={workSans.style}
					/>
				</div>
				<div className='col-span-6'>
					<input
						type="text"
						className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
						placeholder="Masukan Tanggal Lahir"
						style={workSans.style}
					/>
				</div>
				<div className='col-span-6'>
					<Select
						isClearable
						options={dataSelectOptionsJenisKelamin} 
						styles={customStyles}
						placeholder="Pilih Jenis Kelamin"
					/>
				</div>
				<div className='col-span-6'>
					<input
						type="text"
						className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
						placeholder="Masukan No Telp"
						style={workSans.style}
					/>
				</div>
				<div className='col-span-6'>
					<Select
						isClearable
						options={dataSelectOptionsKotaDanProvinsi} 
						styles={customStyles}
						placeholder="Pilih Alamat Domisili"
					/>
				</div>
				<div className='col-span-12'>
					<div class="flex items-center justify-center w-full">
						<label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#F8F8F7]">
							<div class="flex flex-col items-center justify-center pt-5 pb-6">
								<Image className='w-8 h-8 mb-4' src={arrowUploadFilesIcon}/>
								<p class="mb-2 text-sm text-[#252C32] font-bold" style={workSans.style}>
									Upload Foto Profilmu (Optional)*
								</p>
								<p class="text-xs text-gray-500 dark:text-gray-400">
									PNG or JPG (MAX. 800x800px)
								</p>
							</div>
							<input id="dropzone-file" type="file" class="hidden" />
						</label>
					</div> 
				</div>
			</div>
		</div>
	)
}

export default RegisterForm