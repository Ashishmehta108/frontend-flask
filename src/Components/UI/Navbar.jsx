import { BsTelephoneFill } from "react-icons/bs";
export const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="nav-logo"> MyPortfy </h1>
        <li className="nav-link">
          <ul className="navlink-items">Home</ul>
          <ul className="navlink-items">About Us</ul>
          <ul className="navlink-items">Services</ul>
          <ul className="navlink-items">Project</ul>
          <ul className="navlink-items">Blog</ul>
        </li>
        <button className="navbar-btn flex">
          <span>
            <BsTelephoneFill />
          </span>
          Let's Talk
        </button>
      </nav>
    </header>
  );
};
