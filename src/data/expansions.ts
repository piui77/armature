/* Espansioni: contenuti aggiuntivi sull'evoluzione dell'armatura medievale */

export interface StageVerdict {
  verdict: string;
  note: string;
}

export interface Weapon {
  id: string;
  name: string;
  period: string;
  desc: string;
  stages: {
    maglia: StageVerdict;
    transizione: StageVerdict;
    piastra: StageVerdict;
  };
  response: string;
}

export const WEAPONS: Weapon[] = [
  {
    id: "spada",
    name: "Spada d'arme",
    period: "1000 – 1500",
    desc: "L'arma simbolo del cavaliere: una lunga lama da taglio e da punta. Quando il ferro si fa specchio, la scherma si adatta: contro l'armatura la spada poteva essere impiegata anche a mezza spada, guidando la lama con entrambe le mani per cercare giunti e aperture o controllare l'avversario.",
    stages: {
      maglia: { verdict: "Protezione elevata", note: "Gli anelli resistono molto bene al taglio, ma l'energia del colpo può essere trasmessa al corpo: per questo la maglia si portava sopra un'imbottitura." },
      transizione: { verdict: "Protezione condizionata", note: "Lamine sparse e brigantina: le superfici di piastra riducono l'efficacia del taglio e accrescono l'importanza di punta, giunti e tecniche di presa." },
      piastra: { verdict: "Protezione elevata", note: "Sull'acciaio liscio il filo non trova presa: la scherma si fa punta, leve e lotta, con tecniche come la mezza spada sviluppate contro gli avversari in armatura." },
    },
    response: "L'armatura non rese inutile la spada: la costrinse a cambiare mestiere, dal taglio alla punta.",
  },
  {
    id: "balestra",
    name: "Balestra",
    period: "1100 – 1500",
    desc: "Il dardo pesante armato di leva o girella: meno ritmo dell'arco, ma una potenza che nessun braccio umano può tendere. Così temuta che il Concilio Lateranense del 1139 ne proibì l'uso fra cristiani.",
    stages: {
      maglia: { verdict: "Protezione limitata", note: "Un quadrello scagliato con grande energia poteva perforare o danneggiare la maglia, soprattutto da vicino e in condizioni favorevoli." },
      transizione: { verdict: "Protezione condizionata", note: "Le piastre del torso accrescono la resistenza al dardo, soprattutto nelle zone vitali; da vicino è un'altra storia." },
      piastra: { verdict: "Protezione condizionata", note: "Le piastre di buona qualità reggono il quadrello a distanza; il collaudo col segno di prova si affermerà però con le armi da fuoco." },
    },
    response: "La balestra misura per la prima volta il ferro sul campo: ogni nuova balestra ridisegna la piastra.",
  },
  {
    id: "arco",
    name: "Arco lungo inglese",
    period: "1300 – 1450",
    desc: "Il grande arco di tasso inglese, dalla potenza temibile: una pioggia di frecce scagliate in alto, a cercare cavalli, spalle scoperte e ogni varco dell'arnese.",
    stages: {
      maglia: { verdict: "Protezione limitata", note: "Le frecce con punte da guerra potevano mettere in difficoltà la maglia e colpire le zone meno protette; l'efficacia dipendeva dalla distanza, dalla punta e dalle caratteristiche della protezione." },
      transizione: { verdict: "Protezione condizionata", note: "Le lamine del torso reggono; il tiro impara a cercare giunti, gambe e cavalcature." },
      piastra: { verdict: "Protezione condizionata", note: "Superfici curve e piastre di buona qualità deviano o arrestano molti dardi; restano vulnerabili giunti, aperture e zone meno protette." },
    },
    response: "Superfici curve e piastre di buona qualità contribuiscono a migliorare la resistenza dell'armatura contro i proiettili, pur lasciando vulnerabili giunti e aperture.",
  },
  {
    id: "mazza",
    name: "Mazza e martello d'arme",
    period: "1300 – 1500",
    desc: "La risposta dei fanti al cavaliere: il trauma contundente non deve bucare il ferro, basta trasmetterlo. Alette, becchi e teste sagomate concentrano l'impatto su un'area ridotta.",
    stages: {
      maglia: { verdict: "Protezione limitata", note: "Il colpo non taglia ma sfonda: ossa e organi sotto la maglia incassano gran parte dell'impatto." },
      transizione: { verdict: "Protezione condizionata", note: "Le prime piastre aiutano il torso, ma la mazza resta l'incubo di ogni mischia serrata." },
      piastra: { verdict: "Protezione condizionata", note: "La piastra si ammacca ma non si apre, distribuendo parte dell'energia; l'elmo chiuso scarica i colpi sulla gorgiera e sulla corazza." },
    },
    response: "Piastre più spesse e bombate, elmi saldati al collare: il ferro impara a distribuire il colpo.",
  },
  {
    id: "picca",
    name: "Picca svizzera",
    period: "1450 – 1550",
    desc: "Lunghe aste di frassino nei quadrati di centinaia di uomini: non è un'arma, è una macchina che nessun ferro individuale può sfidare in campo aperto.",
    stages: {
      maglia: { verdict: "Fuori tempo", note: "Quando le grandi formazioni di picchieri acquistano importanza, la maglia non è più la principale protezione dei combattenti pesantemente armati, mentre la punta lunga rende particolarmente importante la protezione delle parti vulnerabili." },
      transizione: { verdict: "Protezione limitata", note: "Le formazioni di picchieri rendono sempre più difficile alla cavalleria ottenere il contatto: a Nancy, nel 1477, l'urto borgognone si spezza contro i quadrati svizzeri." },
      piastra: { verdict: "Protezione condizionata", note: "In mischia la picca può sfruttare le aperture dell'armatura e le zone meno protette, mentre l'armatura completa continua a offrire una protezione significativa." },
    },
    response: "Le nuove tattiche della fanteria favoriscono equipaggiamenti più funzionali e relativamente leggeri, fra cui corsaletti e altre forme di protezione parziale.",
  },
  {
    id: "archibugio",
    name: "Archibugio",
    period: "1500 – 1600",
    desc: "Un proiettile di piombo lanciato da un'arma da fuoco portatile: un'energia che modifica progressivamente il rapporto fra protezione, mobilità e potenza di fuoco.",
    stages: {
      maglia: { verdict: "Fuori tempo", note: "Nel XVI secolo la maglia continua ad essere utilizzata in alcune parti dell'armatura, ma perde progressivamente il ruolo centrale che aveva avuto nei secoli precedenti." },
      transizione: { verdict: "Fuori tempo", note: "Quando l'archibugio matura, la grande transizione è già compiuta da un secolo." },
      piastra: { verdict: "Protezione condizionata", note: "Le piastre sottili diventano insufficienti: si sviluppano corazze più spesse e rinforzi, provate col tiro e segnate dal bollo di collaudo." },
    },
    response: "Nel corso del XVI secolo le protezioni complete vengono progressivamente ridotte per molti impieghi militari, mentre corazze e rinforzi per il torso acquistano maggiore importanza; Pavia 1525 è uno degli episodi che mostrano questa trasformazione.",
  },
];

