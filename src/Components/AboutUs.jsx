import { MdDownloading } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { StylishTextBox } from "./UI/StylishTextBox";

export const AboutUs = () => {
  const { resumeData } = useContext(UserContext);

  if (!resumeData)
    return (
      <div className="aboutUs-section flex justify-center items-center py-10">
        <p className="text-neutral-500">Loading resume data...</p>
      </div>
    );

  const name = resumeData.name || "User";
  const description = resumeData.description || "";
  const summary = resumeData.summary || "";
  const college =
    resumeData.education?.[0]?.institution ||
    "Sri Guru Teg Bahadur Khalsa College";
  const location = resumeData.education?.[0]?.location || "Anandpur Sahib, Punjab";
  const degree = resumeData.education?.[0]?.degree || "BCA Student";

  const experienceCount = resumeData.experiences?.length || 0;
  const yearsOfExperience = experienceCount > 0 ? `${experienceCount}+` : "0";

  const textBoxes = [
    "Avoid These Mistakes",
    "Your New Venture",
    "New Fonts",
    "Beyond the Norm",
    "Forge Destiny",
    "Dare to be Different",
  ];

  return (
    <div className="aboutUs-section py-16 px-6 md:px-12 lg:px-24 bg-white dark:bg-neutral-950">
      <div className="aboutUs flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* --- Left Image Section --- */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="aboutus-img relative">
            <div className="about-box-1 absolute top-4 left-4 bg-primary text-white rounded-xl p-4 shadow-md">
              <p className="text-2xl font-bold">{yearsOfExperience}</p>
              <div className="text-sm">Years of Experience</div>
            </div>

            <div className="about-box-2 absolute bottom-4 right-4 flex flex-col gap-1">
              {[...Array(5)].map((_, i) => (
                <IoIosArrowUp key={i} size={24} color="#8C01DB" />
              ))}
            </div>
          </div>
        </div>

        {/* --- Right Content Section --- */}
        <div className="about w-full md:w-1/2 space-y-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-primary">
              About {name.split(" ")[0]}
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 leading-snug">
              “Crafting enjoyable <span className="text-primary">digital</span> solutions from
              business ideas.”
            </h1>

            <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
              {description}
            </p>

            {summary && (
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 italic">
                {summary}
              </p>
            )}
          </div>

          {/* --- Education Info --- */}
          <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
              🎓 {degree}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {college}, {location}
            </p>
          </div>

          {/* --- Stylish Buttons --- */}
          <div className="flex flex-wrap gap-3 mt-6">
            {textBoxes.map((curr, index) => (
              <StylishTextBox text={curr} key={index} />
            ))}

            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition-all">
              <MdDownloading size={18} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
