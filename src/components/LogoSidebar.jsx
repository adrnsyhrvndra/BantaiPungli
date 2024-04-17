import Image from 'next/image'
import React from 'react'
import logoBantaiPungli from "../assets/logo-bantai-punli-form-login.png";
import suicoBams from '@/libs/FontSuicoBams';

const LogoSidebar = () => {
      return (
            <div className={`flex flex-row justify-start items-center mt-8`}>
                  <Image src={logoBantaiPungli} alt='logo-bantai-pungli'/>
                  <div className="flex flex-col ml-5">
                        <h3 className="text-6xl text-font-dark-01" style={suicoBams.style}>
                              Bantai
                        </h3>
                        <h3 className="text-6xl text-[#C51D29] -mt-3" style={suicoBams.style}>
                              Pungli
                        </h3>
                  </div>
            </div>
      )
}

export default LogoSidebar