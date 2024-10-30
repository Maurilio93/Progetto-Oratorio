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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <header className="bg-blue-400 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-xl ml-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo e Titolo allineati a sinistra */}
            <div className="flex items-center gap-4">
              <img
                src="/images/images.jpeg"
                alt="Logo"
                className="h-14 rounded-xl"
              />
              <h4 className="text-white font-semibold">
                Oratorio San Vincenzo
              </h4>
            </div>
            {/* Menu di navigazione */}
            <div className="hidden md:block ml-12">
              <nav aria-label="Global">
                <ul className="flex gap-16 text-sm pr-24">
                  <li className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="text-black font-bold transition hover:text-white rounded-lg text-center inline-flex items-center"
                      type="button"
                      id="dropdownHoverButton"
                    >
                      SOCIETÀ
                      <svg
                        className="w-2.5 h-2.5 ms-3"
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
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                      <div
                        id="dropdownHover"
                        className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700"
                          aria-labelledby="dropdownHoverButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Rosa
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Dirigenza
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              La nostra storia
                            </a>
                          </li>

                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <a
                      className="text-black font-bold transition hover:text-white"
                      href="#"
                    >
                      PARTNER
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black font-bold transition hover:text-white"
                      href="#"
                    >
                      GALLERIA
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black font-bold transition hover:text-white"
                      href="#"
                    >
                      NEWS
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate("/contatti")}
                      className="text-black font-bold transition hover:text-white"
                      href="#"
                    >
                      CONTATTI
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Icone Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/oratoriosanvincenzopalermo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-300"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/oratorio_sanvincenzoc5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.youtube.com/@OratorioSanVincenzoC5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-300"
              >
                <FaYoutube size={28} />
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu mobile */}
              {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-blue-400 md:hidden">
                  <nav aria-label="Mobile menu">
                    <ul className="flex flex-col items-center gap-4 p-4">
                      <li>
                        <a
                          className="text-black font-bold transition hover:text-white"
                          href="#"
                        >
                          SOCIETÀ
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-black font-bold transition hover:text-white"
                          href="#"
                        >
                          PARTNER
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-black font-bold transition hover:text-white"
                          href="#"
                        >
                          GALLERIA
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-black font-bold transition hover:text-white"
                          href="#"
                        >
                          NEWS
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-black font-bold hover:text-white"
                          href="#"
                        >
                          CONTATTI
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
      <div className="flex flex-col justify-center items-center">
        <Carousel transition={{ duration: 2 }} className="rounded-l h-screen">
          <img
            src="images\WhatsApp Image 2024-10-29 at 16.37.06.jpeg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="images/2.png"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="images\1.png"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <div className="flex flex-col items-center my-6">
        <p className="text-center text-xl font-semibold my-6">ULTIME NOTIZIE</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card className="w-64 h-64 mx-auto">
            <CardHeader color="blue-gray" className="relative h-32">
              <img
                src="images/traffico-web.png"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="overflow-hidden">
              <Typography
                variant="h5"
                color="blue-gray"
                className="text-center text-sm"
              >
                CLASSIFICA AGGIORNATA
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <Button
                type="submit"
                text="Clicca qui"
                onClick={() =>
                  window.open(
                    "https://www.tuttocampo.it/Sicilia/CalcioA5SerieC2/GironeASerieC2/Classifica",
                    "_blank"
                  )
                }
              ></Button>
            </CardFooter>
          </Card>

          <Card className="w-64 h-64 mx-auto">
            <CardHeader color="blue-gray" className="relative h-32">
              <img
                src="images\topscorer-default-site-img.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="overflow-hidden">
              <Typography
                variant="h5"
                color="blue-gray"
                className="text-center text-sm"
              >
                CLASSIFICA MARCATORI
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <Button
                type="submit"
                text="Clicca qui"
                onClick={() =>
                  window.open(
                    "https://www.tuttocampo.it/Sicilia/CalcioA5SerieC2/GironeASerieC2/Marcatori",
                    "_blank"
                  )
                }
              ></Button>
            </CardFooter>
          </Card>

          <Card className="w-64 h-64 mx-auto">
            <CardHeader color="blue-gray" className="relative h-32">
              <img
                src="images/Fotolia_53254702_Subscription_Monthly_M.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="overflow-hidden">
              <Typography
                variant="h5"
                color="blue-gray"
                className="text-center text-sm"
              >
                STATISTICHE DI SQUADRA
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <Button
                type="submit"
                text="Clicca qui"
                onClick={() =>
                  window.open(
                    "https://www.tuttocampo.it/Sicilia/CalcioA5SerieC2/GironeASerieC2/Squadra/OratorioSanVincenzo/1171634/Statistiche",
                    "_blank"
                  )
                }
              ></Button>
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
