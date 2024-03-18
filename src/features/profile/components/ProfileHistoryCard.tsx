import { Link } from "react-router-dom";
import { Message } from "../../../models/Message";
import "../styles/ProfileHistoryCard.css";

export default function ProfileHistoryCard({ message }: { message: Message }) {
  return (
    <div className="card card__profile-history d-flex flex-row gap-3 align-items-center">
      <p>{new Date(message.created_at).toDateString()}</p>
      <p>{message.value}</p>
      <Link to="/">View</Link>
    </div>
  );
}
