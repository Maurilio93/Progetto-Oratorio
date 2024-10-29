import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Carousel } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className='bg-white'>
            <header className="bg-blue-400">
                <div className="max-w-screen-xl ml-4">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo e Titolo allineati a sinistra */}
                        <div className="flex items-center gap-4">
                            <img
                                src="/images/images.jpeg"
                                alt="Logo"
                                className="h-14 rounded-xl"
                            />
                            <h4 className="text-white font-semibold">Sito Ufficiale Oratorio San Vincenzo</h4>
                        </div>
                        {/* Menu di navigazione */}
                        <div className="hidden md:block ml-12">
                            <nav aria-label="Global">
                                <ul className="flex gap-12 text-sm pr-40">
                                    <li>
                                        <a className="text-black font-bold transition hover:text-white" href="#">
                                            Società
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-black font-bold transition hover:text-white" href="#">
                                            Calendario
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-black font-bold transition hover:text-white" href="#">
                                            Galleria
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-black font-bold transition hover:text-white" href="#">
                                            News
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-black font-bold transition hover:text-white" href="#">
                                            Contatti
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/* Icone Social */}
                        <div className="flex items-center gap-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300">
                                <FaInstagram size={24} />
                            </a>
                        </div>

                        {/* Menu Hamburger per mobile */}
                        <div className="flex items-center gap-4">
                            <div className="block md:hidden">
                                <button
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>

                            {/* Menu mobile */}
                            {isMenuOpen && (
                                <div className="absolute top-16 left-0 w-full bg-blue-400 md:hidden">
                                    <nav aria-label="Mobile menu">
                                        <ul className="flex flex-col items-center gap-4 p-4">
                                            <li>
                                                <a className="text-black font-bold transition hover:text-gray-500/75" href="#">
                                                    Società
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                                    Calendario
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                                    Galleria
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                                    News
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                                    Contatti
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex flex-col items-center my-6">
                <p className="text-center text-xl font-semibold my-6">ULTIME NOTIZIE</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <Card className="w-64 h-64 mx-auto">
                        <CardHeader color="blue-gray" className="relative h-32">
                            <img
                                src="images/WhatsApp Image 2024-10-29 at 16.08.28.jpeg"
                                alt="card-image"
                                className="w-full h-full object-cover"
                            />
                        </CardHeader>
                        <CardBody className="overflow-hidden">
                            <Typography variant="h5" color="blue-gray" className="text-center text-sm">
                                Ultimo Incontro
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 text-center">
                            <Button size="sm">Clicca qui</Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-64 h-64 mx-auto">
                        <CardHeader color="blue-gray" className="relative h-32">
                            <img
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                alt="card-image"
                                className="w-full h-full object-cover"
                            />
                        </CardHeader>
                        <CardBody className="overflow-hidden">
                            <Typography variant="h5" color="blue-gray" className="text-center text-sm">
                                UI/UX Design Trends
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 text-center">
                            <Button size="sm">Read More</Button>
                        </CardFooter>
                    </Card>

                    <Card className="w-64 h-64 mx-auto">
                        <CardHeader color="blue-gray" className="relative h-32">
                            <img
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                alt="card-image"
                                className="w-full h-full object-cover"
                            />
                        </CardHeader>
                        <CardBody className="overflow-hidden">
                            <Typography variant="h5" color="blue-gray" className="text-center text-sm">
                                Product Updates
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 text-center">
                            <Button size="sm">Read More</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-14'>
                <Carousel transition={{ duration: 2 }} className="rounded-l h-[60%] w-[35%]">
                    <img
                        src="images/3.png"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="images/2.png"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="images/1.png"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            </div>
            <footer className="bg-blue-400 text-center py-4">
                <p className="text-black">
                    &copy; {new Date().getFullYear()} Tutti i diritti riservati.
                </p>
            </footer>
        </div>
    );
}


