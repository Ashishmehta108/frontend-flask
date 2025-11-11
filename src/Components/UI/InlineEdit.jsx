import { useState } from "react";
import { EditModal } from "./EditModal";

export const InlineEdit = ({ initialText, editText }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOnClick = () => {
    setOpenModal(() => !openModal);
  };
  return (
    <div className="inline-edit">
      <button onClick={handleOnClick} className="inline-edit-btn ">
        Edit
      </button>
      {openModal && <EditModal initialText={initialText} editText={editText}  modeClose={handleOnClick} />}
    </div>
  );
};
