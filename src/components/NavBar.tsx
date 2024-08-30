import React, { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Button from './Button';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const containerStyle =
    "hidden md:flex text-primary text-center hover:text-white  items-center justify-center border-[3.5px] w-[134.63px] h-[53px] border-black gap-3 bg-white font-semibold shadow-[8px_8px_0px_0px_#202054] hover:bg-primary hover:shadow-[8px_8px_0px_0px_theme('colors.secondary')] transition-all duration-300";
  const linkStyle = 'text-inherit';

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="">
      <nav className="w-full py-6 md:h-[101px] fixed z-20 inset-x-0 bg-[#FFFCF9] ">
        <div className="inner container xs:px-[0px] px-[80px] md:px-[75px] lg:px-[150px] mx-auto">
          <div className="w-full  shadow-md md:shadow-none flex justify-between container mx-auto items-center z-50 md:px-0 h-[53px]">
            <Link to="/">
              <img
                className=" w-[200px] md:w-[204px]"
                src="https://axia.africa/_nuxt/logo.c36c29a3.svg"
                alt="logo"
              />
            </Link>

            <div className="hidden gap-7 lg:flex items-center">
              <Link to="/about">About</Link>

              <div className="relative group flex items-center gap-2 cursor-pointer">
                <p className="flex gap-1">
                  Schools
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </p>

                <div className="absolute top-[20px] pt-[30px] z-30 w-[15vw]">
                  <div className="hidden group-hover:flex flex-col bg-white shadow-lg p-4">
                    <Link to="#" className="hover:bg-gray-100 p-2 rounded">
                      School of Product
                    </Link>
                    <Link to="#" className="hover:bg-gray-100 p-2 rounded">
                      School of Engineering
                    </Link>
                    <Link to="#" className="hover:bg-gray-100 p-2 rounded">
                      School of Data
                    </Link>
                  </div>
                </div>
              </div>

              <button>Join Our Community</button>

              <span className="relative group flex items-center gap-2 cursor-pointer">
                <p className="flex gap-1">
                  Help
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </p>

                <div className="absolute top-[20px] pt-[30px] z-30 w-[15vw]">
                  <div className="hidden group-hover:flex flex-col bg-white shadow-lg p-4">
                    <Link to="#" className="hover:bg-gray-100 p-2 rounded">
                      FAQs
                    </Link>
                    <Link to="#" className="hover:bg-gray-100 p-2 rounded">
                      Contact Us
                    </Link>
                    <Link to="#" className="hover:bg-gray-100 p-2 rounded">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </span>
            </div>

            <Button
              containerStyle={containerStyle}
              linkStyle={linkStyle}
              title="Apply now"
              route={'/apply'}
            />

            <button className="md:hidden" onClick={handleToggle}>
              {toggle ? (
                <IoMdClose className="text-2xl" />
              ) : (
                <IoMdMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
