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
            "Unable to generate the trip. Please verify all locations and ensure they are correct..");

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
    className="space-y-3"
>

    <div>

        <label className="text-slate-700 text-sm font-medium block mb-1">
            Current Location
        </label>

        <input
            placeholder="e.g. Dallas, TX"
            className="
                w-full
                px-3
                py-2.5
                rounded-lg
                bg-slate-50
                border
                border-slate-200
                text-slate-800
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-amber-100
                focus:border-amber-500
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

        <label className="text-slate-700 text-sm font-medium block mb-1">
            Pickup Location
        </label>

        <input
            placeholder="e.g. Houston, TX"
            className="
                w-full
                px-3
                py-2.5
                rounded-lg
                bg-slate-50
                border
                border-slate-200
                text-slate-800
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-amber-100
                focus:border-amber-500
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

        <label className="text-slate-700 text-sm font-medium block mb-1">
            Dropoff Location
        </label>

        <input
            placeholder="e.g. Chicago, IL"
            className="
                w-full
                px-3
                py-2.5
                rounded-lg
                bg-slate-50
                border
                border-slate-200
                text-slate-800
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-amber-100
                focus:border-amber-500
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

        <label className="text-slate-700 text-sm font-medium block mb-1">
            Current Cycle Used (Hours)
        </label>

        <input
            type="number"
            placeholder="e.g. 20"
            className="
                w-full
                px-3
                py-2.5
                rounded-lg
                bg-slate-50
                border
                border-slate-200
                text-slate-800
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-amber-100
                focus:border-amber-500
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

        <div className="text-center mb-3">

            <div
                className="
                    w-10
                    h-10
                    border-4
                    border-amber-500
                    border-t-transparent
                    rounded-full
                    animate-spin
                    mx-auto
                "
            />

            <p className="mt-2 text-sm text-slate-600 font-medium">
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
        from-amber-500
        to-orange-500
        hover:from-amber-600
        hover:to-orange-600
        text-white
        px-6
        py-3
        rounded-xl
        font-semibold
        shadow-lg
        transition-all
        duration-300
        hover:scale-[1.02]
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