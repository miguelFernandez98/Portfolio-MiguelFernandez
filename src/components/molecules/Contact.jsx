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
          <h2 className="text-3xl font-bold mb-2 bg-linear-to-br from-blue-500 to-emerald-600 text-center bg-clip-text text-transparent">
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
              className=" disabled:opacity-30 disabled:animate-pulse w-full bg-linear-to-br from-blue-600 to-emerald-600 text-gray-100 py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            >
              {!isLoading ? button[currentLang] : loading[currentLang]}
            </button>
          </form>
          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href="https://github.com/miguelFernandez98"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-400/15 dark:border-white/10 bg-gray-500/5 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
            >
              <svg width="1.4em" height="1.4em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-angel-fernandez-soto-06b8b9252/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-400/15 dark:border-white/10 bg-gray-500/5 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
            >
              <svg width="1.4em" height="1.4em" viewBox="0 0 128 128">
                <path
                  fill="currentColor"
                  d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3M39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1 1 10.49-10.5a10.5 10.5 0 0 1-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
                />
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Miguelfernandez1x1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-400/15 dark:border-white/10 bg-gray-500/5 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
            >
              <svg width="1.4em" height="1.4em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4.5l-8 4.8l-8-4.8V6l8 4.8L20 6z"
                />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

Contact.propTypes = {
  isSpanish: PropTypes.bool.isRequired,
};
