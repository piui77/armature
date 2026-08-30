export const IMG = {
  hero: "https://image.qwenlm.ai/generated-images/4e79017a-5eff-4c9c-94db-99972cbd39c8/_result.png",
  era1: "https://image.qwenlm.ai/generated-images/c667c5ee-ee78-4499-a210-bde41157a839/_result.png",
  era2: "https://image.qwenlm.ai/generated-images/a8cf2055-0923-446e-b782-5e55ef8146bf/_result.png",
  era3: "https://image.qwenlm.ai/generated-images/34f1a16a-806c-49ec-b787-26fb8be83795/_result.png",
  era4: "https://image.qwenlm.ai/generated-images/6b8caf32-56e7-46b7-8440-dd8e5abbe70e/_result.png",
  era5: "https://image.qwenlm.ai/generated-images/9bf81ec0-0fd5-4939-8515-9b1ba34cc0d6/_result.png",
  era6: "https://image.qwenlm.ai/generated-images/dbb93332-4c7a-404b-9360-2d6e91ac2a80/_result.png",
  anatomy: "https://image.qwenlm.ai/generated-images/90fea5d3-4d51-4789-9ab5-0e7bfdbd7e80/_result.png",
  workshop: "https://image.qwenlm.ai/generated-images/993587a3-57a9-439b-86f2-e7d7146073c4/_result.png",
  mail: "https://image.qwenlm.ai/generated-images/29813111-b2ef-4b7a-955c-1493840a612a/_result.png",
  joust: "https://image.qwenlm.ai/generated-images/4f025810-98a0-4bea-81ae-8672b4e7a53a/_result.png",
};

export interface Era {
  numeral: string;
  title: string;
  period: string;
  image: string;
  alt: string;
  paragraphs: string[];
  changes: string[];
  context: { label: string; text: string };
  pieces: string[];
  note: string;
}

