import profilePic from "../assets/Gg.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-neutral-50 relative py-24 text-neutral-300 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Image */}
          <div className="flex justify-center md:justify-start">
            <div className="">
              <img
                src={profilePic}
                alt="Obed — Frontend Developer & Film Writer"
                className="w-full h-auto "
              />

              {/* Vignette overlay — keep for the cinematic feel */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/50 via-transparent to-gray-950/20 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Obed
              <span className="block text-lg sm:text-xl font-normal tracking-widest text-amber-400 uppercase mt-1">
                Developer & Storyteller
              </span>
            </h2>

            <div className="w-24 h-px bg-linear-to-r from-amber-400 to-transparent" />
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              I'm a frontend developer and film writer based in Ghana, drawn to
              the intersection where technology meets human emotion. I build
              interfaces that don't just function — they feel. Whether it's a
              carefully crafted UI or a screenplay that lingers after the
              credits roll, my work is rooted in one question:{" "}
              <em className="text-neutral-300 not-italic">
                "Does this move someone?"
              </em>
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              With a background spanning React ecosystems and narrative writing,
              I bring a director's eye for composition and a developer's
              precision to every project I take on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
