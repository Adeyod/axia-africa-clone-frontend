const commonStyles1 =
  'text-primary text-center hover:text-white items-center justify-center border-[3.5px] w-[134.63px] h-[53px] border-black gap-3 bg-white font-semibold shadow-[8px_8px_0px_0px_#202054] hover:bg-primary';

const containerStyle = `${commonStyles1} hidden md:flex hover:shadow-[8px_8px_0px_0px_theme('colors.secondary')] transition-all duration-300`;
const linkStyle = 'text-inherit';
const learnContainerStyle = `${commonStyles1} flex cursor-pointer hover:shadow-[8px_8px_0px_0px_theme('colors.secondary')] transition-all duration-300`;

const knowledgeContainerStyle = `flex text-white text-center hover:text-black  items-center justify-center border-[3.5px] w-[134.63px] h-[53px] border-white gap-3 bg-black font-semibold shadow-[8px_8px_0px_0px_white] hover:bg-white hover:shadow-[8px_8px_0px_0px_theme('colors.secondary')] transition-all duration-300`;
const knowledgeLinkStyle = '';

const advisorTextStyle = 'gap-3 text-primary font-bold hover:gap-5 underline';
const advisorContainerStyle = '';

const advisorSectionStyle =
  "text-white text-center hover:text-black mt-8 items-center justify-center border-[3px] content-center w-[214px] h-[54px] gap-3 bg-primary font-semibold shadow-[8px_8px_0px_0px_white] hover:bg-white hover:shadow-[8px_8px_0px_0px_theme('colors.secondary')] transition-all duration-300";
const advisorTextSectionStyle = 'text-inherit';

const contactStyles =
  'hidden md:flex flex-col gap-[30px] lg:w-[15%] mt-6 md:mt-0';

const contactSmallStyles = 'flex flex-col gap-[30px]';

const schoolMobileStyle = 'flex flex-col gap-[30px]';
const schoolLargeScreenStyle = 'hidden md:flex flex-col gap-[30px] w-[20%]';
const companyLargeScreenStyle =
  'hidden md:flex flex-col gap-[30px] w-[15%] mt-6 md:mt-0';
const companyMobileScreenStyle = 'flex flex-col gap-[30px]';

const schoolStyles = 'flex flex-col gap-3';
const schoolLinkStyles = 'text-black';
const NavbarContactStyles = 'flex flex-col gap-5';
const companyStyles = 'flex flex-col text-[13px] gap-3';

const containerNavbarStyle = `${commonStyles1} hidden md:flex hover:shadow-[8px_8px_0px_0px_theme('colors.secondary')] transition-all duration-300`;

const linkContainerStyle = 'text-inherit';

const socialMobileStyles = 'flex gap-5';
const socialLargeStyles = 'center gap-5 mt-3 flex';
const schoolStylesLink = 'font-medium text-gray-100 text-sm';

export {
  socialMobileStyles,
  socialLargeStyles,
  schoolStylesLink,
  containerNavbarStyle,
  linkContainerStyle,
  schoolStyles,
  schoolLinkStyles,
  NavbarContactStyles,
  companyStyles,
  schoolMobileStyle,
  schoolLargeScreenStyle,
  companyLargeScreenStyle,
  companyMobileScreenStyle,
  contactSmallStyles,
  contactStyles,
  knowledgeContainerStyle,
  knowledgeLinkStyle,
  learnContainerStyle,
  advisorTextSectionStyle,
  containerStyle,
  linkStyle,
  advisorTextStyle,
  advisorContainerStyle,
  advisorSectionStyle,
};
