import LogoForm from '@/components/LogoForm'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import elemenLoginForm from "../../assets/elemen-login-form.png";
import RegisterFormContainer from '@/components/RegisterFormContainer';
import handLeft from '../../assets/hand-left.png';
import handRight from '../../assets/hand-right.png';

const register = () => {
      return (
            <>
                  <Head>
				<title>Halaman Register | Bantai Pungli</title>
			</Head>
                  <div className='relative h-fit pb-40 overflow-y-auto bg-background'>
                        <Image className="absolute top-0 right-0 -z-10" src={elemenLoginForm}/>
                        <LogoForm paddingTop="pt-20"/>
                        <RegisterFormContainer/>
                        <Image className='absolute bottom-0 left-0 w-80' src={handLeft} />
                        <Image className='absolute bottom-0 right-0 w-80' src={handRight} />
                  </div>
            </>
      )
}

export default register