export const ERAS: Era[] = [
  {
    numeral: "I",
    title: "L'eredità di Roma",
    period: "476 – 1000 d.C.",
    image: IMG.era1,
    alt: "Guerriero germanico con spangenhelm e usbergo corto nella nebbia",
    paragraphs: [
      "Quando l'Impero cade, la sua arte di vestire il soldato non muore. La lorica hamata — la maglia di anelli romana — passa di mano in mano: riparata, ritemprata, contesa. Per secoli resterà il tesoro di guerra per eccellenza: negli inventari e nei testamenti dell'élite carolingia la maglia compare fra i beni militari di maggior valore, citata accanto alle terre.",
      "Il guerriero dell'alto medioevo combatte nel seguito del signore, a piedi o a cavallo: spangenhelm costruiti con bande metalliche e piastre rivettate, scudo rotondo di tiglio con umbone di ferro, lancia e spada a una mano. La protezione completa resta privilegio di pochissimi; per la maggioranza degli uomini ci sono cuoio, legno e coraggio.",
      "Eppure già in questa essenzialità qualcosa ribolle: i capitolari carolingi impongono a ogni uomo libero di possedere armi e protezione secondo il proprio censo, mentre le officine dei centri signorili, urbani e monastici conservano e trasformano le tecniche metallurgiche ereditate dall'antichità. L'armatura non è ancora moda né casta: è sopravvivenza, tramandata di padre in figlio come la terra.",
    ],
    changes: [
      "La lorica segmentata esce dall'uso comune",
      "La maglia ribattuta diventa tesoro",
      "Il nasale protegge il volto",
      "La cavalleria pesante si organizza",
    ],
    context: {
      label: "1066 · Hastings",
      text: "L'arazzo di Bayeux è una delle più importanti testimonianze dell'armamento dell'XI secolo: la maglia compare con grande frequenza fra i combattenti meglio equipaggiati.",
    },
    pieces: [
      "Spangenhelm a bande e piastre",
      "Usbergo corto di anelli ribattuti",
      "Scudo rotondo umbonato",
      "Spada a una mano",
      "Sax (scramasax)",
    ],
    note: "Un usbergo poteva costare quanto una fattoria: si ereditava, si citava nei testamenti, si pagava come dote.",
  },
  {
    numeral: "II",
    title: "Il cavaliere dell'Anno Mille",
    period: "1000 – 1300 d.C.",
    image: IMG.era2,
    alt: "Cavaliere del Duecento con elmo a pentola, usbergo lungo e scudo araldico",
    paragraphs: [
      "Con la diffusione della cavalleria pesante, della lancia in resta e di nuove forme di organizzazione signorile prende forma, a poco a poco, l'élite militare dei milites. L'usbergo si allunga fino al ginocchio, le chausses di maglia vestono le gambe, il camaglio protegge il collo. A Bouvines come sotto le mura di Acri, il cavaliere è un uomo letteralmente cucito nel ferro: decine di migliaia di anelli, ciascuno chiuso e rivettato a mano.",
      "Sopra la maglia compare la sopravveste dipinta con le insegne: è un passo verso l'araldica, il codice che renderà riconoscibile chi il casco nasconde. L'elmo a pentola trasforma il cavaliere in una fortezza quasi cieca, e sotto di lui anche il cavallo comincia a vestirsi di ferro e di stoffa.",
      "E la guerra chiede sempre di più: le crociate riportano notizie delle lamelle orientali e insegnano il valore dell'imbottitura sotto il ferro; il torneo trasforma il combattimento in regola e spettacolo, e l'armatura diventa abito da esibire. L'equipaggiamento di un cavaliere ben armato può raggiungere un peso considerevole, ma la sua composizione varia molto secondo epoca, luogo e rango — e anche sotto quel peso il cavaliere resta un combattente mobile.",
    ],
    changes: [
      "La maglia copre l'intero corpo",
      "Il grande elmo chiude il viso",
      "I segni araldici si diffondono",
      "Il gambesone ammortizza sotto il ferro",
    ],
    context: {
      label: "1214 · Bouvines",
      text: "I cavalieri in arnese completo decidono la battaglia fra i re. Dopo quel giorno ogni signore conta i suoi uomini dalle armature, non dal numero.",
    },
    pieces: [
      "Usbergo lungo con muffole",
      "Chausses e camaglio di maglia",
      "Elmo a pentola (great helm)",
      "Scudo araldico a stufa",
      "Sopravveste dipinta",
    ],
    note: "La maglia arresta il taglio: contro la punta, la mazza e la caduta serviranno le piastre.",
  },
  {
    numeral: "III",
    title: "La grande transizione",
    period: "1300 – 1400 d.C.",
    image: IMG.era3,
    alt: "Cavaliere del Trecento con bacinetto, ventaglia e coat of plates",
    paragraphs: [
      "Il Trecento è il secolo in cui l'armatura cambia più che nei cinque precedenti messi insieme. Le esperienze dei conflitti del Trecento — dagli arcieri inglesi di Crécy agli scontri sempre più duri fra fanteria organizzata e cavalleria — mostrano i limiti della sola maglia: sul torso si cuce la coat of plates, numerose lamine metalliche rivettate sotto una copertura di stoffa o di cuoio, e da questa famiglia di protezioni si sviluppano diverse forme di corazza, fra cui la brigantina. Il bacinetto con ventaglia mobile rimpiazza il vecchio elmo a pentola.",
      "Le piastre conquistano il corpo una giuntura alla volta: spallacci, cubitiere, ginocchielli, i celebri guanti «a clessidra». La lavorazione dell'armamento difensivo si fa sempre più specializzata: nascono botteghe e corporazioni dedicate, una professione nuova, insieme artigiana, ingegneristica e segreta.",
      "Il campo di battaglia è il vero progettista: le formazioni compatte di picche e alabarde insegnano che nessuna maglia regge un urto organizzato; gli archi lunghi inglesi sottopongono le protezioni a una nuova pressione balistica, soprattutto nelle parti meno coperte. L'armatura risponde estendendo le piastre e modellandole in forme capaci di distribuire e, quando possibile, deviare l'energia dei colpi: nel giro di alcune generazioni il cavaliere cambia volto, dalla maglia prevalente alle grandi lastre.",
    ],
    changes: [
      "Le piastre si cuciono nella stoffa",
      "Il bacinetto con visiera comanda",
      "Braccia e gambe si incrostano d'acciaio",
      "Il longbow accelera la corsa",
    ],
    context: {
      label: "1346 · Crécy",
      text: "Migliaia di frecce su un solo campo: da quel giorno ogni armaiolo d'Europa comincia a ragionare per lastre, non più per anelli.",
    },
    pieces: [
      "Coat of plates",
      "Bacinetto con camaglio e ventaglia",
      "Spallacci e cubitiere",
      "Guanti a clessidra",
      "Brigantina",
    ],
    note: "Nessun altro secolo trasforma l'armatura quanto il Trecento: si entra in maglia, si esce in piastra.",
  },
  {
    numeral: "IV",
    title: "L'armatura bianca",
    period: "1400 – 1460 d.C.",
    image: IMG.era4,
    alt: "Condottiero in armatura bianca milanese completa nella bottega dell'armaiolo",
    paragraphs: [
      "Verso il 1420 il processo è compiuto: il cavaliere è chiuso da capo a piedi in un guscio d'acciaio lucidato a specchio — per questo si dice «armatura bianca», white harness. Milano diventa uno dei principali centri europei della produzione: le botteghe dei Missaglia esportano arnesi completi in ogni corte d'Europa, e molti pezzi recano marchi di bottega e segni di riconoscimento dell'armaiolo.",
      "La forma è pura balistica: superfici bombate che deviano punta e colpo, spallaccio sinistro maggiorato per reggere la lancia, corazza con cresta mediana e resta. L'acciaio milanese, temprato con bagni di cui si custodisce il segreto, a distanza di battaglia respinge spesso le frecce dei longbow: gli arcieri imparano ad accorciare il tiro e a cercare giunture, ascelle e visiere.",
      "Cambia anche l'economia: l'armatura diventa un'ordinazione con tempi di consegna, contratti e penali. I duchi milanesi commissionano lotti interi per gli eserciti; le corti europee mandano sarti con le misure dei propri gentiluomini, perché l'arnese si cuce addosso come un vestito. La protezione può ormai essere prodotta anche in serie organizzata — componenti standardizzati, divisione del lavoro, consegne a lotti per le grandi commesse militari — accanto alla produzione su misura per la clientela più ricca: eppure ogni pezzo resta rifinito a mano.",
    ],
    changes: [
      "L'arnese completo è compiuto",
      "Rivetti scorrevoli: il ferro flette",
      "Spallacci asimmetrici e resta",
      "Lo scudo va in pensione",
    ],
    context: {
      label: "c. 1450 · Milano",
      text: "Le botteghe missagliesche consegnano lotti interi di arnesi ai condottieri: l'armatura diventa industria, firmata e garantita.",
    },
    pieces: [
      "Corazza con cresta e resta",
      "Spallacci asimmetrici",
      "Celata e barbotta",
      "Guanti d'arme snodati",
      "Barda del cavallo",
    ],
    note: "I marchi dei Missaglia sono fra i più riconoscibili esempi di identificazione di bottega nella produzione europea di armature.",
  },
  {
    numeral: "V",
    title: "Il gotico fiammeggiante",
    period: "1460 – 1520 d.C.",
    image: IMG.era5,
    alt: "Armatura gotica tedesca scanalata illuminata da braci",
    paragraphs: [
      "Le botteghe di Norimberga, Augusta e Innsbruck rispondono a Milano con uno stile opposto: il gotico tedesco. Ogni piastra è percorsa da scanalature che funzionano come travi, aumentandone la rigidità senza appesantirla; i bordi si accendono di cuspidi e ventagli, i sabatoni si allargano «a zampa d'orso», l'acciaio brunito alterna luci e ombre come una cattedrale.",
      "È anche l'età d'oro del torneo: nascono armature dedicate — lo Stechzeug per la giostra, pesantissimo e quasi cieco, il Rennzeug per la corsa — mentre sul campo la corazza leggera del fante annuncia già il futuro. Massimiliano I ne fa un manifesto: l'armatura come arte di Stato.",
      "I maestri del tardo Quattrocento firmano di rado per esteso, ma imprimono i marchi di bottega e si riconoscono dallo stile: le creste affilate di Norimberga e le rotondità lisce di Milano diventano due linguaggi differenti, destinati però a influenzarsi e contaminarsi. Nasce il collezionismo: Massimiliano raduna a Innsbruck un'armeria che è un manifesto d'impero, e ogni principe ne vuole una.",
    ],
    changes: [
      "Le scanalature irrigidiscono la lastra",
      "I bordi a spigolo deviano la punta",
      "Il torneo ha armature proprie",
      "Due scuole che si influenzano",
    ],
    context: {
      label: "c. 1486 · Innsbruck",
      text: "Massimiliano I fa dell'armatura un manifesto d'impero: lo stile scanalato diventa il dono più ambito fra i principi.",
    },
    pieces: [
      "Armatura scanalata",
      "Celata con visiera",
      "Sabatoni a zampa d'orso",
      "Ginocchielli ad alette",
      "Stechzeug da giostra",
    ],
    note: "Ogni scanalatura funziona come una trave in miniatura: irrigidisce la lamiera senza appesantirla sensibilmente.",
  },
  {
    numeral: "VI",
    title: "Il crepuscolo d'acciaio",
    period: "1520 – 1600 d.C.",
    image: IMG.era6,
    alt: "Armatura massimiliana con flautature fitte e decori dorati in un'armeria rinascimentale",
    paragraphs: [
      "L'armatura massimiliana porta la scanalatura all'eccesso e apre la porta all'acquaforte: trofei incisi, grottesche alla romana, fondi d'oro — a Milano i Negroli sbalzano l'acciaio come fosse argento. L'armatura è ormai anche abito di corte, ritratto, dono diplomatico.",
      "Ma l'archibugio e la pistola a ruota riscrivono le regole. Le corazze si ispessiscono fino a fermare la palla: il collaudo «a prova» lascia un'ammaccatura orgogliosa sul petto. Poi il ferro arretra — resta la corazza, poi solo petto e schiena — e nel Seicento l'arnese completo è già ricordo. Ma il suo mito non smetterà più di combattere.",
      "L'eredità non muore: la corazza resta in servizio nella cavalleria di alcune nazioni fino alla Grande Guerra, e l'elmo d'acciaio — erede di celata e cappellina — torna a proteggere la fanteria nelle trincee. Nei musei del mondo gli arnesi stanno ancora ritti: testimoni silenziosi dell'epoca in cui l'Europa decise di vestire i suoi uomini d'acciaio.",
    ],
    changes: [
      "La «prova» d'archibugio si bolla",
      "L'arnese si fa tre quarti",
      "La garnitura lo rende modulare",
      "Incisione e oro: abito di corte",
      "La corazza resiste fino alle trincee",
    ],
    context: {
      label: "1525 · Pavia",
      text: "Gli archibugieri spagnoli smontano la gendarmeria francese: in una sola mattina finisce l'epoca dell'arnese completo.",
    },
    pieces: [
      "Armatura massimiliana",
      "Corazza a prova di palla",
      "Armatura a tre quarti",
      "Borgognotta",
      "Guarniture incise e dorate",
    ],
    note: "Il bollo della «prova» d'archibugio valeva una firma: quel petto aveva già vinto la sua battaglia.",
  },
];

