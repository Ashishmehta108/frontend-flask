import { FaDiamond, FaWordpressSimple } from "react-icons/fa6";
import { PiStarFour } from "react-icons/pi";
import { IoRadioButtonOn } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

export const Card = ({ skill }) => {
  const title = skill?.title || "Skill Category";
  const items = Array.isArray(skill?.items) ? skill.items : [];

  return (
    <div className="card bg-white dark:bg-neutral-900 shadow-md rounded-2xl p-5 flex flex-col justify-between h-full transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      {/* --- Header Icons --- */}
      <div className="card-header relative flex justify-center items-center mb-4">
        <div className="card-icon flex justify-center items-center">
          <FaWordpressSimple size={50} color="#8C01DB" />
        </div>

        {/* floating icons for your design */}
        <div className="icon icon-style-1 absolute top-0 left-0">
          <PiStarFour color="#8C01DB" />
        </div>
        <div className="icon icon-style-2 absolute top-0 right-0">
          <FaDiamond color="#8C01DB" />
        </div>
        <div className="icon icon-style-3 absolute bottom-0 left-0">
          <IoRadioButtonOn color="#8C01DB" />
        </div>
        <div className="icon icon-style-4 absolute bottom-0 right-0">
          <AiOutlinePlus color="#8C01DB" />
        </div>
      </div>

      {/* --- Skill Title --- */}
      <h2 className="card-text text-xl font-semibold text-primary mb-2 text-center">
        {title}
      </h2>

      {/* --- Skill Items --- */}
      {items.length > 0 ? (
        <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1 text-left">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-neutral-500 text-center italic">
          No specific items listed.
        </p>
      )}
    </div>
  );
};
