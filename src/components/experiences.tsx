import { EXPERIENCES } from '@/utils/constants';
import { highlightWords } from '@/utils/highlightWords';

export function Experiences() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-primary text-center text-3xl font-bold">EXPERIENCES</h1>
      {EXPERIENCES.map((f) => (
        <div
          key={f.title}
          className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-border shadow-2xl transition hover:-translate-y-1"
        >
          <img src={f.img} alt={f.title} className={`${f.imgStyle}`} />
          {f.paragraphs.map((p, idx) => (
            <p key={idx} className='text-primary text-justify'>{highlightWords(p)}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
