import { Link } from "react-router-dom";
import "./Header.css";
import ProfileIcon from "../common/profile-icon/ProfileIcon";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../App";

export default function Header() {
  const { userContext } = useContext(AuthContext)!;
  const [user] = userContext;

  useEffect(() => {}, [user]);
  return (
    <nav className="iv-header">
      <div className="iv-header--content container justify-content-between">
        <h1 className="iv-header--logo">
          <Link to="/">IntelliViews</Link>
        </h1>
        <div className="nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/interview">
            Interview
          </Link>
          {user && user.role === "Admin" && (
            <Link className="nav-link" to="/admin">
              Manage
            </Link>
          )}
        </div>
        <div className="d-flex align-items-center gap-2 justify-content-end user-select-none">
          {user ? (
            <>
              <ProfileIcon username={user.username} diameter={40} />
              <Link
                to="/profile"
                style={{
                  margin: "0",
                  opacity: "0.7",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {user.username}
              </Link>
            </>
          ) : (
            <p style={{ margin: "0", opacity: "0.7", cursor: "not-allowed" }}>
              Login
            </p>
          )}
        </div>
      </div>
    </nav>
  );
}
