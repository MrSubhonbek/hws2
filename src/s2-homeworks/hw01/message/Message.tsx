import s from "./Message.module.css";
import { MessageType } from "../HW1";

const Message = ({ id, message, user }: MessageType) => {
  return (
    <div id={"hw1-message-" + id} className="flex relative flex-row-reverse ">
      <div className="flex gap-2 flex-row-reverse">
        <img
          id={"hw1-avatar-" + id}
          src={user.avatar}
          className="w-12 h-12 rounded-full"
        />
        <div className="bg-sky-300 text-white rounded-md p-2 flex flex-col text-right">
          <div id={"hw1-name-" + id} className="text-lg font-semibold">
            {user.name}
          </div>
          <div
            id={"hw1-text-" + id}
            className="max-w-lg text-ellipsis text-base font-normal">
            {message.text}
          </div>
        </div>
      </div>
      <div
        id={"hw1-time-" + id}
        className="absolute text-black text-xs font-semibold top-12 right-2">
        {message.time}
      </div>
    </div>
  );
};

export default Message;