export interface HelmetDef {
  id: string;
  name: string;
  period: string;
  text: string;
  fill: string;
  strokes: string[];
  extra?: string[];
}

export const HELMETS: HelmetDef[] = [
  {
    id: "nasale",
    name: "Elmo a nasale",
    period: "900 – 1100",
    text: "Cupola di bande e piastre con la barra di ferro che scende sul naso: la calotta protegge il cranio, il nasale offre una protezione aggiuntiva al volto. È una delle forme più diffuse nell'Europa occidentale fra X e XI secolo, e l'arazzo di Bayeux lo mostra frequente tanto fra i normanni quanto fra gli inglesi.",
    fill: "M28 72 C28 40 36 22 50 22 C64 22 72 40 72 72 Z",
    strokes: ["M24 72 h52", "M24 80 h52", "M50 22 V72"],
    extra: ["M30 80 h8 v20 h-8 Z"],
  },
  {
    id: "pentola",
    name: "Elmo a pentola",
    period: "1200 – 1350",
    text: "Una vera scatola d'acciaio calzata sopra il camaglio di maglia: fessure per vedere, fori per respirare, croce per ricordare. Nasconde gran parte del volto e rende sempre più importante l'identificazione attraverso scudo, insegne e sopravveste. Pesante e quasi cieco: lontano dalla carica molti preferivano forme più leggere e aperte.",
    fill: "M32 100 L32 28 C32 25 34 23 37 23 L69 23 C72 23 74 25 74 28 L74 100 Z",
    strokes: ["M32 50 h20", "M32 34 h42", "M40 50 V34"],
    extra: ["M36 62 a2 2 0 1 0 0.1 0", "M42 70 a2 2 0 1 0 0.1 0", "M36 78 a2 2 0 1 0 0.1 0"],
  },
  {
    id: "bacinetto",
    name: "Bacinetto",
    period: "1350 – 1420",
    text: "Calotta appuntita che fa scivolare i colpi, visiera incernierata «a muso di cane», camaglio di maglia al collo. È l'elmo della guerra dei Cent'anni, da Crécy ad Agincourt: pratico, prodotto in grandi quantità e in numerose varianti, portato dal fante come dal re.",
    fill: "M68 74 C73 48 65 24 48 21 C36 19 28 30 27 42 L27 48 L19 58 L27 63 L25 72 C38 78 56 78 68 74 Z",
    strokes: ["M27 46 L43 46", "M30 76 C42 82 56 81 66 76", "M33 84 l33 3", "M31 92 l37 3"],
    extra: ["M56 62 a3 3 0 1 0 0.1 0"],
  },
  {
    id: "armetto",
    name: "Armetto",
    period: "1420 – 1520",
    text: "Chiude interamente il capo con visiera e guanciali incernierati alla calotta e barbotta sul mento: la risposta italiana al bisogno di protezione totale. Diventa uno degli elmi caratteristici del cavaliere in armatura completa del Quattrocento, quello che compare nei ritratti dei condottieri.",
    fill: "M66 100 C72 64 66 26 48 23 C34 22 26 38 26 54 C26 60 24 68 20 74 C19 80 24 87 33 89 C40 93 54 94 62 91 L66 100 Z",
    strokes: ["M26 52 L46 52", "M26 60 C34 64 46 64 54 61", "M33 89 C40 84 50 82 58 84"],
    extra: ["M56 66 a3 3 0 1 0 0.1 0"],
  },
  {
    id: "celata",
    name: "Celata",
    period: "1450 – 1510",
    text: "Calotta arretrata e lunga protezione della nuca, portata con la barbotta separata per la gola; nelle forme tedesche il profilo può terminare in una punta caratteristica, mentre le varianti italiane restano più tonde. Leggera ed elegante, è fra gli elmi più diffusi del tardo Quattrocento.",
    fill: "M24 60 C24 38 36 22 52 22 C64 22 72 32 74 42 C76 52 82 62 88 70 L89 82 L81 81 C76 70 70 62 60 58 C48 54 32 56 24 60 Z",
    strokes: ["M26 47 L46 47", "M24 60 C34 56 46 55 58 57"],
  },
  {
    id: "borgognotta",
    name: "Borgognotta",
    period: "1520 – 1620",
    text: "Volto aperto, cresta rialzata, guanciali a cerniera: è l'elmo dell'età della polvere, quando vedere e sentire contano più che chiudersi del tutto. Accompagna la corazza «a prova di palla» e sopravvive, in versioni da parata, fin dentro il Seicento.",
    fill: "M72 56 C72 34 60 21 47 21 C36 21 28 30 27 42 L19 47 L27 50 L27 56 Z",
    strokes: ["M33 58 C31 70 33 82 43 88 L50 88 C45 80 43 68 43 58", "M72 56 L74 68 L64 70 L64 56"],
    extra: ["M44 22 C52 14 64 18 69 30 L65 32 C60 24 52 20 46 25 Z"],
  },
];

