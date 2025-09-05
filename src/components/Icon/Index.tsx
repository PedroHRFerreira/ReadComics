import React from "react";
import Image from "next/image";
import style from "./styles.module.scss";
import { ISvg } from "./ISvg.types";

const Icon: React.FC<ISvg> = ({
  name,
  width = "24px",
  height = "24px",
  className = "",
  clickIcon,
}) => {
  return (
    <Image
      src={`/${name}.svg`}
      alt={name}
      className={`${style.icon} ${className}`}
      width={parseInt(width)}
      height={parseInt(height)}
      onClick={() => clickIcon}
    />
  );
};

export default Icon;
