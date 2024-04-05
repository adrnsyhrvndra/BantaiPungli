import workSans from '@/libs/FontWorkSans'
import React from 'react'

const AlreadyAndForgotPassword = ({text, directText}) => {
      return (
            <h6 className="w-[75%] mx-auto text-center mt-6 text-[#18191C] font-medium" style={workSans.style}>
                  {text}{" "}
                  <span className="text-primary font-bold underline">
                        {directText}
                  </span>
            </h6>
      )
}

export default AlreadyAndForgotPassword