import { Link } from 'react-router-dom';
import { schools } from '../../constants/courses-data';

const DiscoverSection = () => {
  return (
    <div className="mx-auto container w-full mt-24 mb-40 lg:px-[150px] px-5 relative">
      <div className="">
        <h1 className="headline text-[28px] font-medium text-darkish md:text-4xl">
          {' '}
          Discover the right school for your journey{' '}
        </h1>
        <p className="md:text-lg max-w-[708px] text-darkgrey mt-5 font-medium">
          Axia Africa offers you the chance to explore schools which has variety
          of courses to learn from, like product design, Front end,
        </p>
      </div>
      <img
        className="mt-0 sm:mt-12 absolute right-10 w-[220px] sm:w-[350px] -top-24 bouncy-up"
        src="https://axia.africa/_nuxt/doddle2.c269fd0b.svg"
        alt="discovery-image"
      />
      <div className="flex flex-wrap md:mt-28 mt-20 gap-x-20 md:gap-y-32 gap-y-20 w-full justify-center">
        {schools.map((school, index) => (
          <div key={index} className="card md:w-[40%] md:px-5 px-3">
            <h3 className="md:text-2xl text-lg text-darkish font-semibold">
              {school.title}
            </h3>
            <p className="text-sm md:text-base font-medium mt-6 text-darkgrey">
              {school.description}
            </p>
            <Link to="#">View Courses</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverSection;
