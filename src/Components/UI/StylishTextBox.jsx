import { PiArrowCircleRightBold } from "react-icons/pi"


export const StylishTextBox = ({text}) => {
  return (
    <div className="stylish-text">
    <span><PiArrowCircleRightBold color="#FA614F" size={18} /> </span>
    <p>{text}</p>
    </div>
  )
}
