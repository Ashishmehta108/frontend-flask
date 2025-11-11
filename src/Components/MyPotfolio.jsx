import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

export const MyPortfolio = () => {
  const { resumeData } = useContext(UserContext);


const projects = resumeData?.projects?.length > 0 
    ? resumeData.projects
    : resumeData.experiences.map(exp => ({
        title: exp.title + ' at ' + exp.company,
        description: exp.description,
      
      }));

  return (
    <section className="my-portfolio">
      <div>
        <div className="heading">
          <p>My Portfolio</p>
        </div>
        <h1>
          Review My <span>Latest</span> Projects
        </h1>

        <ul className="list" style={{display:"flex",  flexDirection:"column",alignItems:"center" ,fontSize:"30px",justifyContent:"space-between"}}>
          <li>All</li>
          <li>Branding</li>
          <li>Design</li>
          <li>Development</li>
          <li>Content Writing</li>
        </ul>
      </div>

  <div
  style={{
    display: "flex",
    gap: "24px",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    padding: "20px",
    width: "100%",
    margin: "60px auto",
    fontSize: "16px",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
  onWheel={(e) => {
    e.currentTarget.scrollLeft += e.deltaY * 0.5;
  }}
>
  {projects && projects.length > 0 ? (
    projects.map((project, index) => (
      <div
        key={index}
        style={{
          flex: "0 0 auto",
          width: "min(90vw, 380px)", // Responsive
          height: "420px",
          background:
            "white",
          borderRadius: "24px",
          scrollSnapAlign: "start",
          padding: "24px 20px",
        
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
        }}
     
      >
        
        <h3
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginBottom: "12px",
            color: "#6A0DAD",
            lineHeight: "1.3",
            whiteSpace: "normal",
            overflowWrap: "break-word",
            wordBreak: "break-word",
            maxWidth: "95%",
          }}
        >
          {project.name || "Untitled Project"}
        </h3>

      
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            width: "100%",
            paddingRight: "8px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.6",
              color: "#333",
              textAlign: "justify",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              margin: 0,
            }}
          >
            {project.description || "No description provided."}
          </p>
        </div>
      </div>
    ))
  ) : (
    <p
      style={{
        fontSize: "18px",
        color: "#888",
        margin: "auto",
        textAlign: "center",
      }}
    >
      No projects found.
    </p>
  )}
</div>


    </section>
  );
};
