import {useState} from "react"

import TripForm from "./components/TripForm"
import TripSummary from "./components/TripSummary"
import StopsTimeline from "./components/StopsTimeline"

export default function App(){

    const [trip,setTrip] = useState(null)

    return(

        <div
            className="
            max-w-6xl
            mx-auto
            p-10
            "
        >

            <h1
                className="
                text-4xl
                text-white
                mb-8
                "
            >
                Truck Trip Planner
            </h1>

            <TripForm
                setTrip={setTrip}
            />

            {
                trip && (

                    <div
                        className="
                        grid
                        grid-cols-2
                        gap-5
                        mt-5
                        "
                    >

                        <TripSummary
                            trip={trip}
                        />

                        <StopsTimeline
                            trip={trip}
                        />

                    </div>
                )
            }

        </div>
    )
}