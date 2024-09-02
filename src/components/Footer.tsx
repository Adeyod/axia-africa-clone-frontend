import Contact from './Contact';
import {
  companyLargeScreenStyle,
  companyMobileScreenStyle,
  contactSmallStyles,
  contactStyles,
  schoolLargeScreenStyle,
  schoolMobileStyle,
  schoolStylesLink,
  socialLargeStyles,
  socialMobileStyles,
} from '../constants/styles';
import Schools from './Schools';
import Company from './Company';
import Socials from './Socials';

const Footer = () => {
  return (
    <div className="bg-primary text-white p-5 md:pt-24 md:pb-14 py-12 w-full mx-auto">
      <div className="mx-auto md:px-[150px] px-5 flex md:justify-between flex-wrap gap-5">
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
          {/* SOCIALS */}
          <Socials socialContainerStyle={socialLargeStyles} />

          <div className="grid grid-cols-2 mt-[45px] !gap-8 !gap-y-20 md:hidden w-full">
            {/* SCHOOLS */}
            <Schools
              linkStyles={schoolStylesLink}
              schoolsContainerStyle={schoolMobileStyle}
            />

            {/* COMPANY */}
            <Company companyContainerStyle={companyMobileScreenStyle} />

            {/* CONTACT */}
            <Contact
              title={'CONTACT'}
              contactContainerStyle={contactSmallStyles}
            />

            {/* SOCIALS */}
            <Socials socialContainerStyle={socialMobileStyles} />
          </div>
        </div>

        <Company companyContainerStyle={companyLargeScreenStyle} />

        <Schools
          linkStyles={schoolStylesLink}
          schoolsContainerStyle={schoolLargeScreenStyle}
        />

        <Contact title={'CONTACT'} contactContainerStyle={contactStyles} />
      </div>

      <p className="text-center w-full md:w-auto mt-32">
        {' '}
        © 2024 Axia Africa. All rights reserved.{' '}
      </p>
    </div>
  );
};

export default Footer;
