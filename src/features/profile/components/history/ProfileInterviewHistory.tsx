import { useState } from "react";
import ProfileHistoryCard from "./ProfileHistoryCard";
import "./ProfileInterviewHistory.css";

export default function ProfileInterviewHistory() {
  const [messages] = useState([{ userName: "s" }]);
  return (
    <div className="profile-interview-history">
      {messages.map((message) => (
        <ProfileHistoryCard message={message} />
      ))}
    </div>
  );
}
