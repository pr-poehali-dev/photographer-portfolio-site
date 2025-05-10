
import AnimatedSection from "@/components/AnimatedSection";

interface BiographySectionProps {
  title: string;
  paragraphs: string[];
  delay?: number;
}

const BiographySection: React.FC<BiographySectionProps> = ({ 
  title, 
  paragraphs, 
  delay = 200 
}) => {
  return (
    <AnimatedSection
      direction="right"
      delay={delay}
      className="space-y-4 sm:space-y-6"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair gold-gradient inline-block">
        {title}
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-white/80 font-light text-sm sm:text-base">
          {paragraph}
        </p>
      ))}
    </AnimatedSection>
  );
};

export default BiographySection;
