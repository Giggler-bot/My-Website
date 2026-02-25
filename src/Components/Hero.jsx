export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xl md:text-2xl uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Frontend Developer • Film Writer
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I'm Obed
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Blending technology and storytelling to create visually compelling
            digital experiences and emotionally engaging narratives.
          </p>
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap gap-10">
              <a
                href="#portfolio"
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                View Portfolio
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-gray-800 dark:border-white text-gray-800 dark:text-white rounded-lg hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md max-w-md">
            <p className="flicker text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed italic">
              "Where code meets cinema: Crafting digital experiences with a
              storyteller's touch."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
