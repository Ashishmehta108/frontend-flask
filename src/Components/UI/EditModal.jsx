import { useState } from "react";
import { updateSectionApiCall } from "../../Api/Api";

export const EditModal = ({ initialText, editText, modeClose }) => {
  const [text, setText] = useState(initialText);
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      component: "P",
      field: "text",
      value: text,
    };
    const res =await updateSectionApiCall(data);
    console.log(res)
    if (res.status===200) {
      editText(text);
      modeClose();
    }
  };
  return (
    <div className="modal ">
      <div className="modal-content modal2">
        <div>
          <h1>Inline Editing</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-box2">
            <label htmlFor="edit-text">Edit Content</label>
            <textarea
              id="edit-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ width: "100%", minHeight: "100px" }}
            ></textarea>
          </div>
          <div className="modal-btn-box">
            <button type="submit" className="modal-btn orange">
              Save Button
            </button>
            <button type="button" className="modal-btn red">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
