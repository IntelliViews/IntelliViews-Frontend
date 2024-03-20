import { useState } from "react";
import "./CheckList.css"
import CheckListComponentItem from "./CheckListComponentItem";

interface Feedback {
    Id: string,
    UserId: string,
    ThreadId: string,
    CreatedAt: number,
    Context: string,
    Score: number,
    Improvment: string[]
}



export default function CheckListComponent() {
    const [feedbacks, setFeedback] = useState<Feedback[]>([
        // Dummy data.:
        {
        Id: "testId1",
        UserId: "testUser1",
        ThreadId: "ThreadId1",
        CreatedAt: 1699017614,
        Context: "Test context1",
        Score: 1,
        Improvment: ["Test improvment 1", "Test improvment 2"]
        },
        {
            Id: "testId2",
            UserId: "testUser1",
            ThreadId: "ThreadId2",
            CreatedAt: 1699017614,
            Context: "Test context2",
            Score: 1,
            Improvment: ["Test improvment 3", "Test improvment 4"]
            }
    ]);


  return (
    <div className='container profile-interview-checklist'>
         {feedbacks && feedbacks.map((feedback, key) => (
              <ul className="list-group rounded-0 m-0" key={key}>
                {feedback.Improvment.map((improvement, key) => (
                    <CheckListComponentItem improvement={improvement} key={key} />
                ))}
              </ul>
          ))}

    </div>
  )
}
