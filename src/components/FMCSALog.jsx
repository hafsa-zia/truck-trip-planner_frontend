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
const offDutyTransition = (log.off_duty + 1) * 35;

const drivingTransition =
    (log.off_duty + log.driving + 1) * 35;
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

            <div className="px-4 py-2 rounded-lg bg-amber-50 text-amber-600 font-semibold">
                24 Hour Log
            </div>

        </div>


        {/* Legend */}
        <div className="flex gap-6 mb-6 text-sm text-slate-600">

            <div className="flex items-center gap-2">
                <div className="w-4 h-[3px] bg-amber-500 rounded" />
                FMCSA Status Line
            </div>

        </div>


        {/* Log Table */}
        <div className="overflow-x-auto relative">

            <div
                className="
                    min-w-[1100px]
                    grid
                    grid-cols-[140px_repeat(24,minmax(35px,1fr))]
                    border
                    border-slate-200
                    rounded-lg
                    overflow-hidden
                "
            >

                {/* Header */}
                <div className="border p-3 font-semibold bg-slate-50">
                    Status
                </div>

                {
                    Array.from({ length: 24 }).map((_, i) => (
                        <div
                            key={i}
                            className="
                                border
                                p-3
                                text-center
                                text-sm
                                font-medium
                                bg-slate-50
                            "
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
                                Array.from({ length: 24 }).map((_, hour) => (

                                    <div
                                        key={hour}
                                        className="
                                            border
                                            h-12
                                            bg-white
                                        "
                                    />

                                ))
                            }

                        </Fragment>

                    ))
                }

            </div>

            {/* FMCSA Graph Overlay */}
            <svg
                className="absolute top-[52px] left-[140px] pointer-events-none"
                width={24 * 35}
                height={4 * 48}
            >

                {/* Off Duty */}
                <line
                    x1="0"
                    y1="24"
                    x2={offDutyTransition}
                    y2="24"
                    stroke="#f59e0b"
                    strokeWidth="4"
                />

                {/* Transition to Driving */}
                <line
                    x1={offDutyTransition}
                    y1="24"
                    x2={offDutyTransition}
                    y2="120"
                    stroke="#f59e0b"
                    strokeWidth="4"
                />

                {/* Driving */}
                <line
                    x1={offDutyTransition}
                    y1="120"
                    x2={drivingTransition}
                    y2="120"
                    stroke="#f59e0b"
                    strokeWidth="4"
                />

                {/* Transition to On Duty */}
                <line
                    x1={drivingTransition}
                    y1="120"
                    x2={drivingTransition}
                    y2="168"
                    stroke="#f59e0b"
                    strokeWidth="4"
                />

                {/* On Duty */}
                <line
                    x1={drivingTransition}
                    y1="168"
                    x2={24 * 35}
                    y2="168"
                    stroke="#f59e0b"
                    strokeWidth="4"
                />

            </svg>

        </div>

    </div>
);}