import { FORMATIONS } from '@/utils/constants';
import { highlightWords } from '@/utils/highlightWords';

export function Formations() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-primary text-center text-3xl font-bold">FORMATION</h1>
      {FORMATIONS.map((f) => (
        <div
          key={f.title}
          className="flex flex-col items-center justify-center gap-5 p-8 border-2 border-border shadow-2xl transition hover:-translate-y-1"
        >
          <img
            src={f.img}
            alt={f.title}
            className={f.imgStyle}
          />
          <p className="text-primary text-justify text-base/loose">{highlightWords(f.description)}</p>
        </div>
      ))}
    </div>
  );
}
