import AutoPlay from '../AutoPlay';

const SuccessStorySection = () => {
  return (
    <div className="w-full mt-24  mb-20">
      <div className="w-full container mx-auto md:px-[150px] px-5">
        <h1 className="headline font-bold text-[28px] md:text-4xl">
          {' '}
          Our success story{' '}
        </h1>
        <p className="text-lg max-w-[708px] text-darkgrey mt-5 font-medium">
          {' '}
          What our students are saying about their learning experience.
        </p>
      </div>
      <div className="mt-10">
        <AutoPlay />
      </div>
    </div>
  );
};

export default SuccessStorySection;
