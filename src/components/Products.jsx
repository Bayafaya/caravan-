import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import style from "./Products.module.css";
import "swiper/css";
import "swiper/css/pagination";
export default () => {

  return (
    <div style={{ paddingLeft: "16px",margin:'12px 0' }}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={12}
        slidesPerView={2.2}
        pagination={true}
      >
        <SwiperSlide>
        <div className={style.card}>
            <div className={style.title_of_card}>
                <h5>18:29:13</h5>
                <div>-29%</div>
            </div>
            <img className={style.shoes} src="src/img/image-500-transformed__4.png" alt="shoes" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={style.card}>
            <div className={style.title_of_card}>
                <h5>18:29:13</h5>
                <div>-29%</div>
            </div>
            <img className={style.shoes} src="src/img/image-500-transformed__4.png" alt="shoes" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={style.card}>
            <div className={style.title_of_card}>
                <h5>18:29:13</h5>
                <div>-29%</div>
            </div>
            <img className={style.shoes} src="src/img/image-500-transformed__4.png" alt="shoes" />
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
