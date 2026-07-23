import { useState } from "react";

import Navbar from "./components/Navbar";
import TripForm from "./components/TripForm";
import RouteMap from "./components/RouteMap";
import TripSummary from "./components/TripSummary";
import StopsTimeline from "./components/StopsTimeline";
import FMCSALog from "./components/FMCSALog";
import Footer from "./components/Footer";

export default function App() {

    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(false);
    return (

        <div className="
            max-w-7xl
            mx-auto
            px-6
            py-8
        ">

            <Navbar />


            {/* HERO */}

            <div
                id="dashboard"
                className="
                    text-center
                    mb-12
                    mt-12
                    scroll-mt-8
                "
            >

                <h1
                    className="
                        text-6xl
                        font-extrabold
                        text-slate-900
                        mb-4
                        tracking-tight
                    "
                >
                    TruckFlow
                </h1>


                <p
                    className="
                        text-xl
                        text-slate-600
                        max-w-2xl
                        mx-auto
                        leading-relaxed
                    "
                >
                    Plan routes, generate FMCSA-compliant
                    driver logs, and optimize long-haul
                    trucking operations.
                </p>

            </div>


          
            {/* FORM */}

            <div
                id="trips"
                className="
                    max-w-4xl
                    mx-auto
                    mb-10
                    scroll-mt-8
                "
            >

                <TripForm setTrip={setTrip}
                loading={loading}
    setLoading={setLoading} />

            </div>




            {trip && (

                <>


                    {/* MAP */}

                    <div
                        className="
                            mb-8
                            rounded-2xl
                        "
                    >

                        <RouteMap trip={trip} />

                    </div>





                    {/* SUMMARY + TIMELINE */}

                    <div
                        className="
                            grid
                            lg:grid-cols-2
                            gap-6
                            mb-8
                        "
                    >

                        <TripSummary trip={trip} />

                        <StopsTimeline trip={trip} />

                    </div>





                    {/* PRINT BUTTON */}

                    <div
                        className="
                            flex
                            justify-center
                            mb-8
                        "
                    >

                        <button

                            onClick={() => window.print()}

                            className="
                                bg-gradient-to-r
                                from-blue-600
                                to-indigo-600
                                hover:from-blue-700
                                hover:to-indigo-700
                                hover:scale-105
                                transition-all
                                duration-300
                                text-white
                                font-semibold
                                px-8
                                py-4
                                rounded-2xl
                                shadow-lg
                            "
                        >

                            Print FMCSA Logs

                        </button>

                    </div>





                    {/* LOGS */}

                    <div
                        id="logs"
                        className="
                            space-y-8
                            scroll-mt-8
                        "
                    >

                        {
                            trip.logs.map((log) => (

                                <FMCSALog
                                    key={log.day}
                                    log={log}
                                />

                            ))
                        }

                    </div>


                </>

            )}


            <Footer />

        </div>

    );
}