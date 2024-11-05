import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function PrimaSquadra() {
    const navigate = useNavigate();

    // Array of players categorized by their roles
    const players = {
        PORTIERI: [
            { name: "PRESTIGIACOMO UMBERTO (1)", data: "22/08/1999", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "GABRIELE D'AQUILA (12)", data: "15/07/2002", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "FLORIDIA PIETRO (22)", data: "10/03/2001", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
        ],
        DIFENSORI: [
            { name: "PARISI ROBERTO (5)", data: "30/11/2003", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "GIUSEPPE DI MODICA (4)", data: "09/09/1998", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "ANDREA CORTIGIANO (3)", data: "01/04/1998", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "GIORGIO CANGEMI (20)", data: "12/12/1999", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" }
        ],
        LATERALI: [
            { name: "CATANZARO GAETANO (7)", data: "14/02/2000", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "RUSSO VINCENZO (29)", data: "29/10/2004", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "CERNIGLIARO KEVIN (17)", data: "07/07/2003", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "LIGA GIUSEPPE (13)", data: "18/02/2000", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "RICCOBONO ANTONINO (9)", data: "10/03/2001", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "APRILE FLAVIO (6)", data: "05/06/2002", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "LA GRASSA LUDOVICO (21)", data: "13/04/2001", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "LUCA DI BENEDETTO (19)", data: "11/11/1999", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" }
        ],
        PIVOTS: [
            { name: "RUSSO STEFANO (10)", data: "15/07/2002", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "DI MARIANO GIUSEPPE (11)", data: "27/01/2002", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" },
            { name: "CULOTTA GIUSEPPE (8)", data: "08/10/2001", avatar: "https://docs.material-tailwind.com/img/face-1.jpg" }
        ]
    };

    return (
        <Card className="flex justify-center items-center bg-blue-400 rounded-none">
            <div className="flex items-center justify-center w-full max-w-4xl mt-2">
                <button
                    onClick={() => navigate("/")}
                    type="button"
                    className="bg-white text-blue-600 font-semibold py-1 px-3 rounded-md text-sm hover:bg-gray-200 absolute left-4"
                >
                    ⬅️
                </button>
                <h1 className="text-xl font-semibold my-6 bg-white text-blue-400 py-2 px-6 rounded-lg shadow-lg">
                    PRIMA SQUADRA
                </h1>
            </div>
            <List>
                {Object.entries(players).map(([category, playersList]) => (
                    <div key={category}>
                        <Typography variant="h5" color="black" className="mt-4 my-4">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Typography>
                        {playersList.map((player, index) => (
                            <ListItem key={index} className="bg-gray-100 mb-2">
                                <ListItemPrefix>
                                    <Avatar variant="rounded" className="w-16 h-16" alt={player.name} src={player.avatar} />
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        {player.name}
                                    </Typography>
                                    <Typography variant="small" color="blue" className="font-semibold">
                                        {player.data}
                                    </Typography>
                                </div>
                            </ListItem>
                        ))}
                    </div>
                ))}
            </List>
        </Card>
    );
}
