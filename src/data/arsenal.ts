/* ================= L'ARSENALE ================= */

export type WeaponCat = "lame" | "inastate" | "contundenti" | "distanza" | "scudi";

export const WEAPON_CATS: { id: WeaponCat | "tutte"; label: string }[] = [
  { id: "tutte", label: "Tutte" },
  { id: "lame", label: "Lame" },
  { id: "inastate", label: "Inastate" },
  { id: "contundenti", label: "Contundenti" },
  { id: "distanza", label: "A distanza" },
  { id: "scudi", label: "Scudi" },
];

export interface Weapon {
  id: string;
  name: string;
  cat: WeaponCat;
  period: string;
  line: string;
  desc: string;
  stats: { label: string; value: string }[];
  antiArmor: number; // 1–5: efficacia contro l'armatura
  note: string;
}

export const WEAPONS: Weapon[] = [
  {
    id: "spada-una-mano",
    name: "Spada a una mano",
    cat: "lame",
    period: "sempre, V–XVI sec.",
    line: "La compagna di ogni cavaliere, anche quando tutto il resto pesa.",
    desc: "L'arma da fianco per eccellenza: la porta il re, il cavaliere, lo scudiero. La sua forma evolve con l'armatura — la classificazione di Oakeshott (tipi X–XX) legge un millennio di lame attraverso la loro sezione e la loro punta.",
    stats: [
      { label: "Lunghezza", value: "90–100 cm" },
      { label: "Peso", value: "1–1,3 kg" },
      { label: "La porta", value: "ogni uomo d'arme" },
    ],
    antiArmor: 2,
    note: "Contro la piastra il taglio quasi non serve: la spada impara ad allungare la punta e a cercare le fessure.",
  },
  {
    id: "spada-lunga",
    name: "Spada lunga",
    cat: "lame",
    period: "XIV–XVI sec.",
    line: "L'arma della scuola tedesca: due mani, mezza spada, gioco stretto.",
    desc: "Bastarda quanto basta per stare alla cintura e lunga quanto basta per le due mani. Nei trattati della scuola di Liechtenauer la si impugna «a mezza spada» — una mano sulla lama — per guidare la punta nelle fessure dell'arnese nemico.",
    stats: [
      { label: "Lunghezza", value: "110–130 cm" },
      { label: "Peso", value: "1,3–1,8 kg" },
      { label: "La porta", value: "cavalieri e maestri di scherma" },
    ],
    antiArmor: 3,
    note: "Impugnata a mezza spada diventa uno spuntone; rovesciata, il pomolo è un martello: il «colpo dell'omicida».",
  },
  {
    id: "spadone",
    name: "Spadone a due mani",
    cat: "lame",
    period: "fine XV–XVI sec.",
    line: "Lunga quanto un uomo: serve ad aprire i varchi fra le picche.",
    desc: "Zweihänder e montante: non è l'arma del cavaliere in sella, ma del fante scelto che taglia le aste delle picche e protegge le insegne. I Doppelsöldner, pagati il doppio, lo impugnano in prima fila.",
    stats: [
      { label: "Lunghezza", value: "150–180 cm" },
      { label: "Peso", value: "2–3,5 kg" },
      { label: "La porta", value: "lanzichenecchi e maestri" },
    ],
    antiArmor: 3,
    note: "Nata quando l'armatura è al massimo: il suo avversario non è la piastra, ma il bosco di picche che la difende.",
  },
  {
    id: "falcione",
    name: "Falcione",
    cat: "lame",
    period: "XII–XV sec.",
    line: "Un solo filo, lama larga: il taglio che non chiede permesso.",
    desc: "La lama a un filo, curva o dritta, amata da fanti e uomini d'arme: concentra il peso verso la punta e taglia come un'ascia con l'eleganza di una spada. Il messer tedesco ne è il cugino borghese.",
    stats: [
      { label: "Lunghezza", value: "75–90 cm" },
      { label: "Peso", value: "0,9–1,3 kg" },
      { label: "La porta", value: "fanti e cavalieri" },
    ],
    antiArmor: 2,
    note: "Ottimo contro cuoio e maglia, generoso contro chi l'armatura non ce l'ha: per questo resta popolare.",
  },
  {
    id: "daga",
    name: "Daga a rondelle e misericordia",
    cat: "lame",
    period: "XIII–XVI sec.",
    line: "L'ultimo argomento: entra dove l'armatura ha una fessura.",
    desc: "La daga a rondelle, con i dischi che proteggono la mano, è l'arma del gioco stretto; la misericordia, sottile come un punteruolo, dà il «colpo di grazia» attraverso la visiera o le ascelle di chi è già a terra.",
    stats: [
      { label: "Lunghezza", value: "30–50 cm" },
      { label: "Peso", value: "0,3–0,5 kg" },
      { label: "La porta", value: "ogni cavaliere al fianco destro" },
    ],
    antiArmor: 4,
    note: "Non serve contro la piastra: serve dove la piastra finisce. È l'arma che chiude i duelli in arnese.",
  },
  {
    id: "lancia-guerra",
    name: "Lancia da guerra",
    cat: "inastate",
    period: "sempre — «in resta» dal XII sec.",
    line: "Il motivo per cui esiste il cavaliere.",
    desc: "Con la lancia in resta, l'urto non è più del braccio ma del cavallo intero: centinaia di chili lanciati al galoppo convergono in una punta. È l'arma che decide Hastings, Bouvines, le cariche di tutta la cavalleria europea.",
    stats: [
      { label: "Lunghezza", value: "3–4 m" },
      { label: "Peso", value: "2–3 kg (in resta)" },
      { label: "La porta", value: "il cavaliere in carica" },
    ],
    antiArmor: 4,
    note: "In resta moltiplica la massa del cavallo: quando arriva, l'armatura conta fino a un certo punto.",
  },
  {
    id: "lancia-giostra",
    name: "Lancia da giostra",
    cat: "inastate",
    period: "XIV–XVI sec.",
    line: "Coronella spuntata e legno che si spezza: la guerra per finta.",
    desc: "Progettata al contrario di quella da guerra: punta a coronella che non fora, legno leggero o cavo che si frantuma all'impatto per assorbire l'urto. Sullo Stechzeug lascia il segno — ma non la ferita.",
    stats: [
      { label: "Lunghezza", value: "3,5–4,5 m" },
      { label: "Punta", value: "coronella spuntata" },
      { label: "La porta", value: "il giostrante" },
    ],
    antiArmor: 1,
    note: "Il suo dovere è spezzarsi: ogni scheggia volata via è un colpo che non è entrato.",
  },
  {
    id: "alabarda",
    name: "Alabarda",
    cat: "inastate",
    period: "XIV–XVI sec.",
    line: "Ascia, punta e uncino in un'asta sola: l'argomento svizzero.",
    desc: "Taglia come un'ascia, fora come una lancia, uncina come un rampino. Con le alabarde i cantoni svizzeri battono la cavalleria asburgica a Sempach (1386): da allora nessun cavaliere può più ignorare la fanteria.",
    stats: [
      { label: "Asta", value: "1,8–2,5 m" },
      { label: "Testa", value: "2–3 kg" },
      { label: "La porta", value: "svizzeri e lanzichenecchi" },
    ],
    antiArmor: 4,
    note: "Tre armi in una: se la punta rimbalza sulla piastra, resta l'ascia; se l'ascia scivola, resta l'uncino.",
  },
  {
    id: "poleaxe",
    name: "Ascia d'arme (poleaxe)",
    cat: "inastate",
    period: "XIV–XVI sec.",
    line: "Pensata per aprire un cavaliere come una scatola.",
    desc: "L'arma da duello del cavaliere appiedato: faccia a martello per ammaccare, becco «de corbin» per forare, ascia per tagliare i cinghi. I trattati quattrocenteschi le dedicano capitoli interi: è la regina del combattimento in arnese.",
    stats: [
      { label: "Lunghezza", value: "1,5–2 m" },
      { label: "Peso", value: "2–3 kg" },
      { label: "La porta", value: "uomini d'arme appiedati" },
    ],
    antiArmor: 5,
    note: "Il becco concentra l'urto in pochi millimetri: abbastanza per piegare la piastra e suonare chi c'è dentro.",
  },
  {
    id: "picca",
    name: "Picca",
    cat: "inastate",
    period: "XIV–XVI sec.",
    line: "Quattro-sei metri di frassino: la foresta che ferma la cavalleria.",
    desc: "Da sola è un bastone con una punta; in quadrato è un muro di punte. I quadrati di picche svizzeri e lanzichenecchi dimostrano — da Nancy (1477) a Pavia (1525) — che la massa di fanti disciplinati batte la carica dei cavalieri.",
    stats: [
      { label: "Lunghezza", value: "4–6 m" },
      { label: "Peso", value: "3–6 kg" },
      { label: "La porta", value: "la fanteria in quadrato" },
    ],
    antiArmor: 4,
    note: "Non fora il cavaliere: lo tiene a distanza. E un cavaliere che non arriva a colpire è già sconfitto.",
  },
  {
    id: "roncone",
    name: "Roncone inastato (bill)",
    cat: "inastate",
    period: "XIV–XVI sec.",
    line: "L'uncino che tira giù da cavallo.",
    desc: "Il bill inglese e i suoi cugini continentali: lama, punta e uncino per agganciare il cavaliere, strapparlo di sella e finirlo a terra. Arma dei contadini in armi, decisiva quando il terreno è fango.",
    stats: [
      { label: "Lunghezza", value: "1,5–2,5 m" },
      { label: "Peso", value: "1,5–2,5 kg" },
      { label: "La porta", value: "fanti e arcieri inglesi" },
    ],
    antiArmor: 3,
    note: "Contro la piastra non taglia: aggancia. E il cavaliere disarcionato combatte in svantaggio.",
  },
  {
    id: "mazza",
    name: "Mazza d'arme",
    cat: "contundenti",
    period: "X–XVI sec.",
    line: "Non taglia: spacca attraverso.",
    desc: "La mazza a flange dell'uomo d'arme: non deve aprire la piastra, deve trasferire l'urto. Le flange concentrano il colpo in creste sottili che ammaccano l'acciaio e rompono ciò che sta sotto.",
    stats: [
      { label: "Lunghezza", value: "50–80 cm" },
      { label: "Peso", value: "1–2 kg" },
      { label: "La porta", value: "cavalieri e sergenti" },
    ],
    antiArmor: 4,
    note: "La commozione cerebrale non chiede permesso alla corazza: per questo la mazza non passa mai di moda.",
  },
  {
    id: "martello",
    name: "Martello d'arme",
    cat: "contundenti",
    period: "XIV–XVI sec.",
    line: "Da una parte martello, dall'altra becco: è nato contro la piastra.",
    desc: "Compare quando la piastra si diffonde, e non è un caso. La faccia a martello ammacca e stordisce; il becco posteriore fora elmi e giunti. In versione corta si usa da cavallo, in versione lunga nel duello appiedato.",
    stats: [
      { label: "Lunghezza", value: "50–70 cm (a cavallo)" },
      { label: "Peso", value: "1–2,5 kg" },
      { label: "La porta", value: "uomini d'arme" },
    ],
    antiArmor: 5,
    note: "È la risposta definitiva della percussione alla piastra: dove la spada rimbalza, il becco entra.",
  },
  {
    id: "mazzafrusto",
    name: "Mazzafrusto",
    cat: "contundenti",
    period: "XIII–XV sec.",
    line: "La testa gira attorno allo scudo — e anche attorno alla guardia.",
    desc: "Un manico, una catena, una testa chiodata: il colpo arriva dove la parata non guarda. Arma di fanteria soprattutto, con versioni corte da cavallo. Difficile da parare, difficile anche da controllare: chi lo usa lo sa.",
    stats: [
      { label: "Lunghezza", value: "60–100 cm" },
      { label: "Peso", value: "1,5–3 kg" },
      { label: "La porta", value: "fanti, qualche cavaliere" },
    ],
    antiArmor: 3,
    note: "L'articolazione scavalca la difesa: il problema è che scavalca anche la tua, se sbagli la misura.",
  },
  {
    id: "ascia-cavallo",
    name: "Ascia da cavallo",
    cat: "contundenti",
    period: "XIII–XVI sec.",
    line: "Un colpo di sella che apre scudo, maglia e spalla.",
    desc: "L'ascia a una mano dell'uomo d'arme a cavallo: lama a mezzaluna, rovescio a martello o a becco. Dalla sella, con la gravità che aiuta, è una delle armi più efficaci contro difese composite.",
    stats: [
      { label: "Lunghezza", value: "60–90 cm" },
      { label: "Peso", value: "1–1,5 kg" },
      { label: "La porta", value: "uomini d'arme a cavallo" },
    ],
    antiArmor: 3,
    note: "Dove la spada rimbalza, l'ascia incide: il filo spesso trova la maglia sotto la piastra mancante.",
  },
  {
    id: "longbow",
    name: "Arco lungo inglese",
    cat: "distanza",
    period: "XIII–XVI sec.",
    line: "Archi di tasso dalla grande potenza: una pioggia che cerca le fessure.",
    desc: "L'arco di tasso degli yeomen, teso quanto un uomo è forte. A Crécy, Poitiers e Agincourt le volée di frecce bodkin non sempre forano la piastra buona — ma uccidono i cavalli, stancano gli arnesi, costringono a chiudere le visiere.",
    stats: [
      { label: "Lunghezza", value: "1,8–2 m" },
      { label: "Trazione", value: "80–160 lb" },
      { label: "Lo porta", value: "yeomen e arcieri inglesi" },
    ],
    antiArmor: 3,
    note: "Raramente fora la piastra temprata a distanza: vince logorando chi c'è dentro, un minuto alla volta.",
  },
  {
    id: "balestra",
    name: "Balestra",
    cat: "distanza",
    period: "X–XVI sec.",
    line: "Il verricello carica ciò che il braccio non può.",
    desc: "Lenta da caricare — con staffa, gancio e verricello — ma capace di scagliare quadrelli d'acciaio con una forza che il braccio umano non raggiunge. Il Laterano ne vietò l'uso tra cristiani nel 1139: non fu ascoltato.",
    stats: [
      { label: "Lunghezza", value: "60–100 cm" },
      { label: "Gittata utile", value: "200–300 m" },
      { label: "La porta", value: "balestrieri, genovesi su tutti" },
    ],
    antiArmor: 4,
    note: "Nel Quattrocento i quadrelli d'acciaio piegano anche le piastre: la risposta è ispessire, e pesare di più.",
  },
  {
    id: "archibugio",
    name: "Archibugio",
    cat: "distanza",
    period: "fine XV–XVI sec.",
    line: "Un dito di polvere vale mille ore di forgia.",
    desc: "A miccia prima, a ruota poi: la palla di piombo viaggia più veloce di quanto l'acciaio sappia fermare. Obbliga la corazza a ispessirsi «a prova di palla» — e poi, lentamente, la rende superflua.",
    stats: [
      { label: "Lunghezza", value: "1–1,5 m" },
      { label: "Peso", value: "4–7 kg" },
      { label: "Lo porta", value: "archibugieri" },
    ],
    antiArmor: 5,
    note: "Non è l'arma migliore del suo tempo: è quella che chiunque può imparare in un mese. E questo basta.",
  },
  {
    id: "scudo-mandorla",
    name: "Scudo a mandorla (kite)",
    cat: "scudi",
    period: "XI–XIII sec.",
    line: "Dal naso alla tibia: lo scudo del cavaliere normanno.",
    desc: "Lungo abbastanza da proteggere la gamba sinistra del cavaliere in sella, là dove la maglia ancora non arriva. È lo scudo dell'arazzo di Bayeux: legno, cuoio, umbone, e una cinghia per portarlo al collo.",
    stats: [
      { label: "Altezza", value: "90–120 cm" },
      { label: "Peso", value: "2–4 kg" },
      { label: "Lo porta", value: "cavalieri normanni" },
    ],
    antiArmor: 2,
    note: "Nasce per coprire ciò che l'armatura non copre: si rimpicciolisce man mano che la maglia cresce.",
  },
  {
    id: "scudo-araldico",
    name: "Scudo araldico (heater)",
    cat: "scudi",
    period: "XIII–XIV sec.",
    line: "Si rimpicciolisce via via che l'armatura cresce — poi sparisce.",
    desc: "La forma «a ferro da stiro» è la tela dell'araldica: vi si dipingono le insegne che identificano il cavaliere chiuso nell'elmo. Quando le piastre coprono il braccio sinistro, lo scudo da guerra scompare — resta quello da torneo.",
    stats: [
      { label: "Altezza", value: "50–70 cm" },
      { label: "Peso", value: "1,5–3 kg" },
      { label: "Lo porta", value: "cavalieri del Due-Trecento" },
    ],
    antiArmor: 2,
    note: "La sua scomparsa è un indizio: quando l'arnese basta, lo scudo non serve più. Succede verso il 1400.",
  },
  {
    id: "brocchiere",
    name: "Brocchiere (buckler)",
    cat: "scudi",
    period: "XII–XVI sec.",
    line: "Piccolo e rapido: la scherma fatta scudo.",
    desc: "Lo scudo a pugno dei duelli cittadini: non si porta al braccio, si manovra come un'arma. Il manoscritto I.33, il più antico trattato di scherma conosciuto (circa 1300), insegna proprio spada e brocchiere.",
    stats: [
      { label: "Diametro", value: "20–40 cm" },
      { label: "Peso", value: "0,5–1 kg" },
      { label: "Lo porta", value: "cittadini, studenti, preti armati" },
    ],
    antiArmor: 1,
    note: "Non ferma le lance: devia le spade. È lo scudo di chi l'armatura non la indossa — ancora.",
  },
  {
    id: "pavese",
    name: "Pavese",
    cat: "scudi",
    period: "XIV–XVI sec.",
    line: "Uno scudo-porta dietro cui ricaricare.",
    desc: "Lo scudo alto dei balestrieri: si pianta a terra con il puntale e ripara l'uomo mentre carica. In assedio i pavesi formano muri mobili; dipinti con croci e santi, trasformano la fanteria in una palizzata sacra.",
    stats: [
      { label: "Altezza", value: "90–120 cm" },
      { label: "Peso", value: "3–6 kg" },
      { label: "Lo porta", value: "balestrieri e guastatori" },
    ],
    antiArmor: 2,
    note: "Non protegge il corpo in duello: protegge il tempo. E contro la balestra, il tempo è tutto.",
  },
];

