import React, { useState } from "react";
import logo from "../assets/logo_dark.png";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0,
        staggerDirection: 1,
      },
    },
  };
  return (
    <section id="start">
      <div className="flex items-center h-20 p-default">
        <a href="/">
          <img className="w-32" src={logo} alt="BAKU enterprise"></img>
        </a>
        <nav className="nav-menu hidden md:flex items-center ml-auto gap-8">
          <AnchorLink href="#about">About us</AnchorLink>
          <AnchorLink href="#services">Services</AnchorLink>
          <AnchorLink href="#contacts">Contact</AnchorLink>
        </nav>
        {toggleMenu ? (
          <img
            className="w-10 ml-auto cursor-pointer md:hidden"
            src={menu_close}
            onClick={() => setToggleMenu(false)}
            alt="Close menu"
          ></img>
        ) : (
          <img
            className="w-10 ml-auto cursor-pointer md:hidden"
            src={menu_open}
            alt="Menu"
            onClick={() => setToggleMenu(true)}
          ></img>
        )}
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%", maxWidth: "100%" }}
              className="absolute w-full h-[100vh] top-0 right-0 bg-white py-4 px-8 z-50"
            >
              <motion.div className="flex justify-end">
                <img
                  className="w-10 ml-auto cursor-pointer md:hidden"
                  src={menu_close}
                  onClick={() => setToggleMenu(false)}
                  alt="Close menu"
                ></img>
              </motion.div>
              <motion.h1 className="my-12 text-center text-th-primary font-medium">Menu</motion.h1>
              <motion.div
                className="header-nav-burger flex flex-col items-center mt-8"
                initial="closed"
                animate="open"
                variants={sideVariants}
              >
                <AnchorLink href="#about" onClick={() => setToggleMenu(false)}>
                  About us
                </AnchorLink>
                <motion.div className="my-8 border-b-2 border-th-primary w-full"></motion.div>
                <AnchorLink
                  href="#services"
                  onClick={() => setToggleMenu(false)}
                >
                  Services
                </AnchorLink>
                <motion.div className="my-8 border-b-2 border-th-primary w-full"></motion.div>
                <AnchorLink
                  href="#contacts"
                  onClick={() => setToggleMenu(false)}
                >
                  Contact
                </AnchorLink>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Navbar;
