document.getElementById("der").addEventListener("click", derClicked);
document.getElementById("die").addEventListener("click", dieClicked);
document.getElementById("das").addEventListener("click", dasClicked);

const derArtikel = [
  "Mann",
  "Baum",
  "Tisch",
  "Stuhl",
  "Hund",
  "Apfel",
  "Computer",
  "Fernseher",
  "Park",
  "Zug",
  "Bus",
  "Löffel",
  "Teller",
  "Stift",
  "Brief",
  "Freund",
  "Tag",
  "Garten",
  "Berg",
  "Fluss",
  "See",
  "Lehrer",
  "Schüler",
  "Arzt",
  "Bäcker",
  "Verkäufer",
  "Ingenieur",
  "Künstler",
  "Musiker",
  "Schauspieler",
  "Polizist",
  "Feuerwehrmann",
  "Bauarbeiter",
  "Wissenschaftler",
  "Pilot",
  "Kapitän",
  "Richter",
  "Anwalt",
  "Sekretär",
  "Landwirt",
  "Pfarrer",
  "Journalist",
  "Fotograf",
  "Maler",
  "Friseur",
  "Schneider",
  "Koch",
  "Elektriker",
  "Installateur",
  "Tischler",
  "Zimmermann",
  "Gärtner",
  "Hausmeister",
  "Müllmann",
  "Briefträger",
  "Schuster",
  "Automechaniker",
  "Optiker",
  "Apotheker",
  "Zahnarzt",
  "Tierarzt",
  "Psychologe",
  "Therapeut",
  "Buchhalter",
  "Bankier",
  "Makler",
  "Informatiker",
  "Student",
  "Schüler",
  "Rentner",
  "Patient",
  "Freund",
  "Vater",
  "Sohn",
  "Bruder",
  "Onkel",
  "Großvater",
  "Ehemann",
  "Nachbar",
  "Kollege",
  "Chef",
  "Mitarbeiter",
  "Kunde",
  "Gast",
  "Besucher",
  "Tourist",
  "Reisende",
  "Autofahrer",
  "Fußgänger",
  "Radfahrer",
  "Pilot",
  "Kapitän",
  "Matrose",
  "Passagier",
  "Student",
  "Lehrer",
  "Professor",
  "Doktor",
  "Patient",
  "Sänger",
  "Tänzer",
  "Autor",
  "Schriftsteller"
];

const derRomanianWords = [
  "bărbat",          // Mann
  "copac",           // Baum
  "masă",            // Tisch
  "scaun",           // Stuhl
  "câine",           // Hund
  "măr",             // Apfel
  "calculator",      // Computer
  "televizor",       // Fernseher
  "parc",            // Park
  "tren",            // Zug
  "autobuz",         // Bus
  "lingură",         // Löffel
  "farfurie",        // Teller
  "stilou",          // Stift
  "scrisoare",       // Brief
  "prieten",         // Freund
  "zi",              // Tag
  "grădină",         // Garten
  "munte",           // Berg
  "râu",             // Fluss
  "lac",             // See
  "profesor",        // Lehrer
  "elev",            // Schüler
  "doctor",          // Arzt
  "brutar",          // Bäcker
  "vânzător",        // Verkäufer
  "inginer",         // Ingenieur
  "artist",          // Künstler
  "muzician",        // Musiker
  "actor",           // Schauspieler
  "polițist",        // Polizist
  "pompier",         // Feuerwehrmann
  "muncitor",        // Bauarbeiter
  "cercetător",      // Wissenschaftler
  "pilot",           // Pilot
  "căpitan",         // Kapitän
  "judecător",       // Richter
  "avocat",          // Anwalt
  "secretar",        // Sekretär
  "fermier",         // Landwirt
  "preot",           // Pfarrer
  "jurnalist",       // Journalist
  "fotograf",        // Fotograf
  "pictor",          // Maler
  "frizer",          // Friseur
  "croitor",         // Schneider
  "bucătar",         // Koch
  "electrician",     // Elektriker
  "instalator",      // Installateur
  "tâmplar",         // Tischler
  "dulgher",         // Zimmermann
  "grădinar",        // Gärtner
  "administrator",   // Hausmeister
  "gunoier",         // Müllmann
  "poștaș",          // Briefträger
  "cizmar",          // Schuster
  "mecanic auto",    // Automechaniker
  "optician",        // Optiker
  "farmacist",       // Apotheker
  "dentist",         // Zahnarzt
  "veterinar",       // Tierarzt
  "psiholog",        // Psychologe
  "terapeut",        // Therapeut
  "contabil",        // Buchhalter
  "bancher",         // Bankier
  "broker",          // Makler
  "informatician",   // Informatiker
  "student",         // Student
  "elev",            // Schüler (duplicate)
  "pensionar",       // Rentner
  "pacient",         // Patient
  "prieten",         // Freund (duplicate)
  "tată",            // Vater
  "fiu",             // Sohn
  "frate",           // Bruder
  "unchi",           // Onkel
  "bunicul",         // Großvater
  "soț",             // Ehemann
  "vecin",           // Nachbar
  "coleg",           // Kollege
  "șef",             // Chef
  "angajat",         // Mitarbeiter
  "client",          // Kunde
  "oaspete",         // Gast
  "vizitator",       // Besucher
  "turist",          // Tourist
  "călător",         // Reisende
  "șofer",           // Autofahrer
  "pieton",          // Fußgänger
  "biciclist",       // Radfahrer
  "pilot",           // Pilot (duplicate)
  "căpitan",         // Kapitän (duplicate)
  "marinar",         // Matrose
  "pasager",         // Passagier
  "student",         // Student (duplicate)
  "profesor",        // Lehrer (duplicate)
  "profesor",        // Professor
  "doctor",          // Doktor
  "pacient",         // Patient (duplicate)
  "cântăreț",        // Sänger
  "dansator",        // Tänzer
  "autor",           // Autor
  "scriitor"         // Schriftsteller
];


