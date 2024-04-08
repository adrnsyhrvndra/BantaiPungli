import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import NavbarUser from '../NavbarUser';

export default function (props) {
      const router = useRouter();
      const { children } = props;

      useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                  document.body.style.overflow = ''; 
            };
      }, []);

      return (
            <>
                  { router.pathname === "/" || router.pathname === "/auth/register" ? 
                        <main>
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