export interface Part {
  id: string;
  name: string;
  region: string;
  x: number;
  y: number;
  weight: string;
  text: string;
}

export const PARTS: Part[] = [
  {
    id: "elmo",
    name: "Elmo chiuso",
    region: "Capo",
    x: 50,
    y: 8.5,
    weight: "2,5 – 4 kg",
    text: "Il cranio d'acciaio: la visiera ha fessure di pochi millimetri, quanto basta per vedere e respirare. Si indossa in tre pezzi — calotta, visiera, guanciali — e con i suoi due-tre chili protegge il capo da punta e taglio.",
  },
  {
    id: "gorgiera",
    name: "Gorgiera",
    region: "Collo e gola",
    x: 50,
    y: 16.5,
    weight: "≈ 0,8 kg",
    text: "Il collare di piastre che salda l'elmo alla corazza. Protegge gola e nuca: le due zone che ogni cavaliere impara per prime a coprire, perché sono le prime che l'avversario cerca.",
  },
  {
    id: "spallacci",
    name: "Spallacci",
    region: "Spalle",
    x: 33,
    y: 23.5,
    weight: "1,5 kg la coppia",
    text: "Cupole che scivolano sul braccio senza inceppare la spalla. Il sinistro è spesso maggiorato: è il lato esposto alla lancia nemica quando si carica con lo scudo ormai appeso alla sella.",
  },
  {
    id: "corazza",
    name: "Corazza",
    region: "Petto e schiena",
    x: 50,
    y: 31.5,
    weight: "4 – 6 kg",
    text: "Il cuore dell'arnese: bombata, con cresta mediana per deviare i colpi verso l'esterno. A destra può portare la resta, il gancio che scarica il peso della lancia in carica.",
  },
  {
    id: "bracciali",
    name: "Bracciali",
    region: "Avambraccio e gomito",
    x: 28,
    y: 39,
    weight: "1,2 kg la coppia",
    text: "Tubi d'acciaio chiusi da cerniere e foderati di cuoio: il braccio resta libero di piegarsi e di parare, mentre il gomito è difeso dalla cubitiera ad alette.",
  },
  {
    id: "guanti",
    name: "Guanti d'arme",
    region: "Mani",
    x: 25,
    y: 50.5,
    weight: "0,9 kg la coppia",
    text: "Numerose piccole lamine snodate, la parte più difficile da forgiare: devono fermare un colpo di spada e al tempo stesso stringere le redini, l'elsa e la lancia.",
  },
  {
    id: "falda",
    name: "Falda",
    region: "Fianchi",
    x: 50,
    y: 43.5,
    weight: "≈ 1 kg",
    text: "La cintura di piastre che scende dai fianchi: da qui pendono i tasselli che coprono inguine e parte alta delle cosce senza impedire la sella.",
  },
  {
    id: "cosciali",
    name: "Cosciali",
    region: "Coscia",
    x: 41,
    y: 56.5,
    weight: "2,5 kg la coppia",
    text: "Gusci che avvolgono la coscia e si raccordano al ginocchio: consentono di montare a cavallo, correre e inginocchiarsi senza impacci.",
  },
  {
    id: "ginocchielli",
    name: "Ginocchielli",
    region: "Ginocchio",
    x: 41,
    y: 66.5,
    weight: "0,8 kg la coppia",
    text: "Con alette laterali che sporgono verso l'esterno: aumentano la protezione del ginocchio e delle zone immediatamente circostanti.",
  },
  {
    id: "schinieri",
    name: "Schinieri",
    region: "Stinco e polpaccio",
    x: 41,
    y: 77,
    weight: "1,8 kg la coppia",
    text: "Proteggono una delle parti più esposte della gamba e si chiudono a libro sul polpaccio con una cerniera, come due valve, senza impedire il passo né l'uso della staffa.",
  },
  {
    id: "sabatoni",
    name: "Sabatoni",
    region: "Piedi",
    x: 40,
    y: 88.5,
    weight: "1,2 kg la coppia",
    text: "Piastre snodate sul piede. Nel gotico tedesco si allargano «a zampa d'orso» per non scivolare dalla staffa; in battaglia offrono una protezione importante al piede, mantenendo la possibilità di usare la staffa.",
  },
];

