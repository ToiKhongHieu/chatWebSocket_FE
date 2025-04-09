import React from "react";
import chatIcon from "../assets/speak.png";
const JoinCreateChat = () => {
  return (
    <div className="min-h-screen flex items-center justify-center border">
      <div className="p-10 w-full max-w-md flex flex-col gap-5 rounded dark:bg-gray-900 shadow">
        <div>
          <img src={chatIcon} className="w-24 mx-auto" />
        </div>

        <h1 className="text-2xl font-semibold text-center">
          Join Room / Create Room .. test commit
        </h1>
        {/* name div */}
        <div className="">
          <label htmlFor="name" className="block font-medium mb-2">
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-3 focus:ring-blue-500"
          />
        </div>
        {/* roomId div */}
        <div className="">
          <label htmlFor="name" className="block font-medium mb-2">
            Room ID / New Room ID
          </label>
          <input
            type="text"
            id="name"
            className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-3 focus:ring-blue-500"
          />
        </div>
        {/* button */}
        <div className="flex gap-3 justify-center">
          <button className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-full">
            Join Room
          </button>
          <button className="px-3 py-2 dark:bg-orange-500 hover:dark:bg-blue-800 rounded-full">
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinCreateChat;
