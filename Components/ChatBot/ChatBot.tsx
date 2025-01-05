import React, { useEffect, useRef, useState } from "react";
import SubmitIco from "../assets/SubmitIco";
import CloseIco from "../assets/CloseIco";
import Markdown from "react-markdown";
import LoadingIco from "../assets/LoadingIco";

type propsDto = {
  onMinimize: () => void;
};

type messageDto = {
  question: string;
  response: string;
};
const ChatBot = ({ onMinimize }: propsDto) => {
  const [messages, setMessages] = useState<messageDto[]>([]);
  const ref = useRef(null)

  const [followUpQuestions, setFollowUpQuestions] = useState<string[]>([]);
  const [chatId, setChatId] = useState<string | undefined>(undefined);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false)

  const getResponse = async (question: string) => {
    try {
      setLoading(true)
      const body: any = {
        question,
      };

      if (chatId) {
        body["chatId"] = chatId;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CHAT_BOT_API}/get-response`,
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await res.json();

      console.log(result);

      if (result?.success) {
        setChatId(result?.chatId);
        localStorage.setItem("chatId", result.chatId);
        setMessages([
          ...messages,
          {
            question: text,
            response: result?.data?.replace(/\n/g, "  \n "),
          },
        ]);
        setFollowUpQuestions(result?.followUpQuestion);
        setText("");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    const chatId = localStorage.getItem("chatId");
    if (chatId) {
      setChatId(chatId);
    }
  }, []);  

  useEffect(()=>{
    if(ref.current){
      // @ts-ignore
      ref.current?.scrollIntoView({
        behavior: "smooth", 
        block: "start",
      });
    }
  },[ref])

  console.log(messages);
  

  return (
    <div className="max-w-[500px] w-[300px] min-h-[400px] sm:w-[400px] min-w-[250px] flex flex-col justify-between fixed bottom-5 right-5 bg-white shadow-2xl rounded-lg overflow-hidden">
      {/* Header */}
      <div className="py-2 px-4 text-lg flex justify-between items-center bg-[#2F4858] text-white">
        Kushi Chatbot
        <CloseIco onclick={onMinimize} height={18} width={18} color="white" />
      </div>

      <div className="p-2">
        {/* Messages */}
        <div className="min-h-[200px] max-h-[350px] space-y-3 overflow-y-auto px-1 py-3">
          {messages?.map((msg, i) => (
            <div
            ref={ i < messages.length - 1 ? ref: null}
            key={i} className="text-base border p-2 rounded-lg">
              <div className="mb-2">{msg?.question}</div>
              <div className="text-slate-500 text-sm" style={{ whiteSpace: "pre-line" }}>
                <Markdown>{msg?.response}</Markdown>
              </div>
            </div>
          ))}
        </div>

        {/* follow up question */}
       { Array.isArray(followUpQuestions) && followUpQuestions?.length > 0 &&  <div className="border rounded-md mb-1 shadow-inner px-1 py-2 max-h-[100px] overflow-y-auto">
        <div className="text-sm mb-2 flex justify-between items-center">Follow Up Questions:

          <CloseIco height={16} width={16} color="#94a3b8"
          onclick={()=>{
            setFollowUpQuestions([])
          }}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {
            followUpQuestions?.map((question, i) => <div key={i}
            onClick={()=>{
              setText(question)
              setFollowUpQuestions([])
            }}
            className="border p-1 cursor-pointer hover:bg-[#2F4858] hover:text-white rounded-md">
              {question}
            </div> )
          }
        </div>
        </div>}

        {/* Input */}
        <div className="flex items-center border rounded-md">
          <textarea
            value={text}
            className="max-h-[100px] min-h-[80px] flex-1 outline-none p-2 min-w-[200px]"
            placeholder="Please type is query here..."
            onChange={(e) => {
              setText(e?.target?.value);
            }}
          />
          { loading && <LoadingIco 
          height={25}
          width={25}
          className={"animate-spin"}
          />}
          { !loading && <SubmitIco
            width={25}
            height={25}
            onClick={() => {
              if (text?.trim()?.length > 0) {
                getResponse(text);
              }
            }}
          />}
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
