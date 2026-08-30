/* Tavole dettagliate dei sei elmi — disegno approvato in anteprima. */

const B = { fill: "#2b251d", stroke: "#c9a24b", strokeWidth: 1.6, strokeLinejoin: "round" as const };
const LIGHT = { fill: "#41382b", opacity: 0.9 };
const SHADE = { fill: "#191510", opacity: 0.85 };
const LN = { fill: "none", stroke: "#c9a24b", strokeWidth: 1.1, opacity: 0.85 };
const LN2 = { fill: "none", stroke: "#6f5c33", strokeWidth: 1, opacity: 0.8 };
const VOID = { fill: "#0d0b08" };
const DOT = { fill: "#eccf7e" };
const DOTD = { fill: "#8a6f2c" };

function Nasale() {
  return (
    <>
      <path {...B} d="M29 70 C29 43 39 21 52 19 C65 21 75 43 75 70 L75 76 L29 76 Z" />
      <path {...LIGHT} d="M35 68 C35 45 43 27 52 21 C47 29 41 47 41 68 Z" />
      <path {...SHADE} d="M62 24 C70 32 74 50 74 70 L74 76 L66 76 C67 56 66 36 62 24 Z" />
      <path {...LN} d="M52 19 L52 70" />
      <path {...B} d="M27 70 L77 70 L77 79 L27 79 Z" />
      <circle {...DOT} cx="33" cy="74.5" r="1.3" />
      <circle {...DOTD} cx="41" cy="74.5" r="1.3" />
      <circle {...DOT} cx="49" cy="74.5" r="1.3" />
      <circle {...DOTD} cx="57" cy="74.5" r="1.3" />
      <circle {...DOT} cx="65" cy="74.5" r="1.3" />
      <circle {...DOTD} cx="72" cy="74.5" r="1.3" />
      <path {...B} d="M31 79 L31 95 C31 97 33 98 36 98 L38 98 C41 98 43 97 43 95 L43 79 Z" />
      <path {...LN2} d="M37 80 L37 96" />
    </>
  );
}

function Pentola() {
  return (
    <>
      <path {...B} d="M31 92 L31 27 C31 23 34 20 38 20 L68 20 C72 20 75 23 75 27 L75 92 Z" />
      <path {...LIGHT} d="M31 30 L31 92 L38 92 L38 20 C34 20 31 23 31 27 Z" />
      <path {...SHADE} d="M66 20 L68 20 C72 20 75 23 75 27 L75 92 L66 92 Z" />
      <path {...LN} d="M31 33 L75 33" />
      <path {...VOID} d="M31 42 L57 42 L57 47 L31 47 Z" />
      <path {...LN} d="M43 24 L43 60" />
      <circle {...DOTD} cx="36" cy="58" r="1.2" />
      <circle {...DOTD} cx="42" cy="58" r="1.2" />
      <circle {...DOTD} cx="48" cy="58" r="1.2" />
      <circle {...DOTD} cx="36" cy="64" r="1.2" />
      <circle {...DOTD} cx="42" cy="64" r="1.2" />
      <circle {...DOTD} cx="48" cy="64" r="1.2" />
      <circle {...DOTD} cx="36" cy="70" r="1.2" />
      <circle {...DOTD} cx="42" cy="70" r="1.2" />
      <circle {...DOTD} cx="48" cy="70" r="1.2" />
      <path {...LN2} d="M57 20 L57 92" />
      <path {...LN2} d="M31 80 L75 80" />
      <circle {...DOT} cx="53" cy="37" r="1.2" />
      <circle {...DOT} cx="53" cy="52" r="1.2" />
      <circle {...DOT} cx="53" cy="66" r="1.2" />
      <circle {...DOT} cx="53" cy="86" r="1.2" />
    </>
  );
}

