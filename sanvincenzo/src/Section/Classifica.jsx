import { Navbar } from "./Navbar";
import { Helmet } from "react-helmet";

export function Classifica() {


    return (
        <>
            <Helmet>
                <title>Classifica | Oratorio San Vincenzo</title>
                <meta name="description" content="Scopri la classifica aggiornata delle squadre dell'Oratorio San Vincenzo. Segui il progresso della tua squadra preferita!" />
                <meta name="keywords" content="classifica, squadre, Oratorio San Vincenzo, calcio, sport" />
            </Helmet>
            <h1 className="sr-only">Classifica</h1>
            <div className="bg-white min-h-screen flex flex-col items-center px-4">
                {/* Contenitore per pulsante e titolo */}
                <div className="flex items-center justify-center w-full max-w-4xl mt-16">
                    <Navbar></Navbar>
                    <h1 className="text-xl font-semibold my-6  text-blue-400 py-2 px-6">
                        CLASSIFICA
                    </h1>
                </div>

                {/* Widget Classifica */}
                <div className="flex justify-center items-center bg-white p-2 rounded-lg shadow-2xl -mt-6 w-full max-w-2xl mb-6">
                    <iframe
                        src="https://www.tuttocampo.it/WidgetV2/Classifica/30018696-716a-4194-a931-e7547a88ff56"
                        loading="lazy"
                        title="Classifica"
                        className="w-full h-[550px] sm:h-[600px] md:h-[600px]"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
