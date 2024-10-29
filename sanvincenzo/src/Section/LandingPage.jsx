import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-blue-400">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo e Titolo */}
                    <div className="md:flex md:items-center md:gap-2">
                        <a className="block text-teal-600" href="#">
                            <span className="sr-only">Home</span>
                            <img
                                src="/images/images.jpeg"
                                alt="Logo"
                                className="h-14 rounded-xl"
                            />
                        </a>
                        <h4 className="text-white font-semibold">Sito Ufficiale Oratorio San Vincenzo</h4>
                    </div>

                    {/* Menu di navigazione */}
                    <div className="hidden md:block">
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
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
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
    );
}


