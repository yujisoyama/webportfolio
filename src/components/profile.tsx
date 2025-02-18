import { Button } from './ui/button';
import profilePhoto from '../assets/Photo.png';
import cv from '../assets/cv.pdf';

export function Profile() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <img
        src={profilePhoto}
        alt="profile"
        className="rounded-full w-50 h-50 border-secondary border-4"
      />
      <h1 className="text-4xl text-primary font-black text-center sm:text-5xl">
        Hi, I am <span className="text-secondary">Fabio Yuji Soyama</span> 👋
      </h1>
      <h2 className="text-2xl text-secondary font-bold text-center sm:text-3xl">
        Full Stack Sofware Developer
      </h2>
      <p className="text-primary text-justify">
        Graduated in Electrical Engineering, started my professional career as
        Systems Analyst, focused on SCADA (Supervisory Control and Data
        Acquisition) for railway systems. By my passion for programming that I
        have cultivated since my graduation, started my journey in tech area and
        in the last years I have been working as a Full Stack Developer
        specialized in Nest, React, Golang and AWS.
      </p>
      <Button
        className="bg-background border-2 border-secondary text-secondary font-bold transition hover:bg-secondary hover:text-background hover:cursor-pointer"
        onClick={() => window.open(cv, '_blank')}
      >
        resume
      </Button>
    </div>
  );
}
