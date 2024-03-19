import "./Chat.css";
import ChatMessage from "./ChatMessage";

export default function Chat() {
  return (
    <div className="container d-flex flex-column align-items-center w-100 gap-3">
      <ul className="chat__window">
        <ChatMessage
          isUser={true}
          message={{
            value: "First!",
            created_at: 2919192,
            thread_id: "thread_abc123",
          }}
        />
        <ChatMessage
          isUser={false}
          message={{
            value: "Some text here",
            created_at: 2919192,
            thread_id: "thread_abc123",
          }}
        />
        <ChatMessage
          isUser={true}
          message={{
            value: "Some text here",
            created_at: 2919192,
            thread_id: "thread_abc123",
          }}
        />
      </ul>
      <div className="chat__user-input d-flex flex-row card">
        <input placeholder="Write something..." />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
}
