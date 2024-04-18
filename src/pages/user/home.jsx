import React from 'react'
import * as cookie from 'cookie'
import axios from 'axios';
import HomeViews from './views/HomeViews';

export default function Home (props) {

      return (
            <HomeViews 
                  _id={props.userData._id} 
                  username={props.userData.username} 
                  nama_lengkap={props.userData.nama_lengkap}
                  email={props.userData.email} 
                  no_telp={props.userData.no_telp}
                  tanggal_lahir={props.userData.tanggal_lahir}
                  jenis_kelamin={props.userData.jenis_kelamin}
                  alamat={props.userData.alamat}
                  status_online={props.userData.status_online}
                  foto_profile={props.userData.foto_profile}
                  created_at={props.userData.created_at}
                  updated_at={props.userData.updated_at}
                  laporanPungli={props.laporanPungli}
                  komentarLaporanPungli={props.komentarLaporanPungli}
            />
      )
}

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const userRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users/${parsedCookies.userId}`, {
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
                  userData: userRes.data,
                  laporanPungli: laporanPungliRes.data,
                  komentarLaporanPungli: komentarLaporanPungliRes.data
            }
      }
}