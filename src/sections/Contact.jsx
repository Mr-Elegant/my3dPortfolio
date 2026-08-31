import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. 🚀",
      });
      // Reset form on success
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Oops! Something went wrong while sending. Please try again or reach out directly.",
      });
    } finally {
      setLoading(false);
      // Clear status message after 6 seconds
      setTimeout(() => {
        setStatus(null);
      }, 6000);
    }
  };

  return (
    <section id="contact" className="w-full flex-center section-padding relative z-20">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 xl:px-12">
        <TitleHeader
          title="Encrypted Uplink – Let’s Connect"
          sub="🛰️ Establish direct frequency connection for lead engineering & architecture opportunities 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="relative flex-center bg-black-100/90 border border-white-50/10 rounded-2xl p-8 md:p-10 shadow-[0_0_30px_rgba(0,240,255,0.05)] backdrop-blur-xl">
              
              {/* HUD Corner Reticles */}
              <span className="hud-corner-cross -top-1 -left-1 opacity-70" />
              <span className="hud-corner-cross -top-1 -right-1 opacity-70" />
              <span className="hud-corner-cross -bottom-1 -left-1 opacity-70" />
              <span className="hud-corner-cross -bottom-1 -right-1 opacity-70" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >
                {/* HUD Header Status */}
                <div className="flex items-center justify-between text-[11px] font-mono text-white-50/60 pb-3 border-b border-white-50/10 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse inline-block" />
                    <span className="text-[#00ff88]">UPLINK: ONLINE</span>
                  </div>
                  <span className="text-white-50/40">TLS 1.3 ENCRYPTED</span>
                </div>

                {status && (
                  <div
                    className={`p-4 rounded-xl text-sm font-medium border flex items-center gap-3 transition-all duration-300 animate-[fadeIn_0.3s_ease-out] ${
                      status.type === "success"
                        ? "bg-[#00ff88]/10 border-[#00ff88]/40 text-[#00ff88]"
                        : "bg-[#ff003c]/10 border-[#ff003c]/40 text-[#ff4d4d]"
                    }`}
                  >
                    <span>{status.type === "success" ? "✓" : "⚠"}</span>
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="group">
                  <label htmlFor="name" className="block text-xs font-mono text-white-50/80 mb-2 uppercase tracking-wide group-focus-within:text-[#00f0ff] transition-colors">
                    // SENDER_COORDINATE_NAME:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name or organization..."
                    required
                    disabled={loading}
                    className="w-full bg-black-200/80 border border-white-50/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_0_1px_#00f0ff,0_0_20px_rgba(0,240,255,0.35)] font-mono placeholder:text-white-50/30 transition-all duration-300"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-xs font-mono text-white-50/80 mb-2 uppercase tracking-wide group-focus-within:text-[#00f0ff] transition-colors">
                    // COMM_UPLINK_EMAIL:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your corporate/personal email..."
                    required
                    disabled={loading}
                    className="w-full bg-black-200/80 border border-white-50/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_0_1px_#00f0ff,0_0_20px_rgba(0,240,255,0.35)] font-mono placeholder:text-white-50/30 transition-all duration-300"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-xs font-mono text-white-50/80 mb-2 uppercase tracking-wide group-focus-within:text-[#00f0ff] transition-colors">
                    // ENCRYPTED_PAYLOAD_MESSAGE:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe project requirements, timeline, or engineering role..."
                    rows="4"
                    required
                    disabled={loading}
                    className="w-full bg-black-200/80 border border-white-50/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_0_1px_#00f0ff,0_0_20px_rgba(0,240,255,0.35)] font-mono placeholder:text-white-50/30 resize-none transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3.5 px-6 rounded-xl font-mono text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 border ${
                    loading
                      ? "bg-[#00f0ff]/20 text-[#00f0ff] border-[#00f0ff]/40 cursor-not-allowed animate-pulse"
                      : "bg-[#00f0ff] text-black hover:bg-[#00ff88] hover:shadow-[0_0_25px_rgba(0,255,136,0.4)] border-[#00f0ff]"
                  }`}
                >
                  {loading ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                      <span>TRANSMITTING ENCRYPTED PACKET...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT FREQUENCY [ENCRYPT &amp; SEND]</span>
                      <span>⚡</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-black-200 border border-white/10 w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
