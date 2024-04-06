import workSans from '@/libs/FontWorkSans'
import React from 'react'
import UserActive from './UserActive'

const UserActiveListCard = () => {
      return (
            <div className='bg-white rounded-lg px-8 pt-7 pb-14 h-fit'>
                  <h6 className='text-xl font-semibold text-font-dark-02' style={workSans.style}>
                        Beberapa Pengguna Yang Aktif
                  </h6>
                  <div className='mt-11'>
                        <UserActive text='Adriansyah Ravindra'/>
                        <UserActive text='Adriansyah Ravindra'/>
                        <UserActive text='Adriansyah Ravindra'/>
                  </div>
            </div>
      )
}

export default UserActiveListCard