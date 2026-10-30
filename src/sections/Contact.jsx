import React, { useRef, useState, lazy, Suspense } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import useInView from "../hooks/useInView";

const ContactExperience = lazy(() => import("../components/models/contact/ContactExperience"));

class ModelErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.warn("Contact 3D Model Error caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full min-h-[420px] flex flex-col items-center justify-center gap-3 bg-[#0a0c10] text-[#00f0ff] font-mono text-xs">
          <span className="w-8 h-8 rounded-full border-2 border-[#00f0ff]/40 flex items-center justify-center">⚡</span>
          <span>TERMINAL OFFLINE</span>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-3.5 py-1.5 rounded-lg border border-[#00f0ff]/40 hover:bg-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono transition-colors"
          >
            REBOOT WORKSTATION
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const Contact = () => {
  const formRef = useRef(null);
  const [modelContainerRef, isModelInView] = useInView({ rootMargin: "300px 0px", once: true });
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
          sub="Direct Communication & Engineering Opportunities"
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
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe project requirements, timeline, or engineering role..."
                    required
                    disabled={loading}
                    className="w-full bg-black-200/80 border border-white-50/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_0_1px_#00f0ff,0_0_20px_rgba(0,240,255,0.35)] font-mono placeholder:text-white-50/30 transition-all duration-300 resize-none"
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
          <div className="xl:col-span-7 min-h-[420px]" ref={modelContainerRef}>
            <div className="bg-[#0a0c10] border border-white-50/15 w-full h-full min-h-[420px] hover:cursor-grab rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 border border-white/10 text-[10px] font-mono text-white-50/70 pointer-events-none flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-ping" />
                <span>3D_TERMINAL // DRAG TO ROTATE</span>
              </div>
              {isModelInView ? (
                <ModelErrorBoundary>
                  <Suspense
                    fallback={
                      <div className="w-full h-full min-h-[420px] flex flex-col items-center justify-center font-mono text-xs text-[#00f0ff] gap-3 bg-[#0a0c10]">
                        <span className="w-6 h-6 border-2 border-[#00f0ff] border-t-transparent rounded-full animate-spin" />
                        <span>INITIALIZING 3D WORKSTATION...</span>
                      </div>
                    }
                  >
                    <ContactExperience />
                  </Suspense>
                </ModelErrorBoundary>
              ) : (
                <div className="w-full h-full min-h-[420px] flex items-center justify-center text-white-50/20 font-mono text-xs bg-[#0a0c10]">
                  INITIALIZING...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
