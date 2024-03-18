import { Message } from "../../../models/Message";
import ProfileHistoryCard from "./ProfileHistoryCard";
import "../styles/ProfileInterviewHistory.css";

const sampleMessage: Message = {
  created_at: 1699017614,
  thread_id: "thread_abc123",
  value: "Here is some text",
};

const sampleMessages: Message[] = [];

for (let i = 0; i <= 10; i++) {
  sampleMessages.push(sampleMessage);
}

export default function ProfileInterviewHistory() {
  return (
    <div className="profile-interview-history">
      {sampleMessages.map((message) => (
        <ProfileHistoryCard message={message} />
      ))}
    </div>
  );
}
