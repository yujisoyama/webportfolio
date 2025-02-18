import { Experiences } from "./components/experiences";
import { Formations } from "./components/formations";
import Navbar from "./components/header";
import { Profile } from "./components/profile";

function App() {

  return (
    <>
      <Navbar />
      <Profile />
      <Formations />
      <Experiences />
    </>
  );
}

export default App;
