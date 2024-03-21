import ChatMessage from "./ChatMessage";

interface Props {
  isResponding?: boolean;
  messages: any[];
}

export default function ChatWindow(props: Props) {
  const { isResponding, messages } = props;

  return (
    <div className="chat__window">
      {isResponding && <p>Responding...</p>}
      {messages.map((message, idx) => (
        <ChatMessage
          key={idx}
          message={message}
          isUser={message.role === "user"}
        />
      ))}
    </div>
  );
}
