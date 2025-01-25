"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Carou = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="relative w-[468px] rounded-[2.2rem] overflow-hidden flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg z-10"></div>
            <img
              src="girl.png"
              alt="Girl"
              className="rounded-lg object-cover w-full h-full relative z-0"
            />
            <p className="absolute text-[30px] z-10 text-white ml-3 bottom-4">
              Some product image will be here
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[468px] rounded-[2.2rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg z-10"></div>
            <img
              src="guy.png"
              alt="Girl"
              className="rounded-lg object-cover w-full h-full relative z-0"
            />
            <p className="absolute text-[30px] z-10 text-white ml-3 bottom-4">
              Some product image will be here
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[468px] rounded-[2.2rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg z-10"></div>
            <img
              src="earphone.png"
              alt="Girl"
              className="rounded-lg object-cover w-full h-full relative z-0"
            />
            <p className="absolute text-[30px] z-10 text-white ml-3 bottom-4">
              Some product image will be here
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
