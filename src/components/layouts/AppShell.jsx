import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import NavbarUser from '../NavbarUser';
import workSans from '@/libs/FontWorkSans';

export default function (props) {
      const router = useRouter();
      const { children } = props;

      return (
            <>
                  { router.pathname === "/" || router.pathname === "/auth/register" ? 
                        <main style={workSans.style}>
                              {children}
                        </main>
      
                        :
      
                        <main>
                              <NavbarUser/>
                              {children}
                        </main>
                  }

            </>
      )
}