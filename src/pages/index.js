import Image from 'next/image';
import gambarTukangPungli from '../assets/tukang-pungli2.png';
import elemenLoginForm from '../assets/elemen-login-form.png';
import logoBantaiPungli from '../assets/logo-bantai-punli-form-login.png';
import eyeClose from '../assets/eye-close.png';
import eyeOpen from '../assets/eye-open.png';
import arrowRightLogin from '../assets/arrow-right-login.png';
import lagukebangsaan from '../assets/gaksudibayarpungli.mp3';
import localFont from '@next/font/local';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import Head from 'next/head';


const suicoBams = localFont({ src: '../../public/fonts/SuicoBams.otf' }, { variable: '--suicoBams' });
const workSans = localFont({
  src: [
    {
      path: '../../public/fonts/WorkSans-Thin.ttf',
      weight: '100'
    },
    {
      path: '../../public/fonts/WorkSans-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/WorkSans-Medium.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/WorkSans-SemiBold.ttf',
      weight: '600'
    },
    {
      path: '../../public/fonts/WorkSans-Bold.ttf',
      weight: '700'
    },
    {
      path: '../../public/fonts/WorkSans-ExtraBold.ttf',
      weight: '800'
    },
    {
      path: '../../public/fonts/WorkSans-Black.ttf',
      weight: '900'
    }
  ],
  variable: '--font-work-sans'
});

const Login = () => {
  const [eyePassword,setEyePassword] = useState(false);

  const handleEyePassword = () => {
    setEyePassword(!eyePassword);
  }

  return (
    <>
      <Head>
        <title>Halaman Login | Bantai Pungli</title>
      </Head>
      <div className='grid grid-cols-12 bg-orange-500 h-screen'>
        <audio autoPlay loop src={lagukebangsaan}></audio>
        <div className='col-span-6 bg-primary bg-pattern-money-pungli bg-blend-multiply bg-contain relative overflow-hidden'>
          <Image className='absolute bottom-[51%] translate-y-1/2 left-[60%] -translate-x-1/2 scale-100' src={gambarTukangPungli} />
          <div className='w-full py-[78px] pl-32 pr-48 bg-secondary absolute bottom-0'>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                el: "#containerForBullets",
                clickable: true,
                type: "bullets",
                hiddenClass: "swiper-pagination-hidden",
              }}
              modules={[Autoplay, Pagination]}
            >
              <SwiperSlide>
                <div className='flex flex-col gap-4'>
                  <h2 className='text-white text-3xl font-semibold' style={workSans.style}>Tidak ada Kewajiban Bagi Kita Untuk Membayar Pungli-Pungli Sampah dan Hina!</h2>
                  <p className='text-white text-sm font-light' style={workSans.style}>Kita tidak berkewajiban membayar pungutan liar yang merendahkan martabat dan merugikan.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col gap-4'>
                  <h2 className='text-white text-3xl font-semibold' style={workSans.style}>“Yaelah, 2000 Doang Sedekah Aja Kali” Heh, Itu Namanya Pungli!</h2>
                  <p className='text-white text-sm font-light' style={workSans.style}>Menganggap sedekah sebesar 2000 untuk pungli menunjukkan sikap tidak menghargai kebaikan.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col gap-4'>
                  <h2 className='text-white text-3xl font-semibold' style={workSans.style}>Lama lama kita gausah sekolah, mending markir daripada mikir.</h2>
                  <p className='text-white text-sm font-light' style={workSans.style}>Kalau pungli-pungli in ditoleransi dengan embel "sedekah". yaudah mending markir aja daripada mikir.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col gap-4'>
                  <h2 className='text-white text-3xl font-semibold' style={workSans.style}>Hal Salah Jangan Ditoleransi, Kalau Di Toleransi Terus, Namanya Jaman Jahiliyah</h2>
                  <p className='text-white text-sm font-light' style={workSans.style}>Kesalahan harus ditegur, jika terus ditoleransi, kita kembali ke masa jahiliyah.</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div 
              id="containerForBullets"
              className='mt-8'
              style={{
                "--swiper-pagination-color": "#FFFFFF",
                "--swiper-pagination-bullet-inactive-color": "#6A6A6A",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "10px",
                "--swiper-pagination-bullet-horizontal-gap": "6px"
              }}
            >
            </div>
          </div>
        </div>
        <div className='col-span-6 bg-background relative z-0 overflow-y-auto'>
          <Image className='absolute top-0 right-0 -z-10' src={elemenLoginForm}/>
          <div className='mx-auto mt-28 flex flex-row justify-center items-center'>
            <Image src={logoBantaiPungli}/>
            <div className='flex flex-col ml-6'>
              <h3 className='text-6xl text-font-dark-01' style={suicoBams.style}>Bantai</h3>
              <h3 className='text-6xl text-[#C51D29] -mt-3' style={suicoBams.style}>Pungli</h3>
            </div>
          </div>
          <div className='py-16 bg-white rounded-lg w-[75%] mx-auto mt-12'>
            <div aria-label='Container Text And Description Login Form' className='w-[80%] mx-auto flex flex-col gap-3'>
              <h2 className='text-center text-3xl font-bold' style={workSans.style}>
                Login & Laporkan <span className='text-[#C51D29]'>Pungli-Pungli</span>
              </h2>
              <p className='text-center text-sm text-[#746B6B] font-medium opacity-60 leading-loose' style={workSans.style}>Akses  dan berkontribusi melawan pungutan liar dengan melaporkan setiap kejadian yang merugikan.</p>
            </div>
            <div aria-label='Container Group Login Form' className='w-[80%] mx-auto mt-8 flex flex-col gap-6'>
              <input type="text" className='w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary' placeholder='Masukan Alamat Email Atau Username' style={workSans.style}/>
              <div aria-label='input-group' className='relative'>
                {
                  eyePassword === false && (
                    <Image onClick={handleEyePassword} className='absolute top-1/2 right-6 -translate-y-1/2 opacity-60 cursor-pointer' src={eyeClose}/>
                  )
                }
                {
                  eyePassword === true && (
                    <Image onClick={handleEyePassword} className='absolute top-1/2 right-6 -translate-y-1/2 opacity-30 cursor-pointer' src={eyeOpen}/>
                  )
                }
                <input type={eyePassword === true ? 'text' : 'password'} className='w-full h-12 rounded-md bg-[#F8FAFB] border border-none pl-4 pt-3 pb-4 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary' placeholder='Masukan Password' style={workSans.style}/>
              </div>
              <h6 className='text-right text-[#03014C] text-sm font-medium opacity-30' style={workSans.style}>Lupa Password?</h6>
            </div>
            <div className='mx-auto w-[45%] mt-8 relative bg-primary py-4 text-center text-white text-base font-medium overflow-clip cursor-pointer' style={workSans.style}>
              Login
              <div className='h-full absolute top-0 right-0 w-[16%] bg-secondary flex justify-center items-center'>
                <Image src={arrowRightLogin}/>
              </div>
            </div>
          </div>
          <h6 className='w-[75%] mx-auto text-center mt-6 text-[#18191C] font-medium' style={workSans.style}>
            Belum Punya Akun? <span className='text-primary font-bold underline'>Daftar Sekarang</span>
          </h6>
          <h6 className='mt-16 mb-3 text-right mr-32 text-sm text-[#6F7581] font-normal' style={workSans.style}>©Copyright Bantai Pungli 2024</h6>
        </div>
      </div>
    </>

  )
}

export default Login