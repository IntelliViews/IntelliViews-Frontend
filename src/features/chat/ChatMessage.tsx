import { Message } from "../../models/Message";
import "./ChatMessage.css";

interface Props {
  message: Message;
  isUser: boolean;
}

export default function ChatMessage(props: Props) {
  return (
    <li
      className={`chat__message rounded-1 chat__message--${
        props.isUser ? "user" : "assistant"
      }`}
    >
      <p>{props.message.value}</p>
    </li>
  );
}
