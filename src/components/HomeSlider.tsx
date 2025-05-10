import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface SlideImage {
  url: string;
  title: string;
  subtitle?: string;
}

interface HomeSliderProps {
  slides: SlideImage[];
  className?: string;
  autoplaySpeed?: number;
}

const HomeSlider: React.FC<HomeSliderProps> = ({
  slides,
  className,
  autoplaySpeed = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      setActiveIndex(index);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    },
    [isTransitioning],
  );

  const nextSlide = useCallback(() => {
    const newIndex = (activeIndex + 1) % slides.length;
    goToSlide(newIndex);
  }, [activeIndex, goToSlide, slides.length]);

  const prevSlide = useCallback(() => {
    const newIndex = (activeIndex - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
  }, [activeIndex, goToSlide, slides.length]);

  useEffect(() => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }

    autoplayTimerRef.current = setTimeout(() => {
      nextSlide();
    }, autoplaySpeed);

    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
    };
  }, [nextSlide, autoplaySpeed]);

  return (
    <div className={cn("relative h-screen w-full overflow-hidden", className)}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.url})`,
              transform: index === activeIndex ? "scale(1.05)" : "scale(1)",
              transition: "transform 6s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Slide Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 md:px-8 text-center">
            <h1
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold mb-3 md:mb-6 tracking-wide max-w-4xl px-4",
                index === activeIndex ? "animate-fadeIn" : "opacity-0",
              )}
              style={{ animationDelay: "300ms" }}
            >
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p
                className={cn(
                  "text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl font-light px-4",
                  index === activeIndex ? "animate-fadeIn" : "opacity-0",
                )}
                style={{ animationDelay: "600ms" }}
              >
                {slide.subtitle}
              </p>
            )}
            <Button
              variant="outline"
              className={cn(
                "border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300 text-sm md:text-base",
                index === activeIndex ? "animate-fadeIn" : "opacity-0",
              )}
              style={{ animationDelay: "900ms" }}
            >
              Смотреть галерею
            </Button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 z-20">
        <Button
          variant="ghost"
          size="icon"
          className="bg-dark/20 hover:bg-dark/50 text-white rounded-full transition-all w-10 h-10 md:w-12 md:h-12"
          onClick={prevSlide}
        >
          <Icon name="ChevronLeft" className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="bg-dark/20 hover:bg-dark/50 text-white rounded-full transition-all w-10 h-10 md:w-12 md:h-12"
          onClick={nextSlide}
        >
          <Icon name="ChevronRight" className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === activeIndex
                ? "bg-gold w-8"
                : "bg-white/50 hover:bg-white/80",
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
