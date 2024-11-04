import { Card, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = [];
const TABLE_ROWS = {
    categoria: "Calcio a 5 Serie C2",
    email: "marioof068@gmail.com",
    telefono: "+39 3791916667",
    coloriSociali: "Celeste - Bianco",
    regioneProv: "Sicilia - Palermo (PA)",
    stadio: "Tre Stelle Via Inserra, Palermo",
    info: "La squadra gioca in casa alle ore 18:45",
    sponsorTecnico: "Givova",
};

export function Contatti() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-8 w-full p-4 bg-blue-400">
            {/* Sezione Tabella */}
            <section className="w-full bg-blue-400 flex flex-col justify-between">
                <div className="p-6 relative flex justify-center items-center">
                    {/* Pulsante per tornare alla landing page */}
                    <button
                        onClick={() => navigate('/')}
                        type="button"
                        className="bg-white text-blue-600 font-semibold py-1 px-3 rounded-md text-sm hover:bg-gray-200 absolute left-4"
                    >
                        ⬅️
                    </button>

                    <h1 className="text-xl font-semibold my-6 bg-white text-blue-400 py-2 px-6 rounded-lg shadow-lg">
                        CONTATTI 📞✉️
                    </h1>
                </div>
                <Card className="overflow-x-auto border border-gray-300 px-4">
                    <table className="w-full min-w-max table-auto text-center">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-b border-gray-300 pb-4 pt-6 text-center"
                                    >
                                        <Typography variant="small" color="blue-gray" className="font-bold leading-none">
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(TABLE_ROWS)
                                // eslint-disable-next-line no-unused-vars
                                .filter(([_, value]) => value) // Filtra solo i campi non vuoti
                                .map(([key, value], index) => {
                                    const isLast = index === Object.entries(TABLE_ROWS).length - 1;
                                    const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";

                                    return (
                                        <tr key={key} className="hover:bg-gray-50">
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-bold capitalize">
                                                    {key.replace(/([A-Z])/g, " $1")}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="small" className="font-normal text-gray-600 text-center">
                                                    {value}
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </Card>
            </section>

            {/* Sezione Dove Trovarci */}
            <div className="w-full flex flex-col items-center" id="dove-siamo-section">
                <h1 className="inline-block text-xl font-semibold my-6 bg-white text-blue-400 py-2 px-6 rounded-lg shadow-lg">
                    DOVE TROVARCI 📍
                </h1>
                <div className="relative pt-[56.25%] w-full max-w-4xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.707755040901!2d13.308546977246095!3d38.146987912009585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e92bb97179ab%3A0x53eaaa5d7dbe5c6f!2sTre%20Stelle%20Club!5e0!3m2!1sit!2sit!4v1730286032292!5m2!1sit!2sit"
                        className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div >
    );
}
