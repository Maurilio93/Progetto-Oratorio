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
        { imgelink: "images/gallery13.png" },
        { imgelink: "images/gallery14.png" },
        { imgelink: "images/gallery15.png" },
        { imgelink: "images/gallery16.png" },
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
                <h1 className="text-xl font-semibold my-6 text-blue-400 py-2 px-6 text-center">
                    GALLERY
                </h1>
            </div>

            <div className="relative w-full max-w-4xl mx-auto">
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 -left-8 md:-left-20 transform -translate-y-1/2 bg-white text-blue-600 font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 z-10"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="flex justify-center">
                    <img
                        className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                        src={data[activeIndex].imgelink}
                        alt="active-gallery"
                    />
                </div>

                <button
                    onClick={handleNext}
                    className="absolute top-1/2 -right-8 md:-right-20 transform -translate-y-1/2 bg-white text-blue-600 font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 z-10"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-4 mt-4">
                {data.map(({ imgelink }, index) => (
                    <div key={index} className="flex justify-center">
                        <img
                            onClick={() => setActiveIndex(index)}
                            src={imgelink}
                            className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center transition-all duration-200 ease-in-out transform hover:scale-105 ${
                                index === activeIndex ? "border-4 border-blue-600" : ""
                            }`}
                            alt={`gallery-image-${index}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
