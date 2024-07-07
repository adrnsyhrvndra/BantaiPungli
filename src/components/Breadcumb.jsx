import workSans from '@/libs/FontWorkSans'
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react'

const Breadcumb = ({namaWelcome}) => {
      
      const router = useRouter();
      const isEditProfilePage = router.pathname.startsWith('/user-edit-profile/[EditProfile]');
      const isDetailLaporanPage = router.pathname.startsWith('/laporan-detail/[DetailLaporan]');
      const isEditLaporanPage = router.pathname.startsWith('/laporan-edit/[EditLaporan]');
      const isEditAdminLaporanPungliPage = router.pathname.startsWith('/admin/[EditDataPungli]');

      const query = router.query;

      return (
            <div className='w-full bg-[#F59198] px-12 py-6 bg-opacity-15'>
                  <div className='flex flex-row justify-between'>

                        {
                              (router.pathname === '/admin/ViewDataPungli') &&

                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Halo, {namaWelcome} 👋</h5>
                                    <div className='flex flex-row gap-2 text-[#F59198] font-medium' style={workSans.style}>
                                          <h6>Home</h6>
                                          <h6>-</h6>
                                    </div>
                              </>

                        }

                        {
                              (router.pathname === '/user/Home' || router.pathname === "/") &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Halo, {namaWelcome} 👋</h5>
                                    <div className='flex flex-row gap-2 text-[#F59198] font-medium' style={workSans.style}>
                                          <h6>Home</h6>
                                          <h6>-</h6>
                                    </div>
                              </>
                        }

                        {
                              router.pathname === '/laporan/AddLaporan' &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Tambah Laporan Pungli</h5>
                                    <div className='flex flex-row gap-2 font-medium' style={workSans.style}>
                                          <Link href={'/user/Home'}>
                                                <h6 className='text-[#B31E28]'>Home</h6>
                                          </Link>
                                          <h6 className='text-[#B31E28]'>-</h6>
                                          <h6 className='text-[#F59198]'>Tambah Pungli</h6>
                                    </div>
                              </>
                        }

                        {
                              router.pathname === '/laporan/CariLaporan' &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Cari Laporan</h5>
                                    <div className='flex flex-row gap-2 font-medium' style={workSans.style}>
                                          <Link href={'/user/Home'}>
                                                <h6 className='text-[#B31E28]'>Home</h6>
                                          </Link>
                                          <h6 className='text-[#B31E28]'>-</h6>
                                          <h6 className='text-[#F59198]'>Cari Laporan</h6>
                                    </div>
                              </>
                        }

                        {
                              router.pathname === '/laporan/BelumSelesaiLaporan' &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Laporan yang belum selesai</h5>
                                    <div className='flex flex-row gap-2 font-medium' style={workSans.style}>
                                          <Link href={'/user/Home'}>
                                                <h6 className='text-[#B31E28]'>Home</h6>
                                          </Link>
                                          <h6 className='text-[#B31E28]'>-</h6>
                                          <h6 className='text-[#F59198]'>Belum Selesai Laporan</h6>
                                    </div>
                              </>
                        }

                        {
                              isEditProfilePage &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Edit Profil</h5>
                                    <div className='flex flex-row gap-2 font-medium' style={workSans.style}>
                                          <Link href={'/user/Home'}>
                                                <h6 className='text-[#F59198]'>Home</h6>
                                          </Link>
                                          <h6 className='text-[#F59198]'>-</h6>
                                          <Link href={`/user-detail-self/${query.EditProfile}`}>
                                                <h6 className='text-[#F59198]'>Detail Profil </h6>
                                          </Link>
                                          <h6 className='text-[#F59198]'>-</h6>
                                          <h6 className='text-[#B31E28]'>Edit Profil</h6>
                                    </div>
                              </>
                        }

                        {
                              isDetailLaporanPage &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Detail Laporan Pungli</h5>
                                    <div className='flex flex-row gap-2 font-medium' style={workSans.style}>
                                          <Link href={'/user/Home'}>
                                                <h6 className='text-[#F59198]'>Home</h6>
                                          </Link>
                                          <h6 className='text-[#F59198]'>-</h6>
                                          <h6 className='text-[#B31E28]'>Detail Laporan Pungli</h6>
                                    </div>
                              </>
                        }

                        {
                              isEditLaporanPage &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Ubah Laporan Pungli</h5>
                                    <div className='flex flex-row gap-2 font-medium' style={workSans.style}>
                                          <Link href={'/user/Home'}>
                                                <h6 className='text-[#F59198]'>Home</h6>
                                          </Link>
                                          <h6 className='text-[#F59198]'>-</h6>
                                          <h6 className='text-[#B31E28]'>Ubah Laporan Pungli</h6>
                                    </div>
                              </>
                        }

                        {
                              isEditAdminLaporanPungliPage &&
                              <>
                                    <h5 className='font-semibold text-xl text-[#B31E28]' style={workSans.style}>Update Laporan Pungli</h5>
                                    <div className='flex flex-row gap-2 font-medium' style={workSans.style}>
                                          <Link href={'/admin/ViewDataPungli'}>
                                                <h6 className='text-[#F59198]'>Home</h6>
                                          </Link>
                                          <h6 className='text-[#F59198]'>-</h6>
                                          <h6 className='text-[#B31E28]'>Ubah Laporan Pungli</h6>
                                    </div>
                              </>
                        }

                  </div>
            </div>
      )
}

export default Breadcumb