const dieArtikel = [
  "Frau",
  "Katze",
  "Tasche",
  "Lampe",
  "Uhr",
  "Tür",
  "Blume",
  "Straße",
  "Schule",
  "Universität",
  "Brücke",
  "Flasche",
  "Wand",
  "Küche",
  "Wohnung",
  "Zeitung",
  "Zeitschrift",
  "Karte",
  "Bank",
  "Kirche",
  "Maus",
  "Biene",
  "Ente",
  "Gabel",
  "Tasse",
  "Schüssel",
  "Pflanze",
  "Rose",
  "Lilie",
  "Sonne",
  "Wolke",
  "Schneeflocke",
  "E-Mail",
  "Nachricht",
  "Adresse",
  "Nummer",
  "Stadt",
  "Hauptstadt",
  "Firma",
  "Werkstatt",
  "Industrie",
  "Branche",
  "Produktion",
  "Gesellschaft",
  "Gemeinschaft",
  "Familie",
  "Mutter",
  "Tochter",
  "Schwester",
  "Großmutter",
  "Tante",
  "Cousine",
  "Freundin",
  "Kollegin",
  "Mitarbeiterin",
  "Chefin",
  "Ärztin",
  "Lehrerin",
  "Schülerin",
  "Studentin",
  "Journalistin",
  "Fotografin",
  "Malerin",
  "Sängerin",
  "Tänzerin",
  "Autorin",
  "Schriftstellerin",
  "Reiseleiterin",
  "Reisende",
  "Besucherin",
  "Touristin",
  "Fahrerin",
  "Fußgängerin",
  "Radfahrerin",
  "Polizistin",
  "Feuerwehrfrau",
  "Bäckerin",
  "Verkäuferin",
  "Ingenieurin",
  "Künstlerin",
  "Musikerin",
  "Schauspielerin",
  "Wissenschaftlerin",
  "Pilotin",
  "Kapitänin",
  "Richterin",
  "Anwältin",
  "Sekretärin",
  "Landwirtin",
  "Pfarrerin",
  "Therapeutin",
  "Buchhalterin",
  "Bankierin",
  "Maklerin",
  "Informatikerin",
  "Patientin",
  "Kundin",
  "Gästin",
  "Leiterin",
  "Managerin",
  "Direktorin",
  "Assistentin",
  "Trainerin",
  "Beraterin",
  "Entwicklerin"
];

