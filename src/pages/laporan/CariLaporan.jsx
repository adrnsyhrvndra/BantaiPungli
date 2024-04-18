import React from 'react';
import CariLaporanView from './views/CariLaporanView';
import * as cookie from 'cookie';
import axios from 'axios';

export default function CariLaporan (props) {

      return (
            <CariLaporanView
                  dataKategoriPungli={props.kategoriPungli}
                  dataLaporanPungli={props.laporanPungli}
                  dataKomentarLaporanPungli={props.komentarLaporanPungli}
            />
      )
}

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const kategoriPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/kategoriPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const laporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const komentarLaporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/komentarPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      return { 
            props: {
                  kategoriPungli: kategoriPungliRes.data,
                  laporanPungli: laporanPungliRes.data,
                  komentarLaporanPungli: komentarLaporanPungliRes.data
            }
      };

}