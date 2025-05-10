
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center">
          <Link
            to="/"
            className="text-xl md:text-2xl font-playfair tracking-wider gold-gradient mb-4 inline-block"
          >
            ФОТОМАСТЕР
          </Link>
          <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
            Профессиональная фотография для любых задач. Свяжитесь со мной,
            чтобы обсудить ваш проект.
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="#"
              className="text-white hover:text-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-white hover:text-gold transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-white hover:text-gold transition-colors"
            >
              Twitter
            </a>
          </div>
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} ФОТОМАСТЕР. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