export interface ArmingStep {
  n: number;
  title: string;
  time: string;
  text: string;
}

export const ARMING_STEPS: ArmingStep[] = [
  {
    n: 1,
    title: "Gambeson e farsetto",
    time: "~2 min",
    text: "Il fondamento dell'abbigliamento d'arme: un indumento imbottito che può assorbire parte degli urti, migliorare il comfort sotto l'armatura e fornire i punti di attacco per alcune parti dell'arnese.",
  },
  {
    n: 2,
    title: "Calze e scarpe d'arme",
    time: "~1 min",
    text: "Le gambe si vestono di tela e cuoio; sopra si infilano le scarpe robuste su cui verranno allacciati i sabatoni.",
  },
  {
    n: 3,
    title: "Sabatoni",
    time: "~1 min",
    text: "Le piastre snodate sul piede, allacciate alla scarpa: prima i piedi, perché tutto il resto peserà su di loro.",
  },
  {
    n: 4,
    title: "Schinieri e ginocchielli",
    time: "~2 min",
    text: "Gli schinieri proteggono il polpaccio e possono essere articolati o chiusi con cerniere e cinghie; il ginocchiello con alette amplia la protezione attorno all'articolazione.",
  },
  {
    n: 5,
    title: "Cosciali e falda",
    time: "~1 min e mezzo",
    text: "I gusci delle cosce salgono fino ai fianchi, dove la falda fa da cintura all'arnese e da tetto ai tasselli che coprono l'inguine.",
  },
  {
    n: 6,
    title: "Corazza: petto e schiena",
    time: "~2 min",
    text: "Il momento decisivo: le cinghie si incrociano sulla schiena e il peso si ripartisce fra spalle e fianchi. Da qui in poi si respira «corazzati».",
  },
  {
    n: 7,
    title: "Braccia e spalle",
    time: "~2 min",
    text: "Bracciali, cubitiere e spallacci completano la protezione delle braccia; in molte armature lo spallaccio sinistro può essere più sviluppato, soprattutto in relazione alle esigenze del combattimento a cavallo e alla protezione contro le armi avversarie.",
  },
  {
    n: 8,
    title: "Guanti e gorgiera",
    time: "~1 min",
    text: "Le decine di lamine delle dita, poi il collare che salda il capo al torso: la gola, l'ultimo varco, si chiude.",
  },
  {
    n: 9,
    title: "Elmo chiuso",
    time: "~30 s",
    text: "Di norma per ultimo: l'elmo completa la protezione della testa. Lo scudiero verifica le chiusure e l'assetto dell'armatura prima che il combattente sia pronto.",
  },
];

