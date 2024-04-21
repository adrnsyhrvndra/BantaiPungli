import React, { useEffect, useState } from 'react'
import * as cookie from 'cookie'
import axios from 'axios';
import DetailSelfProfile from './views/DetailSelfProfile';
import { useRouter } from 'next/router';

export default function DetailUser (props) {

      const router = useRouter();
      const grabIdUser = router.query.id;

      return (
            <DetailSelfProfile
                  idUser={grabIdUser}
                  dataUser={props.userById}
                  dataLaporanPungli={props.laporanPungli}
                  dataKomentarLaporanPungli={props.komentarLaporanPungli}
                  dataKategoriPungli={props.kategoriPungli}
            />
      )

}

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const userByIdRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users/${parsedCookies.userId}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const laporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });
      const filterLaporanPungli = laporanPungliRes.data.filter((item) => {
            return item.userId._id === parsedCookies.userId;
      });

      const komentarLaporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/komentarPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const kategoriAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/kategoriPungli`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      return {
            props: {
                  userById: userByIdRes.data,
                  laporanPungli: filterLaporanPungli,
                  komentarLaporanPungli: komentarLaporanPungliRes.data,
                  kategoriPungli: kategoriAllRes.data
            }
      }
}