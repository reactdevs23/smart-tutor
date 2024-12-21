import React from "react";
import classes from "./Footer.module.css";
import clsx from "clsx";
import { Text } from "components/common";
import { TbBrandTelegram } from "react-icons/tb";

import {
  RiDiscordLine,
  RiTwitterXFill,
  RiFacebookBoxLine,
  RiTiktokLine,
  RiInstagramLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

import CopyrightContainer from "Layout/CopyrightContainer/CopyrightContainer";

const Footer = () => {
  const socialMedia = [
    {
      icon: <RiDiscordLine className={classes.icon} />,

      to: "#",
    },
    {
      icon: <RiTwitterXFill className={classes.icon} />,

      to: "#",
    },
    {
      icon: <TbBrandTelegram className={classes.icon} />,

      to: "#",
    },
    {
      icon: <RiTiktokLine className={classes.icon} />,

      to: "#",
    },
    {
      icon: <RiFacebookBoxLine className={classes.icon} />,

      to: "#",
    },
    {
      icon: <RiInstagramLine className={classes.icon} />,

      to: "#",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <footer className={clsx(classes.container, "container")}>
        <div className={classes.infoContainer}>
          <Text primitive300 xl>
            Whether you're a seasoned investor or just starting, our flexible
            deposit plans are designed to help you grow your wealth.
          </Text>

          <div className={classes.socialContainer}>
            {socialMedia.map((el, i) => (
              <a
                href={el.to}
                target="_blank"
                rel="noreferrer"
                key={i}
                className={classes.social}
              >
                {el.icon}
              </a>
            ))}
          </div>
        </div>
        <div className={classes.itemsContainer}>
          <Link to="/" className={classes.link}>
            About Us
          </Link>
          <Link to="/" className={classes.link}>
            How To Start
          </Link>
          <Link to="/" className={classes.link}>
            Get Membership
          </Link>{" "}
          <Link to="/" className={classes.link}>
            Contact
          </Link>
        </div>
        <div className={classes.itemsContainer}>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Risk Disclosure
          </a>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Anti Spam Policy
          </a>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Anti Money Launderi
          </a>{" "}
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Placement of Statemen
          </a>
        </div>
        <div className={clsx(classes.infoContainer, classes.addressContainer)}>
          <div>
            <a
              href="tel:+1 234 567 890"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              +1 234 567 890
            </a>
            <a
              href="mailto: hello@brandname.com"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              hello@brandname.com
            </a>
          </div>
          <p className={classes.link}>
            1077 Main St, Holbrook, North Dakota, US - 11741
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
