import { Link } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa6';
import { IoLogoTwitter } from 'react-icons/io5';

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
            <div className="flex flex-col gap-[30px]">
              <h1 className="font-bold">SCHOOLS</h1>
              <Link to="#" className="font-medium text-gray-100 text-sm">
                {' '}
                School of Product{' '}
              </Link>
              <Link to="#" className="font-medium text-gray-100 text-sm">
                {' '}
                School of Data{' '}
              </Link>
              <Link to="#" className="font-medium text-gray-100 text-sm">
                {' '}
                School of Engineering{' '}
              </Link>
            </div>

            {/* COMPANY */}
            <div className="flex flex-col gap-[30px]">
              <h1 className="font-bold">COMPANY</h1>
              <Link
                className="router-link-active router-link-exact-active font-medium text-lighestgrey text-sm"
                to="#"
              >
                About
              </Link>
              <Link to="#" className="font-medium text-lighestgrey text-sm">
                FAQs
              </Link>
              <Link to="#" className="font-medium text-lighestgrey text-sm">
                {' '}
                Join Our Community{' '}
              </Link>
              <Link to="#" className="font-medium text-lighestgrey text-sm">
                {' '}
                Partnership{' '}
              </Link>
              <Link to="#" className="font-medium text-lighestgrey text-sm">
                {' '}
                Privacy Policy{' '}
              </Link>
            </div>

            {/* CONTACT */}
            <div className="flex flex-col gap-[30px]">
              <h1 className="font-bold">CONTACT</h1>
              <Link to="#" className="font-medium text-lighestgrey text-sm">
                {' '}
                info@axia.africa{' '}
              </Link>
              <Link to="#" className="font-medium text-lighestgrey text-sm">
                {' '}
                +234 707 109 7262{' '}
              </Link>
              <Link to="#" className="font-medium text-lighestgrey text-sm">
                {' '}
                +234 707 072 4286{' '}
              </Link>
              <Link to="#" className="font-medium text-lighestgrey text-sm">
                {' '}
                +234 707 088 2627{' '}
              </Link>
            </div>

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

        <div className="hidden md:flex flex-col gap-[30px] w-[15%] mt-6 md:mt-0 pc">
          <h1 className="font-bold text-lg mb-2.5">COMPANY</h1>
          <Link className="router-link-active router-link-exact-active" to="#">
            About
          </Link>
          <Link to="#" className="">
            FAQs
          </Link>
          <Link to="#" className="router-link-active router-link-exact-active">
            {' '}
            Join Our Community{' '}
          </Link>
          <Link to="#" className="">
            {' '}
            Partnership{' '}
          </Link>
          <Link to="#" className="">
            {' '}
            Privacy Policy{' '}
          </Link>
        </div>

        <div className="hidden md:flex flex-col gap-[30px] w-[20%] pc">
          <h1 className="font-bold text-lg mb-2.5">SCHOOLS</h1>
          <Link to="#" className="font-light">
            {' '}
            School of Product{' '}
          </Link>
          <Link to="#" className="">
            {' '}
            School of Data{' '}
          </Link>
          <Link to="#" className="">
            {' '}
            School of Engineering{' '}
          </Link>
        </div>

        <div className="hidden md:flex flex-col gap-[30px] lg:w-[15%] mt-6 md:mt-0 pc">
          <h1 className="">CONTACT</h1>
          <Link to="#" className="">
            {' '}
            info@axia.africa{' '}
          </Link>
          <Link to="#" className="">
            {' '}
            +234 707 109 7262{' '}
          </Link>
          <Link to="#" className="">
            {' '}
            +234 707 072 4286{' '}
          </Link>
          <Link to="#" className="">
            {' '}
            +234 707 088 2627{' '}
          </Link>
        </div>
      </div>

      <p className="center text-center w-full md:w-auto pc mt-32">
        {' '}
        © 2024 Axia Africa. All rights reserved.{' '}
      </p>
    </div>
  );
};

export default Footer;
