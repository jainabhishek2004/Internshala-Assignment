import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="SiteHeader absolute z-50 w-full">
      <div className="flex items-center justify-between px-8 py-5">
        {/* Logo and Navigation Links */}
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="mr-14 w-auto">
              <a href="/">
                <img
                  
                  src={Logo}
                  width="70"
                  height="72"
                  alt="Pincel logo"
                />
              </a>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden w-auto lg:block">
              <ul className="flex items-center mr-10">
                {["Tools", "Explore", "Stock", "Pricing", "Blog", "Contact"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="relative font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"
                    >
                      <Link to="/login">{item}</Link>
                     
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Authentication Buttons and Mobile Menu Toggle */}
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            {/* Desktop Login/Signup */}
            <div className="hidden w-auto lg:block">
              <div className="flex flex-wrap gap-2">
                <div className="w-auto">
                   
                    <button className="mr-5 block rounded-10 py-2 px-5 font-heading text-lg text-gray-900">
                      <Link to="/login">Login</Link>
                    </button>
                  
                </div>
                <div className="w-auto">
                  
                    <button className="group relative block overflow-hidden rounded-10 border-2 border-gray-900 py-2 px-5 font-heading text-lg text-gray-900">
                      <div className="absolute top-0 left-0 h-full w-full -translate-y-full transform bg-gray-900 transition duration-500 ease-in-out group-hover:-translate-y-0"></div>
                      <p className="relative z-10 group-hover:text-white">
                      <Link to="/login">Sign up</Link>
                        
                        </p>
                    </button>
                  
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="w-auto lg:hidden">
              <button
                id="pincel-mobile-navigation"
                aria-label="Toggle navigation"
                className="group"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="navbar-burger text-gray-800 group-focus:text-gray-600 group-active:text-gray-600"
                  width="51"
                  height="51"
                  viewBox="0 0 56 56"
                  fill="none"
                >
                  <rect width="56" height="56" rx="28" fill="currentColor" />
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 bottom-0 z-50 w-4/6 sm:max-w-xs navbar-menu">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav className="relative z-10 h-full bg-white px-9 py-8 overflow-y-auto">
            <div className="flex h-full flex-wrap justify-between">
              <div className="w-full">
                <div className="-m-2 flex items-center justify-between">
                  <div className="w-auto p-2">
                    <a href="/">
                      <img
                        
                        src={Logo}
                        width="50"
                        height="52"
                        alt="Pincel logo"
                      />
                    </a>
                  </div>
                  <div className="w-auto p-2">
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="navbar-burger"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Mobile Menu Links */}
              <ul className="mt-10">
                {["Tools", "Explore", "Stock", "Pricing", "Blog", "Contact"].map(
                  (item, index) => (
                    <li key={index} className="space-y-8" >
                     <Link to="/login">{item}</Link>
                    </li>
                  )
                )}
              </ul>

              {/* Mobile Authentication Buttons */}
              <div className="flex w-full flex-col justify-end mt-6">
                <div className="flex flex-wrap">
                  <div className="mb-3 w-full">
                    <a href="/auth/sign-in">
                      <button className="block w-full rounded-10 p-0.5 font-heading text-lg font-medium text-gray-900">
                        <div className="rounded-10 py-2 px-5">
                        <Link to="/login">Login</Link>
                        </div>
                      </button>
                    </a>
                  </div>
                  <div className="w-full">
                    <a href="/pricing">
                      <button className="group relative block w-full overflow-hidden rounded-10 bg-gradient-cyan p-0.5 font-heading text-lg font-medium text-gray-900">
                        <div className="absolute top-0 left-0 h-full w-full -translate-y-full transform bg-gradient-cyan transition duration-500 ease-in-out group-hover:-translate-y-0"></div>
                        <div className="rounded-lg bg-white py-2 px-5">
                          <p className="relative z-10"><Link to="/login">Try Now</Link></p>
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </section>
  );
};

export default SiteHeader;
