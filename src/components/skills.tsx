import { SKILLS } from '@/utils/constants';

export function Skills() {
  return (
    <div id='skills'>
      <h1 className="text-primary text-center text-3xl font-bold mt-12">
        SKILLS
      </h1>
      <div className="flex flex-wrap justify-center gap-5 mt-5 p-4 mx-auto sm:max-w-150">
        {SKILLS.map((skill) => (
          <p
            key={skill}
            className="py-3 px-6 text-primary text-center font-bold shadow-md bg-border back transition hover:-translate-y-1"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
}
