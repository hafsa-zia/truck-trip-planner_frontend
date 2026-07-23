import { Fragment } from "react";

export default function FMCSALog({ log }) {

    const rows = [
        {
            name: "Off Duty",
            color: "bg-slate-400"
        },
        {
            name: "Sleeper",
            color: "bg-purple-400"
        },
        {
            name: "Driving",
            color: "bg-blue-500"
        },
        {
            name: "On Duty",
            color: "bg-orange-400"
        }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-slate-200">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">

                <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        Driver's Daily Log
                    </h2>

                    <p className="text-slate-500 mt-1">
                        Day {log.day} • FMCSA Hours of Service
                    </p>
                </div>

                <div className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold">
                    24 Hour Log
                </div>

            </div>


            {/* Legend */}
            <div className="flex gap-4 mb-6 flex-wrap">

                {rows.map((row) => (
                    <div
                        key={row.name}
                        className="flex items-center gap-2 text-sm text-slate-600"
                    >
                        <span
                            className={`w-4 h-4 rounded ${row.color}`}
                        />

                        {row.name}
                    </div>
                ))}

            </div>


            {/* Log Table */}
            <div className="overflow-x-auto">

                <div className="
                    min-w-[1100px]
                    grid
                    grid-cols-[140px_repeat(24,minmax(35px,1fr))]
                    border
                    border-slate-200
                    rounded-lg
                    overflow-hidden
                ">

                    {/* Header */}
                    <div className="border p-3 font-semibold bg-slate-50 whitespace-nowrap">
                        Status
                    </div>

                    {
                        Array.from({ length: 24 }).map((_, i) => (
                            <div
                                key={i}
                                className="border p-3 text-center text-sm font-medium bg-slate-50"
                            >
                                {i}
                            </div>
                        ))
                    }


                    {/* Rows */}

                    {
                        rows.map((row) => (

                            <Fragment key={row.name}>

                                <div
                                    className="
                                        border
                                        p-3
                                        font-semibold
                                        text-slate-700
                                        bg-slate-50
                                        whitespace-nowrap
                                    "
                                >
                                    {row.name}
                                </div>


                                {
                                    Array.from({ length: 24 }).map((_, hour) => {

                                        let active = false;


                                        if (
                                            row.name === "Off Duty" &&
                                            hour < log.off_duty
                                        ) {
                                            active = true;
                                        }


                                        if (
                                            row.name === "Driving" &&
                                            hour >= log.off_duty &&
                                            hour <
                                            log.off_duty + log.driving
                                        ) {
                                            active = true;
                                        }


                                        if (
                                            row.name === "On Duty" &&
                                            hour >=
                                            log.off_duty + log.driving
                                        ) {
                                            active = true;
                                        }


                                        return (
                                            <div
                                                key={hour}
                                                className={`
                                                    border
                                                    h-12
                                                    transition-all
                                                    ${
                                                        active
                                                        ? row.color
                                                        : "bg-white"
                                                    }
                                                    hover:bg-blue-100
                                                `}
                                            />
                                        );
                                    })
                                }

                            </Fragment>

                        ))
                    }

                </div>

            </div>

        </div>
    );
}