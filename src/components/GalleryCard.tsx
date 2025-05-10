
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface GalleryCardProps {
  title: string;
  image: string;
  description?: string;
  url: string;
  className?: string;
  delay?: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  image,
  description,
  url,
  className,
  delay = 0
}) => {
  return (
    <AnimatedSection delay={delay} className={cn("", className)}>
      <Link to={url} className="block group">
        <div className="relative overflow-hidden rounded-md image-hover">
          <img 
            src={image} 
            alt={title} 
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent transition-opacity duration-300 group-hover:opacity-90 flex items-end p-6">
            <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
              <h3 className="text-xl md:text-2xl font-playfair mb-2 group-hover:text-gold transition-colors">
                {title}
              </h3>
              {description && (
                <p className="font-light text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

export default GalleryCard;
