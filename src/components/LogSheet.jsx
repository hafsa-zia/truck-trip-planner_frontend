export default function LogSheet({ logs }) {

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
                    ELD Driver Logs
                </h2>

                <p
                    className="
                        text-slate-500
                        mt-1
                    "
                >
                    Driver activity overview for each trip day
                </p>

            </div>


            {
                logs.map((log) => (

                    <div
                        key={log.day}
                        className="
                            border
                            border-slate-200
                            rounded-2xl
                            p-5
                            mb-5
                            bg-slate-50
                            transition
                            hover:shadow-md
                        "
                    >

                        <h3
                            className="
                                text-lg
                                font-bold
                                text-slate-800
                                mb-5
                            "
                        >
                            Day {log.day}
                        </h3>



                        <div className="space-y-5">


                            {/* Driving */}

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span className="font-medium text-slate-700">
                                        Driving
                                    </span>

                                    <span className="text-slate-500">
                                        {log.driving} hrs
                                    </span>

                                </div>


                                <div className="
                                    bg-slate-200
                                    h-3
                                    rounded-full
                                    overflow-hidden
                                ">

                                    <div
                                        className="
                                            bg-blue-500
                                            h-3
                                            rounded-full
                                            transition-all
                                        "
                                        style={{
                                            width: `${(log.driving / 24) * 100}%`
                                        }}
                                    />

                                </div>

                            </div>




                            {/* On Duty */}

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span className="font-medium text-slate-700">
                                        On Duty
                                    </span>

                                    <span className="text-slate-500">
                                        {log.on_duty} hrs
                                    </span>

                                </div>


                                <div className="
                                    bg-slate-200
                                    h-3
                                    rounded-full
                                    overflow-hidden
                                ">

                                    <div
                                        className="
                                            bg-emerald-500
                                            h-3
                                            rounded-full
                                            transition-all
                                        "
                                        style={{
                                            width: `${(log.on_duty / 24) * 100}%`
                                        }}
                                    />

                                </div>

                            </div>




                            {/* Off Duty */}

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span className="font-medium text-slate-700">
                                        Off Duty
                                    </span>

                                    <span className="text-slate-500">
                                        {log.off_duty} hrs
                                    </span>

                                </div>


                                <div className="
                                    bg-slate-200
                                    h-3
                                    rounded-full
                                    overflow-hidden
                                ">

                                    <div
                                        className="
                                            bg-red-500
                                            h-3
                                            rounded-full
                                            transition-all
                                        "
                                        style={{
                                            width: `${(log.off_duty / 24) * 100}%`
                                        }}
                                    />

                                </div>

                            </div>



                        </div>


                    </div>

                ))
            }


        </div>
    );
}