import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co.com/jrpSZyr/slider2.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co.com/bJKvMBW/AA-20231222-33249874-33249859-FOOD-AID-TO-FAMILIES-DISPLACED-TO-SOUTHERN-GAZA-AMID-ISRAELI-ATTACKS.webp"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co.com/2sRqtxn/slider4.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
