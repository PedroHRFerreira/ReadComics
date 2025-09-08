import style from "./style.module.scss";
import Icon from "../Icon/Index";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Top = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const topComics = [
    {
      id: 1,
      title: "Spider-Man",
      image: "/images/dimensões.png",
      link: "/comics/spiderman",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Batman",
      image: "/images/dimensões.png",
      link: "/comics/batman",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Superman",
      image: "/images/dimensões.png",
      link: "/comics/superman",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Wonder Woman",
      image: "/images/dimensões.png",
      link: "/comics/wonderwoman",
      rating: 4.6,
    },
    {
      id: 5,
      title: "Iron Man",
      image: "/images/dimensões.png",
      link: "/comics/ironman",
      rating: 4.8,
    },
    {
      id: 6,
      title: "Captain America",
      image: "/images/dimensões.png",
      link: "/comics/captain-america",
      rating: 4.5,
    },
  ];

  return (
    <section className={`${style.home} container`}>
      <div className={style.home__header}>
        <h1 className={style.home__header__title}>Top Comics</h1>

        <div className={style.home__header__navigation}>
          <button
            className={`${style.navButton} ${
              isBeginning ? style.disabled : ""
            }`}
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Icon name="left" />
          </button>
          <button
            className={`${style.navButton} ${isEnd ? style.disabled : ""}`}
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Icon name="right" />
          </button>
        </div>
      </div>

      <div className={style.home__carousel}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[Navigation]}
          slidesPerView="auto"
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 20 },
            375: { slidesPerView: 1.2, spaceBetween: 24 },
            450: { slidesPerView: 1.3, spaceBetween: 16 },
            640: { slidesPerView: 2.5, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
            1280: { slidesPerView: 5, spaceBetween: 24 },
          }}
          className={style.swiper}
        >
          {topComics.map((comic) => (
            <SwiperSlide key={comic.id} className={style.swiperSlide}>
              <Link href={comic.link} className={style.comicCard}>
                <div className={style.comicCard__imageWrapper}>
                  <Image
                    src={comic.image}
                    alt={comic.title}
                    width={200}
                    height={300}
                    className={style.comicCard__image}
                  />
                  <div className={style.comicCard__overlay}>
                    <span className={style.comicCard__rating}>
                      ⭐ {comic.rating}
                    </span>
                  </div>
                </div>
                <div className={style.comicCard__content}>
                  <h3 className={style.comicCard__title}>{comic.title}</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Top;
