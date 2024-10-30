import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Carousel } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { Button } from "../MyComponents/Section/Button";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
    const [isSocietaDropdownOpen, setIsSocietaDropdownOpen] = useState(false);
    const [isSquadreDropdownOpen, setIsSquadreDropdownOpen] = useState(false);
    const navigate = useNavigate();

    let societaTimeout, squadreTimeout;

    const handleMouseEnterSocieta = () => {
        clearTimeout(societaTimeout); // Evita di chiudere il menu se si entra subito
        setIsSocietaDropdownOpen(true);
    };

    const handleMouseLeaveSocieta = () => {
        societaTimeout = setTimeout(() => {
            setIsSocietaDropdownOpen(false);
        }, 300); // Tempo di ritardo per chiudere il menu
    };

    const handleMouseEnterSquadre = () => {
        clearTimeout(squadreTimeout);
        setIsSquadreDropdownOpen(true);
    };

    const handleMouseLeaveSquadre = () => {
        squadreTimeout = setTimeout(() => {
            setIsSquadreDropdownOpen(false);
        }, 300);
    };

    return (
        <div className="bg-white">
            <header className="bg-blue-400 fixed top-0 left-0 right-0 z-50">
                <div className="max-w-screen-xl ml-4">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <img src="/images/images.jpeg" alt="Logo" className="h-14 rounded-xl" />
                            <h4 className="text-white font-semibold">Oratorio San Vincenzo</h4>
                        </div>
                        <div className="hidden md:block ml-12">
                            <nav aria-label="Global">
                                <ul className="flex gap-16 text-sm pr-24">
                                    <li
                                        className="relative"
                                        onMouseEnter={handleMouseEnterSocieta}
                                        onMouseLeave={handleMouseLeaveSocieta}
                                    >
                                        <button
                                            className="text-black font-bold transition hover:text-white rounded-lg text-center inline-flex items-center"
                                            type="button"
                                        >
                                            SOCIETÀ
                                            <svg className="w-2.5 h-2.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        {isSocietaDropdownOpen && (
                                            <div
                                                className="absolute z-10 bg-white divide-y font-bold divide-gray-100 rounded-lg shadow w-44 left-1/2 transform -translate-x-1/2 mt-2"
                                                onMouseEnter={handleMouseEnterSocieta}
                                                onMouseLeave={handleMouseLeaveSocieta}
                                            >
                                                <ul className="py-2 text-sm text-blue-400">
                                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">DIRIGENZA</a></li>
                                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">LA NOSTRA STORIA</a></li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    <li><a className="text-black font-bold transition hover:text-white" href="#">PARTNER</a></li>
                                    <li><a className="text-black font-bold transition hover:text-white" href="#">GALLERIA</a></li>
                                    <li
                                        className="relative"
                                        onMouseEnter={handleMouseEnterSquadre}
                                        onMouseLeave={handleMouseLeaveSquadre}
                                    >
                                        <button
                                            className="text-black font-bold transition hover:text-white rounded-lg text-center inline-flex items-center"
                                            type="button"
                                        >
                                            SQUADRE
                                            <svg className="w-2.5 h-2.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        {isSquadreDropdownOpen && (
                                            <div
                                                className="absolute z-10 bg-white divide-y font-bold divide-gray-100 rounded-lg shadow w-44 left-1/2 transform -translate-x-1/2 mt-2"
                                                onMouseEnter={handleMouseEnterSquadre}
                                                onMouseLeave={handleMouseLeaveSquadre}
                                            >
                                                <ul className="py-2 text-sm text-blue-400">
                                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">PRIMA SQUADRA</a></li>
                                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">UNDER 19</a></li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    <li><button onClick={() => navigate("/contatti")} className="text-black font-bold transition hover:text-white">CONTATTI</button></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="https://www.facebook.com/oratoriosanvincenzopalermo/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300"><FaFacebook size={28} /></a>
                            <a href="https://www.instagram.com/oratorio_sanvincenzoc5/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300"><FaInstagram size={28} /></a>
                            <a href="https://www.youtube.com/@OratorioSanVincenzoC5" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300"><FaYoutube size={28} /></a>
                        </div>
                    </div>
                </div>
            </header>



            <div className="flex flex-col justify-center items-center mt-16">
                <Carousel transition={{ duration: 2 }} className="rounded-l h-screen w-full">
                    <img src="images/WhatsApp Image 2024-10-29 at 16.37.06.jpeg" alt="image 1" className="h-full w-full object-cover" />
                    <img src="images/2.png" alt="image 2" className="h-full w-full object-cover" />
                    <img src="images/1.png" alt="image 3" className="h-full w-full object-cover" />
                </Carousel>
            </div>

            {/* Sezione delle card vuote al centro */}
            <div className="flex justify-center items-center gap-6 mt-6">
                <Card className="w-96 animate-pulse">
                    <CardHeader shadow={false} floated={false} className="relative grid h-56 place-items-center bg-gray-300">
                        <iframe src='https://www.tuttocampo.it/WidgetV2/Partita/30018696-716a-4194-a931-e7547a88ff56' width='500' height='350' loading='lazy'></iframe>
                    </CardHeader>
                    <CardBody>
                        <Typography as="div" variant="h1" className="mb-4 h-3 w-56 rounded-full bg-gray-300">&nbsp;</Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button disabled tabIndex={-1} className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none">&nbsp;</Button>
                    </CardFooter>
                </Card>

                <Card className="w-96 animate-pulse">
                    <CardHeader shadow={false} floated={false} className="relative grid h-56 place-items-center bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-12 w-12 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </CardHeader>
                    <CardBody>
                        <Typography as="div" variant="h1" className="mb-4 h-3 w-56 rounded-full bg-gray-300">&nbsp;</Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button disabled tabIndex={-1} className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none">&nbsp;</Button>
                    </CardFooter>
                </Card>
            </div>

            {/* Sezione delle ultime notizie */}
            <div className="flex flex-col items-center my-6">
                <p className="text-center text-xl font-semibold my-6">ULTIME NOTIZIE</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <Card className="w-64 h-64 mx-auto">
                        <CardHeader color="blue-gray" className="relative h-32">
                            <img src="images/traffico-web.png" alt="card-image" className="w-full h-full object-cover" />
                        </CardHeader>
                        <CardBody className="overflow-hidden">
                            <Typography variant="h5" color="blue-gray" className="text-center text-sm">CLASSIFICA</Typography>
                        </CardBody>
                        <CardFooter className="pt-0 text-center">
                            <Button type="button" text="Clicca qui" onClick={() => navigate("/classifica")}></Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-64 h-64 mx-auto">
                        <CardHeader color="blue-gray" className="relative h-32">
                            <img src="images/topscorer-default-site-img.jpg" alt="card-image" className="w-full h-full object-cover" />
                        </CardHeader>
                        <CardBody className="overflow-hidden">
                            <Typography variant="h5" color="blue-gray" className="text-center text-sm">MARCATORI</Typography>
                        </CardBody>
                        <CardFooter className="pt-0 text-center">
                            <Button type="button" text="Clicca qui" onClick={() => navigate("/marcatori")}></Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-64 h-64 mx-auto">
                        <CardHeader color="blue-gray" className="relative h-32">
                            <img src="images/cover_bet-to-correct-score-1280x640-min-752x440.jpg" alt="card-image" className="w-full h-full object-cover" />
                        </CardHeader>
                        <CardBody className="overflow-hidden">
                            <Typography variant="h5" color="blue-gray" className="text-center text-sm">RISULTATI</Typography>
                        </CardBody>
                        <CardFooter className="pt-0 text-center">
                            <Button type="button" text="Clicca qui" onClick={() => navigate("/risultati")}></Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <footer className="bg-blue-400 text-center py-4">
                <p className="text-black">
                    &copy; {new Date().getFullYear()} Tutti i diritti riservati.
                </p>
            </footer>
        </div>
    );
}
