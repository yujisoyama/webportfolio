import { GithubIcon } from '@/assets/icons/Github';
import { PROJECTS } from '@/utils/constants';

export function Projects() {
  return (
    <div>
      <h1 className="text-primary text-center text-3xl font-bold mt-12">
        PROJECTS
      </h1>
      <div className="flex flex-col items-center justify-center gap-10 p-8 mt-4">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="flex flex-col w-full items-center justify-center gap-8 p-8 border-2 border-border shadow-2xl transition hover:-translate-y-1"
          >
            <h2 className="text-secondary text-2xl font-bold text-center">
              {project.title}
            </h2>
            <p className="text-primary text-justify text-base/loose">
              {project.description}
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="text-secondary font-semibold">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.repositoryLink} target="_blank" rel="noreferrer">
              <GithubIcon className="text-primary w-8 h-8 mt-2 transition hover:cursor-pointer hover:text-secondary" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