const dieRomanianWords = [
  "femeie",           // Frau
  "pisică",           // Katze
  "geantă",           // Tasche
  "lampă",            // Lampe
  "ceas",             // Uhr
  "ușă",              // Tür
  "floare",           // Blume
  "stradă",           // Straße
  "școală",           // Schule
  "universitate",     // Universität
  "pod",              // Brücke
  "sticlă",           // Flasche
  "perete",           // Wand
  "bucătărie",        // Küche
  "apartament",       // Wohnung
  "ziar",             // Zeitung
  "revistă",          // Zeitschrift
  "hartă",            // Karte
  "bancă",            // Bank
  "biserică",         // Kirche
  "șoarece",          // Maus
  "albină",           // Biene
  "rață",             // Ente
  "furculiță",        // Gabel
  "ceașcă",           // Tasse
  "bol",              // Schüssel
  "plantă",           // Pflanze
  "trandafir",        // Rose
  "crin",             // Lilie
  "soare",            // Sonne
  "nor",              // Wolke
  "fulg de zăpadă",   // Schneeflocke
  "e-mail",           // E-Mail
  "mesaj",            // Nachricht
  "adresă",           // Adresse
  "număr",            // Nummer
  "oraș",             // Stadt
  "capitală",         // Hauptstadt
  "firmă",            // Firma
  "atelier",          // Werkstatt
  "industrie",        // Industrie
  "ramură",           // Branche
  "producție",        // Produktion
  "societate",        // Gesellschaft
  "comunitate",       // Gemeinschaft
  "familie",          // Familie
  "mamă",             // Mutter
  "fiică",            // Tochter
  "soră",             // Schwester
  "bunică",           // Großmutter
  "mătușă",           // Tante
  "verișoară",        // Cousine
  "prietenă",         // Freundin
  "colegă",           // Kollegin
  "angajată",         // Mitarbeiterin
  "șefă",             // Chefin
  "doctoriță",        // Ärztin
  "profesoară",       // Lehrerin
  "elevă",            // Schülerin
  "studentă",         // Studentin
  "jurnalistă",       // Journalistin
  "fotografă",        // Fotografin
  "pictoriță",        // Malerin
  "cântăreață",       // Sängerin
  "dansatoare",       // Tänzerin
  "autoare",          // Autorin
  "scriitoare",       // Schriftstellerin
  "ghid",             // Reiseleiterin
  "călătoare",        // Reisende
  "vizitatoare",      // Besucherin
  "turistă",          // Touristin
  "șoferiță",         // Fahrerin
  "pieton",          // Fußgängerin
  "biciclistă",       // Radfahrerin
  "polițistă",        // Polizistin
  "pompier",          // Feuerwehrfrau
  "brutăriță",        // Bäckerin
  "vânzătoare",       // Verkäuferin
  "inginer (femeie)", // Ingenieurin
  "artistă",          // Künstlerin
  "muzician(femeie)", // Musikerin
  "actriță",          // Schauspielerin
  "cercetătoare",     // Wissenschaftlerin
  "pilot(femeie)",    // Pilotin
  "căpitan(femeie)",  // Kapitänin
  "judecătoare",      // Richterin
  "avocată",          // Anwältin
  "secretară",        // Sekretärin
  "fermieriță",       // Landwirtin
  "preoteasă",        // Pfarrerin
  "terapeută",        // Therapeutin
  "contabilă",        // Buchhalterin
  "bancheriță",       // Bankierin
  "brokeriță",        // Maklerin
  "informaticiană",   // Informatikerin
  "pacientă",         // Patientin
  "clientă",          // Kundin
  "oaspete",          // Gästin
  "lideră",           // Leiterin
  "manageră",         // Managerin
  "directoare",       // Direktorin
  "asistentă",        // Assistentin
  "antrenoare",       // Trainerin
  "consilieră",       // Beraterin
  "dezvoltatoare"     // Entwicklerin
];


const dasArtikel = [
  "Haus",
  "Auto",
  "Buch",
  "Kind",
  "Tier",
  "Fahrrad",
  "Boot",
  "Flugzeug",
  "Hotel",
  "Restaurant",
  "Essen",
  "Getränk",
  "Bild",
  "Fenster",
  "Bett",
  "Bad",
  "Zimmer",
  "Büro",
  "Kleid",
  "Hemd",
  "Telefon",
  "Radio",
  "Geschenk",
  "Spiel",
  "Kino",
  "Theater",
  "Museum",
  "Festival",
  "Konzert",
  "Schloss",
  "Buch",
  "Mädchen",
  "Baby",
  "Wort",
  "Problem",
  "Thema",
  "Programm",
  "Projekt",
  "Produkt",
  "Ergebnis",
  "Erlebnis",
  "Erfolg",
  "Interesse",
  "Gefühl",
  "Licht",
  "Glas",
  "Metall",
  "Holz",
  "Papier",
  "Leben",
  "Glück",
  "Unglück",
  "Risiko",
  "Ereignis",
  "Ziel",
  "Erlebnis",
  "Gespräch",
  "Interview",
  "Verbot",
  "Gesetz",
  "Recht",
  "Verfahren",
  "Training",
  "Ereignis",
  "Projekt",
  "Konzept",
  "Labor",
  "Universum",
  "Galaxy",
  "System",
  "Material",
  "Werkzeug",
  "Gerät",
  "Instrument",
  "Feld",
  "Experiment",
  "Erlebnis",
  "Phänomen",
  "Theorem",
  "Beispiel",
  "Modell",
  "Signal",
  "Symbol",
  "Algorithmus",
  "Schema",
  "Thema",
  "Detail",
  "Ding",
  "Ereignis",
  "Ergebnis",
  "Gefühl",
  "Gleichgewicht",
  "Handbuch",
  "Kapitel",
  "Klima",
  "Konzept",
  "Labor",
  "Mathematik",
  "Mittel",
  "Netzwerk"
];

