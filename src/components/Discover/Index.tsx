import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Discover = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      image: "/images/dimensões.png",
      link: "/comics/dimensoes",
    },
    {
      image: "/images/resolução.png",
      link: "/comics/resolucao",
    },
    {
      image: "/images/dimensões.png",
      link: "/comics/aventuras",
    },
  ];

  const onClickButton = () => {
    window.location.href = slides[activeSlide].link;
  };

  return (
    <section className={style.home}>
      <div className={style.home__content}>
        <h1 className={style.home__content__title}>
          Discover and Read Comics Online
        </h1>
        <h6 className={style.home__content__subtitle}>
          Read your favorite Comics from any device
        </h6>
        <button className={style.button} onClick={onClickButton}>
          GET STARTED
        </button>
      </div>

      <div className={style.home__carousel}>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          loop={true}
          speed={800}
          className={style.swiper}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.realIndex);
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={style.swiperSlide}>
              <Link href={slide.link} className={style.slideLink}>
                <Image
                  src={slide.image}
                  alt={`Comic slide ${index + 1}`}
                  width={600}
                  height={500}
                  className={style.slideImage}
                  priority={index === 0}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Discover;
