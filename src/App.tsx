import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Prologue from "./components/Prologue";
import Intermezzo from "./components/Intermezzo";
import Eras from "./components/Eras";
import Helmets from "./components/Helmets";
import Anatomy from "./components/Anatomy";
import Weights from "./components/Weights";
import Forge from "./components/Forge";
import Myths from "./components/Myths";
import Glossary from "./components/Glossary";
import { IMG } from "./data/content";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink font-body text-bone antialiased">
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Prologue />
        <Intermezzo
          image={IMG.mail}
          alt="Macro di una maglia di anelli ribattuti medievali, illuminata lateralmente"
          kicker="Intermezzo · La maglia"
          quote="Trentamila anelli, uno per uno: prima della piastra, la vera arma era la pazienza."
          source="Ogni anello chiuso a rivetto, a mano"
        />
        <Eras />
        <Helmets />
        <Anatomy />
        <Weights />
        <Forge />
        <Intermezzo
          image={IMG.joust}
          alt="Due cavalieri in armatura gotica completa che si affrontano in giostra, lance in frantumi"
          kicker="Intermezzo · Il torneo"
          quote="Al torneo l'armatura smette di essere guerra e diventa teatro: l'acciaio si fa gioiello, ultima vanità prima del crepuscolo."
          source="Dalle cronache di corte, XV secolo"
        />
        <Myths />
        <Glossary />
      </main>
    </div>
  );
}
