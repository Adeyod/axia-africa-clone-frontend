const OnboardSection = () => {
  return (
    <div className="w-full md:py-28 py-12 bg-[#111111]">
      <div className="container px-5 lg:px-[150px] mx-auto">
        <p className="container w-full headline font-medium text-[28px] md:text-[36px] lg:pl-12 text-white">
          Get onboard with us
        </p>
        <div className="container w-full mx-auto gap-10 md:gap-20 flex flex-col-reverse lg:flex-row items-start justify-between md:mt-20 mt-12">
          <img
            className="object-cover w-full md:w-[55%]"
            src="https://axia.africa/_nuxt/onboard.bc92bcb0.svg"
            alt="advisor-image"
          />
          <div className="w-full md:w-[45%] text-gray-300">
            <div className="md:w-14 w-10 text-white">
              <img
                src="https://axia.africa/_nuxt/sprite.acaf2656.svg#quote"
                alt=""
              />
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
          <h2 className="headline text-[28px] md:text-3xl font-medium text-white relative ml-24 before:border-black">
            Why choose us
          </h2>
          <p className="mt-6 md:text-base font-medium text-gray-300">
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
