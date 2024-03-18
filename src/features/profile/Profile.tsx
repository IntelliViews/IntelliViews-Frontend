import ProfileIcon from "../common/profile-icon/ProfileIcon";
import "./styles/Profile.css";
import ProfileInterviewHistory from "./components/ProfileInterviewHistory";
import ProfileRatingsList from "./components/ProfileRatingsList";

export default function Profile() {
  return (
    <div className="container container__profile" style={{ height: "auto" }}>
      <div className="card card__profile-user">
        <div className="card__profile-user__user-info">
          <ProfileIcon diameter={96} username="Username" />
          <h1>Username Here</h1>
        </div>
      </div>
      <div className="card card__profile-info">
        <h3>Latest ratings:</h3>
        <ProfileRatingsList />
      </div>
      <div className="card card__profile-info">
        <h3>Interview History:</h3>
        <ProfileInterviewHistory />
      </div>
    </div>
  );
}
