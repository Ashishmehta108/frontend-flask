import { ShadowText } from "./UI/ShadowText";
import { LeftArrow } from "./UI/LeftArrow";
import { Arrow } from "./UI/Arrow";
import { IoRadioButtonOnSharp } from "react-icons/io5";
import { StarRating } from "./UI/StarRating";
import { useRef, useState } from "react";
import { InlineEdit } from "./UI/InlineEdit";

export const Testimonial = () => {
  const [isHover, SetIsHover] = useState(false);
  const [editText, SetEditText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Nullam rutrum placerat urna, sit amet efficitur nulla efficitur ut. Donec nec urna eu justo fermentum consequat."
  );
  const pRef = useRef(null);
  const handleMouseOver = () => {
    SetIsHover(true);
  };
  const handleMouseOut = () => {
    SetIsHover(false);
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-heading">
        <p>Testimonial</p>
        <h1>
          What My <ShadowText text={"Clients"} /> Say
        </h1>
      </div>
      <div className="testimonial-box">
        <div className="testimonial-text-box">
          <div>
            <h1>Leslie Alexander</h1>
            <StarRating rate={4} />
          </div>
          <div
            ref={pRef}
            style={{ position: "relative" }}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            {editText}
            {isHover && <InlineEdit initialText={editText} editText={SetEditText} />}
          </div>

          {/* inline Edit */}

          <div className="flex arrow-box">
            <div className="left-arrow2 ">
              <LeftArrow width={50} height={40} />
            </div>
            <div>
              <IoRadioButtonOnSharp />
              <IoRadioButtonOnSharp />
              <IoRadioButtonOnSharp />
            </div>
            <div className="right-arrow2">
              <Arrow width={50} height={40} />
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="long-card"></div>
          <div className="short-card"></div>
          <div className="short-card"></div>
        </div>
      </div>
    </div>
  );
};
