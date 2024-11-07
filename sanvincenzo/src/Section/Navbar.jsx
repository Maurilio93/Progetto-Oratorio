import { useState, useRef } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const [isSocietaDropdownOpen, setIsSocietaDropdownOpen] = useState(false);
  const [isSquadreDropdownOpen, setIsSquadreDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSocietaMobileDropdownOpen, setIsSocietaMobileDropdownOpen] = useState(false);
  const [isSquadreMobileDropdownOpen, setIsSquadreMobileDropdownOpen] = useState(false);
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
    navigate('/#news-section');
    setTimeout(() => {
      const element = document.getElementById('news-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const goToAnotherSection = () => {
    navigate('/#sponsor-section');
    setTimeout(() => {
      const element = document.getElementById('sponsor-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      {/* Navbar */}
      <header className="bg-blue-400 md:fixed md:top-0 md:left-0 md:right-0 md:z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16 px-4 md:px-0">
          {/* Logo e titolo a sinistra */}
          <div className="flex items-center gap-2 md:gap-4 justify-center md:-mx-12">
            <img
              src="images/IMG_6743.PNG"
              alt="Logo"
              className="h-14 w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl"
            />
            <button
              onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white font-semibold text-l px-4 sm:text-xl md:text-base hover:text-black"
            >
              Oratorio San Vincenzo c5
            </button>
          </div>
          {/* Menu di navigazione per desktop */}
          <div className="hidden md:flex items-center md:mx-10">
            <nav aria-label="Global">
              <ul className="flex gap-14 text-sm">
                {/* Menu SOCIETÀ */}
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
                            className="block px-4 py-2 hover:bg-gray-100 w-full"
                          >
                            DIRIGENZA
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => navigate("/lanostrastoria")}
                            className="block px-4 py-2 hover:bg-gray-100 w-full"
                          >
                            LA NOSTRA STORIA
                          </button>
                        </li>
                        <li>
                          <button
                            className="block px-4 py-2 hover:bg-gray-100 w-full"
                            onClick={goToSection}
                          >
                            ULTIME NEWS
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                {/* Altri elementi del menu desktop... */}
                {/* Link SPONSOR */}
                <li>
                  <button
                    className="text-white font-bold transition hover:text-black"
                    onClick={goToAnotherSection}
                  >
                    SPONSOR
                  </button>
                </li>
                {/* Link GALLERIA */}
                <li>
                  <button
                    onClick={() => navigate("/galleria")}
                    className="text-white font-bold transition hover:text-black"
                  >
                    GALLERY
                  </button>
                </li>
                {/* Menu SQUADRE */}
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
                            onClick={() => navigate("/primasquadra")}
                            className="block px-4 py-2 hover:bg-gray-100 w-full"
                          >
                            PRIMA SQUADRA
                          </button>
                        </li>
                        <li>
                          <button
                            className="block px-4 py-2 hover:bg-gray-100 w-full"
                          >
                            UNDER 19
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                {/* Link CONTATTI */}
                <li>
                  <button
                    onClick={() => {
                      navigate("/contatti");
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                    className="text-white font-bold transition hover:text-black"
                  >
                    CONTATTI
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          {/* Icone social per desktop */}
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
          {/* Bottone hamburger per dispositivi mobili */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FaBars size={24} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="bg-blue-400 text-white">
          <ul className="flex flex-col">
            {/* Menu SOCIETÀ per mobile */}
            <li className="border-b border-white">
              <button
                className="w-full text-left px-4 py-2 font-bold text-white flex justify-between items-center"
                onClick={() => setIsSocietaMobileDropdownOpen(!isSocietaMobileDropdownOpen)}
              >
                SOCIETÀ
                <svg
                  className={`w-2.5 h-2.5 ml-1 transform ${isSocietaMobileDropdownOpen ? 'rotate-180' : ''}`}
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
              {isSocietaMobileDropdownOpen && (
                <ul className="bg-blue-500 text-white">
                  <li>
                    <button className="block w-full text-left px-4 py-2 hover:bg-blue-600">
                      DIRIGENZA
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate("/lanostrastoria");
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-600"
                    >
                      LA NOSTRA STORIA
                    </button>
                  </li>
                  <li>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-blue-600"
                      onClick={() => {
                        goToSection();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      ULTIME NEWS
                    </button>
                  </li>
                </ul>
              )}
            </li>
            {/* Link SPONSOR per mobile */}
            <li className="border-b border-white">
              <button
                onClick={() => {
                  goToAnotherSection();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 font-bold text-white hover:text-gray-300"
              >
                SPONSOR
              </button>
            </li>
            {/* Link GALLERIA per mobile */}
            <li className="border-b border-white">
              <button
                onClick={() => {
                  navigate("/galleria");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 font-bold text-white hover:text-gray-300"
              >
                GALLERIA
              </button>
            </li>
            {/* Menu SQUADRE per mobile */}
            <li className="border-b border-white">
              <button
                className="w-full text-left px-4 py-2 font-bold text-white flex justify-between items-center"
                onClick={() => setIsSquadreMobileDropdownOpen(!isSquadreMobileDropdownOpen)}
              >
                SQUADRE
                <svg
                  className={`w-2.5 h-2.5 ml-1 transform ${isSquadreMobileDropdownOpen ? 'rotate-180' : ''}`}
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
              {isSquadreMobileDropdownOpen && (
                <ul className="bg-blue-500 text-white">
                  <li>
                    <button
                      onClick={() => {
                        navigate("/primasquadra");
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-600"
                    >
                      PRIMA SQUADRA
                    </button>
                  </li>
                  <li>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-blue-600"
                    >
                      UNDER 19
                    </button>
                  </li>
                </ul>
              )}
            </li>
            {/* Link CONTATTI per mobile */}
            <li className="border-b border-white">
              <button
                onClick={() => {
                  navigate("/contatti");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 font-bold text-white hover:text-gray-300"
              >
                CONTATTI
              </button>
            </li>
          </ul>
          {/* Icone social per mobile */}
          <div className="flex justify-center gap-6 mt-4 pb-4">
            <a
              href="https://www.facebook.com/people/Oratorio-San-Vincenzo-c5/61565515795683/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/oratorio_sanvincenzoc5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@OratorioSanVincenzoC5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