export interface WeightRow {
  label: string;
  sub: string;
  kg: number;
  notable?: boolean;
}

export const ARMOR_WEIGHTS: WeightRow[] = [
  { label: "Usbergo di maglia", sub: "XII secolo", kg: 12 },
  { label: "Armamento del cavaliere", sub: "XIII secolo", kg: 20 },
  { label: "Armatura bianca milanese", sub: "circa 1450", kg: 27 },
  { label: "Gotica da campo", sub: "circa 1490", kg: 28 },
  { label: "Massimiliana", sub: "circa 1525", kg: 28 },
  { label: "Stechzeug da giostra", sub: "circa 1510", kg: 42, notable: true },
];

export const COMPARE_WEIGHTS: WeightRow[] = [
  { label: "Pompiere in tenuta moderna", sub: "oggi", kg: 25 },
  { label: "Soldato moderno equipaggiato", sub: "oggi", kg: 35 },
];

export interface ForgeStep {
  numeral: string;
  title: string;
  text: string;
}

export const FORGE_STEPS: ForgeStep[] = [
  {
    numeral: "I",
    title: "Il minerale",
    text: "Limonite e ferro di palude nei forni a bloomery: ne esce un bloom spugnoso di ferro e scoria, da battere e ribattere finché le impurità non se ne vanno.",
  },
  {
    numeral: "II",
    title: "La forgia",
    text: "Carbone di faggio e mantici a doppio mantice: a milleduecento gradi il bloom diventa billetta, poi barra, poi lamiera sottile quanto serve alla piastra.",
  },
  {
    numeral: "III",
    title: "Lo sbalzo",
    text: "Migliaia di colpi di martello su incudini e forme di legno: la piastra nasce piatta e si curva «in rilievo», senza giunti né saldature. È il gesto che distingue l'armaiolo dal fabbro.",
  },
  {
    numeral: "IV",
    title: "La tempra",
    text: "Riscaldata al rosso ciliegia e immersa in acqua od olio: è il segreto milanese, custodito per generazioni, che rende l'acciaio duro quanto basta da spezzare le frecce.",
  },
  {
    numeral: "V",
    title: "L'articolazione",
    text: "Ribattini, cuoi interni, rivetti scorrevoli nelle asole: ogni piastra scivola sulla vicina, e l'arnese si muove con il corpo invece di ingabbiarlo.",
  },
  {
    numeral: "VI",
    title: "La finitura",
    text: "Pietra e sabbia finissima per il bianco specchio; brunitura per il nero da campagna; acquaforte e oro per le armature di gala che non vedranno mai un campo.",
  },
  {
    numeral: "VII",
    title: "La prova",
    text: "Il collaudo a fuoco: un colpo di balestra o d'archibugio a distanza ravvicinata. Se il petto regge, il bollo della bottega ne risponde — per sempre.",
  },
];

