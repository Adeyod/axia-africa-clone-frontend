import IntroSection from '../components/HomeComponents/IntroSection';
import CoursesSection from '../components/HomeComponents/CoursesSection';
import SpeakToAdvisorSection from '../components/HomeComponents/SpeakToAdvisorSection';
import OnboardSection from '../components/HomeComponents/OnboardSection';
import TechKnowledgeSection from '../components/HomeComponents/TechKnowledgeSection';
import DiscoverSection from '../components/HomeComponents/DiscoverSection';
import SuccessStorySection from '../components/HomeComponents/SuccessStorySection';
import PartnerSection from '../components/HomeComponents/PartnerSection';

const HomePage = () => {
  return (
    <div className=" pt-[100px]">
      {/* INTRO SECTION */}
      <div className="bg-gray-100">
        <IntroSection />
      </div>

      {/* COURSES SECTION */}
      <div className="">
        <CoursesSection />
      </div>

      {/* ADVISOR SECTION */}
      <div className="">
        <SpeakToAdvisorSection />
      </div>

      {/* ONBOARDING SECTION */}
      <div>
        <OnboardSection />
      </div>

      {/* DISCOVER SECTION */}
      <div>
        <DiscoverSection />
      </div>

      {/* TECH KNOWLEDGE SECTION */}
      <div>
        <TechKnowledgeSection />
      </div>

      {/* SUCCESS STORY SECTION */}
      <div>
        <SuccessStorySection />
      </div>

      {/* PARTNER SECTION */}
      <div>
        <PartnerSection />
      </div>
    </div>
  );
};

export default HomePage;
