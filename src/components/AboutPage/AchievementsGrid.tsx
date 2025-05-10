
import { ReactNode } from "react";
import AnimatedSection from "@/components/AnimatedSection";

interface AchievementBoxProps {
  count: string;
  label: string;
}

const AchievementBox: React.FC<AchievementBoxProps> = ({ count, label }) => (
  <div className="bg-black/30 p-3 sm:p-4 rounded-md">
    <div className="text-2xl sm:text-3xl font-playfair text-gold mb-1">
      {count}
    </div>
    <p className="text-white/60 text-xs sm:text-sm">{label}</p>
  </div>
);

const AchievementsGrid: React.FC<{ delay?: number }> = ({ delay = 400 }) => {
  const achievements = [
    { count: "10+", label: "Лет опыта" },
    { count: "500+", label: "Довольных клиентов" },
    { count: "15", label: "Профессиональных наград" },
    { count: "20+", label: "Публикаций" },
    { count: "5", label: "Персональных выставок" },
    { count: "100к+", label: "Подписчиков" },
  ];

  return (
    <AnimatedSection
      direction="right"
      delay={delay}
      className="space-y-4 sm:space-y-6"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair gold-gradient inline-block">
        Достижения
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-center">
        {achievements.map((achievement, index) => (
          <AchievementBox 
            key={index} 
            count={achievement.count} 
            label={achievement.label} 
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default AchievementsGrid;
