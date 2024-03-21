import { useContext, useMemo, useState } from "react";
import ProfileIcon from "../../../common/profile-icon/ProfileIcon";
import { AuthContext } from "../../../../App";

export default function FeedbackForm() {
  const { userContext } = useContext(AuthContext)!;
  const [user] = userContext;
  const [ratingRange] = useState<number[]>([]);

  useMemo(() => {
    for (let i = 1; i <= 10; i++) {
      ratingRange.push(i);
    }
  }, [ratingRange]);

  return (
    <form action="" className="">
      {/* Feedback field */}
      <div className="field field-feedback m-3 my-4">
        <div className="d-flex flex-start w-100 gap-3">
          <ProfileIcon diameter={80} username={user.username} />
          <div className="form-outline w-100">
            <textarea
              className="form-control"
              id="textAreaExample"
              placeholder="Please write feedback to the user here!"
              rows={4}
            ></textarea>
          </div>
        </div>
      </div>

      {/* Score field */}
      <div className="field field-score m-3 ">
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
                  id={`radio-${value}`}
                  autoComplete="off"
                  checked
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
        <button type="button" className="btn btn-primary btn-sm">
          Submit
        </button>
        <button type="button" className="btn btn-outline-white btn-sm">
          Cancel
        </button>
      </div>
    </form>
  );
}
