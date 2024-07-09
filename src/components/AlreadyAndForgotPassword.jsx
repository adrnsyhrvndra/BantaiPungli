import workSans from '@/libs/FontWorkSans'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const AlreadyAndForgotPassword = ({text, directText, marginTop}) => {
      const router = useRouter();

      return (
            <h6 className={`w-[75%] mx-auto text-center ${marginTop} text-[#18191C] font-medium`} style={workSans.style}>
                  {text}{" "}
                  <Link href={router.pathname === "/auth/login" ? '/auth/register' : '/auth/login'} className="text-primary font-bold underline cursor-pointer">
                        {directText}
                  </Link>
            </h6>
      )
}

export default AlreadyAndForgotPassword