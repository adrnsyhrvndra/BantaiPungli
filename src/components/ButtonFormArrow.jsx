import workSans from '@/libs/FontWorkSans';
import React from 'react';
import arrowRightLogin from "../assets/arrow-right-login.png";
import Image from 'next/image';

const ButtonFormArrow = ({text,marginTop}) => {
      return (
            <div className='flex justify-center'>
                  <button type='submit' className={`mx-auto bg-red-700 text-center w-[45%] ${marginTop} relative bg-primary py-4 text-center text-white text-base font-medium overflow-clip cursor-pointer`} style={workSans.style}>
                        {text}
                        <div className="h-full absolute top-0 right-0 w-[16%] bg-secondary flex justify-center items-center">
                              <Image alt='arrow-right-login' src={arrowRightLogin} />
                        </div>
                  </button>
            </div>
      )
}

export default ButtonFormArrow