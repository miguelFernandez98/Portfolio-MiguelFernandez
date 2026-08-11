import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { RevealOnScroll } from "../atoms/RevealOnScroll";
import { translations } from "../../lib/constants/translationsContact";
import PropTypes from "prop-types";

export const Contact = ({ isSpanish }) => {
  const { marker, title, description, name, message, button, loading } =
    translations.contact;
  const currentLang = isSpanish ? "es" : "en";
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } =
      import.meta.env;

    if (!validateEmail(formData.email)) {
      toast.warning(
        isSpanish ? "¡Correo inválido!" : "Invalid email!"
      );
      return;
    }

    if (!VITE_SERVICE_ID || !VITE_TEMPLATE_ID || !VITE_PUBLIC_KEY) {
      toast.error(
        isSpanish
          ? "Faltan las credenciales de EmailJS en tu archivo .env"
          : "Missing EmailJS credentials in your .env file"
      );
      return;
    }

    setIsLoading(true);
    emailjs
      .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, e.target, VITE_PUBLIC_KEY)
      .then(() => {
        toast.success(isSpanish ? "Mensaje enviado!" : "Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error(
          isSpanish
            ? "Oops! Algo salió mal. Por favor, inténtalo de nuevo."
            : "Oops! Something went wrong. Please try again."
        );
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 w-full">
          <p className="section-marker text-center mb-2">
            {"//"} {marker[currentLang]}
          </p>
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-br from-blue-500 to-emerald-600 text-center bg-clip-text text-transparent">
            {title[currentLang]}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
            {description[currentLang]}
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                className="w-full placeholder:text-gray-400/80 bg-gray-500/5 dark:bg-white/5 border border-gray-400/20 dark:border-white/10 rounded-full px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                type="text"
                id="name"
                name="name"
                required
                placeholder={name[currentLang]}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                className="w-full placeholder:text-gray-400/80 bg-gray-500/5 dark:bg-white/5 border border-gray-400/20 dark:border-white/10 rounded-full px-4 py-3  transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                type="text"
                id="email"
                name="email"
                required
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                className="w-full placeholder:text-gray-400/80 bg-gray-500/5 dark:bg-white/5 border border-gray-400/20 dark:border-white/10 rounded-2xl px-4 py-3  transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                id="message"
                name="message"
                required
                rows={5}
                placeholder={message[currentLang]}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                style={{ resize: "none" }}
              />
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className=" disabled:opacity-30 disabled:animate-pulse w-full bg-gradient-to-br from-blue-500 to-emerald-600 text-gray-100 py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            >
              {!isLoading ? button[currentLang] : loading[currentLang]}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

Contact.propTypes = {
  isSpanish: PropTypes.bool.isRequired,
};
