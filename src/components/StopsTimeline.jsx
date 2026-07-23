export default function StopsTimeline({ trip }) {

    return (
        <div className="bg-white p-5 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold mb-5">
                Trip Timeline
            </h2>

            {
                trip.stops.map((stop, index) => (

                    <div
                        key={index}
                        className="
                        flex
                        items-center
                        gap-4
                        border-l-4
                        border-blue-500
                        pl-4
                        py-3
                        "
                    >

                        <div>
                            <p className="font-bold">
                                Day {stop.day}
                            </p>

                            <p>
                                {stop.type}
                            </p>

                            <p className="text-sm text-gray-500">
                                {stop.duration} hrs
                            </p>
                        </div>

                    </div>
                ))
            }

        </div>
    );
}