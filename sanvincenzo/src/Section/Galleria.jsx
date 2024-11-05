import React from "react";
import { useNavigate } from "react-router-dom";

export function Galleria() {

    const navigate = useNavigate();

    const data = [
        {
            imgelink:
                "images/gallery2.png",
        },
        {
            imgelink:
                "images/gallery3.png",
        },
        {
            imgelink:
                "images/gallery4.png",
        },
        {
            imgelink:
                "images/gallery5.png",
        },
        {
            imgelink:
                "images/gallery6.png",
        },
        {
            imgelink:
                "images/gallery7.png",
        },
        {
            imgelink:
                "images/gallery8.png",
        },
        {
            imgelink:
                "images/gallery9.png",
        },
        {
            imgelink:
                "images/gallery10.png",
        },
        {
            imgelink:
                "images/gallery11.png",
        },
        {
            imgelink:
                "images/gallery12.png",
        },
        {
            imgelink:
                "images/gallery13.png",
        },
        {
            imgelink:
                "images/gallery14.png",
        },
        {
            imgelink:
                "images/gallery15.png",
        },
        {
            imgelink:
                "images/gallery16.png",
        },

    ];

    const [active, setActive] = React.useState(
        "images/Progetto senza titolo (3).png",
    );

    return (
        <div className="flex flex-col items-center bg-blue-400">
            <div className="flex items-center justify-center w-full max-w-4xl mt-2">
                <button
                    onClick={() => navigate("/")}
                    type="button"
                    className="bg-white text-blue-600 font-semibold py-1 px-3 rounded-md text-sm hover:bg-gray-200 absolute left-4"
                >
                    ⬅️
                </button>
                <h1 className="text-xl font-semibold my-6 bg-white text-blue-400 py-2 px-6 rounded-lg shadow-lg">
                    GALLERY
                </h1>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                        className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                        src={active}
                        alt=""
                    />
                </div>
                <div className="grid grid-cols-5 gap-4 ml-2 mr-2 md:grid-cols-12">
                    {data.map(({ imgelink }, index) => (
                        <div key={index}>
                            <img
                                onClick={() => setActive(imgelink)}
                                src={imgelink}
                                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                alt="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
