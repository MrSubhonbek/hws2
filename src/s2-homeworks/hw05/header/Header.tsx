import { FC } from "react";
import burgerIcon from "./burger.svg";
import s from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { PATH } from "../Pages";
import clsx from "clsx";

type PropsType = {
  handleOpen: () => void;
};

export const Header: FC<PropsType> = ({ handleOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const pageName =
    currentPath === PATH.PRE_JUNIOR
      ? "Pre-junior"
      : currentPath === PATH.JUNIOR
      ? "Junior"
      : currentPath === PATH.JUNIOR_PLUS
      ? "Junior Plus"
      : "Error";

  return (
    <div
      id={"hw5-header"}
      className={clsx(
        s.header,
        "w-full shadow fixed z-10 bg-white/50 backdrop-blur top-0 left-0"
      )}>
      <div className="container mx-auto flex justify-between pt-5 pb-4">
        <img
          src={burgerIcon}
          id={"hw5-burger-menu"}
          className={clsx(s.burgerMenuIcon, "cursor-pointer")}
          onClick={handleOpen}
          alt={"open menu"}
        />
        <h1>{pageName}</h1>
      </div>
    </div>
  );
};
