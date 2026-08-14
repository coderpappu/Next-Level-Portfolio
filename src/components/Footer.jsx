import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import PappuDeyLogo from "../assets/logo.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Using Formspree — replace YOUR_FORM_ID with your actual Formspree ID
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", projectType: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch {
      // Fallback: mailto
      window.location.href = `mailto:pappudeydeveloper@gmail.com?subject=Project Inquiry: ${formData.projectType}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    }
    setIsSubmitting(false);
  };

  return (
    <footer id="contact" className="pt-16 pb-8">
      {/* Contact Section Header */}
      <div className="text-center mb-12">
        <h3
          className="text-3xl lg:text-5xl font-sora font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #0ea5ea, #0dd1d1 51%, #0ea5ea)",
          }}
        >
          Let&apos;s Build Something Great Together
        </h3>
        <p className="text-[#ffffffa0] mt-3 font-sora text-base max-w-2xl mx-auto">
          Have a project in mind? Let&apos;s discuss how I can help you build
          it. Book a free discovery call or send me a message.
        </p>
      </div>

      {/* Contact Form + Info Grid */}
      <div className="flex flex-col lg:flex-row gap-10 mb-16">
        {/* Contact Form */}
        <div className="w-full lg:w-[60%]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="flex-1 px-4 py-3 text-slate-100 bg-[#172442] border border-slate-600/30 rounded-lg outline-none focus:border-[#0EABE6] transition-colors duration-300 font-sora text-sm"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="flex-1 px-4 py-3 text-slate-100 bg-[#172442] border border-slate-600/30 rounded-lg outline-none focus:border-[#0EABE6] transition-colors duration-300 font-sora text-sm"
              />
            </div>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 text-slate-100 bg-[#172442] border border-slate-600/30 rounded-lg outline-none focus:border-[#0EABE6] transition-colors duration-300 font-sora text-sm"
            >
              <option value="">Select project type</option>
              <option value="SaaS Application">SaaS Application</option>
              <option value="Custom Web App">Custom Web Application</option>
              <option value="AI Automation">AI Automation System</option>
              <option value="Technical Consulting">Technical Consulting</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={4}
              className="w-full px-4 py-3 text-slate-100 bg-[#172442] border border-slate-600/30 rounded-lg outline-none focus:border-[#0EABE6] transition-colors duration-300 font-sora text-sm resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-3 bg-[#0EA9E7] hover:bg-[#0c96ca] text-white rounded-full font-sora font-semibold transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                "Sending..."
              ) : submitted ? (
                "✓ Message Sent!"
              ) : (
                <>
                  Send Message <IoSend />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info + Quick Links */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6">
          {/* Calendly Embed Placeholder */}
          <div className="rounded-xl border border-slate-600/30 bg-[#172442] p-6 text-center">
            <h4 className="text-white font-sora font-semibold text-lg mb-2">
              📅 Book a Discovery Call
            </h4>
            <p className="text-slate-400 text-sm mb-4 font-sora">
              Free 15-minute call to discuss your project
            </p>
            <a
              href="https://calendly.com/pappudeydeveloper/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#0ea5ea] to-[#0dd1d1] text-white rounded-full font-sora font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              Schedule Now →
            </a>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div>
              <div className="text-slate-300 font-sora font-semibold text-sm">
                Email
              </div>
              <a
                href="mailto:pappudeydeveloper@gmail.com"
                className="text-[#0EABE6] hover:underline text-sm"
              >
                pappudeydeveloper@gmail.com
              </a>
            </div>
            <div>
              <div className="text-slate-300 font-sora font-semibold text-sm">
                Location
              </div>
              <div className="text-slate-400 text-sm">
                Chattogram, Bangladesh
              </div>
            </div>
            <div>
              <div className="text-slate-300 font-sora font-semibold text-sm">
                WhatsApp
              </div>
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#25D366] hover:underline text-sm"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ffffff15] my-8"></div>

      {/* Bottom row: copyright & social */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-6">
        <div className="w-full h-16 px-3 lg:px-0 flex flex-wrap md:justify-between items-center text-white font-sora gap-5 md:gap-0 justify-center">
          <div className="flex items-center gap-3">
            <img
              src={PappuDeyLogo}
              alt="Pappu Dey"
              loading="lazy"
              className="w-8 h-auto"
            />
            <p className="text-sm text-slate-200">
              © 2025 Pappu Dey — Software Engineer & SaaS Builder
            </p>
          </div>
          <ul className="flex space-x-4">
            <li className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full border border-[#0EABE6] text-[#0EABE6] flex items-center justify-center overflow-hidden group">
              <a
                className="relative z-10 text-[#0EABE6] group-hover:text-white transition duration-300"
                href="https://www.facebook.com/coderpappudey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                </svg>
              </a>
              <span className="absolute inset-0 bg-[#0EABE6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </li>
            <li className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full border border-[#0EABE6] text-[#0EABE6] flex items-center justify-center overflow-hidden group">
              <a
                className="relative z-10 text-[#0EABE6] group-hover:text-white transition duration-300"
                href="https://www.linkedin.com/in/coderpappu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.983" cy="5.009" r="2.188"></circle>
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                </svg>
              </a>
              <span className="absolute inset-0 bg-[#0EABE6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </li>
            <li className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full border border-[#0EABE6] text-[#0EABE6] flex items-center justify-center overflow-hidden group">
              <a
                className="relative z-50 text-[#0EABE6] group-hover:text-white transition duration-300"
                href="https://github.com/coderpappu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                </svg>
              </a>
              <span className="absolute inset-0 bg-[#0EABE6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
