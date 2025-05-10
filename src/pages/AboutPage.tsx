import MainNav from "@/components/MainNav";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation */}
      <MainNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 bg-black/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6 gold-gradient inline-block">
              Обо мне
            </h1>
            <p className="text-white/70 text-lg font-light mb-8">
              Профессиональный фотограф с более чем 10-летним опытом создания
              неповторимых историй через объектив.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="relative sm:sticky sm:top-32">
                <img
                  src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Фотограф"
                  className="rounded-md w-full object-cover aspect-[4/5] sm:aspect-[3/4]"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-32 sm:h-48 w-32 sm:w-48 border-2 border-gold rounded-md hidden sm:block"></div>
              </div>
            </AnimatedSection>

            <div className="space-y-10 sm:space-y-12">
              <AnimatedSection
                direction="right"
                delay={200}
                className="space-y-4 sm:space-y-6"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair gold-gradient inline-block">
                  Моя история
                </h2>
                <p className="text-white/80 font-light text-sm sm:text-base">
                  Я начал свой путь в фотографии еще в студенческие годы, когда
                  получил в подарок свою первую пленочную камеру. То, что
                  начиналось как хобби, постепенно превратилось в страсть, а
                  затем в профессию.
                </p>
                <p className="text-white/80 font-light text-sm sm:text-base">
                  После окончания специализированных курсов и многих лет
                  практики я разработал свой собственный узнаваемый стиль,
                  который ценят мои клиенты. Работа с естественным освещением,
                  внимание к деталям и умение поймать эмоциональные моменты –
                  ключевые особенности моего подхода.
                </p>
              </AnimatedSection>

              <AnimatedSection
                direction="right"
                delay={300}
                className="space-y-4 sm:space-y-6"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair gold-gradient inline-block">
                  Мой подход
                </h2>
                <p className="text-white/80 font-light text-sm sm:text-base">
                  Каждая фотосессия для меня – это не просто работа, а
                  творческий процесс. Я стремлюсь создать комфортную атмосферу,
                  чтобы раскрыть естественную красоту и индивидуальность каждого
                  клиента.
                </p>
                <p className="text-white/80 font-light text-sm sm:text-base">
                  В работе я использую профессиональное оборудование Canon и
                  постоянно совершенствую свои навыки, изучая новые техники и
                  тенденции в мире фотографии.
                </p>
              </AnimatedSection>

              <AnimatedSection
                direction="right"
                delay={400}
                className="space-y-4 sm:space-y-6"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair gold-gradient inline-block">
                  Достижения
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-center">
                  <div className="bg-black/30 p-3 sm:p-4 rounded-md">
                    <div className="text-2xl sm:text-3xl font-playfair text-gold mb-1">
                      10+
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm">
                      Лет опыта
                    </p>
                  </div>
                  <div className="bg-black/30 p-3 sm:p-4 rounded-md">
                    <div className="text-2xl sm:text-3xl font-playfair text-gold mb-1">
                      500+
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm">
                      Довольных клиентов
                    </p>
                  </div>
                  <div className="bg-black/30 p-3 sm:p-4 rounded-md">
                    <div className="text-2xl sm:text-3xl font-playfair text-gold mb-1">
                      15
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm">
                      Профессиональных наград
                    </p>
                  </div>
                  <div className="bg-black/30 p-3 sm:p-4 rounded-md">
                    <div className="text-2xl sm:text-3xl font-playfair text-gold mb-1">
                      20+
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm">
                      Публикаций
                    </p>
                  </div>
                  <div className="bg-black/30 p-3 sm:p-4 rounded-md">
                    <div className="text-2xl sm:text-3xl font-playfair text-gold mb-1">
                      5
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm">
                      Персональных выставок
                    </p>
                  </div>
                  <div className="bg-black/30 p-3 sm:p-4 rounded-md">
                    <div className="text-2xl sm:text-3xl font-playfair text-gold mb-1">
                      100к+
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm">
                      Подписчиков
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                direction="right"
                delay={500}
                className="mt-6 sm:mt-8"
              >
                <Button
                  asChild
                  className="border-gold text-gold hover:bg-gold hover:text-dark"
                >
                  <Link to="/contact">Связаться со мной</Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <a
              href="/"
              className="text-xl md:text-2xl font-playfair tracking-wider gold-gradient mb-4 inline-block"
            >
              ФОТОМАСТЕР
            </a>
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
    </div>
  );
};

export default AboutPage;