/* ================= LE SCUOLE D'ACCIAIO ================= */

export interface School {
  id: string;
  letter: string;
  name: string;
  region: string;
  period: string;
  masters: string;
  style: string;
  traits: string[];
}

export const SCHOOLS: School[] = [
  {
    id: "milano",
    letter: "M",
    name: "Milano",
    region: "Lombardia · Italia",
    period: "c. 1380 – 1560",
    masters: "Missaglia, Negroli, Caremolo",
    style: "La capitale dell'armatura bianca: superfici lisce, bombate, levigate a specchio, pensate perché punta e colpo scivolino via. Gli spallacci asimmetrici, il sinistro maggiorato, diventano la firma dello stile. L'acciaio milanese, temprato con procedimenti custoditi in bottega, è merce pregiata in ogni corte d'Europa.",
    traits: [
      "Superfici lisce e bombate",
      "Spallaccio sinistro maggiorato",
      "Tempra «segreta» dell'acciaio",
      "Esportazione in tutta Europa",
    ],
  },
  {
    id: "norimberga",
    letter: "N",
    name: "Norimberga e Augusta",
    region: "Franconia e Svevia · Germania",
    period: "c. 1450 – 1540",
    masters: "Kolman e Desiderius Helmschmid",
    style: "La risposta tedesca è opposta a Milano: il gotico fiammeggiante. Ogni piastra è percorsa da scanalature che irrobustiscono come travi, i bordi si accendono di cuspidi e ventagli, l'acciaio brunito alterna nero e specchio come una cattedrale di notte. Poi, con Massimiliano I, la flautatura si fa fitta e ordinata: nasce la massimiliana.",
    traits: [
      "Scanalature «a trave»",
      "Bordi cuspidati e ventagli",
      "Brunito alternato a specchio",
      "Armature da torneo dedicate",
    ],
  },
  {
    id: "innsbruck",
    letter: "I",
    name: "Innsbruck",
    region: "Tirolo · Austria",
    period: "c. 1477 – 1530",
    masters: "Konrad Seusenhofer",
    style: "La bottega di corte di Massimiliano I: qui il gotico tedesco incontra il Rinascimento e diventa linguaggio imperiale. Seusenhofer firma arnesi di gala che viaggiano come doni diplomatici — uno finirà perfino alla corte d'Inghilterra per Enrico VIII.",
    traits: [
      "Bottega di corte imperiale",
      "Flautature fitte «massimiliane»",
      "Gotico che incontra il Rinascimento",
      "Arnesi come dono diplomatico",
    ],
  },
  {
    id: "greenwich",
    letter: "G",
    name: "Greenwich",
    region: "Inghilterra",
    period: "1511 – c. 1650",
    masters: "Royal Almain Armoury",
    style: "Enrico VIII fonda l'armeria reale reclutando maestri tedeschi, fiamminghi e italiani: ne nasce uno stile di corte sontuoso, inciso e dorato, celebre per le guarniture da torneo componibili — un solo arnese che si trasforma per ogni tipo di giostra. L'elmo «cornuto» donato dall'imperatore a Enrico ne è il manifesto stravagante.",
    traits: [
      "Armeria reale di Enrico VIII",
      "Guarniture componibili da torneo",
      "Incisioni e dorature di corte",
      "Traghetta l'Inghilterra alla corazza",
    ],
  },
  {
    id: "toledo",
    letter: "T",
    name: "Toledo",
    region: "Castiglia · Spagna",
    period: "c. 1450 – 1650",
    masters: "botteghe reali e famiglie di spadaiai",
    style: "Toledo è prima di tutto la lama: le sue spade si piegano senza spezzarsi e viaggiano con i tercios in mezzo mondo. L'armatura spagnola resta sobria, spesso bruna, fedele alla corazza quando altrove si sfoggia il gala: è l'acciaio di chi combatte sul serio, dal Mediterraneo alle Fiandre.",
    traits: [
      "Lame leggendarie in Europa",
      "Corazze sobrie e brunite",
      "Morioni ed elmi a tesa",
      "L'acciaio dei tercios",
    ],
  },
];

