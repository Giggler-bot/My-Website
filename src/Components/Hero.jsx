export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">

      {/* 🌈 Animated Background */}
      <div className="absolute inset-0 z-0">

        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-40 animate-blob"></div>

        <div
          className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40 animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>

        <div
          className="absolute bottom-10 left-40 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-40 animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>

      </div>

      {/* 🧱 CONTENT CONTAINER (YOU WERE MISSING THIS) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-lg md:text-xl uppercase tracking-widest text-neutral-500">
            Frontend Developer • Storyteller
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-tight">
            Hi, I'm Obed
          </h1>

          <p className="text-lg text-neutral-600 max-w-xl mx-auto md:mx-0">
            I build modern web experiences where technology meets storytelling —
            crafting interfaces that feel as intentional as a well-directed scene.
          </p>

          <div className="flex flex-wrap gap-6 pt-4 justify-center md:justify-start">
            <a
              href="#portfolio"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-neutral-300 text-neutral-900 rounded-md hover:border-neutral-900 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-sm max-w-md border border-neutral-200">
            <p className="text-lg md:text-xl text-neutral-600 text-center leading-relaxed italic">
              “Where code meets cinema — crafting digital experiences with a
              storyteller’s touch.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}