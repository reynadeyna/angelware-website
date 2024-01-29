import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    controls.start(menuOpen ? "hidden" : "visible");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    controls.start("hidden");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar text-white p-4 fixed w-full top-0 flex justify-center">
        <img
          src="/Icon1.svg"
          alt="Menu Icon"
          className={`cursor-pointer z-40 h-20 w-20 mt-8 ${
            menuOpen ? "rotate-180" : "rotate-0"
          } animate-spin ${menuOpen ? "" : "explore"} hover:animate`}
          onClick={toggleMenu}
          style={{
            filter: `brightness(0) contrast(1.2) saturate(7) ${
              menuOpen ? "invert(1) contrast(1) brightness(1)" : ""
            }`,
            opacity: 0.7,
          }}
        />
      </nav>

      {/* Overlay content */}
      <div
        className={`fixed inset-0 bg-black opacity-80 z-40 ${
          menuOpen ? "" : "hidden"
        }`}
        onClick={closeMenu}
      ></div>
      <motion.div
        className={`fixed inset-0 z-40 flex items-center justify-center ${
          menuOpen ? "" : "hidden"
        }`}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        <div className=" p-8 w-full h-full flex items-center justify-center mt-16">
          <motion.ul
            className="flex flex-col items-center gap-11 mt-10"
            initial="hidden"
            animate={menuOpen ? "visible" : "hidden"}
            exit="exit"
            variants={variants}
          >
            <motion.li
              className="text-white border rounded-full px-16 py-2"
              variants={variants}
            >
              <Link onClick={closeMenu} to="/" className="text-white">
                {" "}
                Home{" "}
              </Link>
            </motion.li>
            <motion.li
              className="text-white border rounded-full px-16 py-2"
              variants={variants}
            >
              <Link onClick={closeMenu} to="/about" className="text-white">
                About
              </Link>
            </motion.li>
            <motion.li
              className="text-white border rounded-full px-10 py-2"
              variants={variants}
            >
              <Link onClick={closeMenu} to="/delufesto" className="text-white">
                Delufesto
              </Link>
            </motion.li>
            <motion.li
              className="text-white border rounded-full px-16 py-2"
              variants={variants}
            >
              <Link onClick={closeMenu} to="/music" className="text-white">
                Music
              </Link>
            </motion.li>
            <motion.li
              className="text-white border rounded-full px-14 py-2"
              variants={variants}
            >
              <Link onClick={closeMenu} to="/ama" className="text-white">
                Ask me
              </Link>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
