export default function Navbar() {

    return (

        <nav
            className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                px-8
                py-5
                mb-8
                shadow-sm
                flex
                justify-between
                items-center
            "
        >

            {/* Logo Section */}

            <div>

                <h1
                    className="
                        text-3xl
                        font-extrabold
                        text-slate-900
                        tracking-tight
                    "
                >
                    🚚 TruckFlow
                </h1>

                <p
                    className="
                        text-sm
                        text-slate-500
                        mt-1
                    "
                >
                    Smart Route Planning & FMCSA Compliance
                </p>

            </div>



            {/* Navigation */}

            <div
                className="
                    flex
                    gap-8
                    text-slate-600
                    font-medium
                "
            >

                <a
                    href="#dashboard"
                    className="
                        cursor-pointer
                        hover:text-blue-600
                        transition
                    "
                >
                    Dashboard
                </a>


                <a
                    href="#trips"
                    className="
                        cursor-pointer
                        hover:text-blue-600
                        transition
                    "
                >
                    Trips
                </a>


                <a
                    href="#logs"
                    className="
                        cursor-pointer
                        hover:text-blue-600
                        transition
                    "
                >
                    Logs
                </a>


            </div>


        </nav>

    );
}