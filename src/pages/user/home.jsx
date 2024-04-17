import React from 'react'
import * as cookie from 'cookie'
import axios from 'axios';
import HomeViews from './views/HomeViews';

export default function Home (props) {

      return (
            <HomeViews 
                  _id={props.result._id} 
                  username={props.result.username} 
                  nama_lengkap={props.result.nama_lengkap}
                  email={props.result.email} 
                  no_telp={props.result.no_telp}
                  alamat={props.result.alamat}
                  status_online={props.result.status_online}
                  foto_profile={props.result.foto_profile}
                  created_at={props.result.created_at}
                  updated_at={props.result.updated_at}
            />
      )
}

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const res = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/users/${parsedCookies.userId}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      return { props: { result: res.data } }
}