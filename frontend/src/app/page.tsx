import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <HeroSection />
      <section id="pipeline" className="min-h-[50vh] bg-[#0a0a0f] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Từ ý tưởng đến deploy hoàn toàn tự động
          </h2>
          <p className="text-slate-400">Pipeline section coming soon...</p>
        </div>
      </section>
    </main>
  );
}
