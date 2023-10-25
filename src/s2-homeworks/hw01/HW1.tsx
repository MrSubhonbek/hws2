import Message from "./message/Message";
import MessageSender from "./message-sender/MessageSender";
import FriendMessage from "./friend-message/FriendMessage";
import avatar from "./avatar.png";

/*
 * 1 - описать тип MessageType
 * 2 - описать тип MessagePropsType в файле Message.tsx
 * 3 - в файле Message.tsx отобразить приходящие данные
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - сделать стили в соответствии с дизайном
 * */

export type MessageType = {
  id: number;
  user: {
    avatar: string;
    name: string;
  };
  message: {
    text: string;
    time: string;
  };
};

export const message0: MessageType = {
  id: 0,
  user: {
    avatar: avatar,
    name: "Some Name",
  },
  message: {
    text: "some textsome textsome textsome textsome textsome textsome text",
    time: "22:00",
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar,
    name: "Friend Name",
  },
  message: {
    text: "зеркальное сообщение для тренировки css",
    time: "22:00",
  },
};
const HW1 = () => {
  return (
    <div id={"hw1"}>
      <div className="text-black text-xl font-semibold mt-32">Hometask #1</div>
      <div className="flex flex-col my-6 gap-5 border-y border-solid py-2.5">
        <div className="flex flex-col gap-5">
          <Message {...message0} />
          <FriendMessage {...friendMessage0} />
        </div>

        <MessageSender M={Message} />
      </div>
    </div>
  );
};

export default HW1;
