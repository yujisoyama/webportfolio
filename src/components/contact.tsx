import { CONTACT } from '@/utils/constants';

export function Contact() {
  return (
    <div id='contact' className="my-12">
      <h1 className="text-primary text-center text-3xl font-bold">
        GET IN TOUCH
      </h1>
      <div className="flex items-center justify-center gap-10 p-8">
        {CONTACT.map((contact) => (
          <div key={contact.title}>
            <a
              href={contact.link}
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              <contact.icon className="w-12 h-12 transition hover:cursor-pointer hover:text-secondary" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
