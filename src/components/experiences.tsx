import { LinkedInIcon } from '@/assets/icons/LinkedIn';
import { EXPERIENCES } from '@/utils/constants';
import { highlightWords } from '@/utils/highlightWords';

export function Experiences() {
  return (
    <div className="flex flex-col items-center justify-center gap-14 p-8 mt-8">
      <h1 className="text-primary text-center text-3xl font-bold">
        EXPERIENCES
      </h1>
      {EXPERIENCES.map((exp) => (
        <div
          key={exp.title}
          className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-border shadow-2xl transition hover:-translate-y-1"
        >
          <img src={exp.img} alt={exp.title} className={`${exp.imgStyle}`} />
          {exp.paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="text-primary text-justify text-base/loose w-full"
            >
              {highlightWords(p)}
            </p>
          ))}
          <a href={exp.link} target="_blank" rel="noreferrer">
            <LinkedInIcon className="text-primary w-8 h-8 mt-2 transition hover:cursor-pointer hover:text-secondary" />
          </a>
        </div>
      ))}
    </div>
  );
}
