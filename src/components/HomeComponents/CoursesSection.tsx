import { Link } from 'react-router-dom';
import { courses } from '../../constants/courses-data';
import { FaArrowRightLong } from 'react-icons/fa6';

const CoursesSection = () => {
  return (
    <section className="lg:container ml-[20px] w-full md:mt-16 mt-12 mb-40 px-5 lg:px-[50px] mx-auto ">
      <h1 className="headline md:text-4xl text-black font-semibold text-[28px]">
        Courses for you
      </h1>
      <p className="text-base md:text-lg text-black max-w-[478px] mt-5">
        Here are some courses from our schools that we offer. Enroll and
        kickstart your tech career.
      </p>

      <div className="grid grid-cols-1  sm:mx-[5px] lg:mx-0 ls:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-2 lg:gap-4 mt-12 place-content-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative ml-5 lg:max-w-[100%]  mb-20 max-h-[400px] "
          >
            {/* Lines */}
            <div className="absolute inset-0">
              {/* Top Line */}
              <div className="absolute top-[15%] left-[-20px] z-0 w-[20px] h-[3px] bg-black"></div>

              {/* Left Line */}
              <div className="absolute top-[15%] left-[-20px] w-[3px] lg:h-[102.5%] h-[102%] bg-black"></div>

              {/* Bottom Line */}
              <div className="absolute bottom-[-70px] left-[-20px] lg:w-[80%] w-[90%] h-[3px] bg-black"></div>
            </div>

            <img
              className="h-[233px] w-[90%] md:w-[80%] lg:w-[100%]"
              src={course.logo}
              alt={`course-${index + 1}-logo`}
            />
            <div className="mt-1">
              <h3 className=" md:text-[22px] text-black font-semibold">
                {course.title}
              </h3>
              <p className="text-[18px] xs:w-[60%] md:text-[12px] lg:w-[100%] lg:text-[14px] md:my-[20px] text-[#3F3F3F]">
                {course.description}
              </p>
            </div>
            <div className="inline-flex items-center mt-[-70px] gap-3 hover:gap-5">
              <Link to="#" className="text-primary font-bold underline">
                Enroll Now
              </Link>
              <FaArrowRightLong className="text-2xl text-gray-800" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
