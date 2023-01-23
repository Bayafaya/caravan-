import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import style from "./Banner.module.css";
import "swiper/css";
import "swiper/css/pagination";
export default () => {

  return (
    <div style={{ paddingLeft: "16px",margin:'12px 0' }}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={12}
        slidesPerView={1.1}
        pagination={true}
      >
        <SwiperSlide>
          <img className={style.banner_img} src="src/img/banner.png" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.banner_img} src="src/img/banner.png" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.banner_img} src="src/img/banner.png" alt="banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
