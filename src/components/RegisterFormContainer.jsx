import React from 'react'
import TitleHeadingForm from './TitleHeadingForm'
import ButtonFormArrow from './ButtonFormArrow'
import RegisterForm from './RegisterForm'
import AlreadyAndForgotPassword from './AlreadyAndForgotPassword'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAlamat, setEmail, setFotoProfile, setJenisKelamin, setNamaLengkap, setNoTelp, setPassword, setTanggalLahir, setUsername } from '@/store/auth'

const RegisterFormContainer = () => {

      const dispatch = useDispatch();
	const username = useSelector(state => state.authReducerRedux.username);
	const password = useSelector(state => state.authReducerRedux.password);
	const email = useSelector(state => state.authReducerRedux.email);
	const nama_lengkap = useSelector(state => state.authReducerRedux.nama_lengkap);
	const tanggal_lahir = useSelector(state => state.authReducerRedux.tanggal_lahir);
	const jenis_kelamin = useSelector(state => state.authReducerRedux.jenis_kelamin);
	const no_telp = useSelector(state => state.authReducerRedux.no_telp);
	const alamat = useSelector(state => state.authReducerRedux.alamat);
	const foto_profile = useSelector(state => state.authReducerRedux.foto_profile);

      const handleSubmit = async (e) => {
            e.preventDefault();

            const data = {
                  username,
                  password,
                  email,
                  nama_lengkap,
                  tanggal_lahir,
                  jenis_kelamin,
                  no_telp,
                  alamat,
                  status_online: 'online',
                  foto_profile
            };

            if (data.username && data.password && data.email && data.nama_lengkap && data.tanggal_lahir && data.jenis_kelamin && data.no_telp && data.alamat) {
                  
                  try {

                        const res = await axios({
                              method: 'POST',
                              url: '/api/register',
                              data:  data,
                              headers: { 
                                    'Content-Type': 'application/json', 
                                    'Access-Control-Allow-Origin': '*' 
                              }
                        });
                        
                        toast.success('Registrasi Berhasil! Silahkan Login Sekarang 🤙', {
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

                        dispatch(setUsername(''));
                        dispatch(setPassword(''));
                        dispatch(setEmail(''));
                        dispatch(setNamaLengkap(''));
                        dispatch(setTanggalLahir(''));
                        dispatch(setJenisKelamin(''));
                        dispatch(setNoTelp(''));
                        dispatch(setAlamat(''));
                        dispatch(setFotoProfile(''));

                        console.log(res.data);
                        
                  } catch (error) {

                        toast.error('Registrasi Tidak Berhasil! 😰', {
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

                        console.log(error);
                  }

            } else {
                  
                  toast.warn('Datamu ada yang tidak lengkap! 😡', {
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

      }

      return (
            <div className="py-16 bg-white rounded-lg w-[75%] mx-auto mt-12">
                  <ToastContainer />
                  <TitleHeadingForm 
                        heading="Daftar & Ayo Kita Berjuang"
                        headingRed="Memberantas Pungli!  "
                        subHeading="Akses dan berkontribusi melawan pungutan liar dengan melaporkan
                        setiap kejadian yang merugikan."
                  />
                  <form encType='multipart/form-data' onSubmit={handleSubmit}>
                        <RegisterForm/>
                        <ButtonFormArrow marginTop="mt-8" text="Daftar Sekarang!"/>
                  </form>
                  <AlreadyAndForgotPassword 
                        marginTop="mt-8" 
                        text="Sudah Punya Akun?" 
                        directText="Login Sekarang"
                  />
            </div>
      )
}

export default RegisterFormContainer