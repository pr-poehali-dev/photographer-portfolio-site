import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

interface MainNavProps {
  className?: string;
}

const MainNav: React.FC<MainNavProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-dark/90 backdrop-blur-md py-3" : "bg-transparent py-5",
        className,
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl md:text-2xl font-playfair tracking-wider font-bold gold-gradient"
          >
            ФОТОМАСТЕР
          </Link>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/galleries">Галерея</NavLink>
            <NavLink to="/about">Обо мне</NavLink>
            <NavLink to="/services">Услуги</NavLink>
            <NavLink to="/blog">Блог</NavLink>
            <NavLink to="/contact">Контакты</NavLink>
          </nav>
        </div>

        {/* Mobile/Tablet Navigation Overlay */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 bg-dark/95 backdrop-blur-md transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-8",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none -translate-y-5",
          )}
        >
          <NavLink to="/" mobile onClick={() => setIsMenuOpen(false)}>
            Главная
          </NavLink>
          <NavLink to="/galleries" mobile onClick={() => setIsMenuOpen(false)}>
            Галерея
          </NavLink>
          <NavLink to="/about" mobile onClick={() => setIsMenuOpen(false)}>
            Обо мне
          </NavLink>
          <NavLink to="/services" mobile onClick={() => setIsMenuOpen(false)}>
            Услуги
          </NavLink>
          <NavLink to="/blog" mobile onClick={() => setIsMenuOpen(false)}>
            Блог
          </NavLink>
          <NavLink to="/contact" mobile onClick={() => setIsMenuOpen(false)}>
            Контакты
          </NavLink>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, mobile, onClick }) => {
  return (
    <Link
      to={to}
      className={cn(
        "relative gold-border font-light tracking-wide transition-colors hover:text-gold",
        mobile ? "text-2xl" : "text-sm",
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default MainNav;
