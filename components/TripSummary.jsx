export default function TripSummary({trip}){

    return(

        <div
            className="
            bg-white
            p-5
            rounded-xl
            shadow-lg
            "
        >

            <h2>Trip Summary</h2>

            <p>
                Distance:
                {trip.distance} miles
            </p>

            <p>
                Duration:
                {trip.duration} hours
            </p>

            <p>
                Days:
                {trip.total_days}
            </p>

        </div>
    )
}