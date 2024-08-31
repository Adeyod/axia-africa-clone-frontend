import {
  advisorSectionStyle,
  advisorTextSectionStyle,
} from '../../constants/styles';
import Button from '../Button';

const SpeakToAdvisorSection = () => {
  return (
    <div className="w-full md:py-36 py-20 bg-primary">
      <div className="container w-full mx-auto flex flex-col lg:flex-row lg:items-center gap-10 justify-between px-5 lg:px-[150px]">
        <div className="max-w-[440px] mb-16">
          <h1 className="text-[28px] md:text-[36px] text-white font-medium">
            Confused about what to learn?
          </h1>
          <p className="mt-5 md:text-lg text-gray-300 font-medium">
            Speak with our professional tech advisors to help kick start your
            tech journey and pilot you to being an expert in your desired field.
          </p>
          <Button
            title={'Speak with an Advisor'}
            containerStyle={advisorSectionStyle}
            linkStyle={advisorTextSectionStyle}
            route={'/apply'}
          />
        </div>
        <img
          className="w-full sm:w-[50%]"
          src="https://axia.africa/_nuxt/advisor.ab0317b2.svg"
          alt="advisor-image"
        />
      </div>
    </div>
  );
};

export default SpeakToAdvisorSection;
