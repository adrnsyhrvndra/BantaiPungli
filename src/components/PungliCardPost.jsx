import React from 'react'
import Image from 'next/image'
import GambarPungli from '../assets/gambar-pungli.png'
import workSans from '@/libs/FontWorkSans'
import SarjanaBrewok from "../assets/sarjanabrewok.png";

const PungliCardPost = ({imageSizeWidth,imageSizeHeight,judulTextSize,deskripsiTextSize}) => {
      return (
            <div className='bg-white px-12 py-10 rounded-lg h-fit'>
                  <div className='flex flex-row gap-8 items-center'>
                        <div className={`${imageSizeWidth} ${imageSizeHeight} overflow-hidden relative rounded-lg`}>
                              <Image className='object-cover object-center' src={GambarPungli} layout="fill" />
                        </div>
                        <div className='w-full'>
                              <div className='flex flex-col gap-2'>
                                    <h2 className={`text-left font-semibold ${judulTextSize} leading-normal text-[#364045]`} style={workSans.style} >
                                          Laporan Pungli Parkir Liar Di Pertigaan Jalan Tendean Jakarta
                                    </h2>
                                    <p className={`${deskripsiTextSize} font-normal text-[#48555C]`} style={workSans.style}>
                                          Lorem ipsum dolor sit amet consectetur. Consectetur vestibulum euismod vivamus laoreet integer ullamcorper quam.... 
                                          <span className='text-primary font-extrabold leading-loose underline cursor-pointer' style={workSans.style}>LIHAT LEBIH DETAIL</span>
                                    </p>
                              </div>
                              <div className='flex flex-row items-center gap-8 mt-8'>
                                    <div className='flex flex-row gap-5 items-center'>
                                          <div className='relative'>
                                                <div className='h-3 w-3 bg-green-600 rounded-full absolute top-0 right-0.5'></div>
                                                <Image className='w-14 h-14 rounded-full' src={SarjanaBrewok} />
                                          </div>
                                          <div className='flex flex-col gap-1'>
                                                <h6 className='font-semibold text-base text-[#48555B]' style={workSans.style}>Adriansyah Ravindra</h6>
                                                <p className='text-xs font-normal text-[#5E6F78]' style={workSans.style}>12 Minute Ago</p>
                                          </div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                          <div className='flex flex-row gap-2 items-center'>
                                                <svg className='w-6 h-6' viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <circle cx="10.7134" cy="10.78" r="10" fill="#E8EBED"/>
                                                      <path d="M14.7195 11.0063C14.8995 10.7754 14.9992 10.4925 14.9992 10.1982C14.9992 9.73117 14.7302 9.28913 14.2974 9.04262C14.1859 8.97917 14.0591 8.94578 13.9299 8.9459H11.3606L11.4249 7.66762C11.4399 7.35871 11.3274 7.0654 11.1088 6.84178C11.0015 6.73156 10.8721 6.64387 10.7286 6.58412C10.585 6.52437 10.4304 6.49383 10.2742 6.49439C9.71702 6.49439 9.22416 6.85843 9.07631 7.37951L8.15595 10.6142H8.15273V15.0658H13.2131C13.3117 15.0658 13.4081 15.0471 13.497 15.0096C14.007 14.7985 14.3359 14.3149 14.3359 13.7782C14.3359 13.6471 14.3167 13.5182 14.2781 13.3933C14.4581 13.1624 14.5577 12.8795 14.5577 12.5852C14.5577 12.4541 14.5384 12.3252 14.4999 12.2004C14.6799 11.9694 14.7795 11.6865 14.7795 11.3922C14.7774 11.2611 14.7581 11.1311 14.7195 11.0063ZM6.42773 10.947V14.733C6.42773 14.9171 6.58095 15.0658 6.77059 15.0658H7.46702V10.6142H6.77059C6.58095 10.6142 6.42773 10.7629 6.42773 10.947Z" fill="#BFBFBF"/>
                                                </svg>
                                                <h6 className='font-normal text-xs text-[#48555C] opacity-90' style={workSans.style}>124 Upvote</h6>
                                          </div>
                                          <div className='flex flex-row gap-2 items-center'>
                                                <svg className='w-6 h-6' viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <circle cx="10.7134" cy="10.78" r="10" fill="#E8EBED"/>
                                                      <path d="M13.7192 7.75536C13.0194 7.04991 12.0957 6.61109 11.1075 6.51456C10.1192 6.41804 9.12828 6.66985 8.30553 7.22659C7.48279 7.78333 6.87977 8.61011 6.60046 9.56439C6.32114 10.5187 6.38302 11.5406 6.77543 12.4541C6.81633 12.539 6.82975 12.6346 6.81382 12.7275L6.43848 14.5344C6.42402 14.6037 6.42697 14.6755 6.44707 14.7433C6.46717 14.8112 6.50379 14.873 6.55364 14.9231C6.5945 14.9637 6.64316 14.9957 6.69667 15.017C6.75018 15.0382 6.80744 15.0485 6.865 15.047H6.95031L8.77583 14.6796C8.86861 14.6685 8.96269 14.6817 9.0488 14.7181C9.96092 15.1111 10.9814 15.1731 11.9342 14.8933C12.8871 14.6136 13.7126 14.0097 14.2685 13.1857C14.8244 12.3617 15.0759 11.3693 14.9795 10.3796C14.8831 9.38983 14.445 8.46478 13.7406 7.7639L13.7192 7.75536ZM8.99762 11.2026C8.91326 11.2026 8.8308 11.1775 8.76065 11.1306C8.69051 11.0836 8.63584 11.0169 8.60356 10.9389C8.57128 10.8608 8.56283 10.7749 8.57929 10.6921C8.59575 10.6092 8.63637 10.5331 8.69602 10.4733C8.75567 10.4136 8.83167 10.3729 8.91441 10.3564C8.99714 10.34 9.0829 10.3484 9.16084 10.3807C9.23878 10.4131 9.30539 10.4678 9.35226 10.5381C9.39913 10.6083 9.42414 10.6909 9.42414 10.7754C9.42414 10.8887 9.3792 10.9973 9.29922 11.0774C9.21923 11.1575 9.11074 11.2026 8.99762 11.2026ZM10.7037 11.2026C10.6194 11.2026 10.5369 11.1775 10.4667 11.1306C10.3966 11.0836 10.3419 11.0169 10.3097 10.9389C10.2774 10.8608 10.2689 10.7749 10.2854 10.6921C10.3018 10.6092 10.3425 10.5331 10.4021 10.4733C10.4618 10.4136 10.5378 10.3729 10.6205 10.3564C10.7032 10.34 10.789 10.3484 10.8669 10.3807C10.9449 10.4131 11.0115 10.4678 11.0584 10.5381C11.1052 10.6083 11.1302 10.6909 11.1302 10.7754C11.1302 10.8887 11.0853 10.9973 11.0053 11.0774C10.9253 11.1575 10.8168 11.2026 10.7037 11.2026ZM12.4098 11.2026C12.3254 11.2026 12.243 11.1775 12.1728 11.1306C12.1027 11.0836 12.048 11.0169 12.0157 10.9389C11.9835 10.8608 11.975 10.7749 11.9915 10.6921C12.0079 10.6092 12.0486 10.5331 12.1082 10.4733C12.1679 10.4136 12.2439 10.3729 12.3266 10.3564C12.4093 10.34 12.4951 10.3484 12.573 10.3807C12.651 10.4131 12.7176 10.4678 12.7644 10.5381C12.8113 10.6083 12.8363 10.6909 12.8363 10.7754C12.8363 10.8887 12.7914 10.9973 12.7114 11.0774C12.6314 11.1575 12.5229 11.2026 12.4098 11.2026Z" fill="#BFBFBF"/>
                                                </svg>
                                                <h6 className='font-normal text-xs text-[#48555C] opacity-90' style={workSans.style}>37 Komentar</h6>
                                          </div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                          <div className='flex flex-row gap-2 items-center'>
                                                <svg className='w-6 h-6' viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <circle cx="10.7134" cy="10.78" r="10" fill="#4AB75B"/>
                                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2876 7.9067C14.3404 7.95197 14.3838 8.00721 14.4152 8.06925C14.4467 8.1313 14.4656 8.19893 14.4709 8.2683C14.4763 8.33766 14.4678 8.40739 14.4462 8.4735C14.4245 8.53961 14.3901 8.6008 14.3448 8.65359L10.1091 13.5951C10.0617 13.6505 10.0032 13.6955 9.93752 13.7273C9.87182 13.759 9.80027 13.7769 9.72735 13.7796C9.65444 13.7824 9.58173 13.7701 9.5138 13.7435C9.44587 13.7168 9.38419 13.6764 9.33261 13.6248L6.86183 11.154C6.76543 11.0541 6.71213 10.9203 6.7134 10.7815C6.71467 10.6427 6.77042 10.5099 6.86863 10.4118C6.96684 10.3137 7.09966 10.2581 7.23848 10.2569C7.3773 10.2558 7.51102 10.3092 7.61083 10.4057L9.67781 12.472L13.5414 7.96459C13.6328 7.85813 13.7627 7.7923 13.9027 7.78158C14.0426 7.77086 14.181 7.81541 14.2876 7.9067Z" fill="white"/>
                                                </svg>
                                                <h6 className='font-normal text-xs text-[#48555C] opacity-90' style={workSans.style}>Sudah Selesai Ditanggapi</h6>
                                          </div>
                                          <div className='flex flex-row gap-2 items-center'>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <circle cx="10.7134" cy="10.78" r="10" fill="#E8EBED"/>
                                                      <path d="M10.1111 7H7.44444C7.32657 7 7.21352 7.04683 7.13017 7.13017C7.04683 7.21352 7 7.32657 7 7.44444V10.1111C7 10.229 7.04683 10.342 7.13017 10.4254C7.21352 10.5087 7.32657 10.5556 7.44444 10.5556H10.1111C10.229 10.5556 10.342 10.5087 10.4254 10.4254C10.5087 10.342 10.5556 10.229 10.5556 10.1111V7.44444C10.5556 7.32657 10.5087 7.21352 10.4254 7.13017C10.342 7.04683 10.229 7 10.1111 7ZM14.5556 7H11.8889C11.771 7 11.658 7.04683 11.5746 7.13017C11.4913 7.21352 11.4444 7.32657 11.4444 7.44444V10.1111C11.4444 10.229 11.4913 10.342 11.5746 10.4254C11.658 10.5087 11.771 10.5556 11.8889 10.5556H14.5556C14.6734 10.5556 14.7865 10.5087 14.8698 10.4254C14.9532 10.342 15 10.229 15 10.1111V7.44444C15 7.32657 14.9532 7.21352 14.8698 7.13017C14.7865 7.04683 14.6734 7 14.5556 7ZM10.1111 11.4444H7.44444C7.32657 11.4444 7.21352 11.4913 7.13017 11.5746C7.04683 11.658 7 11.771 7 11.8889V14.5556C7 14.6734 7.04683 14.7865 7.13017 14.8698C7.21352 14.9532 7.32657 15 7.44444 15H10.1111C10.229 15 10.342 14.9532 10.4254 14.8698C10.5087 14.7865 10.5556 14.6734 10.5556 14.5556V11.8889C10.5556 11.771 10.5087 11.658 10.4254 11.5746C10.342 11.4913 10.229 11.4444 10.1111 11.4444ZM13.2222 11.4444C13.57 11.4444 13.9102 11.5465 14.2006 11.7379C14.491 11.9293 14.7189 12.2018 14.856 12.5214C14.9932 12.8411 15.0335 13.1939 14.972 13.5363C14.9106 13.8786 14.7501 14.1954 14.5103 14.4475C14.2706 14.6995 13.9622 14.8757 13.6234 14.9541C13.2845 15.0326 12.9301 15.01 12.604 14.889C12.2779 14.7681 11.9944 14.5541 11.7887 14.2736C11.583 13.9932 11.4641 13.6585 11.4467 13.3111L11.4444 13.2222L11.4467 13.1333C11.4695 12.6778 11.6665 12.2484 11.997 11.9341C12.3275 11.6197 12.7661 11.4444 13.2222 11.4444Z" fill="#BFBFBF"/>
                                                </svg>
                                                <h6 className='font-normal text-xs text-[#48555C] opacity-90' style={workSans.style}>Pungli Perhubungan</h6>
                                          </div>
                                    </div>
                              </div>
                              <button className='w-full py-4 bg-primary mt-8 text-white rounded-md font-medium text-xs' style={workSans.style}>
                                    Detail Laporan Pungli
                              </button>
                        </div>
                  </div>

            </div>
      )
}

export default PungliCardPost