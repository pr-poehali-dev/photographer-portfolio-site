
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <MainNav />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <span className="text-gold text-9xl font-playfair mb-4">404</span>
        <h1 className="text-3xl md:text-4xl font-playfair mb-4">Страница не найдена</h1>
        <p className="text-white/70 mb-8 max-w-md">
          К сожалению, запрашиваемая страница не существует. Возможно, она была удалена или у вас неверная ссылка.
        </p>
        <Button asChild className="border-gold text-gold hover:bg-gold hover:text-dark">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
