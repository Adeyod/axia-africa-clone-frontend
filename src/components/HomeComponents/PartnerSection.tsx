import Button from '../Button';
import { learnContainerStyle, linkStyle } from '../../constants/styles';

const PartnerSection = () => {
  return (
    <div className="container mx-auto w-full mt-[-270px] mb-60 text-center relative md:px-0 px-5">
      <p className="font-semibold text-[28px] md:text-4xl"> Partner With Us </p>
      <p className="md:text-base mb-[-50px] mt-6 pb-28 font-medium text-gray-900 text-center max-w-[800px] mx-auto">
        Do you have a passion for making impact and inspiring to the tech space?
        Partner with us at Axia Africa and share our passion of leading a
        generation of tech talents waiting to be tapped.
      </p>
      <div className="flex justify-center items-center min-h-[100px]">
        <Button
          containerStyle={learnContainerStyle}
          linkStyle={linkStyle}
          title="Learn More"
          route={'/apply'}
        />
      </div>

      <img
        className="absolute w-[250px] left-[-50px] -bottom-[100px]"
        src="https://axia.africa/_nuxt/deco1.0d87c8fa.svg"
        alt=""
      />
      <img
        className="absolute right-[-50px] -bottom-[100px]"
        src="https://axia.africa/_nuxt/deco2.ebd649ce.svg"
        alt=""
      />
    </div>
  );
};

export default PartnerSection;
