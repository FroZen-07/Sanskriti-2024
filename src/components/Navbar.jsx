import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeLinkClass = "text-yellow-500"; // Define reusable active link class
  const defaultLinkClass = "text-red-500 hover:text-yellow-500"; // Define reusable default link class

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h2
          className="SanskritiFont bg-gradient-to-r bg-clip-text text-transparent 
            from-red-500 to-yellow-500
            animate-text font-extrabold text-5xl flex items-center space-x-3 rtl:space-x-reverse"
        >
          Sanskriti
        </h2>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-500 rounded-lg md:hidden focus:outline-none"
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {[
              "Home",
              "About",
              "Performances",
              "Timeline",
              "Events",
              "Gallery",
              "Contact",
            ].map((item, index) => (
              <li key={index} className="ProgressFont cursor-pointer">
                <a
                  href="#"
                  className={`${defaultLinkClass} px-3 py-2 rounded ${
                    index === 0 && isMenuOpen ? activeLinkClass : ""
                  }`} /* Apply activeLinkClass conditionally */
                  aria-current={index === 0 ? "page" : null} // Set aria-current for active link
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
