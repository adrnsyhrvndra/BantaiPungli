import workSans from '@/libs/FontWorkSans'
import React from 'react'

const StatistikPungliCard = () => {
      return (
            <div className='bg-white rounded-lg px-8 pt-7 pb-14 h-fit'>
                  <h6 className='text-xl font-semibold text-font-dark-02' style={workSans.style}>
                        Statistik Pungli
                  </h6>
                  <div className='flex flex-col gap-10 mt-10'>
                        <div className='flex flex-row gap-14 items-center'>
                              <div className='flex flex-row gap-6 items-start w-[50%]'>
                                    <svg className='w-5 h-5' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M17.3253 6.17498C17.3253 9.25396 15.9315 11.75 11.7503 11.75C7.56904 11.75 6.17529 9.25396 6.17529 6.17498C6.17529 3.09599 7.56904 0.599976 11.7503 0.599976C15.9315 0.599976 17.3253 3.09599 17.3253 6.17498Z" fill="#BFBFBF"/>
                                          <path d="M0.600098 21.2227C0.600098 17.6605 5.0499 14.6611 8.59909 14.9651C9.55576 15.047 10.6049 15.095 11.7501 15.095C12.8953 15.095 13.9444 15.047 14.9011 14.9651C18.4503 14.6611 22.9001 17.6605 22.9001 21.2227C22.9001 22.1464 22.1513 22.9 21.2276 22.9H2.2726C1.3489 22.9 0.600098 22.1464 0.600098 21.2227Z" fill="#BFBFBF"/>
                                    </svg>
                                    <div className='flex flex-col gap-0.5'>
                                          <h6 className='font-semibold text-[10px] text-[#6F7F95]' style={workSans.style}>Member Pengguna</h6>
                                          <h3 className='font-bold text-xl text-[#3B3551]' style={workSans.style}>7,365</h3>
                                    </div>
                              </div>
                              <div className='relative w-[50%]'>
                                    <div className='w-[100%] h-4 bg-[#EBEBEB] absolute z-0'></div>
                                    <div className='w-[80%] h-4 bg-primary absolute z-50 flex justify-end items-center'>
                                          <div className='w-1 h-6 bg-secondary text-right'></div>
                                    </div>
                              </div>
                        </div>
                        <div className='flex flex-row gap-14 items-center'>
                              <div className='flex flex-row gap-6 items-start w-[50%]'>
                                    <svg className='w-5 h-5' viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <mask id="mask0_133_25" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="29">
                                                <path d="M22.9336 22.2667H6.93359V12.9333C6.93359 8.51535 10.5156 4.93335 14.9336 4.93335C19.3516 4.93335 22.9336 8.51535 22.9336 12.9333V22.2667Z" fill="#555555" stroke="white" strokeWidth="2.66667" strokeLinejoin="round"/>
                                                <path d="M4.26676 26.9333H25.6001M1.6001 7.59998L3.6001 8.26664M7.6001 1.59998L8.26676 3.59998M5.6001 5.59998L3.6001 3.59998" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                          </mask>
                                          <g mask="url(#mask0_133_25)">
                                                <path d="M-1.06641 -1.06665H30.9336V30.9334H-1.06641V-1.06665Z" fill="#BFBFBF"/>
                                          </g>
                                    </svg>
                                    <div className='flex flex-col gap-0.5'>
                                          <h6 className='font-semibold text-[10px] text-[#6F7F95]' style={workSans.style}>Laporan Keseluruhan</h6>
                                          <h3 className='font-bold text-xl text-[#3B3551]' style={workSans.style}>7,365</h3>
                                    </div>
                              </div>
                              <div className='relative w-[50%]'>
                                    <div className='w-[100%] h-4 bg-[#EBEBEB] absolute z-0'></div>
                                    <div className='w-[80%] h-4 bg-primary absolute z-50 flex justify-end items-center'>
                                          <div className='w-1 h-6 bg-secondary text-right'></div>
                                    </div>
                              </div>
                        </div>
                        <div className='flex flex-row gap-14 items-center'>
                              <div className='flex flex-row gap-6 items-start w-[50%]'>
                                    <svg className='w-5 h-5' viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3.04454 22.6C2.37232 22.6 1.79706 22.3608 1.31876 21.8825C0.840468 21.4042 0.600912 20.8286 0.600098 20.1555V3.04442C0.600098 2.3722 0.839653 1.79694 1.31876 1.31864C1.79788 0.840346 2.37313 0.60079 3.04454 0.599976H22.6001C23.2723 0.599976 23.848 0.839531 24.3271 1.31864C24.8062 1.79775 25.0454 2.37301 25.0445 3.04442V20.1555C25.0445 20.8278 24.8054 21.4034 24.3271 21.8825C23.8488 22.3616 23.2731 22.6008 22.6001 22.6H3.04454ZM4.26676 17.7111H10.3779V15.2666H4.26676V17.7111ZM15.939 15.2666L21.989 9.21664L20.2473 7.47497L15.939 11.8139L14.1973 10.0722L12.4862 11.8139L15.939 15.2666ZM4.26676 12.8222H10.3779V10.3778H4.26676V12.8222ZM4.26676 7.93331H10.3779V5.48886H4.26676V7.93331Z" fill="#BFBFBF"/>
                                    </svg>
                                    <div className='flex flex-col gap-0.5'>
                                          <h6 className='font-semibold text-[10px] text-[#6F7F95]' style={workSans.style}>Laporan Selesai</h6>
                                          <h3 className='font-bold text-xl text-[#3B3551]' style={workSans.style}>7,365</h3>
                                    </div>
                              </div>
                              <div className='relative w-[50%]'>
                                    <div className='w-[100%] h-4 bg-[#EBEBEB] absolute z-0'></div>
                                    <div className='w-[80%] h-4 bg-primary absolute z-50 flex justify-end items-center'>
                                          <div className='w-1 h-6 bg-secondary text-right'></div>
                                    </div>
                              </div>
                        </div>
                        <div className='flex flex-row gap-14 items-center'>
                              <div className='flex flex-row gap-6 items-start w-[50%]'>
                                    <svg className='w-5 h-5' viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <mask id="mask0_25_64155" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="27">
                                                <path d="M2.6001 3.8222C2.6001 3.49804 2.72887 3.18717 2.95808 2.95796C3.18729 2.72874 3.49817 2.59998 3.82232 2.59998H11.1557L14.2112 6.26664H24.6001C24.9243 6.26664 25.2351 6.39541 25.4643 6.62462C25.6936 6.85383 25.8223 7.16471 25.8223 7.48886V23.3778C25.8223 23.7019 25.6936 24.0128 25.4643 24.242C25.2351 24.4712 24.9243 24.6 24.6001 24.6H3.82232C3.49817 24.6 3.18729 24.4712 2.95808 24.242C2.72887 24.0128 2.6001 23.7019 2.6001 23.3778V3.8222Z" fill="white" stroke="white" strokeWidth="4" strokeLinejoin="round"/>
                                                <path d="M11.1558 12.3778L17.2669 18.4889M17.2669 12.3778L11.1558 18.4889" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                          </mask>
                                          <g mask="url(#mask0_25_64155)">
                                                <path d="M-0.455566 -1.06665H28.8778V28.2667H-0.455566V-1.06665Z" fill="#BFBFBF"/>
                                          </g>
                                    </svg>
                                    <div className='flex flex-col gap-0.5'>
                                          <h6 className='font-semibold text-[10px] text-[#6F7F95]' style={workSans.style}>Laporan Belum Selesai</h6>
                                          <h3 className='font-bold text-xl text-[#3B3551]' style={workSans.style}>7,365</h3>
                                    </div>
                              </div>
                              <div className='relative w-[50%]'>
                                    <div className='w-[100%] h-4 bg-[#EBEBEB] absolute z-0'></div>
                                    <div className='w-[80%] h-4 bg-primary absolute z-50 flex justify-end items-center'>
                                          <div className='w-1 h-6 bg-secondary text-right'></div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default StatistikPungliCard