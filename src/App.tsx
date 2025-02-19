import { Contact } from "./components/contact";
import { Experiences } from "./components/experiences";
import { Footer } from "./components/footer";
import { Formations } from "./components/formations";
import Navbar from "./components/header";
import { Profile } from "./components/profile";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

function App() {

  return (
    <>
      <Navbar />
      <Profile />
      <Formations />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
