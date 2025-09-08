import Link from "next/link";
import Menu from "../Menu/Index";
import style from "./style.module.scss";

const Header = () => {
  return (
    <nav className={style.header}>
      <section className={style.header__content}>
        <h1>
          <Link href="/">ReadComics</Link>
        </h1>
        <div className={style.header__content__modal}>
          <Menu />
        </div>
        <div className={style.header__content__links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">contact</Link>
        </div>
      </section>
    </nav>
  );
};

export default Header;
