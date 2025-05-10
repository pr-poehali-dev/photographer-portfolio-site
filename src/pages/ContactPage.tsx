import MainNav from "@/components/MainNav";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/ui/icon";
import Footer from "@/components/common/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation */}
      <MainNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 bg-black/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6 gold-gradient inline-block">
              Контакты
            </h1>
            <p className="text-white/70 text-lg font-light mb-8">
              Свяжитесь со мной, чтобы обсудить ваш будущий проект или задать
              вопросы.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <h2 className="text-2xl md:text-3xl font-playfair gold-gradient inline-block mb-8">
                Свяжитесь со мной
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-gold mt-1" size={24} />
                  <div>
                    <h3 className="text-lg mb-2">Адрес студии</h3>
                    <p className="text-white/70 font-light">
                      г. Москва, ул. Фотографов, д. 42, офис 301
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-gold mt-1" size={24} />
                  <div>
                    <h3 className="text-lg mb-2">Телефон</h3>
                    <p className="text-white/70 font-light">
                      <a
                        href="tel:+79001234567"
                        className="hover:text-gold transition-colors"
                      >
                        +7 (900) 123-45-67
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-gold mt-1" size={24} />
                  <div>
                    <h3 className="text-lg mb-2">Email</h3>
                    <p className="text-white/70 font-light">
                      <a
                        href="mailto:info@photomaster.com"
                        className="hover:text-gold transition-colors"
                      >
                        info@photomaster.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-gold mt-1" size={24} />
                  <div>
                    <h3 className="text-lg mb-2">Часы работы</h3>
                    <p className="text-white/70 font-light">
                      Пн-Пт: 10:00 - 19:00
                      <br />
                      Сб: 11:00 - 17:00
                      <br />
                      Вс: Выходной
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Share2" className="text-gold mt-1" size={24} />
                  <div>
                    <h3 className="text-lg mb-2">Социальные сети</h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-white/70 hover:text-gold transition-colors"
                      >
                        <Icon name="Instagram" size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-white/70 hover:text-gold transition-colors"
                      >
                        <Icon name="Facebook" size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-white/70 hover:text-gold transition-colors"
                      >
                        <Icon name="Twitter" size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-white/70 hover:text-gold transition-colors"
                      >
                        <Icon name="Youtube" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <h2 className="text-2xl md:text-3xl font-playfair gold-gradient inline-block mb-8">
                Форма связи
              </h2>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-4 md:px-6 bg-black/20">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-playfair gold-gradient inline-block mb-4">
              Как нас найти
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Студия расположена в 5 минутах ходьбы от станции метро
              "Фотографская"
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="w-full h-96 bg-black/30 rounded-md overflow-hidden relative">
              {/* Replace with actual map embed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/50">
                  Здесь будет карта. Для внедрения Google Maps или Яндекс.Карт
                  необходимо добавить соответствующий API-ключ.
                </p>
              </div>
            </div>
          </AnimatedSection>
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

export default ContactPage;
