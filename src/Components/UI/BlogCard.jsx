import { FaArrowCircleRight } from "react-icons/fa"; 
export const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-img"></div>
      <div className="blog-footer">
        <div className="footer-text">
          <p>Website</p>
          <h3>Lorem ipsum dolor sit amet</h3>
        </div>
        <FaArrowCircleRight color="#8C01DB" />
      </div>
    </div>
  );
};
