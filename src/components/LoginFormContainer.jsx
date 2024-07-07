import React from 'react'
import TitleHeadingForm from './TitleHeadingForm'
import LoginForm from './LoginForm'
import ButtonFormArrow from './ButtonFormArrow'
import { useDispatch, useSelector } from 'react-redux'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { setPasswordLogin, setUsernameOrEmail } from '@/store/auth'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const LoginFormContainer = () => {

      const dispatch = useDispatch();
      const router = useRouter();
      console.log(router.pathname);

	const usernameOrEmail = useSelector(state => state.authReducerRedux.usernameOrEmail);
	const passwordLogin = useSelector(state => state.authReducerRedux.passwordLogin);

      const handleSubmitLogin = async (e) => {
            e.preventDefault();

            if (router.pathname === "/auth/login-admin") {
                  
                  if (usernameOrEmail && passwordLogin) {

                        try {

                              const res = await axios({
                                    method: 'POST',
                                    url: '/api/loginAdmin',
                                    data:  {
                                          usernameOrEmail: usernameOrEmail,
                                          password: passwordLogin
                                    },
                                    headers: { 
                                          'Content-Type': 'application/json', 
                                          'Access-Control-Allow-Origin': '*' 
                                    }
                              });

                              toast.success('Login Berhasil! 🤙', {
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

                              Cookies.set('token', res.data.accessToken, { expires: 1 });
                              Cookies.set('userId', res.data.data._id, { expires: 1 });
                              Cookies.set('nama_lengkap', res.data.data.nama_lengkap, { expires: 1 });

                              dispatch(setUsernameOrEmail(''));
                              dispatch(setPasswordLogin(''));

                              router.push('/admin/ViewDataPungli');
                              
                        } catch (error) {
                              
                              toast.error('Login Tidak Berhasil! 😰', {
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

            else if (router.pathname === "/auth/login") {

                  if (usernameOrEmail && passwordLogin) {
      
                        try {
      
                              const res = await axios({
                                    method: 'POST',
                                    url: '/api/loginUser',
                                    data:  {
                                          usernameOrEmail: usernameOrEmail,
                                          password: passwordLogin
                                    },
                                    headers: { 
                                          'Content-Type': 'application/json', 
                                          'Access-Control-Allow-Origin': '*' 
                                    }
                              });
      
                              toast.success('Login Berhasil! 🤙', {
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
      
                              Cookies.set('token', res.data.accessToken, { expires: 1 });
                              Cookies.set('userId', res.data.data._id, { expires: 1 });
                              Cookies.set('nama_lengkap', res.data.data.nama_lengkap, { expires: 1 });
      
                              dispatch(setUsernameOrEmail(''));
                              dispatch(setPasswordLogin(''));
      
                              router.push('/user/Home');
                              
                        } catch (error) {
                              
                              toast.error('Login Tidak Berhasil! 😰', {
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

      };

      return (

            <div className="py-16 bg-white rounded-lg w-[75%] mx-auto mt-12">
                  <ToastContainer />
                  <TitleHeadingForm 
                        heading={router.pathname === "/auth/login-admin" ? "Hai Admin, Mari Atur Data" : "Login & Laporkan"}
                        headingRed="Pungli-Pungli"
                        subHeading="Akses dan berkontribusi melawan pungutan liar dengan melaporkan
                        setiap kejadian yang merugikan."
                  />
                  <form onSubmit={handleSubmitLogin}>
                        <LoginForm/>
                        <ButtonFormArrow marginTop="mt-8" text="Login"/>
                  </form>
            </div>

      )
}

export default LoginFormContainer