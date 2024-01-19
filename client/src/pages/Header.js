import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Contact from "./Contact";
import Membership from "./Membership";
import "./Dropdown.css";
import About from "./About";
import "./Header.css";
const Header = () => {
  const [contactModelOpen, setcontactModelOpen] = useState(false);
  const [aboutModelOpen, setAboutModelOpen] = useState(false);
  const [membershipModelOpen, setMembershipModelOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const handleButtonClick = () => {
    setMobileMenuOpen(false);
  };

  const handleContactModel = () => {
    setcontactModelOpen(true);
  };
  const handleMembershipModel = () => {
    setMembershipModelOpen(true);
  };
  const handleAboutModel = () => {
    setAboutModelOpen(true);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const closeProductDropdown = () => {
    setIsProductDropdownOpen(false);
  };

  return (
    <div>
      <nav
        className={` text-grey ${
          navbar
            ? "bg-purple-400 text-grey fixed top-0 left-0 right-0 z-50"
            : "bg-purple-400 fixed top-0 left-0 right-0 z-50"
        }`}
        style={{
          background:
            "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
          /* background: "#fef9c7", */
          maxHeight: "80px",
        }}
      >
        <div className="justify-between px-3 lg:max-w-4xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center mb-4 py-2">
              <Link to="/">
                <img
                  className=""
                  src={logo}
                  alt="logo"
                  style={{
                    width: "65px",
                    height: "65px",
                  }}
                />
              </Link>

              <div className="md:hidden px-4">
                <button
                  className="p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fixed top-3 right-3  text-center h-4 border-full"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fixed top-3 right-3  text-center h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
  className={`flex items-center justify-center pb-6 md:block md:pb-0 md:mt-0 ${
    mobileMenuOpen ? "block bg-white" : "hidden"
  }`}
  style={{ fontSize: "20px", color: "brown", marginTop: "-15px" }}
>
            <ul className="flex flex-col items-center gap-[-rem] space-y-1 md:flex-row md:space-x-4 md:space-y-0 ">
              <button
                className=""
                style={{ fontWeight: "bold", marginTop: mobileMenuOpen ? "90px" : "0", }}
                onClick={() => {
                  handleMembershipModel();
                  handleButtonClick();
                }}
              >
                Membership
              </button>
              <div className="dropdown-container">
                <button
                  className="dropdown-button"
                  style={{ fontWeight: "bold" }}
                  onClick={toggleProductDropdown}
                  onBlur={closeProductDropdown} // Close dropdown when focus is lost
                >
                  Products
                </button>

                {isProductDropdownOpen && (
                 <div style={{width:"250px"}} className="dropdown-content ml-[-3rem] flex flex-wrap ">
                 <Link to="/products/category1">Tiffin Service</Link>
                 <Link to="/products/category2">Saloon Service</Link>
                 <Link to="/products/category3">Restaurant Service</Link>
                 <Link to="/products/category1">Repair Service</Link>
                 <Link to="/products/category2">Cake Service</Link>
                 <Link to="/products/category3">Travels Service</Link>
                 <Link to="/products/category1">Sweets Service</Link>
                 <Link to="/products/category2">Namkeen Service</Link>
               </div>
               
                )}
              </div>

              <button
                className=""
                style={{ fontWeight: "bold" }}
                onClick={() => {
                  handleContactModel();
                  handleButtonClick();
                }}
                
              >
                Contact US
              </button>

              <button
      className=" "
      style={{
        fontWeight: "bold",
        padding: "20px",
        marginBottom: mobileMenuOpen ? "40px" : "0",
        
      }}
      onClick={() => {
        handleAboutModel();
        handleButtonClick();
      }}
     
    >
      About Us
    </button>
            </ul>
            <ul
  className="flex flex-col items-end md:flex-row md:space-x-4 absolute md:top-2 right-5 md:m-4 m-2rem top-3.5rem"
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: "100px",
    marginRight: "5px", // Adjust as needed
  }}
>
              <button  className=" font-bold rounded-full bg-transparent mb-3 p-2 border border-black" onClick={() =>
              (window.location.href = "mailto:info.mcs01@gmail.com")
            }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              <button  className=" font-bold rounded-full mb-3 bg-transparent p-2 border border-black"  onClick={() =>
              (window.location.href = "https://www.facebook.com/profile.php?id=61555740260853")
            } >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>

            
              
              <button to="/" className=" font-bold rounded-full mb-3 bg-transparent p-2 border border-black" onClick={() =>
              (window.location.href = "https://www.instagram.com/info.mcs01/")
            }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>

              <button  className=" font-bold rounded-full bg-transparent mb-3 p-2 border border-black" onClick={() =>
              (window.location.href = "https://www.linkedin.com/in/manvika-consultancy-services-7211092a9/")
            }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <div
        style={{
          paddingTop: navbar ? "20px" : "0",
        }}
      ></div>
      <Contact
        isOpen={contactModelOpen}
        onClose={() => setcontactModelOpen(false)}
      />
      <Membership
        isOpen={membershipModelOpen}
        onClose={() => setMembershipModelOpen(false)}
      />
      <About isOpen={aboutModelOpen} onClose={() => setAboutModelOpen(false)} />
    </div>
  );
};

export default Header;
