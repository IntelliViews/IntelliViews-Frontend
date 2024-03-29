import { Link } from "react-router-dom";

interface Props {
  id: string;
  rating: number;
}

export default function ProfileRatingsPodium(props: Props) {
  const rating = props.rating * 10 + "%";
  return (
    <div className="d-flex justify-content-end flex-column text-center">
      <span
        className="rounded-1"
        style={{
          minWidth: "150px",
          width: "auto",
          height: rating,
          backgroundColor: "var(--bs-tertiary)",
        }}
      >
        {(props.rating / 10) * 100}%
      </span>
      <Link to={`/interview/${props.id}`} className="btn btn-primary btn-sm">View</Link>
    </div>
  );
}
