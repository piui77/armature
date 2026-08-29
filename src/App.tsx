import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Prologue from "./components/Prologue";
import Eras from "./components/Eras";
import Anatomy from "./components/Anatomy";
import Weights from "./components/Weights";
import Forge from "./components/Forge";
import Myths from "./components/Myths";
import Glossary from "./components/Glossary";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink font-body text-bone antialiased">
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Prologue />
        <Eras />
        <Anatomy />
        <Weights />
        <Forge />
        <Myths />
        <Glossary />
      </main>
    </div>
  );
}
