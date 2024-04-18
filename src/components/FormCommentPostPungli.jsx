import workSans from '@/libs/FontWorkSans'
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormCommentPostPungli = ({userId,pelaporanPungliId}) => {
      const id_user = Cookies.get('userId');

      const [input, setInput] = useState({
            userId: id_user,
            pelaporanPungliId: pelaporanPungliId,
            komentar: '',
      });

      const handleSubmit = async (e) => {
            e.preventDefault();

            const data = {
                  userId: input.userId,
                  pelaporanPungliId: input.pelaporanPungliId,
                  komentar: input.komentar,
                  jumlah_upvote: 0,
                  tanggal_komentar: new Date(),
                  created_at: new Date(),
                  updated_at: new Date()
            }

            console.log(data);

            if (input.komentar) {

                  try {

                        const res = await axios({
                              method: 'POST',
                              url: '/api/addKomentar',
                              data:  data,
                              headers: { 
                                    'Content-Type': 'application/json', 
                                    'Access-Control-Allow-Origin': '*' ,
                                    'Authorization': 'Bearer ' + Cookies.get('token')
                              }
                        });

                        console.log(res);

                        toast.success('Komentar Berhasil Ditambahkan! 🤙', {
                              position: "top-right",
                              autoClose: 9000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                              transition: Bounce,
                        });

                        setInput({
                              ...input,
                              komentar: ''
                        });

                        
                  } catch (error) {

                        toast.error('Komentar Tidak Berhasil Ditambahkan! 😰', {
                              position: "top-right",
                              autoClose: 4993,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                              transition: Bounce,
                        });

                        console.log(error.response.data.message);
                        
                  }

            } else {

                  toast.warn('Harap Isi Komentarnya Dulu! 😡', {
                        position: "top-right",
                        autoClose: 4993,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                  });

            }
      };

      return (

            <div className='bg-white py-14 px-12 mt-6 rounded-lg'>
                  <ToastContainer />
                  <div className='flex flex-col gap-6'>
                        <form onSubmit={handleSubmit}>
                              <textarea 
                                    className='w-full rounded-md bg-[#F8FAFB] border border-none pl-8 pt-6 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary' 
                                    rows={8}
                                    placeholder='Tambahkan Komentar Ada Disini Tentang Pungli Ini'
                                    onChange={(e) => setInput({ ...input, komentar: e.target.value })}
                                    value={input.komentar}
                              >
                              </textarea>
                              <button 
                                    type='submit'
                                    className='w-[35%] bg-[#B31E28] flex items-center justify-center py-3 rounded-md text-white text-sm font-medium' 
                                    style={workSans.style}
                              >
                                    Tambah Komentar
                              </button>    
                        </form>
                  </div>

            </div>

      )
}

export default FormCommentPostPungli