import workSans from '@/libs/FontWorkSans'
import React from 'react'

const FormCommentPostPungli = () => {
      return (
            <div className='bg-white py-14 px-12 mt-6 rounded-lg'>
                  <div className='flex flex-col gap-6'>
                        <textarea 
                              className='w-full rounded-md bg-[#F8FAFB] border border-none pl-8 pt-6 placeholder:text-[#B1BBC6] placeholder:font-normal placeholder:text-sm placeholder:tracking-wide focus:outline-primary' 
                              rows={8}
                              placeholder='Tambahkan Komentar Ada Disini Tentang Pungli Ini'
                        >
                        </textarea>
                        <button className='w-[35%] bg-[#B31E28] flex items-center justify-center py-3 rounded-md text-white text-sm font-medium' style={workSans.style}>
                              Tambah Komentar
                        </button>    
                  </div>

            </div>
      )
}

export default FormCommentPostPungli