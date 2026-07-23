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
            p-5
            rounded-xl
            shadow-lg
            "
        >

            <h2 className="text-2xl font-bold mb-5">
                Trip Summary
            </h2>

            <div className="grid grid-cols-2 gap-4">

                <div className="bg-slate-100 p-4 rounded-lg">
                    <p className="text-gray-500">
                        Distance
                    </p>

                    <h3 className="text-xl font-bold">
                        {trip.distance} mi
                    </h3>
                </div>

                <div className="bg-slate-100 p-4 rounded-lg">
                    <p className="text-gray-500">
                        Duration
                    </p>

                    <h3 className="text-xl font-bold">
                        {trip.duration} hrs
                    </h3>
                </div>

                <div className="bg-slate-100 p-4 rounded-lg">
                    <p className="text-gray-500">
                        Total Days
                    </p>

                    <h3 className="text-xl font-bold">
                        {trip.total_days}
                    </h3>
                </div>

                <div className="bg-slate-100 p-4 rounded-lg">
                    <p className="text-gray-500">
                        Fuel Stops
                    </p>

                    <h3 className="text-xl font-bold">
                        {fuelStops}
                    </h3>
                </div>

                <div className="bg-slate-100 p-4 rounded-lg">
                    <p className="text-gray-500">
                        Rest Breaks
                    </p>

                    <h3 className="text-xl font-bold">
                        {breaks}
                    </h3>
                </div>

                <div className="bg-slate-100 p-4 rounded-lg">
                    <p className="text-gray-500">
                        Pickup/Dropoff
                    </p>

                    <h3 className="text-xl font-bold">
                        2 Stops
                    </h3>
                </div>

            </div>

        </div>
    );
}