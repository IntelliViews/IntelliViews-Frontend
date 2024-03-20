import { Link } from "react-router-dom";

interface Props {
  rating: number;
}

export default function ProfileRatingsPodium(props: Props) {
  const rating = props.rating * 10 + "%";
  return (
    <div className="d-flex justify-content-end flex-column text-center h-100">
      <span
        className="rounded-1"
        style={{
          minWidth: "150px",
          width: "auto",
          height: rating,
          backgroundColor: "var(--bs-tertiary)",
        }}
      >
        {props.rating} / 10
      </span>
      <Link to="/" className="btn btn-primary btn-sm">View</Link>
    </div>
  );
}
