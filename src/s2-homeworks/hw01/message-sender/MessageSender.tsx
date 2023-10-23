import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { MessageType, message0 } from "../HW1";
import s from "./MessageSender.module.css";

type MessageSenderType = {
  M: ({ id, message, user }: MessageType) => JSX.Element;
};

const MessageSender = (props: MessageSenderType) => {
  const M = props.M;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [text, setText] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  useEffect(() => {
    if (textareaRef?.current) {
      textareaRef.current.style.height = "0px";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  const addMessage = () => {
    setMessages([
      ...messages,
      {
        id: messages.length ? messages.length + 1 : 1,
        user: message0.user,
        message: {
          text,
          time: new Date().toTimeString().slice(0, 5),
        },
      },
    ]);
    setTimeout(() => setText(""), 4);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.key === "Enter" && e.shiftKey && addMessage();
  };

  return (
    <>
      {messages.map((m) => (
        <M key={"message" + m.id} {...m} />
      ))}

      <div id={"hw1-send-message-form"} className="flex gap-5 justify-end ">
        <textarea
          id={"hw1-textarea"}
          className="rounded-full w-full bg-slate-50 px-6 py-2 resize-none "
          ref={textareaRef}
          title={"Shift+Enter for send"}
          placeholder={"Type your message"}
          value={text}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button
          id={"hw1-button"}
          className="rounded-full py-2 bg-sky-300 px-6"
          onClick={addMessage}>
          Send
        </button>
      </div>
    </>
  );
};

export default MessageSender;
