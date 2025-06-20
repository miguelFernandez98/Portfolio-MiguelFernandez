import { useState } from "react";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../atoms/RevealOnScroll";
import { translations } from "../../lib/constants/translationsContact";
import PropTypes from "prop-types";

export const Contact = ({ isSpanish }) => {
  const { title, name, message, button, loading } = translations.contact;
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
    setIsLoading(true);
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      toast.warning("¡invalid email!");
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success(currentLang ? "Mensaje enviado!" : "Message sent!");
        setFormData({ name: "", email: "", message: "" });
        setIsLoading(false);
      })
      .catch(
        () =>
          toast.error(
            currentLang
              ? "Oops! Algo salió mal. Por favor, inténtalo de nuevo."
              : "Oops! Something went wrong. Please try again."
          ),
        setIsLoading(false)
      );
  };
  
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-full min-w-[300px] md:w-[500px] sm:w-2/3">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-br from-blue-500 to-emerald-600 text-center bg-clip-text text-transparent">
            {" "}
            {title[currentLang]}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                className="w-full placeholder:text-gray-400/80 bg-white/5 border border-gray-300 dark:border-white/10 rounded-full px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
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
                className="w-full placeholder:text-gray-400/80 bg-white/5 border border-gray-300 dark:border-white/10 rounded-full px-4 py-3  transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
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
                className="w-full placeholder:text-gray-400/80 bg-white/5 border border-gray-300 dark:border-white/10 rounded-4xl px-4 py-3  transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
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
              className=" disabled:opacity-30 disabled:animate-pulse w-full bg-blue-500 text-gray-100 py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
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
