import "./styles/Profile.css";
import ProfileInterviewHistory from "./components/history/ProfileInterviewHistory";
import ProfileRatingsList from "./components/ratings/ProfileRatingsList";
import { useEffect } from "react";
import { AuthContext } from "../../App";
import { useContext, useState } from "react";
import {
  getThreadsByUser,
  getFeedbackThreads,
} from "../../services/IntelliViewsService";
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
          const threadDataPromises = threadIds.map((threadId) =>
            getThreadById(threadId)
          );
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

  return (
    <div className="container" style={{ height: "auto" }}>
      <h2>Interview overview for {user.email}</h2>
      <div className="container__profile">
        <div className="card card__profile-info">
          <h2>Three latest ratings podium:</h2>
          <ProfileRatingsList feedbackThreads={feedbackThreads} />
        </div>
        <div className="card card__profile-info">
          <h2>Interview history:</h2>
          <ProfileInterviewHistory threads={threads} />
        </div>
      </div>
    </div>
  );
}
