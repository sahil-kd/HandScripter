import "./Menu.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/MenuRounded";
import MenuIcon2 from "@mui/icons-material/MenuOpenRounded";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import ServicesIcon from "@mui/icons-material/Handshake";
import SettingsIcon from "@mui/icons-material/Settings";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PlayIcon from "@mui/icons-material/PlayArrow";
import BugIcon from "@mui/icons-material/BugReportOutlined";
import LockIcon from "@mui/icons-material/Lock";
import ContractIcon from "@mui/icons-material/Pages";

export default function Menu() {
  const [isCollapsed, setisCollapsed] = useState(true);
  const isMouseInMenuContainer = useRef(false);
  const linkStyle = {
    textDecoration: "none", // Disable underline
    color: "inherit",
  };
  return (
    <>
      <button
        className="main-menu"
        onMouseEnter={() => {
          setisCollapsed(false);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            if (isCollapsed === false && isMouseInMenuContainer.current === false) setisCollapsed(true);
          }, 125);
        }}
        style={isCollapsed ? {} : { border: "0.125rem solid whitesmoke", boxShadow: "0 0 0.4rem whitesmoke" }}
      >
        {isCollapsed ? <MenuIcon fontSize="medium" /> : <MenuIcon2 fontSize="medium" />}
      </button>
      <nav
        className="menu-container"
        onMouseEnter={() => {
          isMouseInMenuContainer.current = true;
        }}
        onMouseLeave={() => {
          setisCollapsed(true);
          isMouseInMenuContainer.current = false;
        }}
        style={
          isCollapsed
            ? { opacity: 0, pointerEvents: "none" }
            : { opacity: 1, transform: "translateY(0)", pointerEvents: "auto" }
        }
      >
        {/* I used <Link> components instead of <li> tags due to CSS style conflicts between the two,
        and does not negatively impact SEO */}
        <ul className="menu">
          <Link to="/" style={linkStyle} className="menu-item">
            <HomeIcon fontSize="large" />
            &nbsp;Home
          </Link>
          <Link to="/About" style={linkStyle} className="menu-item">
            <InfoIcon fontSize="large" />
            &nbsp;About
          </Link>
          <Link to="/Contact" style={linkStyle} className="menu-item">
            <EmailIcon fontSize="large" />
            &nbsp;Contact
          </Link>
          <Link to="/Services" style={linkStyle} className="menu-item">
            <ServicesIcon fontSize="large" />
            &nbsp;Services
          </Link>
          <Link to="/Settings" style={linkStyle} className="menu-item">
            <SettingsIcon fontSize="large" />
            &nbsp;Settings
          </Link>
          <Link to="/FAQs" style={linkStyle} className="menu-item">
            <LightbulbIcon fontSize="large" />
            &nbsp;FAQs
          </Link>
          <Link to="/How-it-works" style={linkStyle} className="menu-item">
            <PlayIcon fontSize="large" />
            &nbsp;How it works
          </Link>
          <Link to="/Report-issues" style={linkStyle} className="menu-item">
            <BugIcon fontSize="large" />
            &nbsp;Report Issues
          </Link>
          <Link to="/Privacy-policy" style={linkStyle} className="menu-item">
            <LockIcon fontSize="large" />
            &nbsp;Privacy Policy
          </Link>
          <Link to="/Terms-of-service" style={linkStyle} className="menu-item">
            <ContractIcon fontSize="large" />
            &nbsp;Terms of Service
          </Link>
        </ul>
      </nav>
    </>
  );
}
