import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { getUsers } from "../../../../services/IntelliViewsService";
import ProfileIcon from "../../../common/profile-icon/ProfileIcon";

export default function UsersList({
  setSelectedUser,
}: {
  setSelectedUser: Dispatch<SetStateAction<any | null>>;
}) {
  const [users, setUsers] = useState([]);

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    getUsers().then((data: any) => {
      setUsers(data.data);
    });
  }, []);

  return (
    <div className="container admin-users">
      <div
        className="list-group list-group--users overflow-auto gap-3"
        style={{
          maxHeight: "300px",
          scrollbarColor: "var(--bs-primary) transparent",
        }}
      >
        {users.map((user: any) => (
          <div className="d-flex gap-3">
            <ProfileIcon username={user.email} diameter={40} />
            <button
              key={user.id}
              type="button"
              className="card d-flex flex-row gap-4 align-items-center"
              style={{ backgroundColor: "var(--bs-tertiary)" }}
              onClick={() => handleUserClick(user)}
            >
              {user.email}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
