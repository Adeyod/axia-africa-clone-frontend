import Button from '../Button';
import { knowledgeContainerStyle, linkStyle } from '../../constants/styles';

const TechKnowledgeSection = () => {
  return (
    <div className="w-full md:py-28 py-20 bg-[#111111]">
      <div className=" mx-auto md:px-[150px] px-5">
        <p className="w-full font-bold sm:mx-auto headline text-[28px] md:text-[36px] text-white md:px-0 max-w-[332px] sm:container">
          Foster your tech knowledge
        </p>
        <div className=" w-full mx-auto flex flex-col items-start justify-between mt-14 gap-[50px] text-white">
          <img
            className="h-auto w-full pc object-cover"
            src="https://axia.africa/_nuxt/foster.96ed8018.png"
            alt="tech-image-1"
          />

          <p className="md:text-lg mb-10 font-medium text-gray-300 max-w-[580px] md:px-0">
            Don’t just wait around, Register and join our students ready to
            enroll and kick start their tech career.
          </p>

          <Button
            containerStyle={knowledgeContainerStyle}
            linkStyle={linkStyle}
            title="Apply Now"
            route={'#'}
          />
        </div>
      </div>
    </div>
  );
};

export default TechKnowledgeSection;
