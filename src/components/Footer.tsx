import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa6';
import { IoLogoTwitter } from 'react-icons/io5';
import Contact from './Contact';
import {
  companyLargeScreenStyle,
  companyMobileScreenStyle,
  contactSmallStyles,
  contactStyles,
  schoolLargeScreenStyle,
  schoolMobileStyle,
} from '../constants/styles';
import Schools from './Schools';
import Company from './Company';

const Footer = () => {
  return (
    // center-col
    <div className="bg-primary text-white p-5 md:pt-24 md:pb-14 py-12 w-full mx-auto">
      <div className="mx-auto md:px-[150px] px-5 flex md:justify-between flex-wrap gap-5">
        {/* FIRST CONTAINER */}
        <div className="flex flex-col gap-4 md:w-[40%] w-full items-start">
          <img
            className="w-[78px]"
            src="https://axia.africa/_nuxt/logo-white.f233dab4.svg"
            alt=""
          />
          <p className=" font-medium md:max-w-[350px] text-gray-100 mt-1">
            An organization that is focused on equipping African youths with the
            knowledge and skills needed in the tech space.
          </p>
          {/* SOCIALS 
          still show at medium screen
          */}

          {/* md:flex hidden */}
          <div className="center gap-5 mt-3 flex">
            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/company/axiaafrica"
              rel="noopener noreffer"
              target="_blank"
            >
              <AiFillLinkedin className="text-2xl" />
            </a>

            {/* TWITTER */}
            <a
              href="https://twitter.com/axiaafrica"
              rel="noopener noreffer"
              target="_blank"
            >
              <IoLogoTwitter className="text-2xl" />
            </a>

            {/* INSTAGRAM */}
            <a
              href="http://instagram.com/axiaafrica"
              rel="noopener noreffer"
              target="_blank"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>

          {/* HIDDEN ON MEDIUM SCREENS
          this is for small screens
          */}
          <div className="grid grid-cols-2 mt-[45px] !gap-8 !gap-y-20 md:hidden w-full">
            {/* SCHOOLS */}
            <Schools schoolsContainerStyle={schoolMobileStyle} />

            {/* COMPANY */}
            <Company companyContainerStyle={companyMobileScreenStyle} />

            {/* CONTACT */}
            <Contact contactContainerStyle={contactSmallStyles} />

            {/* SOCIALS */}
            <div className="flex gap-5">
              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/company/axiaafrica"
                rel="noopener noreffer"
                target="_blank"
              >
                <AiFillLinkedin className="text-2xl" />
              </a>

              {/* TWITTER */}
              <a
                href="https://twitter.com/axiaafrica"
                rel="noopener noreffer"
                target="_blank"
              >
                <IoLogoTwitter className="text-2xl" />
              </a>

              {/* INSTAGRAM */}
              <a
                href="http://instagram.com/axiaafrica"
                rel="noopener noreffer"
                target="_blank"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <Company companyContainerStyle={companyLargeScreenStyle} />

        <Schools schoolsContainerStyle={schoolLargeScreenStyle} />

        <Contact contactContainerStyle={contactStyles} />
      </div>

      <p className="center text-center w-full md:w-auto pc mt-32">
        {' '}
        © 2024 Axia Africa. All rights reserved.{' '}
      </p>
    </div>
  );
};

export default Footer;
