import { Navbar } from "./Navbar";

export function Risultati() {

    return (
        <div className="bg-white min-h-screen flex flex-col items-center px-4">
            {/* Contenitore per pulsante e titolo */}
            <div className="flex items-center justify-center w-full max-w-4xl mt-16">
                <Navbar></Navbar>
                <h1 className="text-xl font-semibold my-6 bg-white text-blue-400 py-2 px-6">
                    RISULTATI
                </h1>
            </div>

            {/* Widget Risultati */}
            <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-2xl -mt-6 w-full max-w-xl my-6">
                <iframe
                    src="https://www.tuttocampo.it/WidgetV2/Risultati/30018696-716a-4194-a931-e7547a88ff56"
                    className="w-full sm:w-[450px] md:w-[600px] lg:w-[800px] h-[500px] sm:h-[600px] md:h-[400px]"
                    loading="lazy"
                    title="Risultati"
                ></iframe>
            </div>
        </div>
    );
}
