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
        <div className="flex flex-col items-center bg-white py-4">
            <div className="flex items-center justify-center w-full max-w-4xl mt-16">
                <Navbar></Navbar>
                <h1 className="text-xl font-semibold my-6 text-blue-400 py-2 px-6">
                    GALLERY
                </h1>
            </div>
            <div className="relative w-full max-w-4xl">
                {/* Mobile view arrows */}
                <div className="md:hidden flex justify-between w-full absolute -top-12 left-0 right-0 px-4 z-10">
                    <button
                        onClick={handlePrev}
                        className="bg-white text-blue-600 font-bold py-1 px-2 rounded-full shadow-md hover:bg-gray-200"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-white text-blue-600 font-bold py-1 px-2 rounded-full shadow-md hover:bg-gray-200"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                {/* Main image display */}
                <div className="flex justify-center">
                    <img
                        className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[400px]"
                        src={data[activeIndex].imgelink}
                        alt="active-gallery"
                    />
                </div>
                {/* Desktop view arrows */}
                <button
                    onClick={handlePrev}
                    className="hidden md:block absolute top-1/2 -left-20 transform -translate-y-1/2 bg-white text-blue-600 font-bold py-1 px-2 rounded-full shadow-md hover:bg-gray-200 z-10"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    className="hidden md:block absolute top-1/2 -right-20 transform -translate-y-1/2 bg-white text-blue-600 font-bold py-1 px-2 rounded-full shadow-md hover:bg-gray-200 z-10"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-5 gap-4 ml-2 mr-2 md:grid-cols-12 mt-4">
                {data.map(({ imgelink }, index) => (
                    <div key={index}>
                        <img
                            onClick={() => setActiveIndex(index)}
                            src={imgelink}
                            className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center ${index === activeIndex ? "border-4 border-blue-600" : ""}`}
                            alt={`gallery-image-${index}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
