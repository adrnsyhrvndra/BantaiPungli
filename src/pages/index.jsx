import Head from "next/head";
import Image from "next/image";
import SidebarUserMenu from "@/components/SidebarUserMenu";
import NavbarUser from "@/components/NavbarUser";
import Breadcumb from "@/components/Breadcumb";
import CardHomeProfile from "@/components/CardHomeProfile";
import WeatherCard from "@/components/WeatherCard";
import PungliCardPost from "@/components/PungliCardPost";
import { Pagination } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import UserActiveListCard from "@/components/UserActiveListCard";
import StatistikPungliCard from "@/components/StatistikPungliCard";

export default function HomeNoAuth({laporanPungli, komentarLaporanPungli, dataUserAll}) {

	const [currentPage, setCurrentPage] = useState(1);
      const dataPerPage = 2;

      const handlePageChange = (event, value) => {
            setCurrentPage(value);
      };

      const startIndex = (currentPage - 1) * dataPerPage;
      const endIndex = startIndex + dataPerPage;

	return (
		<>
			<Head>
				<title>Halaman Beranda | Bantai Pungli</title>
			</Head>
			<div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                              <NavbarUser
                                    nama_lengkap={'Login dan Laporkan'}
                                    foto_profile={'https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1720332399/bantai-pungli/Ellipse_2_jpmd5y.png'}
                              />
                        </div>
                  </div>
                  <div className='grid grid-cols-12'>
                        <div className='col-span-2 px-8 overflow-y-scroll h-screen pb-40'>
                              <SidebarUserMenu/>
                        </div>
                        <div className='col-span-10 bg-[#F1F3F4] overflow-y-auto h-screen pb-48'>
                              <Breadcumb namaWelcome={'Silahkan Login Untuk Mengakses Fiturnya'}/>
                              <div className='grid grid-cols-12 px-6 gap-6 mt-10'>
                                    <div className='col-span-8'>
                                          <div className='grid grid-cols-12 gap-6'>
                                                <div className='col-span-6'>
                                                      <CardHomeProfile
                                                            nama_lengkap={'Login & Laporkan'}
                                                      />
                                                </div>
                                                <div className='col-span-6'>
                                                      <WeatherCard/>
                                                </div>
                                                <div className='col-span-12'>
                                                      <div className='grid grid-cols-12 gap-7'>
                                                            <div className='col-span-12'>
                                                                  {
                                                                        laporanPungli?.slice(startIndex, endIndex).map((item, index) => {

                                                                              return (
                                                                                    <>
                                                                                          <PungliCardPost
                                                                                                id={item._id}
                                                                                                idForEdit={item._id}
                                                                                                judul_pelaporan={item.judul_pelaporan}
                                                                                                deskripsi_pelaporan={item.deskripsi_pelaporan}
                                                                                                tanggal_pelaporan={item.tanggal_pelaporan}
                                                                                                status_pelaporan={item.status_pelaporan}
                                                                                                bukti_pendukung={item.bukti_pendukung}
                                                                                                created_at={item.created_at}
                                                                                                updated_at={item.updated_at}
                                                                                                kategoriPungliId={item.kategoriPungliId}
                                                                                                userId={item.userId}
                                                                                                idPungliUser={item.userId._id}
                                                                                                dataKomentarLaporanPungli={komentarLaporanPungli}
                                                                                                imageSizeWidth="w-[470px]" 
                                                                                                imageSizeHeight="h-[320px]" 
                                                                                                judulTextSize="text-2xl" 
                                                                                                deskripsiTextSize="text-xs"
                                                                                          />
                                                                                    </>
                                                                              )
                                                                        })
                                                                  }
                                                            </div>
                                                            <div className='col-span-12'>
                                                                  <Pagination
                                                                        totalItems={laporanPungli?.length || 0}
                                                                        itemsPerPage={dataPerPage}
                                                                        currentPage={currentPage}
                                                                        onPageChange={handlePageChange}
                                                                  />
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='col-span-4'>
                                          <div className='grid grid-cols-12 gap-6'>
                                                <div className='col-span-12'>
                                                      <UserActiveListCard/>
                                                </div>
                                                <div className='col-span-12'>
                                                      <StatistikPungliCard
                                                            dataUserAll={dataUserAll}
                                                            dataLaporanPungli={laporanPungli}
                                                      />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
		</>
	);
};

export async function getServerSideProps(context) {

      const laporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungliNotAuth`);

      const komentarLaporanPungliRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/komentarPungliNotAuth`);

	const userAllRes = await axios.get(`https://rest-api-bantai-pungli-ysnn.vercel.app/usersNotauth`);

      return { 
            props: {
                  laporanPungli: laporanPungliRes.data,
                  komentarLaporanPungli: komentarLaporanPungliRes.data,
			dataUserAll: userAllRes.data
            }
      }
}