export const ARMING_FOOTER =
  "Con uno scudiero esperto l'armatura poteva essere indossata in tempi relativamente brevi; da soli l'operazione richiedeva più tempo e risultava molto più complessa.";

export const COST_ROWS = [
  {
    item: "Usbergo del Duecento",
    cost: "Un equipaggiamento costoso",
    note: "La produzione richiedeva molto lavoro e materiale, rendendo l'usbergo un bene costoso per chi disponeva di risorse limitate.",
  },
  {
    item: "Arnese bianco milanese",
    cost: "Un bene di alto valore",
    note: "Un arnese di buona qualità rappresentava un investimento importante, particolarmente per i committenti di alto rango.",
  },
  {
    item: "Guarnitura di gala",
    cost: "Un bene di lusso",
    note: "Decorazioni incise, dorature e lavorazioni raffinate potevano aumentare considerevolmente il valore di un'armatura destinata alla rappresentanza o alla corte.",
  },
];

export const ANNALS: { year: string; place: string; prefix?: string; text: string }[] = [
  {
    year: "1066",
    place: "Hastings",
    text: "Elmi con nasale e protezioni di maglia caratterizzano l'equipaggiamento dei combattenti meglio armati rappresentati nell'Arazzo di Bayeux; la scena della freccia che colpisce l'occhio di Aroldo appartiene invece alla rappresentazione iconografica della battaglia.",
  },
  {
    year: "1189",
    place: "Assedio di Acri",
    text: "Durante le Crociate l'usbergo lungo protegge ampie parti del corpo; nel corso del XII secolo compaiono e si diffondono forme di elmo sempre più avvolgenti, fino al successivo grande elmo.",
  },
  {
    year: "1214",
    place: "Bouvines",
    text: "Bouvines mostra l'importanza della cavalleria pesantemente equipaggiata nel combattimento del primo Duecento; gli scudi e le insegne contribuiscono inoltre all'identificazione dei combattenti.",
  },
  {
    year: "1346",
    place: "Crécy",
    text: "Crécy mostra le nuove esigenze imposte alle protezioni dal combattimento a distanza; nel XIV secolo la maglia continua a convivere con protezioni a piastre sempre più estese.",
  },
  {
    year: "1415",
    place: "Agincourt",
    text: "L'arnese è maturo, ma fango, caldo e archi piegano i francesi: il ferro non basta senza il campo.",
  },
  {
    year: "1450",
    place: "Milano",
    prefix: "c. ",
    text: "L'armatura bianca è compiuta: i Missaglia esportano in ogni corte d'Europa e firmano con la corona.",
  },
  {
    year: "1477",
    place: "Nancy",
    text: "I quadrati svizzeri spezzano l'ultima cavalleria borgognona: il fante ora conta più del cavaliere.",
  },
  {
    year: "1525",
    place: "Pavia",
    text: "Gli archibugi spagnoli aprono le corazze francesi e catturano un re: comincia il crepuscolo del ferro.",
  },
];

export const EXTRA_GLOSSARY: { term: string; def: string }[] = [
  {
    term: "Gambeson",
    def: "Giubba imbottita di strati di lino: assorbe i colpi, protegge dalla ruggine e dal sole. Si porta sempre, sotto tutto.",
  },
  {
    term: "Cubitiera",
    def: "Piastra del gomito, spesso ad alette: protegge l'interno del braccio nelle mischie strette attorno al cavallo.",
  },
  {
    term: "Tasselli",
    def: "Piastre sospese alla falda che coprono inguine e parte alta delle cosce restando mobili in sella.",
  },
  {
    term: "Punzone",
    def: "Il marchio battuto a freddo dall'armaiolo: garanzia di bottega e di tempra — per Milano, la celebre corona.",
  },
  {
    term: "Brigantina",
    def: "Corpetto di piccole lamine rivettate dentro tela o cuoio: economica, riparabile, amata da fanti e marinai.",
  },
  {
    term: "Stechzeug",
    def: "Armatura da giostra: pesantissima, quasi cieca, imbullonata alla sella. Non deve vincere: deve reggere.",
  },
];