/* ================= LA BARDA ================= */

export interface BardaPiece {
  id: string;
  name: string;
  alias: string;
  weight: string;
  text: string;
}

export const BARDA_PIECES: BardaPiece[] = [
  {
    id: "chanfron",
    name: "Chanfron",
    alias: "testiera",
    weight: "1–2 kg",
    text: "La maschera del cavallo: una piastra che copre fronte e muso, con fori per occhi e narici. Nelle giostre si chiude quasi del tutto — il cavallo non deve vedere il colpo che arriva.",
  },
  {
    id: "criniere",
    name: "Crinière",
    alias: "collo",
    weight: "2–3 kg",
    text: "Il collo vestito: lamine sovrapposte che scivolano l'una sull'altra quando il cavallo abbassa la testa. È la parte più articolata della barda, e la più difficile da tenere lucida.",
  },
  {
    id: "peytral",
    name: "Peytral",
    alias: "pettorale",
    weight: "3–5 kg",
    text: "La piastra del petto, la più ampia di tutte: devia i colpi frontali della carica e regge spesso campanelle e insegne araldiche. Quando un cavaliere carica, il peytral del suo cavallo arriva un istante prima di lui.",
  },
  {
    id: "flanchards",
    name: "Flanchards",
    alias: "fiancali",
    weight: "3–4 kg",
    text: "Le valve sui fianchi, sagomate per lasciare spazio alle gambe del cavaliere senza scoprirlo. Trasformano il cavallo in una fortezza — ma anche in un bersaglio più lento, e più caldo.",
  },
  {
    id: "crupper",
    name: "Crupper",
    alias: "groppiera",
    weight: "2–3 kg",
    text: "Piastre articolate sulla groppa e sulla coda: difendono il posteriore, la zona che i fanti cercano quando il cavallo volta. In battaglia è spesso la prima a essere perduta.",
  },
];

