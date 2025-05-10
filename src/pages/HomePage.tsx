
import MainNav from '@/components/MainNav';
import HomeSlider from '@/components/HomeSlider';
import GalleryCard from '@/components/GalleryCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Dummy data for slider
const sliderImages = [
  {
    url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Раскрываем истории через изображения",
    subtitle: "Профессиональная фотография, которая передаст ваши эмоции"
  },
  {
    url: "https://images.unsplash.com/photo-1509805225007-73e8ba4f5a25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Каждый момент бесценен",
    subtitle: "Запечатлите важные моменты вашей жизни"
  },
  {
    url: "https://images.unsplash.com/photo-1610108703114-a3921971fe3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Создаем визуальные истории",
    subtitle: "От портретов до пейзажей — качество в каждом кадре"
  }
];

// Dummy data for gallery categories
const galleryCategories = [
  {
    title: "Портреты",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    description: "Индивидуальные и семейные фотосессии",
    url: "/galleries/portraits"
  },
  {
    title: "Природа",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Завораживающие пейзажи и атмосферные снимки",
    url: "/galleries/nature"
  },
  {
    title: "Архитектура",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "Современные и исторические сооружения",
    url: "/galleries/architecture"
  },
  {
    title: "Свадьбы",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    description: "Запечатлеем самый важный день вашей жизни",
    url: "/galleries/weddings"
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation */}
      <MainNav />
      
      {/* Hero Section with Slider */}
      <section id="hero" className="h-screen">
        <HomeSlider slides={sliderImages} />
      </section>
      
      {/* Gallery Categories Section */}
      <section id="galleries" className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-3 gold-gradient inline-block">Галереи</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Исследуйте мои работы по категориям. Каждая фотография рассказывает свою историю и передает 
              особую атмосферу момента.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {galleryCategories.map((category, index) => (
              <GalleryCard 
                key={category.title}
                title={category.title}
                image={category.image}
                description={category.description}
                url={category.url}
                delay={index * 100}
              />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button asChild className="border-gold text-gold hover:bg-gold hover:text-dark">
              <Link to="/galleries">Смотреть все галереи</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-6 bg-black/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Фотограф" 
                  className="rounded-md w-full object-cover aspect-[3/4]"
                />
                <div className="absolute -bottom-6 -right-6 h-48 w-48 border-2 border-gold rounded-md hidden md:block"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={200}>
              <h2 className="text-3xl md:text-4xl font-playfair mb-6 gold-gradient inline-block">Обо мне</h2>
              <p className="text-white/80 mb-4 font-light">
                Уже более 10 лет я занимаюсь профессиональной фотографией. За это время я разработал свой уникальный стиль, 
                который сочетает классические техники с современными подходами.
              </p>
              <p className="text-white/80 mb-6 font-light">
                Для меня фотография — это не просто работа, а искусство передачи эмоций и историй через визуальные образы. 
                Каждый проект — это новый вызов и возможность создать что-то особенное.
              </p>
              <div className="flex flex-wrap gap-6 text-center mb-8">
                <div className="flex-1">
                  <span className="text-gold text-3xl font-playfair">10+</span>
                  <p className="text-white/60 text-sm">Лет опыта</p>
                </div>
                <div className="flex-1">
                  <span className="text-gold text-3xl font-playfair">500+</span>
                  <p className="text-white/60 text-sm">Довольных клиентов</p>
                </div>
                <div className="flex-1">
                  <span className="text-gold text-3xl font-playfair">15</span>
                  <p className="text-white/60 text-sm">Наград</p>
                </div>
              </div>
              <Button asChild className="border-gold text-gold hover:bg-gold hover:text-dark">
                <Link to="/about">Подробнее обо мне</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <a href="/" className="text-xl md:text-2xl font-playfair tracking-wider gold-gradient mb-4 inline-block">
              ФОТОМАСТЕР
            </a>
            <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
              Профессиональная фотография для любых задач. Свяжитесь со мной, чтобы обсудить ваш проект.
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="text-white hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="text-white hover:text-gold transition-colors">Facebook</a>
              <a href="#" className="text-white hover:text-gold transition-colors">Twitter</a>
            </div>
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} ФОТОМАСТЕР. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
