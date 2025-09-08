import style from "./styles.module.scss";
import { useState } from "react";
import Icon from "../Icon/Index";

const Menu = () => {
  const [click, setClick] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const links = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "about",
      link: "/about",
    },
    {
      text: "contact",
      link: "/contact",
    },
  ];
  return (
    <section className={style.content}>
      <div onClick={() => setClick(!click)}>
        <Icon className={style.icon} name="menu-list" />
      </div>
      {click && (
        <aside className={style.modal}>
          {links.map((link, index) => (
            <div
              key={index}
              className={index === activeIndex ? style.active : style.link}
              onClick={() => setActiveIndex(index)}
            >
              <a href={link.link}>{link.text}</a>
            </div>
          ))}
        </aside>
      )}
    </section>
  );
};

export default Menu;
