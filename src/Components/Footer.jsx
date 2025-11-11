import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";

const socialIcons = [
  { icon: <FaFacebookF /> },
  { icon: <FiInstagram /> },
  { icon: <FaXTwitter /> },
  { icon: <TbWorld /> },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <div className="footer-box"></div>
        <div className="footer-box-text">
          <h1>Have Any Projects in Mind? Get in Touch</h1>
          <button>Explore More</button>
        </div>
      </div>

      <div className="line"></div>

      <div className="footer-bottom">
        <p>Crafted With Care Myportfy@2025</p>
        <div className="social-icons">
          {socialIcons.map((curr, index) => (
            <div key={index} className="round-icons">
              {curr.icon}
            </div>
          ))}
        </div>
        <div className="footer-links">
          <a href="">Terms & Condition</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
