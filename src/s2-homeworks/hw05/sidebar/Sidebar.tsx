import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Sidebar.module.css";
import { PATH } from "../Pages";
import closeIcon from "./closeOutline.svg";
import clsx from "clsx";

type PropsType = {
  isOpen: boolean;
  handleClose: () => void;
};

export const Sidebar: FC<PropsType> = ({ isOpen, handleClose }) => {
  const sidebarClass = s.sidebar + (isOpen ? " " + s.open : "");
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className={clsx(!isOpen && "hidden")}>
      <div className="z-30 fixed left-0 top-0 min-h-screen bg-white w-96">
        <div className={clsx(s.background)} onClick={handleClose} />

        <aside className={sidebarClass}>
          <button
            className={clsx(s.close, "mt-4 flex justify-end pr-6 w-full")}
            onClick={handleClose}>
            <img src={closeIcon} alt="close sidebar" id={"hw5-menu-close"} />
          </button>

          <nav
            id={"hw5-menu"}
            className={clsx(
              s.nav,
              "flex flex-col pl-20 gap-10 text-xl font-semibold mt-6"
            )}>
            <NavLink
              id={"hw5-pre-junior-link"}
              to={PATH.PRE_JUNIOR}
              onClick={handleClose}
              className={clsx(
                currentPath === PATH.PRE_JUNIOR && "underline text-sky-300"
              )}>
              Pre-junior
            </NavLink>
            <NavLink
              id={"hw5-junior-link"}
              to={PATH.JUNIOR}
              onClick={handleClose}
              className={clsx(
                currentPath === PATH.JUNIOR && "underline text-sky-300"
              )}>
              Junior
            </NavLink>
            <NavLink
              id={"hw5-junior-plus-link"}
              to={PATH.JUNIOR_PLUS}
              onClick={handleClose}
              className={clsx(
                currentPath === PATH.JUNIOR_PLUS && "underline text-sky-300"
              )}>
              Junior Plus
            </NavLink>
          </nav>
        </aside>
      </div>
      <div
        className={
          "fixed top-0 bottom-0 left-0 right-0 bg-black/50 backdrop-blur z-20"
        }
        onClick={handleClose}
      />
    </div>
  );
};
