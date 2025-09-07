import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";

const Pages = () => {
  const comics = [
    {
      id: 1,
      title: "Spider-Man",
      image: "/images/dimensões.png",
      link: "/comics/spiderman/pages/1",
      cap: 1,
      rating: 4.8,
      pages: 32,
      date: "2025-09-01",
      description:
        "Peter Parker enfrenta novos desafios em um universo paralelo.",
      views: 1250,
    },
    {
      id: 2,
      title: "Spider-Man",
      image: "/images/dimensões.png",
      link: "/comics/spiderman/pages/2",
      cap: 2,
      rating: 4.9,
      pages: 28,
      date: "2025-09-05",
      description: "Um novo vilão surge para colocar Nova York em perigo.",
      views: 980,
    },
    {
      id: 3,
      title: "Spider-Man",
      image: "/images/dimensões.png",
      link: "/comics/spiderman/pages/3",
      cap: 3,
      rating: 4.7,
      pages: 22,
      date: "2025-09-10",
      description: "A equipe de Spider-Man enfrenta um novo desafio.",
      views: 850,
    },
    {
      id: 4,
      title: "Spider-Man",
      image: "/images/dimensões.png",
      link: "/comics/spiderman/pages/4",
      cap: 4,
      rating: 4.6,
      pages: 18,
      date: "2025-09-15",
      description: "A equipe de Spider-Man enfrenta um novo desafio.",
      views: 750,
    },
    {
      id: 5,
      title: "Spider-Man",
      image: "/images/dimensões.png",
      link: "/comics/spiderman/pages/5",
      cap: 5,
      rating: 4.5,
      pages: 16,
      date: "2025-09-20",
      description: "A equipe de Spider-Man enfrenta um novo desafio.",
      views: 650,
    },
    {
      id: 6,
      title: "Spider-Man",
      image: "/images/dimensões.png",
      link: "/comics/spiderman/pages/6",
      cap: 6,
      rating: 4.4,
      pages: 14,
      date: "2025-09-25",
      description: "A equipe de Spider-Man enfrenta um novo desafio.",
      views: 550,
    },
    {
      id: 7,
      title: "Spider-Man",
      image: "/images/dimensões.png",
      link: "/comics/spiderman/pages/7",
      cap: 7,
      rating: 4.3,
      pages: 12,
      date: "2025-10-01",
      description: "A equipe de Spider-Man enfrenta um novo desafio.",
      views: 450,
    },
    {
      id: 8,
      title: "Spider-Man",
      image: "/images/dimensões.png",
      link: "/comics/spiderman/pages/8",
      cap: 8,
      rating: 4.2,
      pages: 10,
      date: "2025-10-05",
      description: "A equipe de Spider-Man enfrenta um novo desafio.",
      views: 350,
    },
    {
      id: 9,
      title: "Spider-Man",
      image: "/images/dimensões.png",
      link: "/comics/spiderman/pages/9",
      cap: 9,
      rating: 4.1,
      pages: 8,
      date: "2025-10-10",
      description: "A equipe de Spider-Man enfrenta um novo desafio.",
      views: 250,
    },
    {
      id: 10,
      title: "Spider-Man",
      image: "/images/dimensões.png",
      link: "/comics/spiderman/pages/10",
      cap: 10,
      rating: 4.0,
      pages: 6,
      date: "2025-10-15",
      description: "A equipe de Spider-Man enfrenta um novo desafio.",
      views: 150,
    },
  ];

  return (
    <div className={style.pages}>
      {comics.map((comic) => (
        <Link href={comic.link} key={comic.id} className={style.card}>
          <div className={style.card__section}>
            <Image
              src={comic.image}
              alt={comic.title}
              width={200}
              height={300}
              className={style.card__section__image}
            />
            <div className={style.card__section__content}>
              <h1>{comic.title}</h1>
              <h2>Capítulo {comic.cap}</h2>
              <p className={style.description}>{comic.description}</p>
              <span className={style.comicCard__rating}>⭐ {comic.rating}</span>
              <span className={style.meta}>
                📄 {comic.pages} páginas | 👀 {comic.views} leituras
              </span>
              <span className={style.date}>
                Publicado em: {new Date(comic.date).toLocaleDateString("pt-BR")}
              </span>
              <button className={style.readButton}>📖 Ler Agora</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Pages;
