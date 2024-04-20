import CardInformasiLengkapProfil from '@/components/CardInformasiLengkapProfil';
import CardProfileSelf from '@/components/CardProfileSelf';
import Head from 'next/head';
import SearchLaporanDetailProfil from '@/components/SearchLaporanDetailProfil';
import PungliCardPost from '@/components/PungliCardPost';
import Pagination from '@/components/Paginations';

const DetailSelfProfile = () => {

      return (

            <div className='px-48 pt-10 bg-[#F1F3F4] h-fit pb-32'>
                  <Head>
                        <title>Halaman Detail Profile By Adriansyah | Bantai Pungli</title>
                  </Head>
                  <div className='grid grid-cols-12 gap-6'>
                        <div className='col-span-3'>
                              <CardProfileSelf/>
                        </div>
                        <div className='col-span-9'>
                              <CardInformasiLengkapProfil/>
                        </div>
                        <div className='col-span-12 mt-16'>
                              <SearchLaporanDetailProfil textUserHeading={'Adriansyah Ravindra'} />
                              <div className='mt-8 flex flex-col gap-8'>
                                    <PungliCardPost 
                                          imageSizeWidth="w-[512px]" 
                                          imageSizeHeight="h-[320px]" 
                                          judulTextSize="text-3xl" 
                                          deskripsiTextSize="text-sm"
                                    />
                                    <PungliCardPost 
                                          imageSizeWidth="w-[512px]" 
                                          imageSizeHeight="h-[320px]" 
                                          judulTextSize="text-3xl" 
                                          deskripsiTextSize="text-sm"
                                    />
                              </div>
                              <div className='mt-14 mx-auto w-fit'>
                                    <Pagination/>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default DetailSelfProfile