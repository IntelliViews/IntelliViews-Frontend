import { useState } from "react";
import "./CheckList.css";
import CheckListComponentItem from "./CheckListComponentItem";

interface Feedback {
  Id: string;
  UserId: string;
  ThreadId: string;
  CreatedAt: number;
  Context: string;
  Score: number;
  Improvment: string[];
}

export default function CheckListComponent() {
  const [progress, setProgress] = useState(0); // Initialize progress state
  const [feedbacks, setFeedback] = useState<Feedback[]>([
    // Dummy data.:
    {
      Id: "testId1",
      UserId: "testUser1",
      ThreadId: "ThreadId1",
      CreatedAt: 1699017614,
      Context: "Test context1",
      Score: 1,
      Improvment: ["Test improvment 1", "Test improvment 2"],
    },
    {
      Id: "testId2",
      UserId: "testUser1",
      ThreadId: "ThreadId2",
      CreatedAt: 1699017614,
      Context: "Test context2",
      Score: 1,
      Improvment: ["Test improvment 3", "Test improvment 4", "Test"],
    },
  ]);

  // Calculate overall progress based on checked items
  const calculateProgress = (checked: boolean) => {
    const totalItems = feedbacks.reduce(
      (acc, feedback) => acc + feedback.Improvment.length,
      0
    );
    const checkedItems = checked ? 1 : -1;
    const newProgress = progress + (checkedItems / totalItems) * 100;
    setProgress(newProgress);
  };

  return (
    <div className="profile-interview-checklist">
      {feedbacks &&
        feedbacks.map((feedback, key) => (
          <ul className="rounded-0 m-0" key={key}>
            {feedback.Improvment.map((improvement, key) => (
              <CheckListComponentItem
                improvement={improvement}
                key={key}
                fnCheck={calculateProgress}
              />
            ))}
          </ul>
        ))}
      {/* Progress bar */}
      <div className="progress mt-3">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: `${progress}%` }}
          // aria-valuenow={progress}
          // aria-valuemin="0"
          // aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}
