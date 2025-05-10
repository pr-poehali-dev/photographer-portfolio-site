
import MainNav from '@/components/MainNav';
import AnimatedSection from '@/components/AnimatedSection';
import BlogPost from '@/components/BlogPost';

// Dummy data for blog posts
const blogPosts = [
  {
    title: "Как подготовиться к фотосессии: 10 советов от профессионала",
    excerpt: "Фотосессия — это не только работа фотографа, но и совместный процесс. В этой статье я расскажу, как правильно подготовиться к съемке, чтобы получить максимально качественный результат.",
    image: "https://images.unsplash.com/photo-1551737823-acfe4060cb9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: new Date("2024-04-15"),
    slug: "how-to-prepare-for-photoshoot"
  },
  {
    title: "Тренды свадебной фотографии 2024 года",
    excerpt: "Свадебная фотография постоянно эволюционирует, появляются новые стилистические решения и технические приемы. Давайте рассмотрим основные тренды, которые будут популярны в свадебной фотографии в этом году.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    date: new Date("2024-03-20"),
    slug: "wedding-photography-trends-2024"
  },
  {
    title: "Работа с естественным освещением в портретной фотографии",
    excerpt: "Естественное освещение — один из самых красивых и доступных инструментов фотографа. В этой статье я делюсь своими секретами работы с натуральным светом для создания выразительных портретов.",
    image: "https://images.unsplash.com/photo-1542038383244-3219215abd53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    date: new Date("2024-02-28"),
    slug: "natural-light-portrait-photography"
  },
  {
    title: "Секреты удачной предметной съемки",
    excerpt: "Предметная фотография требует особого внимания к деталям и правильной настройки света. Разбираем основные техники и приемы для качественных снимков товаров и предметов.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1764&q=80",
    date: new Date("2024-01-15"),
    slug: "product-photography-secrets"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation */}
      <MainNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 bg-black/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6 gold-gradient inline-block">
              Блог
            </h1>
            <p className="text-white/70 text-lg font-light mb-8">
              Делюсь советами, опытом и интересными историями из мира фотографии.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="space-y-16">
            {blogPosts.map((post, index) => (
              <BlogPost
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                slug={post.slug}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 px-4 md:px-6 bg-black/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-playfair gold-gradient inline-block mb-8">
              Категории
            </h2>
            <div className="flex flex-wrap gap-4">
              <CategoryTag name="Портретная фотография" count={12} />
              <CategoryTag name="Советы фотографам" count={18} />
              <CategoryTag name="Свадебная фотография" count={9} />
              <CategoryTag name="Предметная съемка" count={5} />
              <CategoryTag name="Работа со светом" count={7} />
              <CategoryTag name="Обработка фотографий" count={14} />
              <CategoryTag name="История фотографии" count={3} />
              <CategoryTag name="Фотооборудование" count={6} />
            </div>
          </AnimatedSection>
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

const CategoryTag = ({ name, count }: { name: string; count: number }) => {
  return (
    <a href="#" className="bg-black/40 border border-gold/10 px-4 py-2 rounded-full text-sm text-white/80 hover:border-gold/30 hover:text-gold transition-colors">
      {name} <span className="text-white/50">({count})</span>
    </a>
  );
};

export default BlogPage;
