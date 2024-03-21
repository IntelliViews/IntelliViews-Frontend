import { FormEvent, useContext, useEffect, useState } from "react";
import {
  createMessage,
  createRun,
  createThread,
  getMessages,
  isRunComplete,
} from "../../services/OpenAiService";
import "./Chat.css";
import { saveThread } from "../../services/IntelliViewsService";
import { AuthContext } from "../../App";
import ChatWindow from "./ChatWindow";

export default function Chat() {
  const { userContext } = useContext(AuthContext);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isResponding, setIsResponding] = useState(false);

  const fetchCreateThread = () => {
    createThread().then((data: any) => {
      setThreadId(data.data.id);
      saveThread(data.data.id, userContext.user.id).catch((err: any) =>
        setError(err.message)
      );
      localStorage.setItem("threadId", data.data.id);
      return data;
    });
  };

  const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const fetchCreateMessage = async (content: string, threadId: string) => {
    setIsResponding(true);
    createMessage(content, threadId).finally(() => fetchMessages(threadId));
    const runId = (await createRun(threadId)).data.id;
    let isComplete = (await isRunComplete(threadId, runId)) === "completed";
    while (!isComplete) {
      await wait(500);
      if ((await isRunComplete(threadId, runId)) === "failed") break;
      isComplete = (await isRunComplete(threadId, runId)) === "completed";
    }
    fetchMessages(threadId);
    setIsResponding(false);
  };

  const fetchMessages = (threadId: string) => {
    setIsLoading(true);
    getMessages(threadId)
      .then((data: any) => {
        setMessages(data.data.data);
      })
      .finally(() => setIsLoading(false));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!threadId) return;
    const userMessage = {
      content: [
        {
          text: {
            value: userInput,
          },
        },
      ],
      role: "user",
      thread_id: "",
      created_at: 0,
    };
    setUserInput("");
    setMessages([userMessage, ...messages]);
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
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul className="chat__window">
        {isResponding && <p>Responding...</p>}
        <ChatWindow messages={messages} isResponding={isResponding} />
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
      {isLoading && !isResponding && <p>Loading...</p>}
      {messages.length != 0 && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            localStorage.removeItem("threadId");
            location.reload();
          }}
        >
          New Chat
        </button>
      )}
    </div>
  );
}
