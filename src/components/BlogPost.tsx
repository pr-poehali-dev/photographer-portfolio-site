import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import AnimatedSection from "./AnimatedSection";

interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  date: Date;
  slug: string;
  className?: string;
  delay?: number;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  image,
  date,
  slug,
  className,
  delay = 0,
}) => {
  return (
    <AnimatedSection delay={delay} className={cn("", className)}>
      <Link to={`/blog/${slug}`} className="block group">
        <div className="grid sm:grid-cols-[1fr_1.2fr] md:grid-cols-[1fr_1.5fr] gap-4 sm:gap-6 items-center">
          <div className="relative overflow-hidden rounded-md image-hover h-48 sm:h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="text-gold/80 text-xs sm:text-sm mb-1 sm:mb-2">
              {formatDistanceToNow(date, { addSuffix: true, locale: ru })}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-playfair mb-2 sm:mb-3 group-hover:text-gold transition-colors">
              {title}
            </h3>
            <p className="text-white/70 text-sm sm:text-base line-clamp-2 sm:line-clamp-3">
              {excerpt}
            </p>
            <div className="mt-3 sm:mt-4 inline-block text-gold border-b border-gold/30 pb-1 group-hover:border-gold transition-colors text-sm sm:text-base">
              Читать далее
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

export default BlogPost;
