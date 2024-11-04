import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function LaNostraStoria() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center my-3 px-4 overflow-auto rounded-2xl-">
      <Card className="w-full max-w-8xl flex flex-col md:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-1/2 w-full shrink-0 rounded-b-none md:rounded-r-none"
        >
          <img
            src="images/WhatsApp Image 2024-10-29 at 16.37.06.jpeg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="flex flex-col justify-center p-6">
          <div className="flex items-center justify-center w-full max-w-4xl mt-4">
            <button
              onClick={() => navigate("/")}
              type="button"
              className="bg-white text-blue-600 font-semibold py-1 px-3 rounded-md text-sm hover:bg-gray-200 absolute mr-96"
            >
              ⬅️
            </button>
            <h1 className="text-xl font-semibold my-6 bg-white text-blue-400 py-2 px-6 rounded-lg shadow-lg md:left-4">
              LA NOSTRA STORIA
            </h1>
          </div>
          <Typography color="gray" className="mb-8 font-normal text-sm md:text-base">
            L&apos;ASD Oratorio San Vincenzo nasce con un obiettivo chiaro: promuovere il calcio a 5 all&apos;interno del quartiere Resuttana San Lorenzo, valorizzando i giovani e favorendo la crescita sportiva e personale dei ragazzi. Fin dalle sue origini, la società ha trovato la sua forza nei legami costruiti all&apos;interno dell&apos;oratorio, dove tanti giovani talenti hanno avuto l’opportunità di crescere e di cimentarsi nello sport.

            Dopo anni di lavoro e dedizione, il nostro impegno ha portato a risultati straordinari, grazie alla dedizione di diverse figure fondamentali, culminati nella storica promozione al Campionato Regionale Siciliano di Serie C2 nella stagione 2023/24. Guidati dal mister Marco De Francisci, sotto la supervisione di Matteo Cicero, vera bandiera dell&apos;oratorio, che da oltre un decennio allena e supporta i nostri giovani atleti, abbiamo affrontato un campionato intenso e pieno di sfide. La nostra squadra, composta da giovani promesse e supportata da alcuni veterani, è riuscita a emergere come una delle formazioni più dinamiche e combattive, guadagnandosi il soprannome di “i ragazzini terribili” della Serie D.

            L’ASD Oratorio San Vincenzo è più di una semplice squadra; è una famiglia che si unisce attorno ai valori dello sport, della comunità e della crescita collettiva. Grazie al supporto di figure chiave come Padre Calogero Di Fiore e il custode Carmelo Guzzo, possiamo allenarci nei campi in sintetico all’interno dell’oratorio, continuando a portare avanti il nostro progetto nel cuore del contesto parrocchiale.

            Guardando alla stagione 2024/25, le ambizioni non mancano. Coach Matteo Cicero, ora anche Direttore Sportivo, insieme al Direttore Generale Mario Ferrante, giovane dirigente di grande valore, punta a consolidare la posizione della squadra e a competere per il titolo. La nostra visione non è solo per la prima squadra: crediamo fortemente nel nostro vivaio e nel progetto a lungo termine di costruire una cantera locale, un settore giovanile che sia il cuore pulsante della nostra società.

            Con umiltà e determinazione, affrontiamo questa nuova sfida in Serie C2, consapevoli della forza del nostro gruppo e della passione che ci unisce.
          </Typography>
          <a href="#" className="inline-block">
          </a>
        </CardBody>
      </Card>
    </div>
  );
}
