import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { getUsers } from "../../../../services/IntelliViewsService";

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
        className="list-group list-group--users overflow-auto"
        style={{
          maxHeight: "300px",
          scrollbarColor: "var(--bs-primary) transparent",
        }}
      >
        {users.map((user: any) => (
          <button
            key={user.id}
            type="button"
            className="list-group-item list-group-item-action "
            onClick={() => handleUserClick(user)}
          >
            {user.email}
          </button>
        ))}
      </div>
    </div>
  );
}
