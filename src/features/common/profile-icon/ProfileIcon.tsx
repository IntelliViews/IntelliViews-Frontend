import "./ProfileIcon.scss";

interface Props {
  username: string;
  diameter: number;
  backgroundColor?: string;
  color?: string;
}

export default function ProfileIcon(props: Props) {
  return (
    <div
      className="iv-profile-icon"
      style={{
        height: props.diameter + "px",
        width: props.diameter + "px",
        backgroundColor: props.backgroundColor || "var(--bs-tertiary)",
        color: props.color || "#fff",
      }}
    >
      {props.username && (
        <h1 style={{ fontSize: props.diameter / 2 }}>
          {props.username.slice(0, 2).toUpperCase()}
        </h1>
      )}
    </div>
  );
}
