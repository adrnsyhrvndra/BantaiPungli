import Image from 'next/image'
import React from 'react'
import logoBantaiPungli from "../assets/logo-bantai-punli-form-login.png";
import suicoBams from '@/libs/FontSuicoBams';

const LogoForm = ({paddingTop}) => {
      return (
            <>
                  <div className={`mx-auto flex flex-row justify-center items-center ${paddingTop}`}>
                        <Image alt='logo-bantai-pungli' src={logoBantaiPungli} />
                        <div className="flex flex-col ml-6">
                              <h3 className="text-6xl text-font-dark-01" style={suicoBams.style}>
                                    Bantai
                              </h3>
                              <h3 className="text-6xl text-[#C51D29] -mt-3" style={suicoBams.style}>
                                    Pungli
                              </h3>
                        </div>
                  </div>
            </>
      )
};

export default LogoForm;