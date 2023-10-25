import React, { FC, ReactNode, useEffect, useState } from "react";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";

type PropsType = {
  children: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "unset");
  }, [isOpen]); // отключает прокрутку при открытом меню

  return (
    <>
      <Sidebar isOpen={isOpen} handleClose={handleClose} />
      <Header handleOpen={handleOpen} />
      <div>
        {/*страницы*/}
        {children}
      </div>
    </>
  );
};
