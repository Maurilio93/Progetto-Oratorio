import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from "@material-tailwind/react";
import { Navbar } from "./Navbar";

export function PrimaSquadra() {


    // Array of players categorized by their roles
    const players = {
        PORTIERI: [
            { name: "PRESTIGIACOMO UMBERTO (1)", data: "22/08/1999", avatar: "images/2348811.png" },
            { name: "GABRIELE D'AQUILA (12)", data: "15/07/2002", avatar: "images/2348811.png" },
            { name: "FLORIDIA PIETRO (22)", data: "10/03/2001", avatar: "images/2348811.png" },
        ],
        DIFENSORI: [
            { name: "PARISI ROBERTO (5)", data: "30/11/2003", avatar: "images/2348811.png" },
            { name: "GIUSEPPE DI MODICA (4)", data: "09/09/1998", avatar: "images/2348811.png" },
            { name: "ANDREA CORTIGIANO (3)", data: "01/04/1998", avatar: "images/2348811.png" },
            { name: "GIORGIO CANGEMI (20)", data: "12/12/1999", avatar: "images/2348811.png" }
        ],
        LATERALI: [
            { name: "CATANZARO GAETANO (7)", data: "14/02/2000", avatar: "images/2348811.png" },
            { name: "RUSSO VINCENZO (29)", data: "29/10/2004", avatar: "images/2348811.png" },
            { name: "CERNIGLIARO KEVIN (17)", data: "07/07/2003", avatar: "images/2348811.png" },
            { name: "LIGA GIUSEPPE (13)", data: "18/02/2000", avatar: "images/2348811.png" },
            { name: "RICCOBONO ANTONINO (9)", data: "10/03/2001", avatar: "images/2348811.png" },
            { name: "APRILE FLAVIO (6)", data: "05/06/2002", avatar: "images/2348811.png" },
            { name: "LA GRASSA LUDOVICO (21)", data: "13/04/2001", avatar: "images/2348811.png" },
            { name: "LUCA DI BENEDETTO (19)", data: "11/11/1999", avatar: "images/2348811.png" }
        ],
        PIVOTS: [
            { name: "RUSSO STEFANO (10)", data: "15/07/2002", avatar: "images/2348811.png" },
            { name: "DI MARIANO GIUSEPPE (11)", data: "27/01/2002", avatar: "images/2348811.png" },
            { name: "CULOTTA GIUSEPPE (8)", data: "08/10/2001", avatar: "images/2348811.png" }
        ]
    };

    return (
        <Card className="flex flex-col justify-center items-center bg-white rounded-none p-4">
            <div className="flex items-center justify-center w-full max-w-4xl mt-2">
                <Navbar></Navbar>
                <h1 className="text-xl font-semibold my-10 text-blue-400 py-8">
                    PRIMA SQUADRA
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
    );
}
