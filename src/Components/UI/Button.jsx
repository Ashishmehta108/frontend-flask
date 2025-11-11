import { useState } from "react";
import { Modal } from "./Modal";
import { updateSectionApiCall } from "../../Api/Api";

export const Button = () => {
  const [openModal, setOpenModal] = useState(false);

  // Button default
  const [buttonConfig, setButtonConfig] = useState({
    style: "filled",
    text: "+ Add Button",
    color: "#ff5722",
    size: "medium",
  });

  const handleOnClick = () => {
    setOpenModal(!openModal);
  };

  const handleSave = (newConfig) => {
    setButtonConfig(newConfig);
    const data = {
      component: "Button",
      field: "color",
      value: newConfig.color,
    };
    updateSectionApiCall(data);
    setOpenModal(false);
  };

  return (
    <>
      <button
        onClick={handleOnClick}
        className={`add-btn ${buttonConfig.style} ${buttonConfig.size}`}
        style={{
          color:
            buttonConfig.style === "outlined" ? buttonConfig.color : "#fff",
          borderColor: buttonConfig.color,
          backgroundColor:
            buttonConfig.style === "filled"
              ? buttonConfig.color
              : "transparent",
        }}
      >
        {buttonConfig.text}
      </button>

      {openModal && (
        <Modal
          modeClose={handleOnClick}
          onSave={handleSave}
          defaultConfig={buttonConfig}
        />
      )}
    </>
  );
};
