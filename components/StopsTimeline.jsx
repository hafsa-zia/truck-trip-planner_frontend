export default function StopsTimeline({trip}){

    return(

        <div className="bg-white p-5 rounded-xl">

            <h2>Stops</h2>

            {
                trip.stops.map(
                    (stop,index)=>(

                        <div
                            key={index}
                            className="
                            border-b
                            py-2
                            "
                        >

                            Day {stop.day}

                            -
                            {stop.type}

                            (
                            {stop.duration}
                            hrs)

                        </div>
                    )
                )
            }

        </div>
    )
}