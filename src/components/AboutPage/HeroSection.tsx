
import AnimatedSection from "@/components/AnimatedSection";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 md:px-6 bg-black/30">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6 gold-gradient inline-block">
            Обо мне
          </h1>
          <p className="text-white/70 text-lg font-light mb-8">
            Профессиональный фотограф с более чем 10-летним опытом создания
            неповторимых историй через объектив.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
