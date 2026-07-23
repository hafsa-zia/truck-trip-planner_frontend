import { useState } from "react";
import api from "../../services/api";

export default function TripForm({
    setTrip,
    loading,
    setLoading
}) {

    const [form, setForm] = useState({
        current_location: "",
        pickup_location: "",
        dropoff_location: "",
        current_cycle_used: ""
    });
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const response = await api.post(
                "/trips/",
                form
            );

            setTrip(response.data);

        } catch (error) {
            
            setError(
            error.response?.data?.error ||
            "Unable to generate the trip. Please verify all locations and ensure they are spelled correctly..");

        } finally {

            setLoading(false);

        }
    };

    return (

        <div
            className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                shadow-xl
                p-8
                mb-8
            "
        >

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-slate-900">
                    Plan Your Trip
                </h2>

                <p className="text-slate-500 mt-2 leading-relaxed">
                    Enter trip details to generate routes,
                    stops, and FMCSA-compliant driver logs.
                </p>

            </div>
            {
    error && (
        <div
            className="
                fixed
                inset-0
                bg-black/50
                flex
                items-center
                justify-center
                z-50
            "
        >
            <div
                className="
                    bg-white
                    p-8
                    rounded-2xl
                    shadow-2xl
                    max-w-md
                    text-center
                "
            >
                <h2 className="text-2xl font-bold text-red-600 mb-4">
                    Invalid Location
                </h2>

                <p className="text-slate-600 mb-6">
                    {error}
                </p>

                <button
                    onClick={() => setError("")}
                    className="
                        bg-blue-600
                        text-white
                        px-6
                        py-3
                        rounded-xl
                    "
                >
                    OK
                </button>
            </div>
        </div>
    )
}

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <div>

                    <label className="text-slate-700 font-medium block mb-2">
                        Current Location
                    </label>

                    <input
                        placeholder="e.g. Dallas, TX"
                        className="
                            w-full
                            p-4
                            rounded-xl
                            bg-slate-50
                            border
                            border-slate-200
                            text-slate-800
                            placeholder:text-slate-400
                            focus:outline-none
                            focus:ring-4
                            focus:ring-blue-100
                            focus:border-blue-500
                            transition
                        "
                        onChange={(e) =>
                            setForm({
                                ...form,
                                current_location: e.target.value
                            })
                        }
                    />

                </div>


                <div>

                    <label className="text-slate-700 font-medium block mb-2">
                        Pickup Location
                    </label>

                    <input
                        placeholder="e.g. Houston, TX"
                        className="
                            w-full
                            p-4
                            rounded-xl
                            bg-slate-50
                            border
                            border-slate-200
                            text-slate-800
                            placeholder:text-slate-400
                            focus:outline-none
                            focus:ring-4
                            focus:ring-blue-100
                            focus:border-blue-500
                            transition
                        "
                        onChange={(e) =>
                            setForm({
                                ...form,
                                pickup_location: e.target.value
                            })
                        }
                    />

                </div>


                <div>

                    <label className="text-slate-700 font-medium block mb-2">
                        Dropoff Location
                    </label>

                    <input
                        placeholder="e.g. Chicago, IL"
                        className="
                            w-full
                            p-4
                            rounded-xl
                            bg-slate-50
                            border
                            border-slate-200
                            text-slate-800
                            placeholder:text-slate-400
                            focus:outline-none
                            focus:ring-4
                            focus:ring-blue-100
                            focus:border-blue-500
                            transition
                        "
                        onChange={(e) =>
                            setForm({
                                ...form,
                                dropoff_location: e.target.value
                            })
                        }
                    />

                </div>


                <div>

                    <label className="text-slate-700 font-medium block mb-2">
                        Current Cycle Used (Hours)
                    </label>

                    <input
                        type="number"
                        placeholder="e.g. 20"
                        className="
                            w-full
                            p-4
                            rounded-xl
                            bg-slate-50
                            border
                            border-slate-200
                            text-slate-800
                            placeholder:text-slate-400
                            focus:outline-none
                            focus:ring-4
                            focus:ring-blue-100
                            focus:border-blue-500
                            transition
                        "
                        onChange={(e) =>
                            setForm({
                                ...form,
                                current_cycle_used: e.target.value
                            })
                        }
                    />

                </div>


                {loading && (

                    <div className="text-center mb-6">

                        <div
                            className="
                                w-12
                                h-12
                                border-4
                                border-blue-500
                                border-t-transparent
                                rounded-full
                                animate-spin
                                mx-auto
                            "
                        />

                        <p className="mt-4 text-slate-600 font-medium">
                            🚚 Generating route, calculating HOS,
                            and preparing FMCSA logs...
                        </p>

                    </div>

                )}


                <button
                    disabled={loading}
                    className="
                        w-full
                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600
                        hover:from-blue-700
                        hover:to-indigo-700
                        text-white
                        px-8
                        py-4
                        rounded-2xl
                        font-semibold
                        shadow-lg
                        transition-all
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                    "
                >
                    {
                        loading
                            ? "🚚 Generating Route & Logs..."
                            : "🚚 Generate Route & Logs"
                    }
                </button>

            </form>

        </div>

    );
}