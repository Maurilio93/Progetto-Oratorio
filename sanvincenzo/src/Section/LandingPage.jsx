import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaBars } from "react-icons/fa";
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
import { Partite } from "./Partite";

export function LandingPage() {
    const [isSocietaDropdownOpen, setIsSocietaDropdownOpen] = useState(false);
    const [isSquadreDropdownOpen, setIsSquadreDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Per l'hamburger menu
    const navigate = useNavigate();

    let societaTimeout, squadreTimeout;

    const handleMouseEnterSocieta = () => {
        clearTimeout(societaTimeout);
        setIsSocietaDropdownOpen(true);
    };

    const handleMouseLeaveSocieta = () => {
        societaTimeout = setTimeout(() => {
            setIsSocietaDropdownOpen(false);
        }, 300);
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
                <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16 px-4 md:px-8">
                    <div className="flex items-center gap-2">
                        <img src="/images/images.jpeg" alt="Logo" className="h-10 w-10 rounded-xl" />
                        <h4 className="text-white font-semibold text-sm md:text-base">Oratorio San Vincenzo</h4>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <nav aria-label="Global">
                            <ul className="flex gap-8 text-sm">
                                <li
                                    className="relative"
                                    onMouseEnter={handleMouseEnterSocieta}
                                    onMouseLeave={handleMouseLeaveSocieta}
                                >
                                    <button
                                        className="text-black font-bold transition hover:text-white"
                                        type="button"
                                    >
                                        SOCIETÀ
                                    </button>
                                    {isSocietaDropdownOpen && (
                                        <div
                                            className="absolute z-10 bg-white font-bold divide-y divide-gray-100 rounded-lg shadow w-44 left-1/2 transform -translate-x-1/2 mt-2"
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
                                        className="text-black font-bold transition hover:text-white"
                                        type="button"
                                    >
                                        SQUADRE
                                    </button>
                                    {isSquadreDropdownOpen && (
                                        <div
                                            className="absolute z-10 bg-white font-bold divide-y divide-gray-100 rounded-lg shadow w-44 left-1/2 transform -translate-x-1/2 mt-2"
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
                    <div className="hidden md:flex items-center gap-4">
                        <a href="https://www.facebook.com/people/Oratorio-San-Vincenzo-c5/61565515795683/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300"><FaFacebook size={24} /></a>
                        <a href="https://www.instagram.com/oratorio_sanvincenzoc5/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300"><FaInstagram size={24} /></a>
                        <a href="https://www.youtube.com/@OratorioSanVincenzoC5" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300"><FaYoutube size={24} /></a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <FaBars size={24} className="text-white" />
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-400 text-white text-center">
                        <ul className="flex flex-col space-y-4 py-4">
                            <li><button onClick={() => setIsSocietaDropdownOpen(!isSocietaDropdownOpen)} className="font-bold">SOCIETÀ</button></li>
                            <li><a href="#" className="font-bold">PARTNER</a></li>
                            <li><a href="#" className="font-bold">GALLERIA</a></li>
                            <li><button onClick={() => setIsSquadreDropdownOpen(!isSquadreDropdownOpen)} className="font-bold">SQUADRE</button></li>
                            <li><button onClick={() => navigate("/contatti")} className="font-bold">CONTATTI</button></li>
                        </ul>
                        <div className="flex justify-center gap-6 mt-4 pb-4">
                            <a href="https://www.facebook.com/people/Oratorio-San-Vincenzo-c5/61565515795683/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300"><FaFacebook size={24} /></a>
                            <a href="https://www.instagram.com/oratorio_sanvincenzoc5/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300"><FaInstagram size={24} /></a>
                            <a href="https://www.youtube.com/@OratorioSanVincenzoC5" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300"><FaYoutube size={24} /></a>
                        </div>
                    </div>
                )}
            </header>

            <div className="flex flex-col justify-center items-center mt-10">
                <Carousel transition={{ duration: 2 }} className="rounded-l h-64 md:h-screen w-full">
                    <img src="images/WhatsApp Image 2024-10-29 at 16.37.06.jpeg" alt="image 1" className="h-full w-full object-cover" />
                    <img src="images/2.png" alt="image 2" className="h-full w-full object-cover" />
                    <img src="images/1.png" alt="image 3" className="h-full w-full object-cover" />
                </Carousel>
            </div>

            <div className="flex justify-center items-center gap-6 mt-6">
                <Partite />
            </div>

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

