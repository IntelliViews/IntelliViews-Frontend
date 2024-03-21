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
        className="list-group list-group--threads overflow-auto"
        style={{
          maxHeight: "300px",
          scrollbarColor: "var(--bs-primary) transparent",
        }}
      >
        {threads.map((thread: any) => (
          <button
            key={thread.id}
            type="button"
            className="list-group-item list-group-item-action d-flex flex-row gap-4 align-items-center"
            onClick={() => props.selectedThread(thread)}
          >
            <p>{new Date(thread["created_at"]).toDateString()}</p>
            <p>{thread.id}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
