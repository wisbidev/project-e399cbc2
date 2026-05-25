"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const TELEGRAM_BOT_URL = "https://t.me/aiteam_bot";

export default function HeroSection() {
  const handleSecondaryCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const pipeline = document.getElementById("pipeline");
    if (pipeline) {
      pipeline.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #0f172a 0%, #030712 100%)",
        }}
      />

      {/* Blue-cyan glow overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 20%, #1d4ed8 0%, transparent 70%)",
        }}
      />

      {/* Subtle cyan accent */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 50% 40%, #06b6d4 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5"
        >
          <Zap className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-sm text-blue-300">
            Tự động hoá 100% từ ý tưởng đến production
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl"
        >
          AI Team.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Không cần thuê dev.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed"
        >
          Chỉ cần nhắn tin Telegram, đội ngũ 4 AI agents sẽ phân tích, thiết kế,
          viết code và deploy sản phẩm cho bạn — không cần thuê dev.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
        >
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 transition-colors duration-200 shadow-lg shadow-blue-600/30"
          >
            Bắt đầu ngay
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleSecondaryCTA}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 hover:border-blue-400 hover:text-blue-300 text-slate-300 font-semibold px-6 py-3 transition-colors duration-200"
          >
            Xem cách hoạt động
          </button>
        </motion.div>
      </div>
    </section>
  );
}
