import { FaQuoteLeft } from 'react-icons/fa6';
import { GoDash } from 'react-icons/go';

const OnboardSection = () => {
  return (
    <div className="w-full md:py-28 py-12 bg-[#111111]">
      <div className="container ml-[50px] lg:px-[150px] mx-auto">
        <p className="container w-full headline font-semibold text-[28px] md:text-[36px] lg:pl-12 text-white">
          Get onboard with us
        </p>
        <div className="container w-full mx-auto gap-10 md:gap-20 flex flex-col-reverse lg:flex-row items-start justify-between md:mt-20 mt-12">
          <div className="w-full md:w-[45%] text-gray-300">
            <div className="md:w-14 w-10 text-white">
              <FaQuoteLeft className="text-6xl" />
            </div>
            <p className="mt-10 md:text-base font-medium">
              {' '}
              Axia Africa is an organization that is focused on equipping
              African youths with the knowledge and digital skills needed today
              Our aim is to make tech knowledge accessible to every individual
              irrespective of age, literacy, and location. <br />
              <br /> We are looking forward to building a strong community of
              ready-to-work personnel and employable candidates around the world
              in the tech space.{' '}
            </p>
          </div>
        </div>
        <div className="container w-full mx-auto flex flex-col items-start justify-between mt-14 md:px-0 text-gray-400">
          <div className="flex items-center">
            <GoDash className="text-5xl mr-[-25px]" />
            <GoDash className="text-5xl mr-[-80px]" />
            <h2 className="font-bold text-[28px] md:text-3xl text-white relative ml-24 before:border-black">
              Why choose us
            </h2>
          </div>
          <p className="mt-6 md:text-base text-gray-300">
            We at Axia Africa are intentional about our students and focused
            about building a community. The tech space in Africa is fast growing
            and we have the necessary programmes to help launch you into that
            space. We sharpen your skills to give you leverage in your career
            while navigating the job market
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardSection;
