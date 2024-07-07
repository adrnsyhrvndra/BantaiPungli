
import React, { useEffect, useMemo, useState } from 'react';
import NavbarUser from '@/components/NavbarUser';
import Head from 'next/head';
import axios from 'axios';
import * as cookie from 'cookie';
import SidebarUserMenu from '@/components/SidebarUserMenu';
import Breadcumb from '@/components/Breadcumb';
import CardHomeProfile from '@/components/CardHomeProfile';
import WeatherCard from '@/components/WeatherCard';
import {
      MaterialReactTable,
      useMaterialReactTable,
} from 'material-react-table';
import Image from 'next/image';
import workSans from '@/libs/FontWorkSans';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Link from 'next/link';

export default function ViewDataPungli({ GetDataAdmin, GetDataAdminById, GetDataLaporanPungli }) {

      const router = useRouter();
      const [tableData, setTableData] = useState(GetDataLaporanPungli);

      const HandleBadgeStatusLaporan = (status_laporan) => {

            if (status_laporan === 'Belum Selesai') {

                  return (
                        <div className='w-full flex flex-row items-center justify-start gap-x-4'>
                              <div className='w-3 h-3 rounded-full bg-red-600 animate-pulse'></div>
                              <h6 className='font-normal text-sm' style={workSans.style}>{status_laporan}</h6>
                        </div>
                  );

            } 
            
            else if (status_laporan === 'Selesai') {

                  return (
                        <div className='w-full flex flex-row items-center justify-start gap-x-4'>
                              <div className='w-3 h-3 animate-pulse rounded-full bg-green-500'></div>
                              <h6 className='font-normal text-sm' style={workSans.style}>{status_laporan}</h6>
                        </div>
                  );

            } 
            
            else {

                  return (
                        <div className='w-full flex flex-row items-center justify-start gap-x-4'>
                              <div className='w-3 h-3 animate-pulse rounded-full bg-yellow-500'></div>
                              <h6 className='font-normal text-sm' style={workSans.style}>{status_laporan}</h6>
                        </div>
                  );

            }

      };

      const HandleDeleteDataLaporanPungli = async(id) => {

            try {

                  const res = await axios.delete(`/api/deleteLaporan/?id=${id}`, {
                        headers: {
                            'Authorization': `Bearer ${Cookies.get('token')}`
                        },
                  });

                  // Agar realtime
                  setTableData((prevTableData) => prevTableData.filter((item) => item._id !== id));

                  toast.success('Delete Laporan Pungli Berhasil! 🤙', {
                        position: "top-right",
                        autoClose: 9000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                  });


            } catch (error) {
                  
                  console.error("Error:", error);
                        
                  toast.error(`Tidak Berhasil! Karena ${error} 😰`, {
                        position: "top-right",
                        autoClose: 4993,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                  });

            }

      }

      const columns = useMemo(
            () => [
                  {
                        accessorKey: 'bukti_pendukung',
                        header: 'Foto Laporan',
                        size: 200,
                        Cell: ({renderedCellValue, row}) => {
                              // console.log(row);

                              return (
                                    <Image
                                          src={row.original.bukti_pendukung}
                                          alt={row.original.bukti_pendukung}
                                          className='object-cover rounded-md'
                                          width={200}
                                          height={200}
                                    />
                              );
                        },
                  },
                  {
                        accessorKey: 'userId.nama_lengkap',
                        header: 'Nama Pelapor',
                        size: 200,
                        Cell: ({renderedCellValue, row}) => {

                              return(

                                    <div className='w-full flex flex-row items-center justify-start gap-x-4'>
                                          <div className='relative w-14 h-14 rounded-full'>
                                                <Image 
                                                      alt='profile-user' 
                                                      src={row.original.userId.foto_profile}
                                                      className='rounded-full object-cover object-center'
                                                      fill={true}
                                                />
                                          </div>
                                          <h6 className='font-normal text-sm' style={workSans.style}>{renderedCellValue}</h6>
                                    </div>
                              )
                        }
                  },
                  {
                        accessorKey: 'judul_pelaporan',
                        header: 'Judul Laporan',
                        size: 200,
                        Cell: ({renderedCellValue, row}) => {
                              return (
                                    <div className='w-full flex flex-row items-center justify-start gap-x-4'>
                                          <h6 className='font-normal text-sm' style={workSans.style}>{renderedCellValue}</h6>
                                    </div>
                              );
                        },
                  },
                  {
                        accessorKey: 'tanggal_pelaporan',
                        header: 'Tanggal Laporan',
                        size: 200,
                        Cell: ({renderedCellValue, row}) => {
                              
                              const FormattedDate = format(row.original.tanggal_pelaporan, 'EEEE, dd MMMM yyyy', {locale: id});

                              return (
                                    <div className='w-full flex flex-row items-center justify-start gap-x-4'>
                                          <h6 className='font-normal text-sm' style={workSans.style}>{FormattedDate}</h6>
                                    </div>
                              );
                        },
                  },
                  {
                        accessorKey: 'status_pelaporan',
                        header: 'Status Laporan',
                        size: 200,
                        Cell: ({renderedCellValue, row}) => {

                              return (
                                    <div className='w-full flex flex-row items-center justify-start gap-x-4'>
                                          <h6 className='font-normal text-sm' style={workSans.style}>{HandleBadgeStatusLaporan(row.original.status_pelaporan)}</h6>
                                    </div>
                              );
                        },
                  },
                  {
                        accessorKey: '_id',
                        header: 'Aksi',
                        size: 200,
                        Cell: ({renderedCellValue, row}) => {

                              const EditDataPungli = row.original._id;

                              return (
                                    <div className='w-full flex flex-row items-center justify-start gap-x-2'>
                                          <Link href={`/admin/${EditDataPungli}`}>
                                                <Button color='success' variant="contained" endIcon={<EditIcon />}>
                                                      Ubah
                                                </Button>
                                          </Link>
                                          <Button onClick={() => HandleDeleteDataLaporanPungli(row.original._id)} color='error' variant="contained" endIcon={<DeleteIcon />}>
                                                Hapus
                                          </Button>
                                    </div>
                              );
                        },
                  },
            ],
            [],
      );

      const table = useMaterialReactTable({
            columns,
            data : tableData,
      });

      useEffect(() => {

            document.body.style.overflow = 'hidden';
            return () => {
                  document.body.style.overflow = ''; 
            };

      }, []);

      return (

            <div className='overflow-hidden' style={workSans.style}>
                  <Head>
				<title>Halaman View Data Pungli | Bantai Pungli</title>
			</Head>
                  <ToastContainer/>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                              <NavbarUser
                                    nama_lengkap={GetDataAdminById.nama_lengkap}
                                    foto_profile={GetDataAdminById.foto_profile}
                              />
                        </div>
                  </div>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-2 px-8 overflow-y-scroll h-screen pb-40'>
                              <SidebarUserMenu/>
                        </div>
                        <div className='col-span-10 bg-[#F1F3F4] overflow-y-auto h-screen pb-48'>
                              <Breadcumb namaWelcome={GetDataAdminById.nama_lengkap}/>
                              <div className='grid grid-cols-12 px-6 gap-6 mt-10'>
                                    <div className='col-span-12'>
                                          <div className='grid grid-cols-12 gap-6'>
                                                <div className='col-span-5'>
                                                      <CardHomeProfile
                                                            nama_lengkap={GetDataAdminById.nama_lengkap}
                                                      />
                                                </div>
                                                <div className='col-span-4'>
                                                      <WeatherCard/>
                                                </div>
                                                <div className='col-span-12'>
                                                      <div className='grid grid-cols-12 gap-7'>
                                                            <div className='col-span-12'>
                                                                  <MaterialReactTable table={table} />
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
};

export async function getServerSideProps(context) {

      const parsedCookies = cookie.parse(context.req.headers.cookie);

      const API_GET_DATA_ADMIN = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/admin`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const API_GET_DATA_ADMIN_BY_ID = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/admin/${parsedCookies.userId}`, {
            headers: { 'Authorization': `Bearer ${parsedCookies.token}` }
      });

      const API_GET_DATA_LAPORAN_PUNGLI = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungliNotAuth`);

      return { 
            props: {
			GetDataAdmin: API_GET_DATA_ADMIN.data,
                  GetDataAdminById: API_GET_DATA_ADMIN_BY_ID.data,
                  GetDataLaporanPungli: API_GET_DATA_LAPORAN_PUNGLI.data
            }
      }
}

