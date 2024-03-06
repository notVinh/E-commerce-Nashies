import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaHeadset } from "react-icons/fa";

const ChatBot = () => {
  const [hide, setHide] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed right-0 bottom-0">
      {hide && (
        <div
          className={`p-4  bg-orange-400 h-12 w-12 rounded-full cursor-pointer m-1 text-white`}
          onClick={() => {
            setHide(false);
            setOpen(true);
          }}
        >
          <FaHeadset />
        </div>
      )}
      {open && (
        <div>
          <div className="bg-white rounded-tl-md flex justify-between items-center p-2">
            <div>Chat with bot</div>
            <IoMdCloseCircleOutline
              className="text-2xl cursor-pointer"
              onClick={() => {
                setHide(true);
                setOpen(false);
              }}
            />
          </div>

          <div className="relative">
            <div className="bg-white absolute top-0 w-full">Chat with bot</div>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
