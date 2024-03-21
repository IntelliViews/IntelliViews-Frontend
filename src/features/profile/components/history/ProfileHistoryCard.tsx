import { Link } from "react-router-dom";
import "./ProfileHistoryCard.css";

export default function ProfileHistoryCard({ message }: { message: any }) {
  return (
    <div className="card card__profile-history d-flex flex-row gap-3 align-items-center">
      <p>{new Date(message.created_at).toDateString()}</p>
      <p>{message.value}</p>
      <Link to="/" className="btn btn-primary btn-sm">
        View
      </Link>
    </div>
  );
}
