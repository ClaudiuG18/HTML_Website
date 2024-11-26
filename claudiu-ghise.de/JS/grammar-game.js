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
  "Haus",             // casă
  "Auto",             // mașină
  "Buch",             // carte
  "Kind",             // copil
  "Tier",             // animal
  "Fahrrad",          // bicicletă
  "Boot",             // barcă
  "Flugzeug",         // avion
  "Hotel",            // hotel
  "Restaurant",       // restaurant
  "Essen",            // mâncare
  "Getränk",          // băutură
  "Bild",             // imagine
  "Fenster",          // fereastră
  "Bett",             // pat
  "Bad",              // baie
  "Zimmer",           // cameră
  "Büro",             // birou
  "Kleid",            // rochie
  "Hemd",             // cămașă
  "Telefon",          // telefon
  "Radio",            // radio
  "Geschenk",         // cadou
  "Spiel",            // joc
  "Kino",             // cinema
  "Theater",          // teatru
  "Museum",           // muzeu
  "Festival",         // festival
  "Konzert",          // concert
  "Schloss",          // castel
  "Mädchen",          // fată
  "Baby",             // bebeluş
  "Wort",             // cuvânt
  "Problem",          // problemă
  "Thema",            // temă
  "Programm",         // program
  "Projekt",          // proiect
  "Produkt",          // produs
  "Ergebnis",         // rezultat
  "Erlebnis",         // experiență
  "Erfolg",           // succes
  "Interesse",        // interes
  "Gefühl",           // sentiment
  "Licht",            // lumina
  "Glas",             // pahar
  "Metall",           // metal
  "Holz",             // lemn
  "Papier",           // hârtie
  "Leben",            // viață
  "Glück",            // fericire
  "Unglück",          // nefericire
  "Risiko",           // risc
  "Ereignis",         // eveniment
  "Ziel",             // țel
  "Gespräch",         // conversație
  "Interview",        // interviu
  "Verbot",           // interdicție
  "Gesetz",           // lege
  "Recht",            // drept
  "Verfahren",        // procedură
  "Training",         // antrenament
  "Konzept",          // concept
  "Labor",            // laborator
  "Universum",        // univers
  "Galaxie",          // galaxie
  "System",           // sistem
  "Material",         // material
  "Werkzeug",         // unealtă
  "Gerät",            // dispozitiv
  "Instrument",       // instrument
  "Feld",             // câmp
  "Experiment",       // experiment
  "Phänomen",         // fenomen
  "Theorem",          // teoremă
  "Beispiel",         // exemplu
  "Modell",           // model
  "Signal",           // semnal
  "Symbol",           // simbol
  "Algorithmus",      // algoritm
  "Schema",           // schemă
  "Detail",           // detaliu
  "Ding",             // lucru
  "Gleichgewicht",    // echilibru
  "Handbuch",         // manual
  "Kapitel",          // capitol
  "Klima",            // climă
  "Mathematik",       // matematică
  "Mittel",           // mijloc
  "Netzwerk"          // rețea
];

const dasRomanianWords = [
  "casă",             // Haus
  "mașină",           // Auto
  "carte",            // Buch
  "copil",            // Kind
  "animal",           // Tier
  "bicicletă",        // Fahrrad
  "barcă",            // Boot
  "avion",            // Flugzeug
  "hotel",            // Hotel
  "restaurant",       // Restaurant
  "mâncare",          // Essen
  "băutură",          // Getränk
  "imagine",          // Bild
  "fereastră",        // Fenster
  "pat",              // Bett
  "baie",             // Bad
  "cameră",           // Zimmer
  "birou",            // Büro
  "rochie",           // Kleid
  "cămașă",           // Hemd
  "telefon",          // Telefon
  "radio",            // Radio
  "cadou",            // Geschenk
  "joc",              // Spiel
  "cinema",           // Kino
  "teatru",           // Theater
  "muzeu",            // Museum
  "festival",         // Festival
  "concert",          // Konzert
  "castel",           // Schloss
  "fată",             // Mädchen
  "bebeluş",          // Baby
  "cuvânt",           // Wort
  "problemă",         // Problem
  "temă",             // Thema
  "program",          // Programm
  "proiect",          // Projekt
  "produs",           // Produkt
  "rezultat",         // Ergebnis
  "experiență",       // Erlebnis
  "succes",           // Erfolg
  "interes",          // Interesse
  "sentiment",        // Gefühl
  "lumina",           // Licht
  "pahar",            // Glas
  "metal",            // Metall
  "lemn",             // Holz
  "hârtie",           // Papier
  "viață",            // Leben
  "fericire",         // Glück
  "nefericire",       // Unglück
  "risc",             // Risiko
  "eveniment",        // Ereignis
  "țel",              // Ziel
  "conversație",      // Gespräch
  "interviu",         // Interview
  "interdicție",      // Verbot
  "lege",             // Gesetz
  "drept",            // Recht
  "procedură",        // Verfahren
  "antrenament",      // Training
  "concept",          // Konzept
  "laborator",        // Labor
  "univers",          // Universum
  "galaxie",          // Galaxie
  "sistem",           // System
  "material",         // Material
  "unealtă",          // Werkzeug
  "dispozitiv",       // Gerät
  "instrument",       // Instrument
  "câmp",             // Feld
  "experiment",       // Experiment
  "fenomen",          // Phänomen
  "teoremă",          // Theorem
  "exemplu",          // Beispiel
  "model",            // Modell
  "semnal",           // Signal
  "simbol",           // Symbol
  "algoritm",         // Algorithmus
  "schemă",           // Schema
  "detaliu",          // Detail
  "lucru",            // Ding
  "echilibru",        // Gleichgewicht
  "manual",           // Handbuch
  "capitol",          // Kapitel
  "climă",            // Klima
  "matematică",       // Mathematik
  "mijloc",           // Mittel
  "rețea"             // Netzwerk
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


