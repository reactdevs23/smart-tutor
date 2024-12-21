import React, { useState, useEffect } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
// import { logo, logo2 } from "../../images";
import { Button } from "../../components/common";

import clsx from "clsx";
import { logo } from "images";

const Navbar = ({ primitive950 }) => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { navItem: "How To Start", to: "/" },
    { navItem: "About", to: "/about" },
    { navItem: "Contact", to: "/contact" },
  ];

  return (
    <div
      className={clsx(
        primitive950 && classes.primitive950,
        classes.wrapper,
        isScrolled && classes.wrapperBg
      )}
    >
      <header className={clsx(classes.header, "container")}>
        <Link to="/" onClick={() => setSidebar((prev) => !prev)}>
          <img src={logo} alt="#" className={classes.logo} />
        </Link>
        <div className={clsx(classes.navItems, sidebar && classes.sidebar)}>
          {navItems.map((el, i) => (
            <NavLink
              key={i}
              to={el.to}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                isActive
                  ? clsx(classes.navItem, classes.navActive)
                  : classes.navItem
              }
            >
              {el.navItem}
            </NavLink>
          ))}
          <div className={classes.buttonContainer}>
            <Button primitive50 className={classes.button} to="/login">
              Login
            </Button>
            <Button btnPrimary className={classes.button} to="/sign-up">
              Sign up
            </Button>
          </div>
        </div>{" "}
        <div className={classes.iconContainer}>
          {sidebar ? (
            <IoMdClose
              className={classes.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          ) : (
            <AiOutlineAlignRight
              className={clsx(classes.icon, classes.hamburger)}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
