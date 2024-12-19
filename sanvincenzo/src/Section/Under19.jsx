import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from "@material-tailwind/react";
import { Navbar } from "./Navbar";
import { Helmet } from "react-helmet";

export function Under19() {


    // Array of players categorized by their roles
    const players = {
        PORTIERI: [
            { name: "PRESTIGIACOMO UMBERTO (1)", avatar: "images/soccer-player.png" },
            { name: "RICCARDO BONURA (1)", avatar: "images/soccer-player.png" },
        ],
        DIFENSORI: [
            { name: "CARMELO GIULIO CICERO (4)", avatar: "images/2348811.png" },
            { name: "ANDREA CORTIGIANO (3)", avatar: "images/2348811.png" },
            { name: "LA GRASSA LUDOVICO (21)", avatar: "images/2348811.png" },
        ],
        LATERALI: [
            { name: "CATANZARO GAETANO (7)", avatar: "images/2348811.png" },
            { name: "ANDREA VINCENZO ANELLO (9)", avatar: "images/2348811.png" },
            { name: "CERNIGLIARO KEVIN (17)", avatar: "images/2348811.png" },
            { name: "LIGA GIUSEPPE (13)", avatar: "images/2348811.png" },
            { name: "ANTONIO CICERO (11)", avatar: "images/2348811.png" },
            { name: "FRANCESCO PRESTIGIACOMO (19)", avatar: "images/2348811.png" },
            { name: "MANFREDI DEL GIUDICE (8)", avatar: "images/2348811.png" }
        ],
        PIVOTS: [
            { name: "RUSSO STEFANO (10)", avatar: "images/2348811.png" },
            { name: "ANDREA MINA' (10)", avatar: "images/2348811.png" },
        ]
    };

    return (
        <>
            <Helmet>
                <title>Under 19 | Oratorio San Vincenzo</title>
                <meta name="description" content="Segui la squadra Under 19 dell'Oratorio San Vincenzo: risultati, classifiche e progressi." />
                <meta name="keywords" content="Under 19, Oratorio San Vincenzo, calcio giovanile, sport" />
            </Helmet>
            <h1 className="sr-only">Under 19</h1>
            <Card className="flex flex-col justify-center items-center bg-white rounded-none p-4">
                <div className="flex items-center justify-center w-full max-w-4xl mt-2">
                    <Navbar></Navbar>
                    <h1 className="text-xl font-semibold my-10 text-blue-400 py-8">
                        UNDER 19
                    </h1>
                </div>
                <List className="-mt-6 w-full max-w-4xl mx-auto">
                    {Object.entries(players).map(([category, playersList]) => {
                        // Mappa delle emoji per le categorie
                        const categoryEmojis = {
                            PORTIERI: '🧤',   // Emoji per portieri
                            DIFENSORI: '🛡️',  // Emoji per difensori
                            LATERALI: '🏃',   // Emoji per ala
                            PIVOTS: '⚽'      // Emoji per attaccanti/pivot
                        };

                        // Recupera l'emoji dalla mappa
                        const emoji = categoryEmojis[category.toUpperCase()] || '';

                        return (
                            <div key={category} className="mb-8">
                                <Typography variant="h5" color="black" className="mt-4 mb-4 text-center">
                                    {emoji} {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Typography>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                                    {playersList.map((player, index) => (
                                        <ListItem
                                            key={index}
                                            className="bg-blue-100 p-2 rounded-lg mb-2 flex items-center hover:bg-blue-200 md:flex-row md:p-3"
                                        >
                                            <ListItemPrefix>
                                                <Avatar
                                                    variant="rounded"
                                                    className="w-12 h-12 mr-2 md:w-14 md:h-14"
                                                    alt={player.name}
                                                    src={player.avatar}
                                                />
                                            </ListItemPrefix>
                                            <div className="text-left">
                                                <Typography
                                                    variant="h6"
                                                    color="black"
                                                    className="text-sm md:text-base"
                                                >
                                                    {player.name}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    color="black"
                                                    className="font-semibold text-xs md:text-sm"
                                                >
                                                    {player.data}
                                                </Typography>
                                            </div>
                                        </ListItem>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </List>
            </Card>
        </>
    );
}
