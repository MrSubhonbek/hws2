import React, { ChangeEvent, KeyboardEvent } from "react";
import s from "./Greeting.module.css";
import { clsx } from "clsx";
type GreetingPropsType = {
  name: string;
  setNameCallback: (value: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  onBlur: () => void;
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  error: string;
  totalUsers: number;
  lastUserName?: string;
};

const Greeting: React.FC<GreetingPropsType> = ({
  name,
  setNameCallback,
  addUser,
  onEnter,
  onBlur,
  error,
  totalUsers,
  lastUserName,
}) => {
  const errorInput = error
    ? `border-rose-500 text-rose-500 ${s.errorInput}`
    : "";
  return (
    <div id={"hw3-form"} className="mt-5">
      <div className="text-black text-opacity-50 text-sm font-normal">
        {"Людей добавили: "}
        <span id={"hw3-users-total"}>{totalUsers}</span>
      </div>

      <div className="my-2 flex gap-3">
        <div className="w-full">
          <input
            id={"hw3-input"}
            value={name}
            className={clsx(
              "rounded-md border border-neutral-300 px-3 py-2 w-full h-[40px] ring-0 outline-none",
              errorInput
            )}
            onChange={setNameCallback}
            onKeyDown={onEnter}
            onBlur={onBlur}
          />
          <div id={"hw3-error"} className={errorInput}>
            {error}
          </div>
        </div>

        <button
          id={"hw3-button"}
          onClick={addUser}
          disabled={!name.trim()}
          className="py-1 px-6 max-h-[40px] text-white bg-sky-300 rounded-md">
          Add
        </button>
      </div>

      {lastUserName && (
        <div>
          Привет <span id={"hw3-last-user"}>{lastUserName}</span>!
        </div>
      )}
    </div>
  );
};

export default Greeting;
