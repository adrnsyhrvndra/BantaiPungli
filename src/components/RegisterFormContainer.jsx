import React from 'react'
import TitleHeadingForm from './TitleHeadingForm'
import ButtonFormArrow from './ButtonFormArrow'
import RegisterForm from './RegisterForm'
import AlreadyAndForgotPassword from './AlreadyAndForgotPassword'

const RegisterFormContainer = () => {
      return (
            <div className="py-16 bg-white rounded-lg w-[75%] mx-auto mt-12">
                  <form>
                        <TitleHeadingForm 
                              heading="Daftar & Ayo Kita Berjuang"
                              headingRed="Memberantas Pungli!  "
                              subHeading="Akses dan berkontribusi melawan pungutan liar dengan melaporkan
                              setiap kejadian yang merugikan."
                        />
                        <RegisterForm/>
                        <ButtonFormArrow marginTop="mt-8" text="Daftar Sekarang!"/>
                        <AlreadyAndForgotPassword marginTop="mt-8" text="Sudah Punya Akun?" directText="Login Sekarang"/>
                  </form>
            </div>
      )
}

export default RegisterFormContainer