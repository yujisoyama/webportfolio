import { Experiences } from "./components/experiences";
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
    </>
  );
}

export default App;
