import workSans from '@/libs/FontWorkSans'
import React from 'react'
import Image from "next/image";
import FotoProfilSementara from "../assets/logo-bantai-punli-form-login.png";

const CommentPungli = () => {

      return (

            <div className='flex flex-col gap-12'>
                  <h3 className='mt-12 text-[#283646] font-bold text-3xl' style={workSans.style}>37 Komentar</h3>
                  <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-10'>
                              <div className='flex flex-col gap-4'>
                                    <div className='flex flex-row gap-4 items-center justify-start'>
                                          <Image src={FotoProfilSementara} className='w-14 h-14 rounded-full' />
                                          <div className='flex flex-col gap-1'>
                                                <h3 className='font-bold text-xl text-[#283646]' style={workSans.style}>Stephen Adams</h3>
                                                <p className='font-normal text-xs text-[#77808B]' style={workSans.style}>2 Hours Ago</p>
                                          </div>
                                    </div>
                                    <p className='pl-16 text-sm text-[#484D52] font-normal leading-loose' style={workSans.style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi officiis! Possimus magni excepturi, voluptatem nobis consequatur, voluptates sequi in quos laboriosam totam dolorem a? Obcaecati cumque quam laudantium minus?</p>
                              </div>
                              <div className='w-full h-[1px] bg-[#CFD3D7]'></div>
                        </div>
                        <div className='flex flex-col gap-10'>
                              <div className='flex flex-col gap-4'>
                                    <div className='flex flex-row gap-4 items-center justify-start'>
                                          <Image src={FotoProfilSementara} className='w-14 h-14 rounded-full' />
                                          <div className='flex flex-col gap-1'>
                                                <h3 className='font-bold text-xl text-[#283646]' style={workSans.style}>Stephen Adams</h3>
                                                <p className='font-normal text-xs text-[#77808B]' style={workSans.style}>2 Hours Ago</p>
                                          </div>
                                    </div>
                                    <p className='pl-16 text-sm text-[#484D52] font-normal leading-loose' style={workSans.style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi officiis! Possimus magni excepturi, voluptatem nobis consequatur, voluptates sequi in quos laboriosam totam dolorem a? Obcaecati cumque quam laudantium minus?</p>
                              </div>
                              <div className='w-full h-[1px] bg-[#CFD3D7]'></div>
                        </div>
                  </div>
            </div>

      )
}

export default CommentPungli