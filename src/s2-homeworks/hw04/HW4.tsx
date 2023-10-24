import React from "react";
import s2 from "../../s1-main/App.module.css";
import Stand from "./Stand";

/*
 * 1 - понять (и простить) SuperInputText
 * 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
 * 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW4 = () => {
  return (
    <div id={"hw4"} className="my-6 border-b ">
      <div className="text-black text-xl font-semibold">Homework #4</div>
      {/*демонстрация возможностей компонент:*/}
      <div className="p-2.5">
        <Stand />
      </div>
    </div>
  );
};

export default HW4;
