import React, { useState } from "react";
import ChatBot from "./ChatBot";
import CloseIco from "../assets/CloseIco";

const ChatBotButton = () => {
  const [closeBtnHelperText, setCloseBtnHelperText] = useState(false);
  const [openChatBot, setOpenChatBot] = useState(false);
  if (openChatBot) {
    return <ChatBot onMinimize={() => setOpenChatBot(false)} />;
  }
  return (
    <div className=" w-auto fixed flex items-center justify-center bottom-5 right-24">
      {!closeBtnHelperText && (
        <div className="absolute text-sm -top-[160px] bg-white shadow-md p-2 rounded-md w-[200px] transition-all animate-pulse">
          <div className="flex items-center justify-between">
            <strong>👋 Hi, I'm Kushi !</strong>
            <CloseIco
              onclick={() => {
                setCloseBtnHelperText(true);
              }}
              height={14}
              width={14}
            />
          </div>
          <br />A personalized AI portfolio chatbot. Feel free to ask me any questions about Shashank P and his work! 😊{" "}
        </div>
      )}
      <img
        src="/images/chatbot.png"
        className="w-[50px] h-[50px] aspect-square rounded-full overflow-hidden shadow-xl"
        alt="kushi chatbot"
        onClick={() => {
          setOpenChatBot(true);
        }}
      />
    </div>
  );
};

export default ChatBotButton;
