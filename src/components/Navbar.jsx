export default function Navbar() {

    return (
        <nav
            className="
            bg-slate-900
            text-white
            p-5
            rounded-xl
            shadow-lg
            mb-6
            flex
            justify-between
            items-center
            "
        >
            <div>
                <h1 className="text-3xl font-bold">
                    Truck Trip Planner
                </h1>

                <p className="text-sm text-gray-300">
                    Route Planning & ELD Log Generator
                </p>
            </div>

            <div className="flex gap-6">
                <span>Dashboard</span>
                <span>Trips</span>
                <span>ELD Logs</span>
            </div>
        </nav>
    );
}