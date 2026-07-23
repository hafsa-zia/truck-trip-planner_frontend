import { useState } from "react";

import TripForm from "./components/TripForm";
import TripSummary from "./components/TripSummary";
import StopsTimeline from "./components/StopsTimeline";
import RouteMap from "./components/RouteMap";
import LogSheet from "./components/LogSheet"
import Navbar from "./components/Navbar";
export default function App() {
    const [trip, setTrip] = useState(null);

    return (
        <div className="max-w-6xl mx-auto p-10">
            <Navbar />

            <TripForm setTrip={setTrip} />

            {trip && (
                <div className="grid grid-cols-1 gap-5 mt-5">
                    <RouteMap trip={trip} />

                    <div className="grid md:grid-cols-2 gap-5">
                        <TripSummary trip={trip} />

                        <StopsTimeline trip={trip} />
                        <LogSheet logs={trip.logs} />
                    </div>
                    
                </div>
                
            )}
        </div>
    );
}