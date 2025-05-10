
import { cn } from "@/lib/utils";
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import AnimatedSection from "./AnimatedSection";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: string;
  features?: string[];
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  icon,
  features = [],
  className,
  delay = 0
}) => {
  return (
    <AnimatedSection delay={delay} className={cn("", className)}>
      <div className="bg-black/30 border border-gold/20 rounded-md p-6 h-full flex flex-col hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-playfair mb-2">{title}</h3>
            <p className="text-white/60 text-sm mb-4">{description}</p>
          </div>
          <div className="text-gold">
            <Icon name={icon} size={32} />
          </div>
        </div>
        
        {features.length > 0 && (
          <ul className="mb-6 mt-2 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 mb-2">
                <Icon name="Check" className="text-gold mt-1" size={16} />
                <span className="text-white/80 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto pt-4 flex flex-col gap-4">
          <div className="text-2xl font-playfair text-gold">{price}</div>
          <Button className="w-full border-gold text-gold bg-transparent hover:bg-gold hover:text-dark">
            Заказать
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServiceCard;