export interface Myth {
  claim: string;
  verdict: "FALSO" | "PARZIALE";
  text: string;
}

export const MYTHS: Myth[] = [
  {
    claim: "Per salire a cavallo serviva la gru",
    verdict: "FALSO",
    text: "I manuali cavallereschi e le prove dei rievocatori moderni mostrano cavalieri che saltano in sella di slancio, armatura completa e tutto. La gru è un'invenzione ottocentesca, alimentata dai romanzi cavallereschi e dalla penna di Mark Twain in «Un americano alla corte di re Artù».",
  },
  {
    claim: "Caduto a terra, non si rialzava più",
    verdict: "FALSO",
    text: "Venticinque o trenta chili distribuiti su tutto il corpo sono poca cosa: i rievocatori corrono, rotolano e si rialzano senza aiuto. Lo zaino di un soldato moderno, tutto appeso alle spalle, è portato assai peggio.",
  },
  {
    claim: "L'armatura impediva ogni movimento",
    verdict: "FALSO",
    text: "Le articolazioni a rivetti scorrevoli permettono di inginocchiarsi, arrampicarsi, persino fare la capriola: lo dimostrano i trattati di scherma tedeschi del Quattrocento, dove i maestri duellano in arnese completo.",
  },
  {
    claim: "Le frecce del longbow la trapassavano",
    verdict: "PARZIALE",
    text: "La maglia e gli acciai teneri potevano cedere; ma le corazze milanesi temprate, a distanza di battaglia, respingevano quasi ogni dardo. Le frecce impararono a cercare le fessure: visiera, ascelle, inguine.",
  },
  {
    claim: "Morivano arrostiti dentro il ferro",
    verdict: "PARZIALE",
    text: "Il caldo era il vero nemico, specie sotto il sole: ad Agincourt il fango e l'afa piegarono più uomini delle spade. Ma l'imbottitura, le fessure di ventilazione e le pause d'arme mitigavano il forno.",
  },
  {
    claim: "Sparì perché le spade divennero migliori",
    verdict: "FALSO",
    text: "A ritirarla furono archibugi, picche ed eserciti di massa. La corazza «a prova di palla» resistette a lungo; poi l'armatura si fece tre quarti, poi corazza sola, e nel Seicento uscì dal campo — ma non dalla memoria.",
  },
];

