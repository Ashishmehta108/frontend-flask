import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { AboutUs } from "../Components/AboutUs";
import { Blog } from "../Components/Blog";
import { ContactUs } from "../Components/ContactUs";
import { Footer } from "../Components/Footer";
import { HeroSection } from "../Components/HeroSection";
import { LogoSection } from "../Components/LogoSection";
import { MyExpertAreas } from "../Components/MyExpertAreas";
import { MyPortfolio } from "../Components/MyPotfolio";
import { Testimonial } from "../Components/Testimonial";
import { Navbar } from "../Components/UI/Navbar";

export const Home = () => {
  const { resumeData, uploadResume, loading, error } = useContext(UserContext);
  const [file, setFile] = useState(null);


  if (!resumeData) {
    return (
      <div className={"bg-neutral-900 text-white min-h-screen"} style={{ padding: "2rem", textAlign: "center" }}>
        <h2 className="text-white">Upload your resume to access the homepage</h2>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ margin: "1rem 0" }}
        />
        <br />
        <button
          onClick={() => uploadResume(file)}
          disabled={loading || !file}
          className={"bg-indigo-700 cursor-pointer text-white px-4 py-2 rounded"}
        >
          {loading ? "Uploading..." : "Upload Resume"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}


      </div>
    );
  }

  return (
    <div className={"bg-neutral-900 text-white"}>
      <Navbar />
      <HeroSection  />
      <LogoSection  />
      <AboutUs  />
      <MyExpertAreas  />
      <MyPortfolio  />
      {/* <Testimonial  /> */}
      {/* <Blog /> */}
      <ContactUs  />
      <Footer  />
    </div>
  );
};
