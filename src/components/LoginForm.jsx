import workSans from '@/libs/FontWorkSans'
import React from 'react'
import eyeClose from "../assets/eye-close.png";
import eyeOpen from "../assets/eye-open.png";
import { useDispatch, useSelector } from 'react-redux';
import { setEyePassword } from '@/store/auth';
import Image from 'next/image';

const LoginForm = () => {
  const dispatch = useDispatch();
  const eyePassword = useSelector(state => state.authReducerRedux.eyePassword);

  const handleEyePassword = () => {
    dispatch(setEyePassword(!eyePassword));
  };

  return (
    <div aria-label="Container Group Login Form" className="w-[80%] mx-auto mt-8 flex flex-col gap-6">
      <input
        type="text"
        className="w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary"
        placeholder="Masukan Alamat Email Atau Username"
        style={workSans.style}
      />
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
      <h6
        className="text-right text-[#03014C] text-sm font-medium opacity-30"
        style={workSans.style}
      >
        Lupa Password?
      </h6>
    </div>
  )
}

export default LoginForm