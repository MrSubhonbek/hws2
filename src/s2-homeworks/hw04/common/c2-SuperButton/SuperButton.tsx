import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./SuperButton.module.css";
import clsx from "clsx";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  const finalClassName = s.button + (className ? " " + className : ""); // задачка на смешивание классов

  return (
    <button
      disabled={disabled}
      className={clsx(
        finalClassName,
        "px-5 py-1.5 bg-sky-300 text-white rounded-md hover:bg-sky-400 hover:shadow-md default",
        disabled && s.disabled,
        disabled && "!bg-opacity-50 text-neutral-300 !shadow-none",
        xType === "red" && s.red,
        xType === "red" &&
          "!bg-rose-500 hover:bg-rose-600 disabled:hover:bg-rose-500 disabled:hover:bg-opacity-50",
        xType === "secondary" && s.secondary,
        xType === "secondary" &&
          "!bg-transparent border border-sky-300 !text-sky-300"
      )}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};

export default SuperButton;
