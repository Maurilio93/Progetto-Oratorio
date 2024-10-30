import { useNavigate } from "react-router-dom";

export function Risultati() {
    const navigate = useNavigate();

    return (
        <div className="bg-blue-400 min-h-screen flex flex-col items-center px-4">
            {/* Contenitore per pulsante e titolo */}
            <div className="flex items-center justify-between w-full max-w-4xl mt-4">
                <button
                    onClick={() => navigate("/")}
                    type="button"
                    className="bg-white text-blue-600 font-semibold py-1 px-3 rounded-md text-sm hover:bg-gray-200 absolute left-4"
                >
                    Indietro
                </button>
                <h1 className="text-2xl font-bold text-black text-center flex-grow pr-20 py-8">
                    RISULTATI
                </h1>
            </div>

            {/* Widget Risultati */}
            <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md mt-6 w-full max-w-4xl">
                <iframe
                    src="https://www.tuttocampo.it/WidgetV2/Risultati/30018696-716a-4194-a931-e7547a88ff56"
                    className="w-full sm:w-[450px] md:w-[600px] lg:w-[800px] h-[500px] sm:h-[600px] md:h-[700px]"
                    loading="lazy"
                    title="Risultati"
                ></iframe>
            </div>
        </div>
    );
}
