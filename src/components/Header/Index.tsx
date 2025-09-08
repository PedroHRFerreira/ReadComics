import Menu from "../Menu/Index";
import style from "./style.module.scss";

const Header = () => {
  return (
    <nav className={style.header}>
      <section className={style.header__content}>
        <h1>
          <a href="/">ReadComics</a>
        </h1>
        <div className={style.header__content__modal}>
          <Menu />
        </div>
        <div className={style.header__content__links}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">contact</a>
        </div>
      </section>
    </nav>
  );
};

export default Header;
