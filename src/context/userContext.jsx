import { createContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {

  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadResume = async (file) => {
    if (!file) return;
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const response = await fetch("http://127.0.0.1:5000/genai-parse", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to parse resume");
      }

      const data = await response.json();
      console.log(data)
      setResumeData(data);
      console.log("Parsed resume data:", data);
    } catch (err) {
      console.error("Error uploading resume:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ resumeData, uploadResume, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
