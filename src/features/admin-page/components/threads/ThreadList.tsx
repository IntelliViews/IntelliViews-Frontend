import { useEffect, useState } from "react";
import { getThreadsByUser } from "../../../../services/IntelliViewsService";
import { getThreadById } from "../../../../services/OpenAiService";

interface Props {
  selectedUser: any;
  selectedThread: any;
}

export default function ThreadList(props: Props) {
  const [threads, setThreads] = useState<any[]>([]);

  const fetchThreads = async () => {
    let dbThreads = await getThreadsByUser(props.selectedUser.id).then(
      (response) => response.data
    );
    dbThreads = await Promise.all(
      dbThreads.map(
        async (thread: any) => await getThreadById(thread.id).then((s) => s)
      )
    );
    setThreads(dbThreads);
  };

  useEffect(() => {
    setThreads([]);
    fetchThreads();
  }, [props.selectedUser.id]);

  return (
    <div className="container admin-thread">
      <div
        className="list-group list-group--threads overflow-auto gap-3"
        style={{
          maxHeight: "300px",
          scrollbarColor: "var(--bs-primary) transparent",
        }}
      >
        {threads.map((thread: any) => (
          <button
            key={thread.id}
            type="button"
            className="card d-flex flex-row gap-4 align-items-center"
            style={{ backgroundColor: "var(--bs-tertiary)" }}
            onClick={() => props.selectedThread(thread)}
          >
            <p className="m-0">
              {new Date(thread["created_at"] * 1000).toUTCString()}
            </p>
            <p className="m-0">{thread.id}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
