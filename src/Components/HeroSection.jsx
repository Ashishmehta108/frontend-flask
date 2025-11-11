import {Button} from "./UI/Button"
import { LuDiamond, LuPentagon } from "react-icons/lu";
import { TildArrow } from "./UI/TildArrow";
import { HalfCircle } from "./UI/HalfCircle";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
export const HeroSection = () => {
   const { resumeData } = useContext(UserContext);

  return (
    <section className="herosection container">
      <div className="name-box">
        <h1>
          HELLO i <span>'</span>M <span>&#128075;</span>
          <div>{resumeData.name}</div>
        </h1>
      <div style={{
        width:"320px"
      }}>
          {resumeData.description}
        </div>
        <div>
          <button className="btn">
            How i,Work{" "}
            <span>
              <img src="./arrow.png" alt="" />
            </span>
          </button>
        </div>
      </div>
      <div className="img-container">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/558/262/non_2x/businessman-isolated-illustration-ai-generative-free-png.png
         "
          alt=""
        />
      </div>
      <div className="icon-1">
        <LuPentagon color={"#8C01DB"} size={35} />
      </div>
      <div className="icon-2">
        <LuDiamond color={"#8C01DB"} size={35} />
      </div>
      <div className="icon-3">
        <TildArrow/>
      </div>
      <div className="icon-4">
        <HalfCircle/>
      </div>
      <Button/>
    </section>
  );
};
