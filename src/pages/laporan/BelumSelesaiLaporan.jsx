import React from 'react';
import axios from 'axios';
import * as cookie from 'cookie';

export default function BelumSelesaiLaporan({ GetDataUser, GetDataUserById, GetDataLaporanPungli }) {

      return (

            <div>BelumSelesaiLaporan</div>
      )
}

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const API_GET_DATA_USERS = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const API_GET_DATA_USERS_BY_ID = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/admin/${parsedCookies.userId}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const API_GET_DATA_LAPORAN_PUNGLI = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungliNotAuth`);

      return { 
            props: {
			GetDataUser: API_GET_DATA_USERS.data,
                  GetDataUserById: API_GET_DATA_USERS_BY_ID.data,
                  GetDataLaporanPungli: API_GET_DATA_LAPORAN_PUNGLI.data
            }
      }
}
