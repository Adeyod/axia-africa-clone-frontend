import { FaArrowRightLong } from 'react-icons/fa6';
import {
  advisorContainerStyle,
  advisorTextStyle,
  containerStyle,
  linkStyle,
} from '../../constants/styles';
import Button from '../Button';

const IntroSection = () => {
  return (
    <div className=" relative container flex justify-around flex-col md:flex-row w-full h-[700px] pt-[60px] md:pt-[100px] px-5 lg:px-[150px] mx-auto">
      <div className="flex flex-col md:flex-1">
        <p className="text-[32px] text-center font-medium text-black md:text-start md:text-[45px] max-w-[560px]">
          Accelerate your career with{' '}
          <span className="font-bold gradient-text">Job-ready</span> tech
          skills.
        </p>
        <p className="text-base md:text-lg text-gray-800 text-center md:text-start max-w-[480px] md:mt-7 mt-2.5">
          Begin your tech journey and expand your career opportunities in the
          tech space by learning tech skills in demand.
        </p>
        <div className="z-10 flex flex-col justify-center md:justify-start md:flex-row gap-6 items-center mt-12">
          <Button
            title={'Apply Now'}
            containerStyle={containerStyle}
            linkStyle={linkStyle}
            route={'/apply'}
          />
          <div className="flex items-center gap-3 hover:gap-5 py-[12px] px-[24px] h-[48px]">
            <Button
              title={'Speak with an Advisor'}
              containerStyle={advisorContainerStyle}
              linkStyle={advisorTextStyle}
              route={'/apply'}
            />
            <FaArrowRightLong className="text-2xl text-gray-800" />
          </div>
        </div>
        <img
          className="absolute w-[30vw] mt-12 bottom-11 left-10 max-w-[500px] animate-bounce-slow"
          src="https://axia.africa/_nuxt/doddle.821d1398.svg"
          alt="first-img"
        />
      </div>
      <img
        className="md:absolute md:top-0 md:right-6 md:w-[57vw] w-[90%] mt-5 md:mt-0 max-w-[700px] mx-auto md:mx-0"
        src="https://axia.africa/_nuxt/hero.64600f5b.svg"
        alt="first-img"
      />
    </div>
  );
};

export default IntroSection;
