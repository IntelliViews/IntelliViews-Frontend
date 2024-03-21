
import { useState } from "react";

interface Thread {
  Id: string,
  CreatedAt: number,
  UserId: string
}



export default function ThreadList() {
  const [threads, setThreads] = useState<Thread[]>([
    // Dummy data:
    { Id: "TestThreadId1", CreatedAt: 11111, UserId: "TestUserId1" },
    { Id: "TestThreadId2", CreatedAt: 22222, UserId: "TestUserId1" },
    { Id: "TestThreadId3", CreatedAt: 33333, UserId: "TestUserId1" },
  ]);

  const handleUserClick = (thread: Thread) => {
    localStorage.setItem("ThreadId", thread.Id)
    console.log("HOHOHO");
  };

  return (
    <div className="container admin-thread">
      <div className="list-group list-group--threads">
        {threads.map((thread) => (
          <button
            type="button"
            className="list-group-item list-group-item-action d-flex flex-row gap-4 align-items-center "
            onClick={() => handleUserClick(thread)}
          >
            <p>{new Date(thread.CreatedAt).toDateString()}</p>
            <p>{thread.Id}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
