
document.getElementById("der").addEventListener("click", derClicked);
document.getElementById("die").addEventListener("click", dieClicked);
document.getElementById("das").addEventListener("click", dasClicked);

const derArtikel = [
    "Mann", "Baum", "Tisch", "Stuhl", "Hund", 
    "Apfel", "Computer", "Fernseher", "Park", "Zug", 
    "Bus", "Löffel", "Teller", "Stift", "Brief", 
    "Freund", "Tag", "Garten", "Berg", "Fluss", 
    "See", "Lehrer", "Schüler", "Arzt", "Bäcker", 
    "Verkäufer", "Ingenieur", "Künstler", "Musiker", 
    "Schauspieler", "Polizist", "Feuerwehrmann", "Bauarbeiter", 
    "Wissenschaftler", "Pilot", "Kapitän", "Richter", 
    "Anwalt", "Sekretär", "Landwirt", "Pfarrer", 
    "Journalist", "Fotograf", "Maler", "Friseur", 
    "Schneider", "Koch", "Elektriker", "Installateur", 
    "Tischler", "Zimmermann", "Gärtner", "Hausmeister", 
    "Müllmann", "Briefträger", "Schuster", "Automechaniker", 
    "Optiker", "Apotheker", "Zahnarzt", "Tierarzt", 
    "Psychologe", "Therapeut", "Buchhalter", "Bankier", 
    "Makler", "Informatiker", "Student", "Schüler", 
    "Rentner", "Patient", "Freund", "Vater", "Sohn", 
    "Bruder", "Onkel", "Großvater", "Ehemann", "Nachbar", 
    "Kollege", "Chef", "Mitarbeiter", "Kunde", "Gast", 
    "Besucher", "Tourist", "Reisende", "Autofahrer", 
    "Fußgänger", "Radfahrer", "Pilot", "Kapitän", 
    "Matrose", "Passagier", "Student", "Lehrer", 
    "Professor", "Doktor", "Patient", "Sänger", 
    "Tänzer", "Autor", "Schriftsteller"
];

const dieArtikel = [
    "Frau", "Katze", "Tasche", "Lampe", "Uhr", 
    "Tür", "Blume", "Straße", "Schule", "Universität", 
    "Brücke", "Flasche", "Wand", "Küche", "Wohnung", 
    "Zeitung", "Zeitschrift", "Karte", "Bank", "Kirche", 
    "Maus", "Biene", "Ente", "Gabel", "Tasse", 
    "Schüssel", "Pflanze", "Rose", "Lilie", "Sonne", 
    "Wolke", "Schneeflocke", "E-Mail", "Nachricht", "Adresse", 
    "Nummer", "Stadt", "Hauptstadt", "Firma", "Werkstatt", 
    "Industrie", "Branche", "Produktion", "Gesellschaft", "Gemeinschaft", 
    "Familie", "Mutter", "Tochter", "Schwester", "Großmutter", 
    "Tante", "Cousine", "Freundin", "Kollegin", "Mitarbeiterin", 
    "Chefin", "Ärztin", "Lehrerin", "Schülerin", "Studentin", 
    "Journalistin", "Fotografin", "Malerin", "Sängerin", "Tänzerin", 
    "Autorin", "Schriftstellerin", "Reiseleiterin", "Reisende", "Besucherin", 
    "Touristin", "Fahrerin", "Fußgängerin", "Radfahrerin", "Polizistin", 
    "Feuerwehrfrau", "Bäckerin", "Verkäuferin", "Ingenieurin", "Künstlerin", 
    "Musikerin", "Schauspielerin", "Wissenschaftlerin", "Pilotin", "Kapitänin", 
    "Richterin", "Anwältin", "Sekretärin", "Landwirtin", "Pfarrerin", 
    "Therapeutin", "Buchhalterin", "Bankierin", "Maklerin", "Informatikerin", 
    "Patientin", "Kundin", "Gästin", "Leiterin", "Managerin", 
    "Direktorin", "Assistentin", "Trainerin", "Beraterin", "Entwicklerin"
];

const dasArtikel = [
    "Haus", "Auto", "Buch", "Kind", "Tier", 
    "Fahrrad", "Boot", "Flugzeug", "Hotel", "Restaurant", 
    "Essen", "Getränk", "Bild", "Fenster", "Bett", 
    "Bad", "Zimmer", "Büro", "Kleid", "Hemd", 
    "Telefon", "Radio", "Geschenk", "Spiel", "Kino", 
    "Theater", "Museum", "Festival", "Konzert", "Schloss", 
    "Buch", "Mädchen", "Baby", "Wort", "Problem", 
    "Thema", "Programm", "Projekt", "Produkt", "Ergebnis", 
    "Erlebnis", "Erfolg", "Interesse", "Gefühl", "Licht", 
    "Glas", "Metall", "Holz", "Papier", "Leben", 
    "Glück", "Unglück", "Risiko", "Ereignis", "Ziel", 
    "Erlebnis", "Gespräch", "Interview", "Verbot", "Gesetz", 
    "Recht", "Verfahren", "Training", "Ereignis", "Projekt", 
    "Konzept", "Labor", "Universum", "Galaxy", "System", 
    "Material", "Werkzeug", "Gerät", "Instrument", "Feld", 
    "Experiment", "Erlebnis", "Phänomen", "Theorem", "Beispiel", 
    "Modell", "Signal", "Symbol", "Algorithmus", "Schema", 
    "Thema", "Detail", "Ding", "Ereignis", "Ergebnis", 
    "Gefühl", "Gleichgewicht", "Handbuch", "Kapitel", "Klima", 
    "Konzept", "Labor", "Mathematik", "Mittel", "Netzwerk"
];

const comboArray = [derArtikel, dieArtikel, dasArtikel];
var artikel;

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function nextWord()  {

  const randomArrayIndex = Math.floor(Math.random() * comboArray.length);
  const randomArray = comboArray[randomArrayIndex];
  const randomWord = getRandomElement(randomArray);
  document.getElementById("variable_word").textContent = randomWord;
  return randomWord;
}


artikel = nextWord();

function reload()
{
    location.reload(true);
}

function cacheReload()
{
    document.getElementById("variable_word").textContent = artikel;
}




function derClicked(){

    if (derArtikel.includes(artikel))
    {
        document.getElementById("variable_word").textContent = "Korrekt";
        setTimeout(reload, 2000);
    }
    else
    {
        document.getElementById("variable_word").textContent = "Falsch";
        setTimeout(cacheReload,2000);
    }
   
    
}

function dieClicked(){
    if (dieArtikel.includes(artikel))
    {
        document.getElementById("variable_word").textContent = "Korrekt";
        setTimeout(reload, 2000);
    }
    else
    {
        document.getElementById("variable_word").textContent = "Falsch";
        setTimeout(cacheReload,2000);
      
    }
 
}

function dasClicked(){

    if (dasArtikel.includes(artikel))
    {
        document.getElementById("variable_word").textContent = "Korrekt";
        setTimeout(reload, 2000);
    }
    else
    {
        document.getElementById("variable_word").textContent = "Falsch";
        setTimeout(cacheReload,2000);
    }

}

