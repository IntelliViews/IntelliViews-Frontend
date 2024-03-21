import { useEffect, useState } from "react";
import { getThreadsByUser } from "../../../../services/IntelliViewsService";
import { getThreadById } from "../../../../services/OpenAiService";

interface Props {
  selectedUser: any;
}

export default function ThreadList(props: Props) {
  const [threads, setThreads] = useState<any>([]);

  useEffect(() => {
    setThreads([]);
    getThreadsByUser(props.selectedUser.id).then((response: any) => {
      response.data.map((thread: any) =>
        getThreadById(thread.id).then((response: any) => {
          setThreads([...threads, response.data]);
        })
      );
    });
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
          >
            <p>{new Date(thread.createdAt).toDateString()}</p>
            <p>{thread.id}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
