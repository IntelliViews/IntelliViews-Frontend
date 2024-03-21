import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="iv-header">
      <div className="iv-header--content container">
        <h1 className="iv-header--logo">IntelliViews</h1>
        <div className="nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
          <Link className="nav-link" to="/interview">
            Interview
          </Link>
          <Link className="nav-link" to="/admin">
            Test
          </Link>
        </div>
      </div>
    </nav>
  );
}
