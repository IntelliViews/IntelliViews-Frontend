import { useEffect, useState } from "react";
import FeedbackForm from "./components/feedback/FeedbackForm";
import ThreadList from "./components/threads/ThreadList";
import ChatHistory from "./components/users-history/ChatHistory";
import UsersList from "./components/users/UsersList";
import "./styles/AdminPage.css";
import { getMessages } from "../../services/OpenAiService";
import ChatWindow from "../chat/ChatWindow";

interface User {
  id: string;
  createdAt: number;
}

interface Thread {
  id: string;
  createdAt: number;
  userId: string;
}

export default function AdminPage() {
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);
  const [messages, setMessages] = useState([]);

  function fetchMessages() {
    if (!selectedThread) return;
    getMessages(selectedThread?.id).then((response) =>
      setMessages(response.data)
    );
  }

  useEffect(() => {
    fetchMessages();
  }, [selectedThread]);

  return (
    <div className="container container__admin" style={{ height: "auto" }}>
      {/* List of users */}
      <div className="card card__admin-item">
        <h3>List of users</h3>
        <UsersList setSelectedUser={setSelectedUser} />
      </div>

      {/* List of threads when on specific user */}
      <div className="card card__admin-item">
        <h3>List of mock-interview threads</h3>
        {selectedUser && <ThreadList selectedUser={selectedUser} />}
      </div>

      {/* Chat history on specific thread */}
      <div className="card card__admin-user">
        <div className="card__profile-user__user-checklist">
          <h3> Chat history </h3>
          <p className="text-muted pb-2">
            Select mock-interview thread to display
          </p>
        </div>
      </div>

      {/* Feedback form */}
      <div className="card card__admin-user">
        <div className="card__admin-user__user-feedback">
          <h3> Feedback form </h3>
          <p className="text-muted pb-2">
            Please provide feedback to user mock-interview
          </p>
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}
