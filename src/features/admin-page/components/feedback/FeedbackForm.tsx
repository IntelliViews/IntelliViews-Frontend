import { FormEvent, useContext, useMemo, useState } from "react";
import ProfileIcon from "../../../common/profile-icon/ProfileIcon";
import { AuthContext } from "../../../../App";
import { postFeedback } from "../../../../services/IntelliViewsService";
import { AdminContext } from "../../AdminPage";

export default function FeedbackForm() {
  const { userContext } = useContext(AuthContext)!;
  const { selectedUser, selectedThread } = useContext(AdminContext)!;
  const [user] = userContext;
  const [ratingRange] = useState<number[]>([]);
  const [rating, setRating] = useState(1);
  const [context, setContext] = useState("");

  useMemo(() => {
    for (let i = 1; i <= 10; i++) {
      ratingRange.push(i);
    }
  }, [ratingRange]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const feedback = {
      userId: selectedUser.id,
      threadId: selectedThread.id,
      context: context,
      score: rating,
    };
    postFeedback(feedback);
    setRating(1);
    setContext("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="">
      {/* Feedback field */}
      <div className="field field-feedback m-3 my-4">
        <div className="d-flex flex-start w-100 gap-3">
          <ProfileIcon diameter={80} username={user.username} />
          <div className="form-outline w-100">
            <textarea
              className="form-control"
              id="textAreaExample"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Please write feedback to the user here!"
              rows={4}
            ></textarea>
          </div>
        </div>
      </div>

      {/* Score field */}
      <div className="field field-score">
        <h4>Select score</h4>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group me-2" role="group" aria-label="First group">
            {ratingRange.map((value) => (
              <>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  key={`radio-${value}`}
                  id={`radio-${value}`}
                  autoComplete="off"
                  checked={value === rating}
                  onChange={() => setRating(value)}
                />
                <label
                  className="btn btn-outline-primary"
                  style={{ color: "white" }}
                  htmlFor={`radio-${value}`}
                >
                  {value}
                </label>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="float-end mt-2 pt-1">
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
        <button type="button" className="btn btn-outline-white btn-sm">
          Cancel
        </button>
      </div>
    </form>
  );
}
