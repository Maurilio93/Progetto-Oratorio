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
import { Navbar } from "./Navbar";

export function LandingPage() {
  const navigate = useNavigate();

  const data = [
    { imageLink: "images/sponsor1.png" },
    { imageLink: "images/sponsor2.png" },
    { imageLink: "images/sponsor3.png" },
    { imageLink: "images/sponsor4.png" },
    { imageLink: "images/sponsor5.png" },
    { imageLink: "images/sponsor6.png" },
    { imageLink: "images/sponsor7.png" },
  ];

  return (
    <div className="bg-gray-200">
      <Navbar />

      <div className="flex flex-col justify-center items-center md:mt-0">
        <div className="flex flex-col justify-center items-center mt-10 md:mt-0">
          <Carousel
            transition={{ duration: 0.5 }}
            className="rounded-l h-64 md:h-screen w-full"
          >
            <img
              src="images/WhatsApp Image 2024-10-29 at 16.37.06.jpeg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="images/gallery12.png"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="images/gallery8.png"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 mt-6">
        <Partite />
      </div>

      {/* Sponsor Section */}
      <div
        className="flex flex-col items-center my-6"
        id="sponsor-section"
        style={{ scrollMarginTop: "70px" }}
      >
        <p className="text-center text-2xl font-semibold my-12 bg-gray-300 text-black py-2 px-6 shadow-2xl">
          I NOSTRI SPONSOR
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mr-3 ml-3 md:flex flex-row">
          {data.map(({ imageLink }, index) => (
            <div key={index}>
              <img
                className="h-44 w-44 rounded-lg object-cover object-center shadow-2xl"
                src={imageLink}
                alt="gallery-photo"
              />
            </div>
          ))}
        </div>
      </div>


      {/* News Section */}
      <div className="flex flex-col items-center my-8 py-6" id="news-section">
        <p className="text-center text-2xl font-semibold my-12 bg-gray-300 text-black py-2 px-6 shadow-2xl">
          ULTIME NEWS
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-32 mt-6">
          <Card className="w-64 h-56 mx-auto shadow-2xl">
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
              ></Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <Button
                text="CLASSIFICA"
                onClick={() => {
                  navigate("/classifica");
                  window.scrollTo(0, 0);
                }}
              >
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-64 h-56 mx-auto shadow-2xl">
            <CardHeader color="blue-gray" className="relative h-32">
              <img
                src="images/topscorer-default-site-img.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="overflow-hidden">
              <Typography
                variant="h5"
                color="blue-gray"
                className="text-center text-sm"
              ></Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <Button
                text="MARCATORI"
                onClick={() => {
                  navigate("/marcatori");
                  window.scrollTo(0, 0);
                }}
              >
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-64 h-56 mx-auto shadow-2xl">
            <CardHeader color="blue-gray" className="relative h-32">
              <img
                src="images/cover_bet-to-correct-score-1280x640-min-752x440.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="overflow-hidden">
              <Typography
                variant="h5"
                color="blue-gray"
                className="text-center text-sm"
              ></Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <Button
                text="RISULTATI"
                onClick={() => {
                  navigate("/risultati");
                  window.scrollTo(0, 0);
                }}
              >
              </Button>
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
