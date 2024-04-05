import React from 'react'
import { useRouter } from 'next/router';

export default function (props) {
      const router = useRouter();
      const { children } = props;

      return (            
            <main>
                  {children}
            </main>
      )
}