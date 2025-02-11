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
          src="https://i.ibb.co.com/X2yTMrB/TELEMMGLPICT000361619869-17047055095630-trans-Nv-BQz-QNjv4-Bqp-Vlber-Wd9-Eg-FPZtc-Li-MQf0-Rf-Wk3-V23.webp"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co.com/jrpSZyr/slider2.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co.com/bJKvMBW/AA-20231222-33249874-33249859-FOOD-AID-TO-FAMILIES-DISPLACED-TO-SOUTHERN-GAZA-AMID-ISRAELI-ATTACKS.webp"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co.com/2sRqtxn/slider4.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co.com/0RpV3Pps/pexels-julia-m-cameron-6995244.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co.com/43rxh2C/pexels-julia-m-cameron-6994944.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co.com/Q3GQXsmX/pexels-cottonbro-6590920.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co.com/m7pk1TB/WF1763908-AP3-I4866-1200x788.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
