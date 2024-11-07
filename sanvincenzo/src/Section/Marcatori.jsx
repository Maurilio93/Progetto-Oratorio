import { Navbar } from "./Navbar";

export function Marcatori() {

    return (
        <div className="bg-white min-h-screen flex flex-col items-center px-4">
            {/* Contenitore per pulsante e titolo */}
            <div className="flex items-center justify-center w-full max-w-4xl mt-16">
                <Navbar></Navbar>
                <h1 className="text-xl font-semibold my-6 text-blue-400 py-2 px-6">
                    MARCATORI
                </h1>
            </div>

            {/* Widget Classifica */}
            <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md mt-6 w-full max-w-2xl mb-6">
                <iframe
                    src="https://www.tuttocampo.it/WidgetV2/Marcatori/30018696-716a-4194-a931-e7547a88ff56"
                    className="w-full sm:w-[450px] md:w-[600px] lg:w-[800px] h-[500px] sm:h-[600px] md:h-[700px]"
                    loading="lazy"
                    title="Classifica Marcatori"
                ></iframe>
            </div>
        </div>
    );
}
