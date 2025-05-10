
import MainNav from '@/components/MainNav';
import AnimatedSection from '@/components/AnimatedSection';
import GalleryCard from '@/components/GalleryCard';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// Dummy data for gallery categories
const galleryCategories = [
  {
    title: "Портреты",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    description: "Индивидуальные и семейные фотосессии",
    url: "/galleries/portraits",
    category: "portraits"
  },
  {
    title: "Природа",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Завораживающие пейзажи и атмосферные снимки",
    url: "/galleries/nature",
    category: "nature"
  },
  {
    title: "Архитектура",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "Современные и исторические сооружения",
    url: "/galleries/architecture",
    category: "architecture"
  },
  {
    title: "Свадьбы",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    description: "Запечатлеем самый важный день вашей жизни",
    url: "/galleries/weddings",
    category: "weddings"
  },
  {
    title: "Портреты в студии",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    description: "Профессиональная студийная съемка",
    url: "/galleries/studio-portraits",
    category: "portraits"
  },
  {
    title: "Streetphoto",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    description: "Городская жизнь в кадре",
    url: "/galleries/street",
    category: "street"
  },
  {
    title: "Путешествия",
    image: "https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1767&q=80",
    description: "Путешествия и дальние страны",
    url: "/galleries/travel",
    category: "travel"
  },
  {
    title: "Животные",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1759&q=80",
    description: "Дикая природа и домашние питомцы",
    url: "/galleries/animals",
    category: "animals"
  },
  {
    title: "Черно-белые",
    image: "https://images.unsplash.com/photo-1482361046637-0226fdcfa3b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Черно-белая фотография в разных жанрах",
    url: "/galleries/bw",
    category: "bw"
  }
];

// Filter categories
const categories = [
  { id: "all", name: "Все" },
  { id: "portraits", name: "Портреты" },
  { id: "nature", name: "Природа" },
  { id: "architecture", name: "Архитектура" },
  { id: "weddings", name: "Свадьбы" },
  { id: "street", name: "Улица" },
  { id: "travel", name: "Путешествия" },
  { id: "animals", name: "Животные" },
  { id: "bw", name: "Черно-белые" }
];

const GalleriesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredGalleries = activeCategory === "all" 
    ? galleryCategories 
    : galleryCategories.filter(gallery => gallery.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation */}
      <MainNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 bg-black/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6 gold-gradient inline-block">
              Галереи работ
            </h1>
            <p className="text-white/70 text-lg font-light mb-8">
              Исследуйте мои фотографии по различным категориям и стилям.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Filter Categories */}
      <section className="py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm transition-colors",
                    activeCategory === category.id 
                      ? "bg-gold text-dark font-medium" 
                      : "bg-black/30 text-white/70 hover:bg-black/50"
                  )}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredGalleries.map((gallery, index) => (
              <GalleryCard 
                key={gallery.title}
                title={gallery.title}
                image={gallery.image}
                description={gallery.description}
                url={gallery.url}
                delay={index * 100}
              />
            ))}
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

export default GalleriesPage;
