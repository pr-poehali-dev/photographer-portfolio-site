import MainNav from "@/components/MainNav";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";

// Dummy data for services
const services = [
  {
    title: "Портретная фотосессия",
    description:
      "Индивидуальная фотосессия для создания выразительных портретов",
    price: "от 5 000 ₽",
    icon: "User",
    features: [
      "1 час съемки",
      "10 обработанных фотографий",
      "Онлайн-галерея всех фотографий",
      "Консультация по подготовке к съемке",
    ],
  },
  {
    title: "Семейная фотосессия",
    description: "Запечатлите теплые моменты с вашими близкими",
    price: "от 7 000 ₽",
    icon: "Users",
    features: [
      "2 часа съемки",
      "20 обработанных фотографий",
      "Онлайн-галерея всех фотографий",
      "Выбор локации",
      "Консультация по подготовке",
    ],
  },
  {
    title: "Свадебная фотосъемка",
    description: "Полный день съемки вашего особенного дня",
    price: "от 25 000 ₽",
    icon: "Heart",
    features: [
      "8-12 часов съемки",
      "Более 300 обработанных фотографий",
      "Предварительная встреча",
      "Составление таймлайна съемки",
      "USB-накопитель с фотографиями",
      "Онлайн-галерея",
    ],
  },
  {
    title: "Коммерческая фотосъемка",
    description: "Профессиональные фотографии для вашего бизнеса",
    price: "от 10 000 ₽",
    icon: "Briefcase",
    features: [
      "3-4 часа съемки",
      "30 обработанных фотографий",
      "Права на коммерческое использование",
      "Экспресс-обработка (по запросу)",
      "Возможность продления съемки",
    ],
  },
  {
    title: "Предметная съемка",
    description: "Качественные фотографии товаров и предметов",
    price: "от 3 000 ₽",
    icon: "Package",
    features: [
      "До 10 предметов",
      "Белый/черный/цветной фон на выбор",
      "Обработка всех фотографий",
      "Подготовка фото для интернет-магазина",
    ],
  },
  {
    title: "Фотосъемка мероприятий",
    description: "Репортажная съемка конференций, вечеринок, корпоративов",
    price: "от 8 000 ₽",
    icon: "Calendar",
    features: [
      "До 4 часов съемки",
      "Более 100 обработанных фотографий",
      "Оперативная передача материалов",
      "Онлайн-галерея для всех участников",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation */}
      <MainNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 bg-black/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6 gold-gradient inline-block">
              Услуги и цены
            </h1>
            <p className="text-white/70 text-lg font-light mb-8">
              Широкий спектр фотоуслуг для различных задач — от портретов и
              семейных съемок до коммерческих проектов.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                price={service.price}
                icon={service.icon}
                features={service.features}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 md:px-6 bg-black/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            <AnimatedSection direction="left" className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair gold-gradient inline-block mb-4 sm:mb-6">
                Дополнительная информация
              </h2>
              <div className="space-y-3 sm:space-y-4 text-white/80 font-light text-sm sm:text-base">
                <p>
                  Все указанные цены являются базовыми. Окончательная стоимость
                  зависит от сложности проекта, локации, дополнительных
                  требований и сроков выполнения.
                </p>
                <p>Для всех типов съемок доступны дополнительные услуги:</p>
                <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Дополнительное время съемки: от 2 000 ₽/час</li>
                  <li>Дополнительная обработка фотографий: от 200 ₽/фото</li>
                  <li>Ретушь кожи, сложная обработка: от 500 ₽/фото</li>
                  <li>Срочная обработка (24 часа): +50% к стоимости</li>
                  <li>Печать фотоальбома: от 5 000 ₽</li>
                  <li>Выезд за пределы города: от 1 000 ₽</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection
              direction="right"
              className="bg-black/20 p-4 sm:p-6 rounded-md border border-gold/20"
            >
              <h3 className="text-lg sm:text-xl font-playfair mb-3 sm:mb-4 text-gold">
                Как заказать съемку
              </h3>
              <ol className="space-y-3 sm:space-y-4 text-white/80 font-light text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-gold/20 text-gold text-xs sm:text-sm">
                    1
                  </span>
                  <span>
                    Свяжитесь со мной через форму на сайте или по телефону
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-gold/20 text-gold text-xs sm:text-sm">
                    2
                  </span>
                  <span>
                    Обсудим детали съемки, ваши пожелания и требования
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-gold/20 text-gold text-xs sm:text-sm">
                    3
                  </span>
                  <span>Выберем дату, время и место проведения фотосессии</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-gold/20 text-gold text-xs sm:text-sm">
                    4
                  </span>
                  <span>Предоплата 30% для бронирования даты</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-gold/20 text-gold text-xs sm:text-sm">
                    5
                  </span>
                  <span>Проведение фотосессии</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-gold/20 text-gold text-xs sm:text-sm">
                    6
                  </span>
                  <span>
                    Обработка материалов и передача готовых фотографий
                  </span>
                </li>
              </ol>
            </AnimatedSection>
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

export default ServicesPage;
