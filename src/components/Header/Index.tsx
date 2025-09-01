import style from "./style.module.scss";

const Header = () => {
  return (
    <nav className={style.header}>
      <h1>ReadComics</h1>
      <section className={style.header__links}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">contact</a>
      </section>
    </nav>
  );
};

export default Header;
