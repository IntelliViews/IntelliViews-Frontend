import "./styles/Profile.css";
import ProfileInterviewHistory from "./components/history/ProfileInterviewHistory";
import ProfileRatingsList from "./components/ratings/ProfileRatingsList";
import { useEffect } from "react";
import { AuthContext } from "../../App";
import { useContext, useState } from "react";
import { getThreadsByUser, getFeedbackThreads  } from "../../services/IntelliViewsService";
import { getThreadById } from "../../services/OpenAiService";

export default function Profile() {
  const { userContext } = useContext(AuthContext)!;
  const [user] = userContext;
  const [threads, setThreads] = useState([]);
  const [feedbackThreads, setFeedbackThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await getThreadsByUser(user.id);
        if (response.status) {
          const threadIds = response.data.map((thread) => thread.id);
          const threadDataPromises = threadIds.map((threadId) => getThreadById(threadId));
          const threadData = await Promise.all(threadDataPromises);
          setThreads(threadData);
        } else {
          console.error("Failed to fetch threads:", response.message);
        }
      } catch (error) {
        console.error("Error fetching threads:", error);
      }
    };

    fetchThreads();
  }, [user.id]);

  useEffect(() => {
    const fetchFeedbackThreads = async () => {
      try {
        const response = await getFeedbackThreads(); // Fetch feedback threads
        if (response.status) {
          setFeedbackThreads(response.data);
        } else {
          console.error("Failed to fetch feedback threads:", response.message);
        }
      } catch (error) {
        console.error("Error fetching feedback threads:", error);
      }
    };

    fetchFeedbackThreads();
  }, []);

  //No time to set up real threads for my part, mock have to do
  const testThreads = [
    {
      "id": "1",
      "object": "thread",
      "created_at": 1698609083,
      "metadata": {}
    },
    {
      "id": "2",
      "object": "thread",
      "created_at": 1698522683,
      "metadata": {}
    },
    {
      "id": "3",
      "object": "thread",
      "created_at": 1698436283,
      "metadata": {}
    },
    {
      "id": "4",
      "object": "thread",
      "created_at": 1698349883,
      "metadata": {}
    },
    {
      "id": "5",
      "object": "thread",
      "created_at": 1698263483,
      "metadata": {}
    }
  ];

  console.log(feedbackThreads);

  return (
    <div className="container" style={{ height: "auto" }}>
      <h1>Interview overview for {user.email}</h1>
      <div className="container__profile">
        <div className="card card__profile-info">
          <h2>Latest ratings:</h2>
          <ProfileRatingsList feedbackThreads={feedbackThreads}/>
        </div>
        <div className="card card__profile-info">
          <h2>Interview history:</h2>
          <ProfileInterviewHistory threads={ testThreads } /> {/*change to threads */}
        </div>
      </div>
    </div>
  );
}