export const GLOSSARY: { term: string; def: string }[] = [
  { term: "Usbergo", def: "Cotta di maglia lunga fino al ginocchio, tessuta di decine di migliaia di anelli ribattuti uno a uno." },
  { term: "Camaglio", def: "Tendaggio di maglia che scende dall'elmo su collo e spalle; nel Trecento si aggancia al bacinetto con vervelle." },
  { term: "Ventaglia", def: "Piastra mobile del bacinetto che ruota a proteggere il volto; può aprirsi a libro per respirare fuori battaglia." },
  { term: "Bacinetto", def: "Elmo trecentesco aderente al capo, spesso con visiera «a muso di cane» che devia i colpi lontano dal viso." },
  { term: "Celata", def: "Elmo quattrocentesco con visiera, il preferito dai cavalieri italiani; la versione da fante lascia scoperto il viso." },
  { term: "Armetto", def: "Elmo chiuso rinascimentale: avvolge tutto il capo e si apre a libro, con guanciali incernierati alla calotta." },
  { term: "Gorgiera", def: "Collare di piastre sovrapposte che difende gola e collo, saldando l'elmo alla corazza." },
  { term: "Corazza", def: "Il torso dell'arnese: petto e schiena in acciaio bombato, spesso con cresta mediana deviatrice." },
  { term: "Resta", def: "Gancio imbullonato al petto che regge il peso della lancia in carica, scaricandolo sull'arnese intero." },
  { term: "Falda", def: "Fascia di piastre ai fianchi da cui pendono i tasselli che proteggono inguine e cosce." },
  { term: "Sabatoni", def: "Piastre snodate che vestono il piede; nel gotico tedesco si allargano «a zampa d'orso»." },
  { term: "Brunitura", def: "Ossidazione controllata che annerisce l'acciaio, lo mimetizza e lo difende dalla ruggine." },
];

export const STATS = [
  { value: 1100, prefix: "", suffix: "", label: "anni di evoluzione continua, dalla caduta di Roma al Seicento" },
  { value: 25, prefix: "", suffix: " kg", label: "il peso medio di un arnese completo, distribuito sul corpo" },
  { value: 250, prefix: "≈ ", suffix: "", label: "ore di lavoro di bottega per una sola armatura su misura" },
  { value: 20000, prefix: "", suffix: "+", label: "anelli ribattuti a mano in un usbergo del Duecento" },
];

export const MARQUEE_WORDS = ["Ferrum", "Honor", "Virtus", "Labor", "Ars", "Fides", "Bellum", "Pax"];
