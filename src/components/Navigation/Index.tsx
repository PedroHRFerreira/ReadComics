import { useState } from "react";
import style from "./style.module.scss";
import Comments from "../Comments/Index";
import Pages from "../Pages/Index";
import User from "../User/Index";

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pages = [
    {
      name: "pages",
      component: Pages,
    },
    {
      name: "comments",
      component: Comments,
    },
    {
      name: "user",
      component: User,
    },
  ];
  const ActiveComponent = pages[activeIndex].component;
  return (
    <nav className={style.navigation}>
      <section className={style.navigation__content}>
        {pages.map((text, index) => (
          <div
            key={index}
            style={{ cursor: "pointer", opacity: 1 }}
            className={
              index === activeIndex ? style.navigation__content__active : ""
            }
            onClick={() => setActiveIndex(index)}
          >
            <h1>{text.name}</h1>
          </div>
        ))}
      </section>
      <section className={style.navigation__content__component}>
        <ActiveComponent />
      </section>
    </nav>
  );
};

export default Navigation;
