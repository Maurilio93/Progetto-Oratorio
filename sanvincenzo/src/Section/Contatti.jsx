import { Card, Typography } from "@material-tailwind/react";
import { Navbar } from "./Navbar";

const TABLE_HEAD = [];
const TABLE_ROWS = {
    categoria: "Calcio a 5 Serie C2",
    email: "marioof068@gmail.com",
    telefono: "+39 3791916667",
    coloriSociali: "Celeste - Bianco",
    regioneProv: "Sicilia - Palermo (PA)",
    stadio: "Tre Stelle Via Inserra, Palermo",
    info: "Partita in casa alle 18:45",
    sponsorTecnico: "Givova",
};

export function Contatti() {

    return (
        <div className="flex flex-col gap-8 w-full p-4 bg-white my-8">
            {/* Sezione Tabella */}
            <section className="w-full flex flex-col items-center">
                <div className="w-full flex flex-col items-center">
                    <Navbar></Navbar>
                    <h1 className="text-xl font-semibold my-6 text-blue-400 py-2 px-2 rounded-lg">
                        CONTATTI 📞✉️
                    </h1>
                </div>
                <Card className="border border-gray-300 max-w-2xl w-full">
                    <div className="flex justify-center">
                        <table className="w-full min-w-max table-auto text-center text-sm"> {/* Usa `w-full` per allineare la tabella alla larghezza della card */}
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-b border-gray-300 pb-2 pt-3 text-center"
                                        >
                                            <Typography variant="small" color="blue-gray" className="font-bold leading-none text-xs">
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
                                        const classes = isLast ? "py-2" : "py-2 border-b border-gray-300";

                                        return (
                                            <tr key={key} className="hover:bg-gray-50">
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-bold capitalize text-xs">
                                                        {key.replace(/([A-Z])/g, " $1")}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography variant="small" className="font-normal text-gray-600 text-center text-xs">
                                                        {value}
                                                    </Typography>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </section>

            {/* Sezione Dove Trovarci */}
            <div className="w-full flex flex-col items-center" id="dove-siamo-section">
                <h1 className="inline-block text-xl font-semibold my-6  text-blue-400 py-2 px-2 rounded-lg">
                    DOVE TROVARCI 📍
                </h1>
                <div className="relative pt-[56.25%] w-full max-w-2xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.707755040901!2d13.308546977246095!3d38.146987912009585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e92bb97179ab%3A0x53eaaa5d7dbe5c6f!2sTre%20Stelle%20Club!5e0!3m2!1sit!2sit!4v1730286032292!5m2!1sit!2sit"
                        className="absolute top-0 left-0 w-full h-[400px] border-0 rounded-xl"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div >
    );
}
