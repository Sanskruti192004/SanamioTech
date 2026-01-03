import { Mail, Phone } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative w-full px-6 py-24">
      {/* Wrapper */}
      <div
        className="max-w-6xl mx-auto text-center
                   border border-white/15 rounded-3xl
                   bg-white/5 backdrop-blur-xl
                   px-8 py-16"
      >
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
          ✨
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your <br className="hidden sm:block" /> Business?
        </h2>

        {/* Description */}
        <p className="text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Let's discuss your project and create something amazing together. Our
          team is ready to bring your vision to life with cutting-edge technology
          and innovative solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="inline-flex items-center justify-center gap-2
                       rounded-lg bg-slate-900 px-6 py-3
                       text-white font-semibold
                       hover:bg-slate-800 transition"
          >
            <Mail className="w-5 h-5" />
            Get Free Consultation
          </button>

          <button
            className="inline-flex items-center justify-center gap-2
                       rounded-lg border border-white/30
                       px-6 py-3 text-white font-semibold
                       hover:bg-white/10 transition"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </button>
        </div>
      </div>
    </section>
  );
}
