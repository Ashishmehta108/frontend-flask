import {ShadowText }from "../Components/UI/ShadowText"
import { BlogCard } from "./UI/BlogCard";
export const Blog = () => {
  return (
    <div className="blog-section">
      <div className="blog-header">
        <div className="blog-heading">
          <h1>
            Blog <ShadowText text={"About"}/>
          </h1>
          <div>Personal Portfolio</div>
        </div>
        <div className="blog-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
          <button className="blog-btn">View All Blog</button>
        </div>
      </div>
        <div className="Allblogs">
          <div className="blog-container"> 
              <BlogCard/>     
          </div>
          <div className="blog-container2"> 
              <BlogCard/>     
              <BlogCard/>     
          </div>
          
        </div>
        <div className="glow">
          <div className=".glow-box">

          </div>
        </div>
    </div>
  );
};
