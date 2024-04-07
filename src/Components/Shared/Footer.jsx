import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer style={{ margin: "24px", textAlign: "center" }}>
        <p>
          All &copy; Copyright reserved by{" "}
          <Link to="https://shad-portfolio.web.app/">Shad</Link>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
