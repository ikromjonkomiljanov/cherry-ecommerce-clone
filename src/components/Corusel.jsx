import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import imgs
import Slid1 from "../assets/Slider-phone.png";
import Slid2 from "../assets/Slider-basen.png";
import Slid3 from "../assets/Slider-gym.png";
import Slid4 from "../assets/Slider-auto.png";
import Slid5 from "../assets/Slider-atir.png";
import Slid6 from "../assets/Slider-transport.png";
import Slid7 from "../assets/Slider-sim.png";
import Slid8 from "../assets/Slider-polo.png";
import Slid9 from "../assets/Slider-box.png";

const Corusel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        //   delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Slid1} className="slid-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slid2} className="slid-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slid3} className="slid-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slid4} className="slid-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slid5} className="slid-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slid6} className="slid-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slid7} className="slid-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slid8} className="slid-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slid9} className="slid-img" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Corusel;
