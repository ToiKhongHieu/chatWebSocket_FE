import React from "react";
import { MdSend } from "react-icons/md";

const ChatPage = () => {
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
      {/* input message container  */}
      <div className="fixed bottom-2 mx-auto left-0 right-0 h-16">
        <div className="h-full px-10 gap-4 flex items-center justify-between rounded-full w-2/3 mx-auto dark:bg-gray-900">
          <input
            type="text"
            placeholder="type your message here..."
            className="dark:border-gray-700 w-full dark:bg-gray-800 px-3 py-2 rounded-full h-full focus:outline-none"
          />
          <button className="dark:bg-green-600 h-10 w-10 border flex justify-center items-center  rounded-full">
            <MdSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
