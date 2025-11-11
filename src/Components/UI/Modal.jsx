import { useState } from "react";

export const Modal = ({ modeClose, onSave, defaultConfig }) => {
  const [buttonStyle, setButtonStyle] = useState(defaultConfig.style);
  const [buttonText, setButtonText] = useState(defaultConfig.text);
  const [buttonColor, setButtonColor] = useState(defaultConfig.color);
  const [buttonSize, setButtonSize] = useState(defaultConfig.size);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      style: buttonStyle,
      text: buttonText,
      color: buttonColor,
      size: buttonSize
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <h1>Link Button to page or URL</h1>
          <p>You can select any specific page or page URL</p>
        </div>

        <form className="form-modal" onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Button Style</label>
            <select value={buttonStyle} onChange={(e) => setButtonStyle(e.target.value)}>
              <option value="filled">Filled</option>
              <option value="outlined">Outlined</option>
            </select>
          </div>

          <div className="input-box">
            <label>Button Text</label>
            <input type="text" value={buttonText} onChange={(e) => setButtonText(e.target.value)} />
          </div>

          <div className="input-box">
            <label>Button Color</label>
            <input type="color" value={buttonColor} onChange={(e) => setButtonColor(e.target.value)} />
          </div>

          <div className="input-box">
            <label>Button Size</label>
            <select value={buttonSize} onChange={(e) => setButtonSize(e.target.value)}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div className="modal-btn-box">
            <button type="submit" className="modal-btn orange">Save Button</button>
            <button onClick={modeClose} type="button" className="modal-btn red">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};
