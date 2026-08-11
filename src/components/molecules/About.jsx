import { RevealOnScroll } from "../atoms/RevealOnScroll";
import { translations } from "../../lib/constants/translationAbout";
import PropTypes from "prop-types";

export const About = ({ isSpanish }) => {
  const {
    marker,
    description,
    funFacts,
    skillsTitle,
    skills,
    subtitle,
    educationTitle,
    education,
    workExperience,
  } = translations.about;
  const currentLang = isSpanish ? "es" : "en";

  const skillsGroups = Object.values(skills[currentLang]);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 w-full">
          <p className="section-marker text-center mb-2">
            {"//"} {marker[currentLang]}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-center max-w-2xl mx-auto">
            {description[currentLang]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
            {funFacts[currentLang].map((fact, key) => (
              <div
                key={key}
                className="rounded-2xl p-4 border border-gray-400/15 dark:border-white/10 bg-gray-500/5 dark:bg-white/5"
              >
                <p className="font-mono text-xs text-emerald-500 mb-1">
                  &quot;{fact.label}&quot;
                </p>
                <p className="font-mono text-sm text-gray-700 dark:text-gray-200 break-words">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-gray-800/90 dark:text-gray-100">
            {skillsTitle[currentLang]}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {skillsGroups.map((group, gi) => (
              <div
                key={gi}
                className="rounded-2xl p-4 border border-gray-400/15 dark:border-white/10 bg-gray-500/5 dark:bg-white/5"
              >
                <h4 className="font-mono text-sm text-blue-500 mb-3">
                  {"//"} {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech, ti) => (
                    <span
                      key={ti}
                      className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/25 py-1 px-3 rounded-3xl text-sm transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="section-marker mb-2">
            {"//"} {subtitle[currentLang]}
          </p>
          <div className="mb-14">
            {workExperience[currentLang].map((job, index) => (
              <div
                key={index}
                className="group relative flex flex-col pb-8 pl-7 last:pb-0"
              >
                <div className="absolute bottom-0 left-[calc(0.33rem-0.5px)] top-0 w-px bg-blue-500/20 group-first:top-3" />
                <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full border-[1.5px] border-blue-500 dark:bg-[#0a0a0a] bg-[#f3f4f6]" />
                <p className="font-mono text-sm text-emerald-500 mb-1">
                  <time dateTime={job.period.replace(" - ", "/")}>
                    {job.period}
                  </time>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    · {job.location}
                  </span>
                </p>
                <h4 className="font-semibold text-gray-800/90 dark:text-gray-100">
                  {job.position}
                  <span className="text-gray-500 dark:text-gray-400">
                    {" "}
                    @ {job.company}
                  </span>
                </h4>
                <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                  {job.description}
                </p>
              </div>
            ))}
          </div>

          <p className="section-marker mb-2">
            {"//"} {educationTitle[currentLang]}
          </p>
          <div className="rounded-2xl p-5 border border-gray-400/15 dark:border-white/10 bg-gray-500/5 dark:bg-white/5">
            <p className="font-mono text-sm text-emerald-500 mb-1">
              {education[currentLang].period}
            </p>
            <h4 className="font-semibold text-gray-800/90 dark:text-gray-100">
              {education[currentLang].degree}
            </h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {education[currentLang].school}
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

About.propTypes = {
  isSpanish: PropTypes.bool.isRequired,
};
