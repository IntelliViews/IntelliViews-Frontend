import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface User {
  Id: string;
  CreatedAt: number;
}

export default function UsersList({
  setSelectedUser,
}: {
  setSelectedUser: Dispatch<SetStateAction<User | null>>;
}) {
  const [users, setUsers] = useState<User[]>([
    // Dummy data:
    { Id: "TestId1", CreatedAt: 11111 },
    { Id: "TestId2", CreatedAt: 22222 },
    { Id: "TestId3", CreatedAt: 333 },
    { Id: "TestId3", CreatedAt: 333 },
    { Id: "TestId3", CreatedAt: 333 },
    { Id: "TestId3", CreatedAt: 333 },
    { Id: "TestId3", CreatedAt: 333 },
    { Id: "TestId3", CreatedAt: 333 },
    { Id: "TestId3", CreatedAt: 333 },
  ]);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    localStorage.setItem("UserId", user.Id);
    console.log("hahah");
  };

  return (
    <div className="container admin-users">
      <div
        className="list-group list-group--users overflow-auto"
        style={{
          maxHeight: "300px",
          scrollbarColor: "var(--bs-primary) transparent",
        }}
      >
        {users.map((user) => (
          <button
            type="button"
            className="list-group-item list-group-item-action "
            onClick={() => handleUserClick(user)}
          >
            {user.Id}
          </button>
        ))}
      </div>
    </div>
  );
}
