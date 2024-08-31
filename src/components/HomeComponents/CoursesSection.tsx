import { Link } from 'react-router-dom';
import { courses } from '../../constants/courses-data';

const CoursesSection = () => {
  return (
    <section className="container w-full md:mt-16 mt-12 mb-40 px-5 lg:px-[150px] mx-auto ">
      <h1 className="headline md:text-4xl text-black font-semibold text-[28px]">
        Courses for you
      </h1>
      <p className="text-base md:text-lg text-black max-w-[478px] mt-5">
        Here are some courses from our schools that we offer. Enroll and
        kickstart your tech career.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[100px] lg:gap-[2px] mt-12 place-content-center">
        {courses.map((course, index) => (
          <div key={index} className="relative ml-5 mb-20 w-[300px] h-[473px]">
            {/* Lines */}
            <div className="absolute inset-0">
              {/* Top Line */}
              <div className="absolute top-[20%] left-[-20px] z-0 w-[20px] h-[2px] bg-black"></div>

              {/* Left Line */}
              <div className="absolute top-[20%] left-[-20px] w-[2px] h-[95%] bg-black"></div>

              {/* Bottom Line */}
              <div className="absolute bottom-[-70px] left-[-20px] w-[80%] h-[2px] bg-black"></div>
            </div>

            <img
              className="h-[233px] w-[310px] "
              src={course.logo}
              alt={`course-${index + 1}-logo`}
            />
            <div className="md:p-5 p-3.5">
              <h3 className="text-lg md:text-[22px] mt-[20px] text-black font-semibold">
                {course.title}
              </h3>
              <p className="text-sm md:text-base font-medium my-[30px] text-[#3F3F3F]">
                {course.description}
              </p>
            </div>
            <Link to="#" className="text-blue-500  hover:underline">
              Enroll Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
