import style from "./style.module.scss";

const Header = () => {
  return (
    <nav className={style.header}>
      <section className={style.header__content}>
        <h1>ReadComics</h1>
        <div className={style.header__content__links}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">contact</a>
        </div>
      </section>
    </nav>
  );
};

export default Header;
