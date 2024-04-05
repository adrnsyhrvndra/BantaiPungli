import React from 'react'
import TitleHeadingForm from './TitleHeadingForm'
import LoginForm from './LoginForm'
import ButtonFormArrow from './ButtonFormArrow'

const LoginFormContainer = () => {
      return (
            <div className="py-16 bg-white rounded-lg w-[75%] mx-auto mt-12">
                  <form>
                        <TitleHeadingForm 
                              heading="Login & Laporkan"
                              headingRed="Pungli-Pungli"
                              subHeading="Akses dan berkontribusi melawan pungutan liar dengan melaporkan
                              setiap kejadian yang merugikan."
                        />
                        <LoginForm/>
                        <ButtonFormArrow marginTop="mt-8" text="Login"/>
                  </form>
            </div>
      )
}

export default LoginFormContainer