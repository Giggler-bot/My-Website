function SkillTag({ children }) {
  return (
    <span
      className="px-3 py-1 text-sm bg-white border border-neutral-200  
  rounded-full text-neutral-700 inline-block mb-2 mr-2 shadow-sm 
  hover:bg-neutral-100 transition"
    >
      {children}
    </span>
  );
}

export default function Skills() {
  const developmentSkills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Git & GitHub",
    "Responsive Design",
    "Performance Optimization",
  ];

  const filmmakingSkills = ["Storyboarding", "Cinematography", "Screenwriting"];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Skills & Expertise
          </h2>
          <p className="mt-6 text-neutral-600 max-w-2xl mx-auto">
            Where engineering meets storytelling — blending technical precision
            with cinematic creativity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Development */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow mt-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                💻Development
              </h3>
              <p>
                {" "}
                Building responsive, scalable, and user-focused web applications
                with modern frontend technologies.
              </p>
              <div className="">
                {developmentSkills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>

            {/* Filmaking */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow mt-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Filmmaking
              </h3>
              <p>
                {" "}
                Crafting narratives that evoke emotion, build tension, and
                create immersive cinematic experiences.
              </p>
              <div>
                {filmmakingSkills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
