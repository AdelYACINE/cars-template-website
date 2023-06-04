import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineUser,
} from "react-icons/ai";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 80) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  ///////////////////////////////////////////////////////////////////////////

  return (
    <div className={`navbar-container ${color ? "changecolor" : ""}`}>
      <div className="navbar-logo">Drive</div>
      <div className="navbar-menu">
        <ul className={`menu-list ${active ? "active" : ""}`}>
          <li>
            <a
              className={`link ${color ? "changelink" : ""}`}
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setActive(!active);
              }}
            >
              Learn more
            </a>
          </li>
          <li>
            <a
              className={`link ${color ? "changelink" : ""}`}
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setActive(!active);
              }}
            >
              Log in
            </a>
          </li>
          <li>
            <a
              className={`link ${color ? "changelink" : ""}`}
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setActive(!active);
              }}
            >
              Sign up
            </a>
          </li>
          <li>
            <AiOutlineSearch size={25} className="icon" />
          </li>
          <li>
            <AiOutlineUser size={25} className="icon" />
          </li>
        </ul>
      </div>

      <div className="mobile-btn-menu">
        {!active ? (
          <AiOutlineMenu
            size={25}
            onClick={() => setActive(!active)}
            className="icon"
          />
        ) : (
          <AiOutlineClose
            size={25}
            onClick={() => setActive(!active)}
            className="icon close"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
