"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowUp, IoIosArrowDown, IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Button, Dropdown, Text } from "@/src/components/common";
import { authenticationImg, logo } from "@/src/images";
import clsx from "clsx";
import classes from "./Navbar.module.css";

const Navbar = () => {
  // Define user roles and set initial state
  const loginAs = "admin"; // This should be dynamically set based on user authentication
  const [sidebar, setSidebar] = useState(false); // Sidebar toggle state
  const [isScrolled, setIsScrolled] = useState(false); // Scroll state
  const [loggedIn, setLoggedIn] = useState(false); // Logged-in state
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown menu visibility state
  const pathname = usePathname(); // For tracking the current path for active nav items

  // Handle page scroll event to change navbar style
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 90); // Set navbar background when scrolled down
  };

  // Adding scroll event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define navigation items for each user role
  const adminNavItems = [
    { navItem: "Teachers", to: "/admin/teacher-list" },
    { navItem: "Students", to: "/admin/student-list" },
  ];

  const studentNavItems = [
    { navItem: "Dashboard", to: "/student-dashboard" },
    { navItem: "Teachers", to: "/teacher-list" },
  ];

  const teachersNavItems = [
    { navItem: "Dashboard", to: "/teacher-dashboard" },
    { navItem: "Students", to: "/student-list" },
  ];

  // Dynamically set the nav items based on user role
  const navItems =
    loginAs === "admin"
      ? adminNavItems
      : loginAs === "student"
      ? studentNavItems
      : loginAs === "teachers"
      ? teachersNavItems
      : [];

  return (
    <div
      className={clsx(
        classes.wrapper,
        isScrolled && classes.wrapperBg // Adding background on scroll
      )}
    >
      <header className={clsx(classes.header)}>
        {/* Logo Link */}
        <Link href="/" onClick={() => setSidebar((prev) => !prev)}>
          <img src={logo.src} alt="Logo" className={classes.logo} />
        </Link>

        {/* Navigation items */}
        <div className={clsx(classes.navItems, sidebar && classes.sidebar)}>
          {loggedIn &&
            navItems.map((el, i) => (
              <Link
                key={i}
                href={el.to}
                onClick={() => setSidebar(false)} // Close sidebar on navigation click
                className={clsx(
                  classes.navItem,
                  pathname === el.to && classes.navActive // Highlight active nav item
                )}
              >
                {el.navItem}
              </Link>
            ))}

          {/* User authentication section (login/logout) */}
          <div className={classes.buttonContainer}>
            {loggedIn ? (
              <Dropdown
                type2
                items={["Logout"]}
                isActive={showDropdown}
                setIsActive={setShowDropdown}
                onSelect={() => setLoggedIn(false)} // Handle logout action
              >
                <div className={classes.userContainer}>
                  <img
                    src={authenticationImg.src}
                    alt="User"
                    className={classes.userImg}
                  />
                  <div>
                    <Text sm font600>
                      Dalim Kumar
                    </Text>
                    <Text xs className={classes.loginAs}>
                      {loginAs} {/* Display role (admin, student, etc.) */}
                    </Text>
                  </div>
                  {showDropdown ? (
                    <IoIosArrowUp className={classes.upArrow} />
                  ) : (
                    <IoIosArrowDown className={classes.downArrow} />
                  )}
                </div>
              </Dropdown>
            ) : (
              <>
                {/* Login and Signup buttons */}
                <Button
                  btnPrimary={pathname === "/login"}
                  primitive50={pathname !== "/login"}
                  className={clsx(classes.button)}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  primitive50={pathname !== "/sign-up" && pathname === "/login"}
                  btnPrimary={pathname !== "/login"}
                  className={classes.button}
                  to="/sign-up"
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <div className={classes.iconContainer}>
          {sidebar ? (
            <IoMdClose
              className={classes.icon}
              onClick={() => setSidebar((prev) => !prev)} // Close sidebar
            />
          ) : (
            <AiOutlineAlignRight
              className={clsx(classes.icon, classes.hamburger)}
              onClick={() => setSidebar((prev) => !prev)} // Open sidebar
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
