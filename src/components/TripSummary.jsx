export default function TripSummary({ trip }) {

    const fuelStops = trip.stops.filter(
        stop => stop.type === "Fuel Stop"
    ).length;

    const breaks = trip.stops.filter(
        stop => stop.type === "30 Minute Break"
    ).length;


    return (

        <div
            className="
                bg-white
                p-6
                rounded-2xl
                shadow-xl
                border
                border-slate-200
            "
        >

            <div className="mb-6">

                <h2
                    className="
                        text-2xl
                        font-bold
                        text-slate-900
                    "
                >
                    Trip Summary
                </h2>

                <p
                    className="
                        text-slate-500
                        mt-1
                    "
                >
                    Overview of your planned route
                </p>

            </div>


            <div className="grid grid-cols-2 gap-4">


                <div
                    className="
                        bg-blue-50
                        p-4
                        rounded-xl
                        border
                        border-blue-100
                        transition
                        hover:shadow-md
                    "
                >
                    <p className="text-slate-500 text-sm">
                        Distance
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                        {trip.distance} mi
                    </h3>
                </div>



                <div
                    className="
                        bg-indigo-50
                        p-4
                        rounded-xl
                        border
                        border-indigo-100
                        transition
                        hover:shadow-md
                    "
                >
                    <p className="text-slate-500 text-sm">
                        Duration
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                        {trip.duration} hrs
                    </h3>
                </div>



                <div
                    className="
                        bg-slate-50
                        p-4
                        rounded-xl
                        border
                        border-slate-200
                        transition
                        hover:shadow-md
                    "
                >
                    <p className="text-slate-500 text-sm">
                        Total Days
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                        {trip.total_days}
                    </h3>
                </div>



                <div
                    className="
                        bg-emerald-50
                        p-4
                        rounded-xl
                        border
                        border-emerald-100
                        transition
                        hover:shadow-md
                    "
                >
                    <p className="text-slate-500 text-sm">
                        Fuel Stops
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                        {fuelStops}
                    </h3>
                </div>



                <div
                    className="
                        bg-purple-50
                        p-4
                        rounded-xl
                        border
                        border-purple-100
                        transition
                        hover:shadow-md
                    "
                >
                    <p className="text-slate-500 text-sm">
                        Rest Breaks
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                        {breaks}
                    </h3>
                </div>



                <div
                    className="
                        bg-orange-50
                        p-4
                        rounded-xl
                        border
                        border-orange-100
                        transition
                        hover:shadow-md
                    "
                >
                    <p className="text-slate-500 text-sm">
                        Pickup/Dropoff
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                        2 Stops
                    </h3>
                </div>


            </div>

        </div>

    );
}