function Bacinetto() {
  return (
    <>
      <path {...B} d="M60 60 C66 70 74 78 84 82 L80 92 C68 88 57 78 52 66 Z" />
      <circle {...DOTD} cx="62" cy="70" r="1.1" />
      <circle {...DOTD} cx="68" cy="75" r="1.1" />
      <circle {...DOTD} cx="74" cy="80" r="1.1" />
      <circle {...DOTD} cx="60" cy="77" r="1.1" />
      <circle {...DOTD} cx="66" cy="82" r="1.1" />
      <circle {...DOTD} cx="72" cy="86" r="1.1" />
      <circle {...DOTD} cx="78" cy="84" r="1.1" />
      <circle {...DOTD} cx="64" cy="63" r="1.1" />
      <path {...B} d="M30 62 C30 39 40 19 55 17 C70 19 80 41 80 60 L80 64 L30 64 Z" />
      <path {...LIGHT} d="M36 60 C36 42 44 25 55 19 C49 27 43 44 43 60 Z" />
      <path {...SHADE} d="M66 22 C74 30 79 46 79 60 L79 64 L70 64 C71 48 70 32 66 22 Z" />
      <path {...B} d="M30 42 L13 53 L17 62 L30 64 Z" />
      <path {...VOID} d="M17 52 L30 47 L30 51 L18 55 Z" />
      <path {...LN2} d="M15 56 L29 60" />
      <circle {...DOT} cx="34" cy="45" r="1.6" />
      <path {...LN2} d="M30 64 L80 64" />
      <circle {...DOTD} cx="36" cy="60" r="1.1" />
      <circle {...DOTD} cx="46" cy="60" r="1.1" />
      <circle {...DOTD} cx="56" cy="60" r="1.1" />
      <circle {...DOTD} cx="66" cy="60" r="1.1" />
    </>
  );
}

function Armetto() {
  return (
    <>
      <path {...B} d="M36 82 C36 91 45 97 56 97 C67 97 74 90 74 82 L70 80 C70 87 64 92 56 92 C48 92 41 87 40 80 Z" />
      <path {...B} d="M40 64 L40 82 C40 88 48 92 56 92 C65 92 70 87 70 80 L70 64 Z" />
      <path {...LN2} d="M40 70 L70 70" />
      <path {...LN2} d="M40 76 L70 76" />
      <path {...LN2} d="M41 82 C46 86 65 86 69 81" />
      <path {...B} d="M32 52 C32 28 43 13 56 13 C70 13 80 29 80 50 C80 60 75 66 66 70 L44 70 C37 66 32 60 32 52 Z" />
      <path {...LIGHT} d="M38 50 C38 34 46 21 56 16 C49 24 44 37 44 50 C44 58 46 64 49 68 L44 68 C40 64 38 57 38 50 Z" />
      <path {...SHADE} d="M68 19 C76 27 80 39 80 50 C80 60 75 66 66 70 L60 70 C68 64 71 56 71 47 C71 36 70 26 68 19 Z" />
      <path {...B} d="M45 16 C50 8 62 8 67 17 L64 24 C60 16 52 16 48 23 Z" />
      <circle {...DOTD} cx="52" cy="14" r="1" />
      <circle {...DOTD} cx="57" cy="13.5" r="1" />
      <circle {...DOTD} cx="62" cy="15.5" r="1" />
      <path {...B} d="M32 40 L17 51 L21 62 L32 64 C36 59 36 47 32 40 Z" />
      <path {...VOID} d="M19 51 L31 45 L31 49 L20 55 Z" />
      <circle {...DOTD} cx="23" cy="58" r="1" />
      <circle {...DOTD} cx="27" cy="60" r="1" />
      <circle {...DOTD} cx="31" cy="61" r="1" />
      <path {...LN2} d="M22 59 L32 61" />
      <path {...LN} d="M44 70 C46 60 46 50 44 42" />
      <circle {...DOT} cx="42" cy="44" r="2.4" />
      <circle {...DOTD} cx="42" cy="44" r="1" />
      <circle {...DOTD} cx="52" cy="66" r="1.1" />
      <circle {...DOTD} cx="60" cy="66" r="1.1" />
    </>
  );
}

