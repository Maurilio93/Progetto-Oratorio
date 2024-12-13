import { Card, CardBody, Typography } from "@material-tailwind/react";

export function Partite() {
    return (
        <div className="flex justify-center items-center min-h-screen px-4 rounded-xl lg:px-64">
           <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl space-y-6 md:space-y-0 md:space-x-6">
                {/* Ultima partita */}
                <Card className="w-full rounded-lg shadow-lg shadow-blue-400 bg-gray-200">
                    <CardBody>
                        <Typography variant="h5" className="text-center mb-4 text-blue-400">
                            ULTIMA PARTITA
                        </Typography>
                        <div className="iframe-container" style={{ width: '100%', height: '350px' }}>
                            <iframe
                                src="https://www.tuttocampo.it/WidgetV2/Partita/30018696-716a-4194-a931-e7547a88ff56"
                                width="100%"
                                height="350"
                                loading="lazy"
                                className="w-full"
                                scrolling="no"
                            ></iframe>
                        </div>
                    </CardBody>
                </Card>

                {/* Prossima partita */}
                <Card className="w-full rounded-lg shadow-lg shadow-blue-400 bg-gray-200">
                    <CardBody>
                        <Typography variant="h5" className="text-center mb-4 text-blue-400">
                            PROSSIMA PARTITA
                        </Typography>
                        <div className="iframe-container" style={{ width: '100%', height: '350px' }}>
                            <iframe
                                src="https://www.tuttocampo.it/WidgetV2/ProssimaPartita/30018696-716a-4194-a931-e7547a88ff56"
                                width="100%"
                                height="350"
                                loading="lazy"
                                className="w-full"
                                scrolling="no"
                            ></iframe>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
