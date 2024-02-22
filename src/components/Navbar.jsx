import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeLinkClass = "text-yellow-400"; // Define reusable active link class
  const defaultLinkClass = "text-red-700 hover:text-yellow-500"; // Define reusable default link class

  return (
    <nav className="bg-black bg-opacity-20 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h2
          className="SanskritiFont bg-gradient-to-r bg-clip-text text-transparent 
          from-red-700 to-red-600
          animate-text font-extrabold text-5xl flex items-center space-x-3 rtl:space-x-reverse"
        >
          Sanskriti
        </h2>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-700 rounded-lg md:hidden focus:outline-none"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen} // Conditional aria-expanded for accessibility
        >
          <span className="sr-only">
            {isMenuOpen ? "Close main menu" : "Open main menu"}
          </span>
          {!isMenuOpen ? ( // Show hamburger icon when menu is closed
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 9a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0-8a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            // Show cross icon when menu is open
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        <div
          className={`items-center justify-end w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li className="ProgressFont cursor-pointer">
              <a
                href="#home"
                className={`${defaultLinkClass} px-3 py-2 rounded ${
                  isMenuOpen ? activeLinkClass : ""
                }`} /* Apply activeLinkClass conditionally */
                aria-current="page" // Set aria-current for active link
              >
                Home
              </a>
            </li>
            <li className="ProgressFont cursor-pointer">
              <a
                href="#about"
                className={`${defaultLinkClass} px-3 py-2 rounded`}
              >
                About
              </a>
            </li>
            {/* <li className="ProgressFont cursor-pointer">
              <a
                href="#performance"
                className={`${defaultLinkClass} px-3 py-2 rounded`}
              >
                Performances
              </a>
            </li> */}
            <li className="ProgressFont cursor-pointer">
              <a
                href="#timeline"
                className={`${defaultLinkClass} px-3 py-2 rounded`}
              >
                Timeline
              </a>
            </li>
            {/* <li className="ProgressFont cursor-pointer">
              <a
                href="#event"
                className={`${defaultLinkClass} px-3 py-2 rounded`}
              >
                Events
              </a>
            </li> */}
            <li className="ProgressFont cursor-pointer">
              <a
                href="#gallery"
                className={`${defaultLinkClass} px-3 py-2 rounded`}
              >
                Gallery
              </a>
            </li>
            <li className="ProgressFont cursor-pointer">
              <a
                href="#contact"
                className={`${defaultLinkClass} px-3 py-2 rounded`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
