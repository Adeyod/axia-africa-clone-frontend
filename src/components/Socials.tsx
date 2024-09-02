import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa6';
import { IoLogoTwitter } from 'react-icons/io5';

export type SocialType = {
  socialContainerStyle: string;
};

const Socials: React.FC<SocialType> = ({ socialContainerStyle }) => {
  return (
    <div className={socialContainerStyle}>
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
  );
};

export default Socials;
