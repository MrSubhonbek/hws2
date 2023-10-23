import s from "./FriendMessage.module.css";
import { MessageType } from "../HW1";

const FriendMessage = ({ id, message, user }: MessageType) => {
  return (
    <div id={"hw1-friend-message-" + id} className="flex relative">
      <div className="flex gap-2">
        <img
          id={"hw1-friend-avatar-" + id}
          src={user.avatar}
          className="w-12 h-12 rounded-full"
        />
        <div className="bg-slate-50  rounded-md p-2 flex flex-col text-left">
          <div id={"hw1-friend-name-" + id} className="text-lg font-semibold">
            {user.name}
          </div>
          <div
            id={"hw1-friend-text-" + id}
            className="max-w-lg text-ellipsis text-base font-normal">
            {message.text}
          </div>
        </div>
      </div>
      <div
        id={"hw1-friend-time-" + id}
        className="absolute text-black text-xs font-semibold top-12 left-2">
        {message.time}
      </div>
    </div>
  );
};

export default FriendMessage;
