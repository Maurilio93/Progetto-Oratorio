import { useState, useRef } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Navbar() {
    const [isSocietaDropdownOpen, setIsSocietaDropdownOpen] = useState(false);
    const [isSquadreDropdownOpen, setIsSquadreDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const societaTimeout = useRef(null);
    const squadreTimeout = useRef(null);

    const handleMouseEnterSocieta = () => {
        clearTimeout(societaTimeout.current);
        setIsSocietaDropdownOpen(true);
    };

    const handleMouseLeaveSocieta = () => {
        societaTimeout.current = setTimeout(() => {
            setIsSocietaDropdownOpen(false);
        }, 300);
    };

    const handleMouseEnterSquadre = () => {
        clearTimeout(squadreTimeout.current);
        setIsSquadreDropdownOpen(true);
    };

    const handleMouseLeaveSquadre = () => {
        squadreTimeout.current = setTimeout(() => {
            setIsSquadreDropdownOpen(false);
        }, 300);
    };

    const goToSection = () => {
        navigate('/#news-section'); // Naviga alla sezione
        setTimeout(() => {
            const element = document.getElementById('news-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Attendi un breve tempo per assicurarti che la pagina si sia caricata
    };
    const goToAnotherSection = () => {
        navigate('/#sponsor-section'); // Naviga alla sezione
        setTimeout(() => {
            const element = document.getElementById('sponsor-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Attendi un breve tempo per assicurarti che la pagina si sia caricata
    };

    return (
        <header className="bg-blue-400 fixed top-0 left-0 right-0 z-50">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16 px-4 md:px-0">
                {/* Logo and title on the left */}
                <div className="flex items-center gap-2 md:gap-4 justify-center md:-mx-12">
                    <img
                        src="images/IMG_6743.PNG"
                        alt="Logo"
                        className="h-14 w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl"
                    />
                    <button
                        onClick={() => navigate('/')}

                        className="text-white font-semibold text-l px-4 sm:text-xl md:text-base hover:text-black"
                    >
                        Oratorio San Vincenzo c5
                    </button>
                </div>
                <div className="hidden md:flex items-center md:mx-10">
                    <nav aria-label="Global">
                        <ul className="flex gap-14 text-sm">
                            <li
                                className="relative"
                                onMouseEnter={handleMouseEnterSocieta}
                                onMouseLeave={handleMouseLeaveSocieta}
                            >
                                <button
                                    className="text-white font-bold transition hover:text-black flex items-center"
                                    type="button"
                                >
                                    SOCIETÀ
                                    <svg
                                        className="w-2.5 h-2.5 ml-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1l4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                {isSocietaDropdownOpen && (
                                    <div
                                        className="absolute z-10 bg-white font-bold divide-y divide-gray-100 rounded-lg shadow w-44 left-1/2 transform -translate-x-1/2 mt-2"
                                        onMouseEnter={handleMouseEnterSocieta}
                                        onMouseLeave={handleMouseLeaveSocieta}
                                    >
                                        <ul className="py-2 text-sm text-blue-400">
                                            <li>
                                                <button
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 w-[100%]"
                                                >
                                                    DIRIGENZA
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    href="#"
                                                    onClick={() => navigate("/lanostrastoria")}
                                                    className="block px-4 py-2 hover:bg-gray-100 w-[100%]"
                                                >
                                                    LA NOSTRA STORIA
                                                </button>
                                            </li>
                                            <button
                                                href="#news-section"
                                                className="block px-4 py-2 hover:bg-gray-100 w-[100%]"
                                                onClick={goToSection}
                                            >
                                                ULTIME NEWS
                                            </button>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <button
                                href="#sponsor-section"
                                className="text-white font-bold transition hover:text-black"
                                onClick={goToAnotherSection}
                            >
                                SPONSOR
                            </button>
                            <li>
                                <button
                                    onClick={() => navigate("/galleria")}
                                    className="text-white font-bold transition hover:text-black"
                                >
                                    GALLERY
                                </button>
                            </li>
                            <li
                                className="relative"
                                onMouseEnter={handleMouseEnterSquadre}
                                onMouseLeave={handleMouseLeaveSquadre}
                            >
                                <button
                                    className="text-white font-bold transition hover:text-black flex items-center"
                                    type="button"
                                >
                                    SQUADRE
                                    <svg
                                        className="w-2.5 h-2.5 ml-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1l4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                {isSquadreDropdownOpen && (
                                    <div
                                        className="absolute z-10 bg-white font-bold divide-y divide-gray-100 rounded-lg shadow w-44 left-1/2 transform -translate-x-1/2 mt-2"
                                        onMouseEnter={handleMouseEnterSquadre}
                                        onMouseLeave={handleMouseLeaveSquadre}
                                    >
                                        <ul className="py-2 text-sm text-blue-400">
                                            <li>
                                                <button
                                                    href="#"
                                                    onClick={() => navigate("/primasquadra")}
                                                    className="block px-4 py-2 hover:bg-gray-100 w-[100%]"
                                                >
                                                    PRIMA SQUADRA
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 w-[100%]"
                                                >
                                                    UNDER 19
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate("/contatti")}
                                    className="text-white font-bold transition hover:text-black"
                                >
                                    CONTATTI
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <a
                        href="https://www.facebook.com/people/Oratorio-San-Vincenzo-c5/61565515795683/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-300"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a
                        href="https://www.instagram.com/oratorio_sanvincenzoc5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-300"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://www.youtube.com/@OratorioSanVincenzoC5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-300"
                    >
                        <FaYoutube size={24} />
                    </a>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <FaBars size={24} className="text-white" />
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-400 text-white text-center">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li
                            className="relative"
                            onMouseEnter={handleMouseEnterSocieta}
                            onMouseLeave={handleMouseLeaveSocieta}
                        >
                            <button className="font-bold flex items-center justify-center text-black transition hover:text-white">
                                SOCIETÀ
                                <svg
                                    className="w-2.5 h-2.5 ml-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1l4 4 4-4"
                                    />
                                </svg>
                            </button>
                            {isSocietaDropdownOpen && (
                                <div
                                    className="absolute z-10 bg-white font-bold divide-y divide-gray-100 rounded-lg shadow w-44 left-1/2 transform -translate-x-1/2 mt-2"
                                    onMouseEnter={handleMouseEnterSocieta}
                                    onMouseLeave={handleMouseLeaveSocieta}
                                >
                                    <ul className="py-2 text-sm text-blue-400">
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                DIRIGENZA
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => navigate("/lanostrastoria")}
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                LA NOSTRA STORIA
                                            </button>
                                        </li>
                                        <button
                                            className="text-white font-bold transition hover:text-black"
                                            onClick={() => navigate('/#news-section')}
                                        >
                                            ULTIME NEWS
                                        </button>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <a
                                className="text-white font-bold transition hover:text-black"
                                href="#sponsor-section"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById("sponsor-section")
                                        .scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                SPONSOR
                            </a>
                        </li>
                        <li>
                            <button
                                onClick={() => navigate("/galleria")}
                                className="text-black font-bold transition hover:text-white"
                            >
                                GALLERIA
                            </button>
                        </li>
                        <li
                            className="relative"
                            onMouseEnter={handleMouseEnterSquadre}
                            onMouseLeave={handleMouseLeaveSquadre}
                        >
                            <button className="font-bold flex items-center justify-center text-black transition hover:text-white">
                                SQUADRE
                                <svg
                                    className="w-2.5 h-2.5 ml-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1l4 4 4-4"
                                    />
                                </svg>
                            </button>
                            {isSquadreDropdownOpen && (
                                <div
                                    className="absolute z-10 bg-white font-bold divide-y divide-gray-100 rounded-lg shadow w-44 left-1/2 transform -translate-x-1/2 mt-2"
                                    onMouseEnter={handleMouseEnterSquadre}
                                    onMouseLeave={handleMouseLeaveSquadre}
                                >
                                    <ul className="py-2 text-sm text-blue-400">
                                        <li>
                                            <button
                                                onClick={() => navigate("/primasquadra")}
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                PRIMA SQUADRA
                                            </button>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                UNDER 19
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={() => navigate("/contatti")}
                                className="text-black font-bold transition hover:text-white"
                            >
                                CONTATTI
                            </button>
                        </li>
                    </ul>
                    <div className="flex justify-center gap-6 mt-4 pb-4">
                        <a
                            href="https://www.facebook.com/people/Oratorio-San-Vincenzo-c5/61565515795683/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-300"
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com/oratorio_sanvincenzoc5/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-300"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="https://www.youtube.com/@OratorioSanVincenzoC5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-300"
                        >
                            <FaYoutube size={24} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
