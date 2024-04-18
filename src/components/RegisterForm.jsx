import workSans from '@/libs/FontWorkSans'
import React, { useState } from 'react'
import eyeClose from "../assets/eye-close.png";
import eyeOpen from "../assets/eye-open.png";
import { useDispatch, useSelector } from 'react-redux';
import { setAlamat, setEmail, setEyePassword, setFotoProfile, setJenisKelamin, setNamaLengkap, setNoTelp, setPassword, setTanggalLahir, setUsername } from '@/store/auth';
import Image from 'next/image';
import Select from 'react-select';
import dataSelectOptionsJenisKelamin from '@/libs/DataOptionJenisKelamin';
import dataSelectOptionsKotaDanProvinsi from '@/libs/DataOptionKotaDanProvinsi';
import arrowUploadFilesIcon from '../assets/export.png';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

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
	const username = useSelector(state => state.authReducerRedux.username);
	const password = useSelector(state => state.authReducerRedux.password);
	const email = useSelector(state => state.authReducerRedux.email);
	const nama_lengkap = useSelector(state => state.authReducerRedux.nama_lengkap);
	const tanggal_lahir = useSelector(state => state.authReducerRedux.tanggal_lahir);
	const jenis_kelamin = useSelector(state => state.authReducerRedux.jenis_kelamin);
	const no_telp = useSelector(state => state.authReducerRedux.no_telp);
	const alamat = useSelector(state => state.authReducerRedux.alamat);
	const foto_profile = useSelector(state => state.authReducerRedux.foto_profile);

	const handleEyePassword = () => {
		dispatch(setEyePassword(!eyePassword));
	};

	const handleInput = (e) => {
		if (e.target.name === "username"){
			dispatch(setUsername(e.target.value));
		} 
		
		else if (e.target.name === "password"){
			dispatch(setPassword(e.target.value));
		} 
		
		else if (e.target.name === "email") {
			dispatch(setEmail(e.target.value));
		}
		
		else if (e.target.name === "nama_lengkap") {
			dispatch(setNamaLengkap(e.target.value));
		}
		
		else if (e.target.name === "tanggal_lahir") {
			dispatch(setTanggalLahir(e.target.value));
		}
	}

	const handlePhoneInput = (value) => {
		dispatch(setNoTelp(value));
	}

	const handleFile = (e) => {
            const file = e.target.files[0];
            dispatch(setFotoProfile(file));
      }

      const handleFileNameStatus = () => {
            if (foto_profile) {
                  return foto_profile.name;
            } else {
                  return 'PNG or JPG (MAX. 800x800px)';
            }
      }

	return (
		<div aria-label="Container Group Register Form" className="w-[80%] mx-auto mt-8">
			<div className='grid grid-cols-12 gap-6'>
				<div className='col-span-6'>
					<div className='flex flex-col gap-2'>
						<label className='text-xs font-normal text-slate-700' htmlFor="username" style={workSans.style}>Username</label>
						<input
							type="text"
							name='username'
							onChange={handleInput}
							value={username}
							className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
							placeholder="Masukan Username"
							style={workSans.style}
						/>
					</div>
				</div>
				<div className='col-span-6'>
					<div aria-label="input-group" className="relative">
						{eyePassword === false && (
							<Image
								onClick={handleEyePassword}
								className="absolute top-2/3 right-6 -translate-y-1/2 opacity-60 cursor-pointer"
								src={eyeClose}
							/>
						)}
						{eyePassword === true && (
							<Image
								onClick={handleEyePassword}
								className="absolute top-2/3 right-6 -translate-y-1/2 opacity-30 cursor-pointer"
								src={eyeOpen}
							/>
						)}
						<div className='flex flex-col gap-2'>
							<label className='text-xs font-normal text-slate-700' htmlFor="password" style={workSans.style}>Password</label>
							<input
								type={eyePassword === true ? "text" : "password"}
								name='password'
								value={password}
								onChange={handleInput}
								className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
								placeholder="Masukan Password"
								style={workSans.style}
							/>
						</div>
					</div>
				</div>
				<div className='col-span-6'>
					<div className='flex flex-col gap-2'>
						<label className='text-xs font-normal text-slate-700' htmlFor="email" style={workSans.style}>Alamat Email</label>
						<input
							type="email"
							name='email'
							value={email}
							onChange={handleInput}
							className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
							placeholder="Masukan Email"
							style={workSans.style}
						/>
					</div>
				</div>
				<div className='col-span-6'>
					<div className='flex flex-col gap-2'>
						<label className='text-xs font-normal text-slate-700' htmlFor="nama_lengkap" style={workSans.style}>Nama Lengkap</label>
						<input
							id='nama_lengkap'
							type="text"
							name="nama_lengkap"
							value={nama_lengkap}
							onChange={handleInput}
							className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
							placeholder="Masukan Nama Lengkap"
							style={workSans.style}
						/>
					</div>
				</div>
				<div className='col-span-6'>
					<div className='flex flex-col gap-2'>
						<label className='text-xs font-normal text-slate-700' htmlFor="tanggal_lahir" style={workSans.style}>Tanggal Lahir</label>
						<input
							id='tanggal_lahir'
							type="date"
							name="tanggal_lahir"
							value={tanggal_lahir}
							onChange={handleInput}
							className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
							placeholder="Masukan Tanggal Lahir"
							style={workSans.style}
						/>
					</div>
				</div>
				<div className='col-span-6'>
					<div className='flex flex-col gap-2'>
						<label className='text-xs font-normal text-slate-700' htmlFor="jenis_kelamin" style={workSans.style}>Jenis Kelamin</label>
						<Select
							name="jenis_kelamin"
							onChange={(e) => dispatch(setJenisKelamin(e.value))}
							options={dataSelectOptionsJenisKelamin} 
							styles={customStyles}
							placeholder="Pilih Jenis Kelamin"
						/>
					</div>
				</div>
				<div className='col-span-6'>
					<div className='flex flex-col gap-2'>
						<label className='text-xs font-normal text-slate-700' htmlFor="no_telp" style={workSans.style}>Nomor Telepon</label>
						<PhoneInput
							international
							name="no_telp"
							value={no_telp}
							defaultCountry='ID'
							countryCallingCodeEditable={false}
							placeholder="Enter phone number"
							onChange={value => handlePhoneInput(value)}
							className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
							style={workSans.style}
						/>
					</div>
				</div>
				<div className='col-span-6'>
					<div className='flex flex-col gap-2'>
						<label className='text-xs font-normal text-slate-700' htmlFor="alamat" style={workSans.style}>Kota Asal Domisili</label>
						<Select
							name='alamat'
							onChange={(e) => dispatch(setAlamat(e.value))}
							options={dataSelectOptionsKotaDanProvinsi} 
							styles={customStyles}
							placeholder="Pilih Alamat Domisili"
						/>
					</div>
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
									{handleFileNameStatus()}
								</p>
							</div>
							<input 
								name='foto_profile' 
								id="dropzone-file"
								type="file" 
								class="hidden" 
								onChange={handleFile} 
								accept="image/png, image/gif, image/jpeg, image/jpg" 
							/>
						</label>
					</div> 
				</div>
			</div>
		</div>
	)
}

export default RegisterForm