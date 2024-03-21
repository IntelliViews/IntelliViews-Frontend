import React from "react";
import ProfileIcon from "../../../common/profile-icon/ProfileIcon";

export default function FeedbackForm() {
  //TODO1: implement submit logic
  //TODO2: Post the data
  return (
    <form action="" className=" ">
      {/* Feedback field */}
      <div className="field field-feedback m-3 my-4">
        <div className="d-flex flex-start w-100 gap-3">
          <ProfileIcon diameter={80} username="Username" />
          <div className="form-outline w-100">
            <textarea
              className="form-control"
              id="textAreaExample"
              placeholder="Please write feedback to the user here!"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Improvement points field */}
      <div className="field field-improvment m-3 my-4 ">
        <h4> Specify 1 - 3 points that user can improve!</h4>
        <form id="improvement-point-form ">
          <div className="input-group mb-3 ">
            <input
              type="text"
              className="form-control"
              id="form-input"
              placeholder="Add new improvement point"
              required
            ></input>

            <input
              type="text"
              className="form-control"
              id="form-input1"
              placeholder="Add new improvement point"
            ></input>

            <input
              type="text"
              className="form-control"
              id="form-input3"
              placeholder="Add new improvement point"
            ></input>
          </div>
        </form>
      </div>

      {/* Score field */}
      <div className="field field-score m-3 ">
        <h4> Select score</h4>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group me-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-info">
              1
            </button>
            <button type="button" className="btn btn-primary">
              2
            </button>
            <button type="button" className="btn btn-primary">
              3
            </button>
            <button type="button" className="btn btn-primary">
              4
            </button>
            <button type="button" className="btn btn-primary">
              5
            </button>
            <button type="button" className="btn btn-primary">
              6
            </button>
            <button type="button" className="btn btn-primary">
              7
            </button>
            <button type="button" className="btn btn-primary">
              8
            </button>
            <button type="button" className="btn btn-primary">
              9
            </button>
            <button type="button" className="btn btn-info">
              10
            </button>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="float-end mt-2 pt-1">
        <button type="button" className="btn btn-primary btn-sm">
          Submit feedback!
        </button>
        <button type="button" className="btn btn-outline-white btn-sm">
          Cancel
        </button>
      </div>
    </form>
  );
}
