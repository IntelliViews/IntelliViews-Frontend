import { useState } from "react";
import ProfileIcon from "../common/profile-icon/ProfileIcon";
import FeedbackForm from "./components/feedback/FeedbackForm";
import ThreadList from "./components/threads/ThreadList";
import ChatHistory from "./components/users-history/ChatHistory";
import UsersList from "./components/users/UsersList";
import "./styles/AdminPage.css";

interface User {
    Id: string,
    CreatedAt: number,
  }

  interface Thread {
    Id: string,
    CreatedAt: number,
    UserId: string
  }


export default function AdminPage() {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [selectedThread, setSelectedThread] = useState<Thread | null>(null);

  return (
    <div className="container container__admin" style={{ height: "auto" }}>
      {/* Admin page header */}
      <div className="card card__admin-user">
        <div className="card__admin-user__user-info">
          <ProfileIcon diameter={96} username="Username" />
          <h1>ADMIN Username Here</h1>
        </div>
      </div>

      {/* List of users */}
      <div className="card card__admin-item">
        <h3>List of users</h3>
        <UsersList setSelectedUser={setSelectedUser}/>
      </div>

      {/* List of threads when on specific user */}
      <div className="card card__admin-item">
        <h3>List of mock-interview threads</h3>
        <ThreadList />
      </div>

      {/* Chat history on specific thread */}
      <div className="card card__admin-user">
        <div className="card__profile-user__user-checklist">
          <h3> Chat history </h3>
          <p className="text-muted pb-2">
            Select mock-interview thread to display
          </p>
          <ChatHistory />
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