const dasRomanianWords = [
  "casă",
  "mașină",
  "carte",
  "copil",
  "animal",
  "bicicletă",
  "barcă",
  "avion",
  "hotel",
  "restaurant",
  "mâncare",
  "băutură",
  "imagine",
  "fereastră",
  "pat",
  "baie",
  "cameră",
  "birou",
  "rochie",
  "cămașă",
  "telefon",
  "radio",
  "cadou",
  "joc",
  "cinema",
  "teatru",
  "muzeu",
  "festival",
  "concert",
  "castel",
  "carte",
  "fată",
  "bebeluş",
  "cuvânt",
  "problemă",
  "temă",
  "program",
  "proiect",
  "produs",
  "rezultat",
  "experiență",
  "succes",
  "interes",
  "sentiment",
  "lumina",
  "pahar",
  "metal",
  "lemn",
  "hârtie",
  "viață",
  "fericire",
  "nefericire",
  "risc",
  "eveniment",
  "țel",
  "conversație",
  "interviu",
  "interdicție",
  "lege",
  "drept",
  "procedură",
  "antrenament",
  "eveniment",
  "proiect",
  "concept",
  "laborator",
  "univers",
  "galaxie",
  "sistem",
  "material",
  "unealtă",
  "dispozitiv",
  "instrument",
  "câmp",
  "experiment",
  "fenomen",
  "teoremă",
  "exemplu",
  "model",
  "semnal",
  "simbol",
  "algoritm",
  "schemă",
  "temă",
  "detaliu",
  "lucru",
  "eveniment",
  "rezultat",
  "sentiment",
  "echilibru",
  "manual",
  "capitol",
  "climă",
  "concept",
  "laborator",
  "matematică",
  "mijloc",
  "rețea"
];

//variables 
const comboArray = [derArtikel, dieArtikel, dasArtikel];
const points = 10;
var score = 0;
var roWord;
var deWord;


//get a random element 
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//mathcing the words 
function nextWord() {
  const randomArrayIndex = Math.floor(Math.random() * comboArray.length);
  const randomArray = comboArray[randomArrayIndex];
  deWord = getRandomElement(randomArray);
  document.getElementById("variable_word").textContent = "(De: " + deWord + ")";

  if (derArtikel.includes(deWord)) {
    document.getElementById("roWord").textContent ="(Ro: " + 
      derRomanianWords[derArtikel.indexOf(deWord)] + ")";
    roWord = derRomanianWords[derArtikel.indexOf(deWord)];
  } else if (dasArtikel.includes(deWord)) {
    document.getElementById("roWord").textContent = "(Ro: " +
      dasRomanianWords[dasArtikel.indexOf(deWord)] + ")";
      roWord = dasRomanianWords[dasArtikel.indexOf(deWord)];
  } else if (dieArtikel.includes(deWord)) {
    document.getElementById("roWord").textContent = "(Ro: " +
      dieRomanianWords[dieArtikel.indexOf(deWord)] + ")";
      roWord = dieRomanianWords[dieArtikel.indexOf(deWord)];
  }

  return [deWord, roWord];
}

nextWord();

// if answer is false 
function cacheReload() {
 
  document.getElementById("variable_word").textContent = deWord;
  document.getElementById("roWord").textContent = roWord;
}


//if der btn is clicked
function derClicked() {
  if (derArtikel.includes(deWord)) {
    document.getElementById("variable_word").textContent = "Korrekt";
    score += points;
    document.getElementById("scoreNumber").textContent = score;
    setTimeout(nextWord, 1000);
  } else {
    document.getElementById("variable_word").textContent = "Falsch";
    if (score > 0) {
      score -= points;
      document.getElementById("scoreNumber").textContent = score;
    }
    setTimeout(cacheReload, 1000);
  }
}

//if die Btn is clicked 
function dieClicked() {
  if (dieArtikel.includes(deWord)) {
    document.getElementById("variable_word").textContent = "Korrekt";
    score += points;
    document.getElementById("scoreNumber").textContent = score;
    setTimeout(nextWord, 1000);
  } else {
    document.getElementById("variable_word").textContent = "Falsch";
    if (score > 0) {
      score -= points;
      document.getElementById("scoreNumber").textContent = score;
    }
    setTimeout(cacheReload, 1000);
  }
}

//if das Btn is clicked
function dasClicked() {
  if (dasArtikel.includes(deWord)) {
    document.getElementById("variable_word").textContent = "Korrekt";
    score += points;
    document.getElementById("scoreNumber").textContent = score;
    setTimeout(nextWord, 1000);
  } else {
    document.getElementById("variable_word").textContent = "Falsch";
    if (score > 0) {
      score -= points;
      document.getElementById("scoreNumber").textContent = score;
    }
    setTimeout(cacheReload, 1000);
  }
}

//calling functions 


