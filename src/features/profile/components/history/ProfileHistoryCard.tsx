import { Link } from "react-router-dom";
import "./ProfileHistoryCard.css";

export default function ProfileHistoryCard({ thread }: { thread: any }) {
  return (
    <div className="card card__profile-history d-flex flex-row gap-3 align-items-center">
      <p>{new Date(thread.created_at*1000).toDateString()}</p>
      <p>{thread.id}</p>
      <Link to={`/interview/${thread.id}`} className="btn btn-primary btn-sm">
        View
      </Link>
    </div>
  );
}
