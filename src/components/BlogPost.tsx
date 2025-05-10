
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
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
  delay = 0
}) => {
  return (
    <AnimatedSection delay={delay} className={cn("", className)}>
      <Link to={`/blog/${slug}`} className="block group">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-6 items-center">
          <div className="relative overflow-hidden rounded-md image-hover h-48 md:h-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <div className="text-gold/80 text-sm mb-2">
              {formatDistanceToNow(date, { addSuffix: true, locale: ru })}
            </div>
            <h3 className="text-xl md:text-2xl font-playfair mb-3 group-hover:text-gold transition-colors">
              {title}
            </h3>
            <p className="text-white/70 line-clamp-3">
              {excerpt}
            </p>
            <div className="mt-4 inline-block text-gold border-b border-gold/30 pb-1 group-hover:border-gold transition-colors">
              Читать далее
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

export default BlogPost;
