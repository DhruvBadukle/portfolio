import {useState} from "react";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import { motion } from "framer-motion";


// Navigation Component
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="/">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#project">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<div className="fixed inset-x-0 top-[-8px] z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-6">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Dhruv Badukle
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden focus:outline-none"
            aria-label="Toggle navigation"
          >
            <img
              src={isOpen ? closeIcon : menuIcon}
              alt={isOpen ? "Close menu" : "Open menu"}
              className="w-6 h-6 text-neutral-400 hover:text-white"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="sm:hidden overflow-hidden text-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
