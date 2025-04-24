import React, { useRef, useState } from "react";
import { MdAttachFile, MdSend } from "react-icons/md";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      content: "Tao là đìn địt",
      sender: "Đìn địt",
    },
    {
      content: "Bố mày tên là Thi",
      sender: "Bố Thi",
    },
    {
      content: "Bố mày tên là MV",
      sender: "MV",
    },
    {
      content: "Bố mày tên là Thi",
      sender: "Bố Thi",
    },
    {
      content: "Bố mày tên là Ngọc Quang",
      sender: "Ngọc Quang",
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const chatBoxRef = useRef(null);
  const [stompClient, setStompClient] = useState(null);
  const [roomId, setRoomId] = useState("");
  const [currentUser] = useState("Bố Thi");
  return (
    <div className="">
      {/* this is a header */}
      <header className="dark:border-gray-700 shadow fixed w-full dark:bg-gray-900 py-5 flex justify-around items-center">
        {/* room name container */}
        <div>
          <h1 className="text-xl font-semibold">
            Room: <span>Family Room</span>
          </h1>
        </div>
        {/* username container */}
        <div>
          <h1 className="text-xl font-semibold">
            User: <span>Thi Nguyen</span>
          </h1>
        </div>
        {/* button: leave group */}
        <div>
          <button className="dark:bg-red-500 dark:hover:bg-red-700 px-3 py-3 rounded-full">
            Leave Room
          </button>
        </div>
      </header>

      <main className="pt-21 px-5 w-2/3 dark:bg-slate-600 mx-auto h-screen overflow-auto">
        {messages.map((msg, index) => {
          return (
            <div
              key={index}
              className={`flex ${
                msg.sender == currentUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`my-2 ${
                  msg.sender == currentUser
                    ? "bg-blue-600"
                    : "bg-gray-300 text-black"
                } p-2 max-w-xs rounded`}
              >
                <div
                  className={`flex ${
                    msg.sender == currentUser ? "flex-row" : "flex-row-reverse"
                  } gap-2`}
                >
                  <div className="flex flex-col gap-1">
                    <p
                      className={`text-sm font-bold flex ${
                        msg.sender == currentUser
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {msg.sender}
                    </p>
                    <p>{msg.content}</p>
                  </div>
                  <img
                    className="h-10 w-10"
                    src={"https://avatar.iran.liara.run/public/12"}
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* input message container  */}
      <div className="fixed bottom-2 mx-auto left-0 right-0 h-16">
        <div className="h-full pr-10 gap-4 flex items-center justify-between rounded-full w-1/2 mx-auto dark:bg-gray-900">
          <input
            type="text"
            placeholder="type your message here..."
            className="dark:border-gray-700 w-full dark:bg-gray-800 px-3 py-2 rounded-full h-full focus:outline-none"
          />
          <div className="flex gap-2">
            <button className="dark:bg-purple-600 h-10 w-10 border flex justify-center items-center  rounded-full">
              <MdAttachFile size={20} />
            </button>
            <button className="dark:bg-green-600 h-10 w-10 border flex justify-center items-center  rounded-full">
              <MdSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
