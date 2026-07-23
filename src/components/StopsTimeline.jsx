export default function StopsTimeline({ trip }) {

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
                    Trip Timeline
                </h2>

                <p
                    className="
                        text-slate-500
                        mt-1
                    "
                >
                    Scheduled stops along your route
                </p>

            </div>


            <div className="space-y-4">

                {
                    trip.stops.map((stop, index) => (

                        <div
                            key={index}
                            className="
                                relative
                                flex
                                gap-4
                                border-l-4
                                border-blue-500
                                pl-5
                                py-4
                                bg-slate-50
                                rounded-r-xl
                                transition
                                hover:bg-blue-50
                            "
                        >

                            {/* Timeline Dot */}
                            <div
                                className="
                                    absolute
                                    -left-[10px]
                                    top-6
                                    w-4
                                    h-4
                                    rounded-full
                                    bg-blue-600
                                    border-4
                                    border-white
                                "
                            />


                            <div>

                                <p
                                    className="
                                        font-bold
                                        text-slate-800
                                        text-lg
                                    "
                                >
                                    Day {stop.day}
                                </p>


                                <p
                                    className="
                                        text-slate-600
                                        mt-1
                                    "
                                >
                                    {stop.type}
                                </p>


                                <p
                                    className="
                                        text-sm
                                        text-slate-500
                                        mt-1
                                    "
                                >
                                    {stop.duration} hrs
                                </p>

                            </div>


                        </div>

                    ))
                }

            </div>

        </div>
    );
}