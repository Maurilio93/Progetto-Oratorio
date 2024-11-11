import { useState, useRef, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function Navbar({ setMenuHeight }) {
  const [isSocietaDropdownOpen, setIsSocietaDropdownOpen] = useState(false);
  const [isSquadreDropdownOpen, setIsSquadreDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSocietaMobileDropdownOpen, setIsSocietaMobileDropdownOpen] =
    useState(false);
  const [isSquadreMobileDropdownOpen, setIsSquadreMobileDropdownOpen] =
    useState(false);
  const navigate = useNavigate();

  const societaTimeout = useRef(null);
  const squadreTimeout = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (typeof setMenuHeight === "function") {
      if (isMobileMenuOpen && menuRef.current) {
        const height = menuRef.current.offsetHeight;
        setMenuHeight(height);
      } else {
        setMenuHeight(0);
      }
    }
  }, [isMobileMenuOpen, setMenuHeight]);

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
    setIsMobileMenuOpen(false);
    navigate("/#news-section");
    setTimeout(() => {
      const element = document.getElementById("news-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  const goToAnotherSection = () => {
    setIsMobileMenuOpen(false);
    navigate("/#sponsor-section");
    setTimeout(() => {
      const element = document.getElementById("sponsor-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <>
      <header className="bg-blue-400 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16 px-4 md:px-0">
          <div className="flex items-center gap-2 md:gap-4 justify-center md:-mx-12">
            <img
              src="images/IMG_6743.PNG"
              alt="Logo"
              className="h-14 w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl"
            />
            <button
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-white font-semibold text-l px-4 sm:text-xl md:text-base hover:text-black"
            >
              Oratorio San Vincenzo c5
            </button>
          </div>

          <div className="hidden md:flex items-center md:mx-10">
            <nav aria-label="Global">
              <ul className="flex gap-16 text-sm">
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
                    <div className="absolute z-10 bg-white font-bold divide-y divide-gray-100 rounded-lg shadow w-44 left-1/2 transform -translate-x-1/2 mt-2">
                      <ul className="py-2 text-sm text-blue-400">
                        <li>
                          <button className="block px-4 py-2 hover:bg-gray-100 w-full">
                            DIRIGENZA
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              navigate("/lanostrastoria");
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="block px-4 py-2 hover:bg-gray-100 w-full border-gray-500 text-left"
                          >
                            LA NOSTRA STORIA
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={goToSection}
                            className="block px-4 py-2 hover:bg-gray-100 w-full"
                          >
                            ULTIME NEWS
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li>
                  <button
                    className="text-white font-bold transition hover:text-black"
                    onClick={goToAnotherSection}
                  >
                    SPONSOR
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate("/galleria");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
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
                    <div className="absolute z-10 bg-white font-bold divide-y-2 divide-gray-100 rounded-lg shadow w-44 left-1/2 transform -translate-x-1/2 mt-2">
                      <ul className="py-2 text-sm text-blue-400">
                        <li>
                          <button
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              navigate("/primasquadra");
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="block px-4 py-2 hover:bg-gray-100 w-full"
                          >
                            PRIMA SQUADRA
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              navigate("/under19");
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="block px-4 py-2 hover:bg-gray-100 w-full"
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
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate("/contatti");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
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
              <FaBars size={24} className="text-white hover:text-black" />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="bg-blue-400 text-white fixed top-16 left-0 right-0 z-40"
        >
          <ul className="flex flex-col">
            <li
              className="border-b border-white"
              onMouseEnter={() => setIsSocietaMobileDropdownOpen(true)}
              onMouseLeave={() => setIsSocietaMobileDropdownOpen(false)}
            >
              <button className="w-full text-left px-4 py-2 font-bold flex items-center justify-between">
                SOCIETÀ
                <svg
                  className={`w-2.5 h-2.5 ml-1 transition-transform ${isSocietaMobileDropdownOpen ? "rotate-180" : ""
                    }`}
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
                <ul className="bg-white text-blue-300">
                  <li>
                    <button className="block px-4 py-2 hover:bg-gray-100 w-full border-b border-gray-500 text-left">
                      DIRIGENZA
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate("/lanostrastoria");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="block px-4 py-2 hover:bg-gray-100 w-full border-b border-gray-500 text-left"
                    >
                      LA NOSTRA STORIA
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={goToSection}
                      className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                    >
                      ULTIME NEWS
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li className="border-b border-white">
              <button
                className="w-full text-left px-4 py-2 font-bold"
                onClick={goToAnotherSection}
              >
                SPONSOR
              </button>
            </li>

            <li className="border-b border-white">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/galleria");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full text-left px-4 py-2 font-bold"
              >
                GALLERY
              </button>
            </li>

            <li
              className="border-b border-white"
              onMouseEnter={() => setIsSquadreMobileDropdownOpen(true)}
              onMouseLeave={() => setIsSquadreMobileDropdownOpen(false)}
            >
              <button className="w-full text-left px-4 py-2 font-bold flex items-center justify-between">
                SQUADRE
                <svg
                  className={`w-2.5 h-2.5 ml-1 transition-transform ${isSquadreMobileDropdownOpen ? "rotate-180" : ""
                    }`}
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
                <ul className="bg-white text-blue-300">
                  <li>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate("/primasquadra");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="block px-4 py-2 border-b border-gray-500 hover:bg-gray-100 w-full text-left"
                    >
                      PRIMA SQUADRA
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate("/under19");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="block px-4 py-2 border-b border-gray-500 hover:bg-gray-100 w-full text-left"
                    >
                      UNDER 19
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li className="border-b border-white">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/contatti");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full text-left px-4 py-2 font-bold"
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
