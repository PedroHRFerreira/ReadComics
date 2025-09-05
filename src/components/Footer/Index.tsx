import style from "./style.module.scss";
const Footer = () => {
  return (
    <nav className={style.footer}>
      <h4>© 2023 ReadComics</h4>
      <div className={style.footer__links}>
        <a href="/docs">Documentação</a>
        <a href="/infos">Mais informações</a>
      </div>
    </nav>
  );
};

export default Footer;
