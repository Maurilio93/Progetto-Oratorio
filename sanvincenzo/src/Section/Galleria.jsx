import React from "react";
import { Navbar } from "./Navbar";

export function Galleria() {
    const data = [
        { imgelink: "images/gallery2.png" },
        { imgelink: "images/gallery3.png" },
        { imgelink: "images/gallery4.png" },
        { imgelink: "images/gallery5.png" },
        { imgelink: "images/gallery6.png" },
        { imgelink: "images/gallery7.png" },
        { imgelink: "images/gallery8.png" },
        { imgelink: "images/gallery9.png" },
        { imgelink: "images/gallery10.png" },
        { imgelink: "images/gallery11.png" },
        { imgelink: "images/gallery12.png" },
        { imgelink: "images/gallery15.png" },
        { imgelink: "images/gallery16.png" },
        { imgelink: "images/IMG_6859.jpg" },
        { imgelink: "images/IMG_6862.jpg" },
        { imgelink: "images/IMG_6863.jpg" },
        { imgelink: "images/IMG_6864.jpg" },
        { imgelink: "images/IMG_7037.jpg" },
        { imgelink: "images/IMG_7038.jpg" },
        { imgelink: "images/IMG_7065.jpg" },
    ];

    const [activeIndex, setActiveIndex] = React.useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex flex-col items-center bg-white px-4 md:px-8 py-4">
            <div className="flex flex-col items-center justify-center w-full max-w-4xl mt-16">
                <Navbar />

                {/* Contenitore del titolo e delle frecce */}
                <div className="flex items-center justify-center space-x-20 lg:space-x-0">
                    {/* Freccia sinistra accanto al titolo, visibile solo su mobile e tablet */}
                    <button
                        onClick={handlePrev}
                        className="lg:hidden bg-white text-blue-600 font-bold p-2 rounded-full shadow-md hover:bg-gray-200"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Titolo "GALLERY" visibile su tutte le risoluzioni */}
                    <h1 className="text-xl md:text-2xl font-semibold text-blue-400">
                        GALLERY
                    </h1>

                    {/* Freccia destra accanto al titolo, visibile solo su mobile e tablet */}
                    <button
                        onClick={handleNext}
                        className="lg:hidden bg-white text-blue-600 font-bold p-2 rounded-full shadow-md hover:bg-gray-200"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Immagine principale con frecce ai lati solo su desktop */}
            <div className="relative w-full max-w-4xl mx-auto mt-6">
                {/* Freccia sinistra accanto all'immagine principale (solo desktop) */}
                <button
                    onClick={handlePrev}
                    className="hidden lg:block absolute top-1/2 -left-24 transform -translate-y-1/2 bg-white text-blue-600 font-bold py-3 px-4 rounded-full shadow-md hover:bg-gray-200 z-10"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="flex justify-center">
                    <img
                        className="w-full max-w-full rounded-lg object-cover object-center h-[200px] sm:h-[300px] md:h-[400px] lg:h-[480px]"
                        src={data[activeIndex].imgelink}
                        alt="active-gallery"
                    />
                </div>

                {/* Freccia destra accanto all'immagine principale (solo desktop) */}
                <button
                    onClick={handleNext}
                    className="hidden lg:block absolute top-1/2 -right-24 transform -translate-y-1/2 bg-white text-blue-600 font-bold py-3 px-4 rounded-full shadow-md hover:bg-gray-200 z-10"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4">
                {data.map(({ imgelink }, index) => (
                    <div key={index} className="flex justify-center">
                        <img
                            onClick={() => setActiveIndex(index)}
                            src={imgelink}
                            className={`h-[120px] max-w-full cursor-pointer rounded-lg object-cover object-center transition-all duration-200 ease-in-out transform hover:scale-105 ${index === activeIndex ? "border-4 border-blue-600" : ""
                                }`}
                            alt={`gallery-image-${index}`}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}
