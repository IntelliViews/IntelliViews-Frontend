import "./ChatMessage.css";

interface Props {
  message: any;
  isUser: boolean;
}

export default function ChatMessage(props: Props) {
  return (
    <li
      className={`chat__message rounded-1 chat__message--${
        props.isUser ? "user" : "assistant"
      }`}
    >
      <p>{props.message.content[0].text.value}</p>
    </li>
  );
}
