import { useNavigate } from "react-router-dom";

export function LaNostraStoria() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-blue-400 p-8 md:p-16">
      {/* Bottone per tornare indietro */}
      <button
        onClick={() => navigate("/")}
        type="button"
        className="bg-white text-blue-600 font-semibold py-1 px-3 rounded-md text-sm hover:bg-gray-200 absolute top-6 left-8 md:top-4 md:left-16 md:mt-10"
      >
        ⬅️
      </button>

      {/* Contenitore per titolo e logo centrati */}
      <div className="flex items-center justify-center mt-8 mb-8 md:-mt-12">
        <h2 className="text-lg md:text-2xl font-semibold bg-white text-blue-400 py-1 px-4 rounded-lg shadow-lg mr-4">
          LA NOSTRA STORIA
        </h2>
        <img
          src="images/IMG_6743.PNG" // Sostituisci con il percorso del logo
          alt="Logo Oratorio San Vincenzo"
          className="w-20 h-20 md:w-24 md:h-24" // Dimensioni del logo
        />
      </div>

      {/* Testo con paragrafi distanziati */}
      <div className="text-base md:text-lg text-blue-400 font-bold leading-relaxed rounded-3xl p-8 bg-gray-100 space-y-6">
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
