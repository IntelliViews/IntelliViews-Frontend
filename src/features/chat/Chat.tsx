import { FormEvent, useEffect, useState } from "react";
import {
  createMessage,
  createRun,
  createThread,
  getMessages,
  isRunComplete,
} from "../../services/OpenAiService";
import "./Chat.css";
import ChatMessage from "./ChatMessage";

export default function Chat() {
  const [threadId, setThreadId] = useState<string | null>(null);
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);

  const fetchCreateThread = () => {
    createThread().then((data) => {
      setThreadId(data.data.id);
      localStorage.setItem("threadId", data.data.id);
      return data;
    });
  };

  const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const fetchCreateMessage = async (content: string, threadId: string) => {
    createMessage(content, threadId).finally(() => fetchMessages(threadId));
    const runId = (await createRun(threadId)).data.id;
    let isComplete = (await isRunComplete(threadId, runId)) === "completed";
    while (!isComplete) {
      await wait(500);
      if ((await isRunComplete(threadId, runId)) === "failed") break;
      isComplete = (await isRunComplete(threadId, runId)) === "completed";
    }
    fetchMessages(threadId);
  };

  const fetchMessages = (threadId: string) => {
    getMessages(threadId).then((data) => {
      setMessages(data.data.data);
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!threadId) return;
    const userMessage = {
      content: [
        {
          text: {
            value: "",
          },
        },
      ],
      role: "user",
      thread_id: "",
      created_at: 0,
    };
    setUserInput("");
    setMessages([...messages, userMessage]);
    fetchCreateMessage(userInput, threadId);
  };

  useEffect(() => {
    const storedThreadId = localStorage.getItem("threadId");
    if (!storedThreadId) {
      fetchCreateThread();
      return;
    }
    setThreadId(storedThreadId);
    fetchMessages(storedThreadId);
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center w-100 gap-3">
      <ul className="chat__window">
        {messages.map((message, idx) => (
          <ChatMessage
            key={idx}
            message={message}
            isUser={message.role === "user"}
          />
        ))}
      </ul>
      <form
        className="chat__user-input d-flex flex-row card"
        onSubmit={(e) => onSubmit(e)}
      >
        <input
          placeholder="Write something..."
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}
