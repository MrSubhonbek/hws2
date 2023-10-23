import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: string) => void;
};

export const pureAddUser = (
  name: string,
  setError: (value: string) => void,
  setName: (value: string) => void,
  addUserCallback: (value: string) => void
) => {
  if (!name.trim()) setError("Ошибка! Введите имя!");
  else {
    addUserCallback(name);
    setName("");
  }
};

export const pureOnBlur = (name: string, setError: (value: string) => void) => {
  name.trim() ? setError("") : setError("Ошибка! Введите имя!");
};

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: () => void
) => {
  e.key === "Enter" && addUser();
};

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  const [name, setName] = useState<string>("test");
  const [error, setError] = useState<string>("");

  const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
    error && setError("");
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
    if (name) {
      setTotalUsers((pre) => pre + 1);
      setLastUserName(name);
    }
  };

  const onBlur = () => pureOnBlur(name, setError);

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) =>
    e.key === "Enter" && addUser();

  const [totalUsers, setTotalUsers] = useState(0);
  const [lastUserName, setLastUserName] = useState("");

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