export const BARDA_NOTE =
  "Sotto le piastre corre un'imbottitura di cuoio e tela; sopra, spesso, una gualdrappa dipinta con le insegne del cavaliere. Nel Quattrocento un destriero bardato poteva costare quanto l'armatura del suo padrone — talvolta di più.";

/* ================= LA VITA DENTRO IL FERRO ================= */

export interface LifeBlock {
  id: string;
  title: string;
  kicker: string;
  paragraphs: string[];
  chips: string[];
}

export const LIFE_BLOCKS: LifeBlock[] = [
  {
    id: "caldo",
    title: "Il forno portatile",
    kicker: "Calore e fatica",
    paragraphs: [
      "Sotto l'armatura c'è il gambeson: quindici e più strati di lino trapuntato che ammortizzano i colpi — e tengono caldo come una stufa. Combattere in arnese è uno sforzo a scatti dentro una sauna: lo sanno i rievocatori moderni, che in riproduzione corrono, salgono scale e si rotolano. Si può fare; ma si paga.",
      "Ad Agincourt (1415) il fango, l'afa e la fatica piegarono più uomini delle spade francesi. Per questo gli armaioli milanesi bucano il petto destro di piccoli fori — i «cuori» — per far respirare chi sta dentro, e per questo le visiere imparano ad aprirsi fuori battaglia.",
    ],
    chips: ["Gambeson: 15+ strati di lino", "I «cuori» milanesi per respirare", "Addestrati all'arnese fin da ragazzi"],
  },
  {
    id: "ruggine",
    title: "La ruggine non dorme mai",
    kicker: "Manutenzione",
    paragraphs: [
      "Il nemico quotidiano dell'armatura non è la spada: è l'umidità. Dopo ogni campagna l'arnese va smontato, strofinato con sabbia fine, unto, incerato. Le botteghe offrono il servizio di «imbiancatura» che riporta l'acciaio a specchio.",
      "Un arnese ben tenuto campa generazioni: esistono arnesi gotici ancora in servizio nella Guerra dei Trent'anni, riaccomodati, riadattati, rimessi a nuovo. Il ferro non invecchia: si trascura.",
    ],
    chips: ["Sabbia, olio e cera dopo ogni campagna", "Imbiancatura periodica in bottega", "Arnesi riadattati per generazioni"],
  },
  {
    id: "squadra",
    title: "La squadra dietro l'uomo",
    kicker: "Scudieri e lance fornite",
    paragraphs: [
      "Nessun cavaliere si arma da solo. La «lancia fornita» — l'unità di base degli eserciti quattrocenteschi — conta l'uomo d'arme, uno o due scudieri, un paggio e due-tre arcieri. Lo scudiero allaccia i cinghi, porta il cavallo di riserva, ripara l'arnese con ribattini e piastre di scorta.",
      "In battaglia lo scudiero aspetta dietro le linee con le cavalcature di ricambio; se il cavaliere cade, è lui che lo raggiunge, lo rimette in sella — o ne tratta il riscatto. Metà della protezione di un cavaliere è fatta di acciaio, l'altra metà di uomini.",
    ],
    chips: ["Lancia fornita: 5–7 uomini", "Cinghi allacciati in 10–12 minuti", "Cavalli di riserva pronti"],
  },
  {
    id: "prezzo",
    title: "Quanto costava morire bene",
    kicker: "L'economia dell'acciaio",
    paragraphs: [
      "Un arnese da campo milanese del Quattrocento vale, nelle stime, dai dieci ai venti ducati: molti mesi di paga di un artigiano. Le guarniture da parata delle corti arrivano a centinaia. La risposta dei poveri si chiama «rivetti almaini»: arnesi prodotti in serie, più grezzi, alla portata delle città e dei mercenari.",
      "Anche la parola «soldato» viene da qui: dal soldo, la moneta con cui si paga chi combatte. Un arcere inglese ad Agincourt guadagna sei pence al giorno, un uomo d'arme dodici — il doppio, come il doppio vale il suo arnese.",
    ],
    chips: ["Arnese da campo: 10–20 ducati (stime)", "Rivetti almaini: l'armatura in serie", "Soldato ← soldo: la paga del ferro"],
  },
];

