import workSans from '@/libs/FontWorkSans'
import React from 'react'
import IconUserName from "../assets/icon-user-profile-nama.png"
import IconUserEmail from "../assets/icon-user-profile-email.png"
import IconUserTanggalLahir from "../assets/icon-user-profile-calendar.png"
import IconUserCity from "../assets/icon-user-profile-city.png"
import IconUserMale from "../assets/icon-user-profile-male.png"
import IconUserPhone from "../assets/icon-user-profile-phone.png"
import HandOpacity from "../assets/opacity-hand-detail-profile.png"
import Image from "next/image";

const CardInformasiLengkapProfil = () => {

      return (

            <div className='bg-white rounded-lg py-14 px-20 h-fit relative overflow-hidden'>
                  <h3 className='text-2xl font-semibold' style={workSans.style}>Informasi Lengkap Profil</h3>
                  <ul className='mt-10 flex flex-col gap-6 list-none'>
                        <li>
                              <div className='flex flex-row items-center justify-start gap-8'>
                                    <Image src={IconUserName} className='w-4 h-4' />
                                    <h6 className='font-normal text-base text-[#676970]' style={workSans.style}>Username : adrnsyhrvndra</h6>
                              </div>
                        </li>
                        <li>
                              <div className='flex flex-row items-center justify-start gap-8'>
                                    <Image src={IconUserEmail} className='w-4 h-4' />
                                    <h6 className='font-normal text-base text-[#676970]' style={workSans.style}>Email : adrimedia.indonesia@gmail.com</h6>
                              </div>
                        </li>
                        <li>
                              <div className='flex flex-row items-center justify-start gap-8'>
                                    <Image src={IconUserTanggalLahir} className='w-4 h-4' />
                                    <h6 className='font-normal text-base text-[#676970]' style={workSans.style}>Tanggal Lahir : adrnsyhrvndra</h6>
                              </div>
                        </li>
                        <li>
                              <div className='flex flex-row items-center justify-start gap-8'>
                                    <Image src={IconUserMale} className='w-4 h-4' />
                                    <h6 className='font-normal text-base text-[#676970]' style={workSans.style}>Jenis Kelamin : Laki-Laki</h6>
                              </div>
                        </li>
                        <li>
                              <div className='flex flex-row items-center justify-start gap-8'>
                                    <Image src={IconUserCity} className='w-4 h-4' />
                                    <h6 className='font-normal text-base text-[#676970]' style={workSans.style}>Alamat : Kota Bandung</h6>
                              </div>
                        </li>
                        <li>
                              <div className='flex flex-row items-center justify-start gap-8'>
                                    <Image src={IconUserPhone} className='w-4 h-4' />
                                    <h6 className='font-normal text-base text-[#676970]' style={workSans.style}>No Telepon : +62 811-2349-927</h6>
                              </div>
                        </li>
                  </ul>
                  <Image className='absolute right-24 top-8' src={HandOpacity} />
            </div>
      )
}

export default CardInformasiLengkapProfil