function Celata() {
  return (
    <>
      <path fill="none" stroke="#6f5c33" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.85" d="M20 60 C20 74 30 85 45 89 L60 91 L60 82 C46 80 33 72 31 59 Z" />
      <path fill="none" stroke="#6f5c33" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" d="M27 66 C30 75 40 82 52 85" />
      <path {...B} d="M22 50 C22 28 36 12 53 12 C69 12 81 24 84 40 L96 55 C98 59 94 63 90 60 L81 52 C80 61 72 66 62 66 L35 66 C27 64 22 58 22 50 Z" />
      <path {...LIGHT} d="M28 48 C28 32 39 18 53 14 C44 21 36 34 36 48 C36 55 38 61 42 64 L35 64 C30 62 28 55 28 48 Z" />
      <path {...SHADE} d="M66 14 C76 19 82 29 84 40 L93 52 C89 48 84 45 80 44 C80 33 75 22 66 14 Z" />
      <path {...LN} d="M29 32 C41 17 65 16 80 31" />
      <path {...LN2} d="M32 37 C43 24 63 23 77 36" />
      <path {...B} d="M22 38 L12 46 L15 54 L24 55 Z" />
      <path {...VOID} d="M14 46 L23 42 L23 46 L15 50 Z" />
      <path {...LN2} d="M16 52 L24 53" />
      <path {...LN} d="M81 52 L92 58" />
      <circle {...DOT} cx="56" cy="48" r="2.2" />
      <circle {...DOTD} cx="56" cy="48" r="0.9" />
      <circle {...DOTD} cx="31" cy="60" r="1.1" />
      <circle {...DOTD} cx="41" cy="62" r="1.1" />
      <circle {...DOTD} cx="51" cy="62" r="1.1" />
      <circle {...DOTD} cx="61" cy="61" r="1.1" />
      <circle {...DOTD} cx="70" cy="58" r="1.1" />
      <circle {...DOTD} cx="77" cy="53" r="1.1" />
    </>
  );
}

function Borgognotta() {
  return (
    <>
      <path {...B} d="M66 60 C76 64 83 73 84 84 L73 86 C71 76 67 68 61 62 Z" />
      <path {...LN2} d="M65 66 C71 71 76 77 77 83" />
      <path {...LN2} d="M63 71 C68 75 72 80 73 84" />
      <path {...B} d="M36 60 C32 73 35 85 44 93 L52 93 C46 84 44 72 45 60 Z" />
      <path {...LN2} d="M41 66 C39 75 41 84 46 90" />
      <circle {...DOT} cx="43" cy="66" r="1.9" />
      <circle {...DOTD} cx="43" cy="66" r="0.8" />
      <path {...B} d="M30 50 C30 28 42 12 56 12 C70 12 80 27 80 47 L80 55 C80 59 76 61 72 61 L36 61 C32 59 30 55 30 50 Z" />
      <path {...LIGHT} d="M35 48 C35 32 43 19 54 14 C46 22 40 34 40 48 C40 53 41 57 43 60 L36 60 C35 57 35 52 35 48 Z" />
      <path {...SHADE} d="M67 17 C75 24 80 35 80 47 L80 55 C80 59 76 61 72 61 L66 61 C71 58 73 53 73 46 C73 35 71 25 67 17 Z" />
      <path {...B} d="M45 13 C50 5 62 5 67 14 L64 21 C59 13 52 13 48 20 Z" />
      <circle {...DOT} cx="56" cy="8" r="1.6" />
      <circle {...DOTD} cx="50" cy="14" r="1" />
      <circle {...DOTD} cx="56" cy="12.5" r="1" />
      <circle {...DOTD} cx="62" cy="15" r="1" />
      <path {...B} d="M30 41 L15 46 C13 48 15 52 19 51 L31 48 Z" />
      <path {...LN2} d="M18 48 L30 46" />
      <circle {...DOTD} cx="23" cy="48.5" r="1.1" />
      <circle {...DOTD} cx="28" cy="47.5" r="1.1" />
      <path {...VOID} d="M31 50 C33 56 37 59 42 60 L36 60 C33 58 31 54 31 50 Z" />
      <path {...VOID} d="M46 52 C46 56 48 58 51 58 C54 58 55 55 54 52 C52 54 48 54 46 52 Z" />
      <circle {...DOTD} cx="35" cy="57" r="1" />
      <circle {...DOTD} cx="57" cy="58" r="1" />
      <circle {...DOTD} cx="67" cy="57" r="1" />
    </>
  );
}

export default function HelmetArt({ id, className = "" }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {id === "nasale" && <Nasale />}
      {id === "pentola" && <Pentola />}
      {id === "bacinetto" && <Bacinetto />}
      {id === "armetto" && <Armetto />}
      {id === "celata" && <Celata />}
      {id === "borgognotta" && <Borgognotta />}
    </svg>
  );
}
