import { useState } from "react";
import ProfileHistoryCard from "./ProfileHistoryCard";
import "./ProfileInterviewHistory.css";

export default function ProfileInterviewHistory({ threads }) {

  if (!threads || threads.length === 0) {
    return <div>No threads available</div>;
  }
  
  return (
    <div className="profile-interview-history">
      {threads.map((thread) => (
        <ProfileHistoryCard thread={thread} />
      ))}
    </div>
  );
}