/* ================= LE FONTI ================= */

export interface Source {
  id: string;
  title: string;
  author: string;
  year: string;
  blurb: string;
  color: string;
  height: number; // px del dorso nello scaffale
}

export const SOURCES: Source[] = [
  {
    id: "oakeshott",
    title: "The Archaeology of Weapons",
    author: "Ewart Oakeshott",
    year: "1960",
    blurb: "L'evoluzione di armi e armatura letta come un linguaggio di forme: il classico che ha insegnato a guardare una lama e a datarla. Di Oakeshott resta fondamentale anche «Records of the Medieval Sword».",
    color: "#8a3328",
    height: 196,
  },
  {
    id: "blair",
    title: "European Armour",
    author: "Claude Blair",
    year: "1958",
    blurb: "La bibbia della materia: tipologie, datazioni, botteghe, con il rigore del museo e la chiarezza del manuale. Da qui passano quasi tutti gli studi successivi.",
    color: "#3a3227",
    height: 178,
  },
  {
    id: "williams",
    title: "The Knight and the Blast Furnace",
    author: "Alan Williams",
    year: "2003",
    blurb: "La metallurgia al servizio della storia: cosa poteva davvero fermare cosa, misurato in laboratorio su armature originali. Se c'è una freccia da dardo e una risposta d'acciaio, Williams le ha pesate entrambe.",
    color: "#262019",
    height: 210,
  },
  {
    id: "capwell",
    title: "Armour of the English Knight",
    author: "Tobias Capwell",
    year: "2015",
    blurb: "L'occhio del curatore del Wallace Collection — che è anche un rievocatore — sull'arnese del primo Quattrocento. Le fotografie degli originali valgono il volume da sole.",
    color: "#c9a24b",
    height: 188,
  },
  {
    id: "edge",
    title: "Arms & Armour of the Medieval Knight",
    author: "David Edge & John Miles Paddock",
    year: "1988",
    blurb: "Il manuale illustrato: dal cavaliere normanno al lanzichenecco, con disegni chiari di ogni pezzo. Il libro che molti rievocatori hanno consumato prima ancora di indossare il gambeson.",
    color: "#5a4a2c",
    height: 170,
  },
  {
    id: "collezioni",
    title: "Royal Armouries · The Met",
    author: "collezioni online",
    year: "oggi",
    blurb: "Le armerie aperte al mondo: schede, pesi, fotografie e misure degli originali, consultabili da casa. Il modo più diretto di verificare, pezzo per pezzo, ogni affermazione di questa pagina.",
    color: "#8a6f2c",
    height: 182,
  },
];
