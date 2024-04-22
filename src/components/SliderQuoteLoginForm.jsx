import workSans from '@/libs/FontWorkSans'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const SliderQuoteLoginForm = () => {
      return (
            <div className="w-full pt-[96px] pb-36 pl-32 pr-48 bg-secondary h-screen">
                  <Swiper
                        autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                        }}
                        pagination={{
                              el: "#containerForBullets",
                              clickable: true,
                              type: "bullets",
                              hiddenClass: "swiper-pagination-hidden",
                        }}
                        modules={[Autoplay, Pagination]}
                  >
                        <SwiperSlide>
                              <div className="flex flex-col gap-4">
                                    <h2 className="text-white text-3xl font-semibold" style={workSans.style}>
                                          Tidak ada Kewajiban Bagi Kita Untuk Membayar Pungli-Pungli
                                          Sampah dan Hina!
                                    </h2>
                                    <p className="text-white text-sm font-light" style={workSans.style}>
                                          Kita tidak berkewajiban membayar pungutan liar yang
                                          merendahkan martabat dan merugikan.
                                    </p>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className="flex flex-col gap-4">
                                    <h2 className="text-white text-3xl font-semibold" style={workSans.style}>
                                          “Yaelah, 2000 Doang Sedekah Aja Kali” Heh, Itu Namanya
                                          Pungli!
                                    </h2>
                                    <p className="text-white text-sm font-light" style={workSans.style}>
                                          Menganggap sedekah sebesar 2000 untuk pungli menunjukkan
                                          sikap tidak menghargai kebaikan.
                                    </p>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className="flex flex-col gap-4">
                                    <h2 className="text-white text-3xl font-semibold" style={workSans.style}>
                                          Lama lama kita gausah sekolah, mending markir daripada
                                          mikir.
                                    </h2>
                                    <p className="text-white text-sm font-light" style={workSans.style}>
                                          Kalau pungli-pungli in ditoleransi dengan embel "sedekah".
                                          yaudah mending markir aja daripada mikir.
                                    </p>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className="flex flex-col gap-4">
                                    <h2 className="text-white text-3xl font-semibold" style={workSans.style}>
                                          Hal Salah Jangan Ditoleransi, Kalau Di Toleransi Terus,
                                          Namanya Jaman Jahiliyah
                                    </h2>
                                    <p className="text-white text-sm font-light" style={workSans.style}>
                                          Kesalahan harus ditegur, jika terus ditoleransi, kita
                                          kembali ke masa jahiliyah.
                                    </p>
                              </div>
                        </SwiperSlide>
                  </Swiper>
                  <div
                        id="containerForBullets"
                        className="mt-8"
                        style={{
                        "--swiper-pagination-color": "#FFFFFF",
                        "--swiper-pagination-bullet-inactive-color": "#6A6A6A",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                        }}
                  >
                  </div>
            </div>
      )
}

export default SliderQuoteLoginForm