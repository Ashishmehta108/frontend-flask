import { Arrow } from "./UI/Arrow";
import { LeftArrow } from "./UI/LeftArrow";
import { Card } from "./UI/Card";
import { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../context/userContext";

export const MyExpertAreas = () => {
  const { resumeData } = useContext(UserContext);
  const cardData = resumeData.skills.map(skillCategory => ({
    title: skillCategory.category,
    items: skillCategory.items
  }));
  const scrollRef = useRef(null);
  const [scrollState, setScrollState] = useState({
    scrollLeft: 0,
    maxScroll: 0,
  });

  useEffect(() => {
    const updateScrollState = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setScrollState({
          scrollLeft,
          maxScroll: scrollWidth - clientWidth,
        });
      }
    };

    const container = scrollRef.current;
    if (container) {
      updateScrollState();
      container.addEventListener("scroll", updateScrollState);
      window.addEventListener("resize", updateScrollState);
    }

    return () => {
      if (container) container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const next = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  const prev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="myexpertArea">
      <div className="heading-box">
        <h1>
          My Expert <span>Areas</span>
        </h1>
        <p>
          "Express Yourself Freely And Creatively, Using Customizable Templates
          Or Crafting Your Own Designs "
        </p>
        <p>From Scratch, With Access To A Vast And Immersive Library.</p>
      </div>

      <div
        ref={scrollRef}
        className="carousel-container"
      >
        <div className="carousel-track">
           {cardData.length > 0 ? (
            cardData.map((skill, index) => (
              <div
                key={index}
                className="carousel-item"
                style={{ minWidth: "250px" }}
              >
                <Card skill={skill} />
              </div>
            ))
          ) : (
            <p style={{ padding: "1rem" }}>No skills detected from your resume.</p>
          )}
        </div>
      </div>

      <button
        className="left-arrow"
        onClick={prev}
        disabled={scrollState.scrollLeft === 0}
      >
        <LeftArrow
          color={scrollState.scrollLeft === 0 ? "#ccc" : "#8C01DB"}
          height={66}
          width={76}
        />
      </button>

      <button
        className="right-arrow"
        onClick={next}
        disabled={scrollState.scrollLeft >= scrollState.maxScroll}
      >
        <Arrow
          color={
            scrollState.scrollLeft >= scrollState.maxScroll ? "#ccc" : "#8C01DB"
          }
          height={66}
          width={76}
        />
      </button>

      <div className="triangle"></div>
    </section>
  );
};
