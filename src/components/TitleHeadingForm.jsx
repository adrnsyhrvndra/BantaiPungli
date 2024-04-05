import React from 'react'
import workSans from '@/libs/FontWorkSans'

const TitleHeadingForm = ({heading, headingRed, subHeading}) => {
      return (
            <>
                  <div
                        aria-label="Container Text And Description Login Form"
                        className="w-[80%] mx-auto flex flex-col gap-3"
                  >
                        <h2
                              className="text-center text-3xl font-bold"
                              style={workSans.style}
                        >
                              {heading}{" "}
                              <span className="text-[#C51D29]">{headingRed}</span>
                        </h2>
                        <p
                              className="text-center text-sm text-[#746B6B] font-medium opacity-60 leading-loose"
                              style={workSans.style}
                        >
                              {subHeading}
                        </p>
                  </div>
            </>
      )
}

export default TitleHeadingForm