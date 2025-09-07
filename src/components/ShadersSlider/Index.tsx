"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import style from "./style.module.scss";

const ShadersSlider = () => {
  const images = [
    "/images/dimensões.png",
    "/images/resolução.png",
    "/images/dimensões.png",
  ];

  return (
    <div className={style.body}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className={style.swiper}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className={style.slide}
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShadersSlider;
