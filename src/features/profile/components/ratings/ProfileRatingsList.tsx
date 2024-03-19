import ProfileRatingsPodium from "./ProfileRatingsPodium";

export default function ProfileRatingsList() {
  return (
    <div className="d-flex flex-row h-100 justify-content-around">
      <ProfileRatingsPodium rating={10} />
      <ProfileRatingsPodium rating={7} />
      <ProfileRatingsPodium rating={2} />
    </div>
  );
}
