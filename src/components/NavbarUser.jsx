import React from 'react';
import SearchIcon from "../assets/search-icon.png";
import ArrowIconNav from "../assets/arrow-icon-bottom.png";
import Image from 'next/image';
import Link from 'next/link';
import workSans from '@/libs/FontWorkSans';
import Cookies from 'js-cookie';

const NavbarUser = () => {

      const nama_lengkap = Cookies.get('nama_lengkap');

      return (

            <div className='py-6 px-8 bg-whitew-full flex'>
                  <div className='flex flex-row justify-start items-center gap-[72px] w-[60%]'>
                        <div className='relative w-full'>
                              <input 
                                    type="text" 
                                    className='rounded-full bg-[#EEF0F2] pl-16 py-4 w-full focus:outline-primary' 
                                    placeholder='Search..' 
                                    style={workSans.style} 
                              />
                              <Image src={SearchIcon} className='absolute top-1/2 left-6 -translate-y-1/2' />
                        </div>
                        <div className='flex flex-row gap-14 justify-start items-center w-full'>
                              <Link href={'/user/Home'}>
                                    <div className='flex flex-row justify-start items-center gap-4'>
                                          <div className='p-3 rounded-full bg-primary'>
                                                <svg className='h-5 w-5 fill-white' viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M11.888 1.14287C11.5579 0.837072 11.1209 0.666687 10.6667 0.666687C10.2124 0.666687 9.77541 0.837072 9.44533 1.14287L0.833779 9.11806C0.570102 9.36257 0.360146 9.65725 0.216776 9.98407C0.0734063 10.3109 -0.00035835 10.6629 1.30889e-06 11.0187V20.722C0.0004726 21.4147 0.281632 22.0789 0.781678 22.5686C1.28172 23.0583 1.95973 23.3334 2.66667 23.3334H5.33333C6.04058 23.3334 6.71886 23.058 7.21895 22.568C7.71905 22.0779 8 21.4133 8 20.7202V16.3651C8 16.1341 8.09365 15.9125 8.26035 15.7492C8.42705 15.5858 8.65314 15.494 8.88889 15.494H12.4444C12.6802 15.494 12.9063 15.5858 13.073 15.7492C13.2397 15.9125 13.3333 16.1341 13.3333 16.3651V20.7202C13.3333 21.4133 13.6143 22.0779 14.1144 22.568C14.6145 23.058 15.2928 23.3334 16 23.3334H18.6667C19.3739 23.3334 20.0522 23.058 20.5523 22.568C21.0524 22.0779 21.3333 21.4133 21.3333 20.7202V11.0169C21.3332 10.6614 21.2591 10.3096 21.1154 9.98306C20.9717 9.65655 20.7616 9.36222 20.4978 9.11806L11.888 1.13938V1.14287Z"/>
                                                </svg>
                                          </div>
                                          <h4 className='text-base text-[#364045] font-medium' style={workSans.style}>
                                                Beranda
                                          </h4>
                                    </div>
                              </Link>
                              <div className='flex flex-row justify-start items-center gap-4'>
                                    <div className='p-3 rounded-full bg-[#E3E4E4]'>
                                          <svg className='h-5 w-5 fill-[#6C6666]' viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 2.0625C0 1.51549 0.217299 0.990886 0.604092 0.604092C0.990886 0.217299 1.51549 0 2.0625 0H11.6875C12.2345 0 12.7591 0.217299 13.1459 0.604092C13.5327 0.990886 13.75 1.51549 13.75 2.0625V4.52788L18.2435 9.02137C18.8878 9.66582 19.2498 10.5397 19.25 11.451V21.3125C19.25 21.4948 19.1776 21.6697 19.0486 21.7986C18.9197 21.9276 18.7448 22 18.5625 22C18.3802 22 18.2053 21.9276 18.0764 21.7986C17.9474 21.6697 17.875 21.4948 17.875 21.3125V11.451C17.8745 10.9042 17.6569 10.3799 17.27 9.9935L13.75 6.4735V10.7154L14.9242 11.8883C15.0532 12.0173 15.1255 12.1924 15.1254 12.3748C15.1253 12.5572 15.0527 12.7322 14.9236 12.8611C14.8596 12.9249 14.7838 12.9755 14.7003 13.01C14.6168 13.0445 14.5273 13.0623 14.437 13.0622C14.2546 13.0621 14.0797 12.9895 13.9508 12.8604L9.82575 8.73537C9.2455 8.15512 8.92237 8.17987 8.78075 8.21562C8.54287 8.27337 8.3325 8.46313 8.03825 8.74638C7.90075 8.87838 7.843 9.00762 7.8705 9.20012C7.90625 9.44075 8.09463 9.87113 8.73675 10.5133L10.4046 12.1811L10.7979 12.5758C10.8619 12.6396 10.9127 12.7155 10.9474 12.799C10.9821 12.8825 11 12.9721 11 13.0625C11 14.1267 11.0083 15.1979 11.3025 16.0064C11.4427 16.3927 11.6339 16.6746 11.8855 16.863C12.1316 17.0473 12.4946 17.1875 13.0625 17.1875C13.2448 17.1875 13.4197 17.2599 13.5486 17.3889C13.6776 17.5178 13.75 17.6927 13.75 17.875V19.9375C13.75 20.4845 13.5327 21.0091 13.1459 21.3959C12.7591 21.7827 12.2345 22 11.6875 22H2.0625C1.51549 22 0.990886 21.7827 0.604092 21.3959C0.217299 21.0091 0 20.4845 0 19.9375V2.0625ZM6.875 7.5625C6.2976 7.56242 5.72948 7.70779 5.22307 7.98519C4.71667 8.26258 4.2883 8.66307 3.9775 9.14969C3.6667 9.63631 3.48349 10.1934 3.44477 10.7695C3.40604 11.3456 3.51307 11.9222 3.75595 12.446C3.99884 12.9698 4.36976 13.424 4.83449 13.7667C5.29921 14.1094 5.84277 14.3295 6.41499 14.4066C6.98721 14.4838 7.56966 14.4156 8.10857 14.2084C8.64748 14.0011 9.1255 13.6614 9.4985 13.2206L9.42975 13.1519L7.76325 11.4854C7.03038 10.7525 6.60825 10.0636 6.51063 9.40088C6.46322 9.09976 6.49116 8.79158 6.59193 8.5039C6.69271 8.21621 6.86318 7.95797 7.08812 7.75225L7.13488 7.70687L7.26412 7.58312C7.1349 7.56898 7.00499 7.5621 6.875 7.5625ZM9.625 19.9375V20.625H11V19.9375C11 19.7552 11.0724 19.5803 11.2014 19.4514C11.3303 19.3224 11.5052 19.25 11.6875 19.25H12.375V18.5075C11.9027 18.4357 11.4547 18.2513 11.0688 17.9699C10.6501 18.1015 10.2843 18.3634 10.0246 18.7172C9.76497 19.0711 9.62497 19.4986 9.625 19.9375ZM1.375 4.125H2.0625C2.60951 4.125 3.13411 3.9077 3.52091 3.52091C3.9077 3.13411 4.125 2.60951 4.125 2.0625V1.375H2.75V2.0625C2.75 2.24484 2.67757 2.4197 2.54864 2.54864C2.4197 2.67757 2.24484 2.75 2.0625 2.75H1.375V4.125ZM9.625 2.0625C9.625 2.60951 9.8423 3.13411 10.2291 3.52091C10.6159 3.9077 11.1405 4.125 11.6875 4.125H12.375V2.75H11.6875C11.5052 2.75 11.3303 2.67757 11.2014 2.54864C11.0724 2.4197 11 2.24484 11 2.0625V1.375H9.625V2.0625ZM4.125 19.9375C4.125 19.3905 3.9077 18.8659 3.52091 18.4791C3.13411 18.0923 2.60951 17.875 2.0625 17.875H1.375V19.25H2.0625C2.24484 19.25 2.4197 19.3224 2.54864 19.4514C2.67757 19.5803 2.75 19.7552 2.75 19.9375V20.625H4.125V19.9375Z"/>
                                          </svg>
                                    </div>
                                    <h4 className='text-base text-[#364045] font-medium' style={workSans.style}>
                                          Laporan-Laporan Pungli
                                    </h4>
                              </div>
                        </div>
                  </div>
                  <div className='flex flex-row justify-end w-[40%] items-center'>
                        <div className='flex flex-row items-center gap-5'>
                              <div className='p-3 rounded-full bg-[#E3E4E4]'>
                                    <svg className='h-4 w-4' viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.98185 23.3331C10.4025 23.3233 10.8061 23.162 11.1214 22.8778C11.4366 22.5936 11.6432 22.2048 11.7045 21.7803H8.19238C8.25546 22.2164 8.4717 22.6143 8.80087 22.8999C9.13004 23.1856 9.54972 23.3395 9.98185 23.3331V23.3331Z" fill="#0099E6"/>
                                          <path d="M19.8977 19.1445L19.6707 18.9402C19.0267 18.3548 18.4629 17.6836 17.9948 16.9446C17.4835 15.9247 17.177 14.8109 17.0934 13.6686V10.304C17.0907 9.89533 17.0549 9.48757 16.9865 9.08488C15.8555 8.84775 14.8396 8.21923 14.1107 7.30574C13.3819 6.39224 12.9849 5.24989 12.987 4.0721V3.64302C12.2898 3.29307 11.5408 3.06294 10.7702 2.96193V2.10377C10.7702 1.86262 10.6762 1.63135 10.5091 1.46083C10.3419 1.29031 10.1152 1.19452 9.87876 1.19452C9.64235 1.19452 9.41562 1.29031 9.24846 1.46083C9.08129 1.63135 8.98737 1.86262 8.98737 2.10377V2.99599C7.26182 3.24428 5.68259 4.12096 4.54124 5.46419C3.39989 6.80742 2.77348 8.52648 2.77767 10.304V13.6686C2.69405 14.8109 2.38758 15.9247 1.87626 16.9446C1.41613 17.6818 0.861476 18.3529 0.227021 18.9402L0 19.1445V21.0651H19.8977V19.1445Z" fill="#B31E28"/>
                                          <path d="M17.9948 7.47753C19.8386 7.47753 21.3333 5.95287 21.3333 4.07211C21.3333 2.19135 19.8386 0.666687 17.9948 0.666687C16.151 0.666687 14.6562 2.19135 14.6562 4.07211C14.6562 5.95287 16.151 7.47753 17.9948 7.47753Z" fill="#E65C00"/>
                                    </svg>
                              </div>
                              <div className='w-[1.5px] h-6 bg-[#D1D8DB]'></div>
                              <div className='flex flex-row items-center justify-start gap-12'>
                                    <div className='flex flex-row items-center justify-start gap-4'>
                                          <div className='w-10 h-10 rounded-full bg-[#F2F2F2]'></div>
                                          <h6 
                                                className='text-lg font-medium text-[#364045]' 
                                                style={workSans.style}
                                          >
                                                { nama_lengkap }
                                          </h6>
                                    </div>
                                    <Image src={ArrowIconNav} />
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default NavbarUser;
