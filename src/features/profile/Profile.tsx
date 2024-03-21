import "./styles/Profile.css";
import ProfileInterviewHistory from "./components/history/ProfileInterviewHistory";
import ProfileRatingsList from "./components/ratings/ProfileRatingsList";
import CheckListComponent from "./components/checklist/CheckListComponent";

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
        <div className="card card__profile-info--span-2">
          <h3> Improvement points: </h3>
          <p className="text-muted pb-2">Try to finish some these points!</p>
          <CheckListComponent />
        </div>
      </div>
    </div>
  );
}
