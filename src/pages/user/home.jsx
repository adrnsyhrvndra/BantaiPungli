import React from 'react'
import * as cookie from 'cookie'
import axios from 'axios';
import HomeViews from './views/HomeViews';

export default function Home (props) {

      return (
            <HomeViews 
                  _id={props.userById._id} 
                  username={props.userById.username} 
                  nama_lengkap={props.userById.nama_lengkap}
                  email={props.userById.email} 
                  no_telp={props.userById.no_telp}
                  tanggal_lahir={props.userById.tanggal_lahir}
                  jenis_kelamin={props.userById.jenis_kelamin}
                  alamat={props.userById.alamat}
                  status_online={props.userById.status_online}
                  foto_profile={props.userById.foto_profile}
                  created_at={props.userById.created_at}
                  updated_at={props.userById.updated_at}
                  laporanPungli={props.laporanPungli}
                  komentarLaporanPungli={props.komentarLaporanPungli}
                  dataUserAll={props.userAll}
                  dataLaporanPungli={props.laporanPungli}
            />
      )
}

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const userByIdRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users/${parsedCookies.userId}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });
      
      const userAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users`, {
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
                  userById: userByIdRes.data,
                  userAll: userAllRes.data,
                  laporanPungli: laporanPungliRes.data,
                  komentarLaporanPungli: komentarLaporanPungliRes.data
            }
      }
}