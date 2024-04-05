import workSans from '@/libs/FontWorkSans';
import React from 'react';
import arrowRightLogin from "../assets/arrow-right-login.png";
import Image from 'next/image';

const ButtonFormArrow = ({text}) => {
      return (
            <div className="mx-auto w-[45%] mt-8 relative bg-primary py-4 text-center text-white text-base font-medium overflow-clip cursor-pointer" style={workSans.style}>
              {text}
              <div className="h-full absolute top-0 right-0 w-[16%] bg-secondary flex justify-center items-center">
                <Image src={arrowRightLogin} />
              </div>
            </div>
      )
}

export default ButtonFormArrow