import React from 'react';
import CariLaporanView from './views/CariLaporanView';
import * as cookie from 'cookie';
import axios from 'axios';

export default function CariLaporan (props) {

      return (
            <CariLaporanView
                  dataKategoriPungli={props.kategoriPungli}
                  dataLaporanPungli={props.laporanPungli}
                  komentarLaporanPungli={props.komentarLaporanPungli}
                  dataUserAll={props.userAll}
                  dataUserById={props.userById}
            />
      )
}

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const kategoriAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/kategoriPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const laporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const komentarLaporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/komentarPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const userAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const userByIdRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users/${parsedCookies.userId}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      return { 
            props: {
                  kategoriPungli: kategoriAllRes.data,
                  laporanPungli: laporanPungliRes.data,
                  komentarLaporanPungli: komentarLaporanPungliRes.data,
                  userAll: userAllRes.data,
                  userById: userByIdRes.data
            }
      };

}