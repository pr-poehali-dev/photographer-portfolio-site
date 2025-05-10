import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import AnimatedSection from "./AnimatedSection";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо! Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <AnimatedSection className={cn("", className)}>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-white/80">
              Ваше имя
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Иван Иванов"
              required
              className="bg-black/20 border-gold/20 focus-visible:ring-gold/30 text-sm sm:text-base"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-white/80">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              required
              className="bg-black/20 border-gold/20 focus-visible:ring-gold/30 text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm text-white/80">
            Телефон
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (___) ___-__-__"
            className="bg-black/20 border-gold/20 focus-visible:ring-gold/30 text-sm sm:text-base"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm text-white/80">
            Сообщение
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Расскажите о вашем проекте или задайте вопрос..."
            rows={4}
            required
            className="bg-black/20 border-gold/20 focus-visible:ring-gold/30 text-sm sm:text-base"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto border-gold text-gold bg-transparent hover:bg-gold hover:text-dark"
        >
          {isSubmitting ? "Отправка..." : "Отправить сообщение"}
        </Button>
      </form>
    </AnimatedSection>
  );
};

export default ContactForm;
