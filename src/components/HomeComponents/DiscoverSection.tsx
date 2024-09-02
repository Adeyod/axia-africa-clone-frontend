import { Link } from 'react-router-dom';
import { schools } from '../../constants/courses-data';
import { FaArrowRightLong } from 'react-icons/fa6';

const DiscoverSection = () => {
  return (
    <div className=" mx-auto w-full mt-24 mb-40 lg:px-[150px] px-10 relative">
      <div className="">
        <p className="font-bold text-[28px] text-darkish md:text-4xl">
          {' '}
          Discover the right school for your journey{' '}
        </p>
        <p className="md:text-lg max-w-[708px] text-darkgrey mt-5 font-medium">
          Axia Africa offers you the chance to explore schools which has variety
          of courses to learn from, like product design, Front end,
        </p>
      </div>
      <img
        className="mt-0 sm:mt-12 absolute right-10 w-[220px] sm:w-[350px] -top-24 animate-bounce-medium"
        src="https://axia.africa/_nuxt/doddle2.c269fd0b.svg"
        alt="discovery-image"
      />
      <div className="flex flex-wrap md:mt-28 mt-20 gap-x-20 md:gap-y-32 gap-y-20 w-full justify-center">
        {schools.map((school, index) => (
          <div
            key={index}
            className="relative bg-gray-100 h-[45vh] flex flex-col gap-5 md:w-[44%] md:px-5 px-3"
          >
            <div className="absolute inset-0">
              {/* Left Line */}
              <div className="absolute top-[12%] left-[-20px] w-[3px] h-[93%] bg-black"></div>

              {/* Bottom Line */}
              <div className="absolute bottom-[-20px] left-[-20px] w-[97%] h-[3px] bg-black"></div>
            </div>
            <p className="md:text-2xl mt-5 text-lg font-semibold">
              {school.title}
            </p>
            <p className="text-sm md:text-base mb-10 font-medium mt-6 text-gray-800">
              {school.description}
            </p>
            <div className="flex gap-3 hover:gap-5 items-center">
              <Link to="#" className="text-primary underline font-bold">
                View Courses
              </Link>
              <FaArrowRightLong className="text-primary text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverSection;
