import { Navbar } from "./Navbar";

export function LaNostraStoria() {

  return (
    <div className="relative bg-white p-8 md:p-16">
      <Navbar></Navbar>

      {/* Contenitore per titolo e logo centrati */}
      <div className="flex items-center justify-center mt-10 mb-8 md:mt-6">
        <h2 className="text-l -mx-8 md:text-2xl font-semibold text-blue-400 py-1 px-4 mr-8">
          LA NOSTRA STORIA
        </h2>
        <img
          src="images/IMG_6743.PNG" // Sostituisci con il percorso del logo
          alt="Logo Oratorio San Vincenzo"
          className="w-16 h-16 mt-2 md:w-24 md:h-24" // Dimensioni del logo
        />
      </div>

      {/* Testo con paragrafi distanziati */}
      <div className="text-base md:text-lg text-black font-thin leading-relaxed space-y-6 -py-8">
        <p>
          L&apos;ASD Oratorio San Vincenzo nasce con un obiettivo chiaro: promuovere il calcio a 5 all&apos;interno del quartiere Resuttana San Lorenzo, valorizzando i giovani e favorendo la crescita sportiva e personale dei ragazzi. Fin dalle sue origini, la società ha trovato la sua forza nei legami costruiti all&apos;interno dell&apos;oratorio, dove tanti giovani talenti hanno avuto l’opportunità di crescere e di cimentarsi nello sport. 👟
        </p>
        <p>
          Dopo anni di lavoro e dedizione, il nostro impegno ha portato a risultati straordinari, grazie alla dedizione di diverse figure fondamentali, culminati nella storica promozione al Campionato Regionale Siciliano di Serie C2 nella stagione 2023/24. Guidati dal mister Marco De Francisci, sotto la supervisione di Matteo Cicero, vera bandiera dell&apos;oratorio, che da oltre un decennio allena e supporta i nostri giovani atleti, abbiamo affrontato un campionato intenso e pieno di sfide. La nostra squadra, composta da giovani promesse e supportata da alcuni veterani, è riuscita a emergere come una delle formazioni più dinamiche e combattive, guadagnandosi il soprannome di “i ragazzini terribili” della Serie D.🏆
        </p>
        <p>
          L’ASD Oratorio San Vincenzo è più di una semplice squadra; è una famiglia che si unisce attorno ai valori dello sport, della comunità e della crescita collettiva. Grazie al supporto di figure chiave come Padre Calogero Di Fiore e il custode Carmelo Guzzo, possiamo allenarci nei campi in sintetico all’interno dell’oratorio, continuando a portare avanti il nostro progetto nel cuore del contesto parrocchiale.🤝
        </p>
        <p>
          Guardando alla stagione 2024/25, le ambizioni non mancano. Coach Matteo Cicero, ora anche Direttore Sportivo, insieme al Direttore Generale Mario Ferrante, giovane dirigente di grande valore, punta a consolidare la posizione della squadra e a competere per il titolo. La nostra visione non è solo per la prima squadra: crediamo fortemente nel nostro vivaio e nel progetto a lungo termine di costruire una cantera locale, un settore giovanile che sia il cuore pulsante della nostra società.🎯
        </p>
        <p>
          Con umiltà e determinazione, affrontiamo questa nuova sfida in Serie C2, consapevoli della forza del nostro gruppo e della passione che ci unisce.🔥
        </p>
      </div>
    </div>
  );
}
