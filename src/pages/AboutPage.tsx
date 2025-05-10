
import { Link } from "react-router-dom";
import MainNav from "@/components/MainNav";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

// Import page components
import HeroSection from "@/components/AboutPage/HeroSection";
import ProfileImage from "@/components/AboutPage/ProfileImage";
import BiographySection from "@/components/AboutPage/BiographySection";
import AchievementsGrid from "@/components/AboutPage/AchievementsGrid";
import Footer from "@/components/common/Footer";

const AboutPage = () => {
  // Content data for biography sections
  const storyContent = {
    title: "Моя история",
    paragraphs: [
      "Я начал свой путь в фотографии еще в студенческие годы, когда получил в подарок свою первую пленочную камеру. То, что начиналось как хобби, постепенно превратилось в страсть, а затем в профессию.",
      "После окончания специализированных курсов и многих лет практики я разработал свой собственный узнаваемый стиль, который ценят мои клиенты. Работа с естественным освещением, внимание к деталям и умение поймать эмоциональные моменты – ключевые особенности моего подхода."
    ]
  };

  const approachContent = {
    title: "Мой подход",
    paragraphs: [
      "Каждая фотосессия для меня – это не просто работа, а творческий процесс. Я стремлюсь создать комфортную атмосферу, чтобы раскрыть естественную красоту и индивидуальность каждого клиента.",
      "В работе я использую профессиональное оборудование Canon и постоянно совершенствую свои навыки, изучая новые техники и тенденции в мире фотографии."
    ]
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation */}
      <MainNav />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <section className="py-12 sm:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-start">
            {/* Photographer Profile Image */}
            <ProfileImage />

            <div className="space-y-10 sm:space-y-12">
              {/* Biography Sections */}
              <BiographySection 
                title={storyContent.title} 
                paragraphs={storyContent.paragraphs} 
                delay={200}
              />
              
              <BiographySection 
                title={approachContent.title} 
                paragraphs={approachContent.paragraphs} 
                delay={300}
              />

              {/* Achievements Section */}
              <AchievementsGrid delay={400} />

              {/* Call to Action */}
              <AnimatedSection
                direction="right"
                delay={500}
                className="mt-6 sm:mt-8"
              >
                <Button
                  asChild
                  className="border-gold text-gold hover:bg-gold hover:text-dark"
                >
                  <Link to="/contact">Связаться со мной</Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
