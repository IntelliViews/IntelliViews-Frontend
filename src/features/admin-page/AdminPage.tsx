import { useEffect, useState } from "react";
import FeedbackForm from "./components/feedback/FeedbackForm";
import ThreadList from "./components/threads/ThreadList";
import UsersList from "./components/users/UsersList";
import "./styles/AdminPage.css";
import { getMessages } from "../../services/OpenAiService";
import ChatWindow from "../chat/ChatWindow";

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
    getMessages(selectedThread?.id).then((response: any) => {
      setMessages(response.data.data);
    });
  }

  useEffect(() => {
    fetchMessages();
  }, [selectedThread]);

  return (
    <div className="container container__admin" style={{ height: "auto" }}>
      {/* List of users */}
      <div className="card card__admin-item">
        <h3>Users</h3>
        <UsersList setSelectedUser={setSelectedUser} />
      </div>

      {/* List of threads when on specific user */}
      <div className="card card__admin-item">
        <h3>Mock-interviews</h3>
        {selectedUser && (
          <ThreadList
            selectedUser={selectedUser}
            selectedThread={setSelectedThread}
          />
        )}
      </div>

      {/* Chat history on specific thread */}
      <div className="card card__admin-user">
        <h3>Chat history</h3>
        <div className="d-flex justify-content-center">
          {messages && messages.length > 0 ? (
            <ChatWindow messages={messages} />
          ) : (
            <p>No messages</p>
          )}
        </div>
      </div>

      {/* Feedback form */}
      <div style={{ gridColumn: "1 / span 2" }}>
        <div>
          <h3>Feedback</h3>
          <p className="text-muted pb-2">Please provide feedback to the user</p>
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}
