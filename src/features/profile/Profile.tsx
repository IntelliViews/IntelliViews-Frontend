import "./styles/Profile.css";
import ProfileInterviewHistory from "./components/history/ProfileInterviewHistory";
import ProfileRatingsList from "./components/ratings/ProfileRatingsList";

export default function Profile() {
  return (
    <div className="container" style={{ height: "auto" }}>
      <h1>Account Overview</h1>
      <div className="container__profile">
        <div className="card card__profile-info">
          <h2>Latest ratings:</h2>
          <ProfileRatingsList />
        </div>
        <div className="card card__profile-info">
          <h2>Interview history:</h2>
          <ProfileInterviewHistory />
        </div>
      </div>
    </div>
  );
}
