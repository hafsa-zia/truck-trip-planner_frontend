import {
    MapContainer,
    TileLayer,
    Polyline
} from "react-leaflet";

export default function RouteMap({ trip }) {

    if (!trip?.coordinates?.length) {
        return null;
    }

    // Remove any invalid coordinates
    const positions = trip.coordinates[0]
        .filter(
            (point) =>
                Array.isArray(point) &&
                point.length === 2 
        )
        .map(
            ([lng, lat]) => [lat, lng]
        );

    console.log(positions);
    console.log("Coordinates:", trip.coordinates);
    console.log("Positions:", positions);
    console.log("Total Points:", positions.length);
    return (
        <div className="bg-white p-5 rounded-xl">

            <h2 className="mb-4 text-xl font-bold">
                Route Map
            </h2>

            <MapContainer
                center={positions[0]}
                zoom={7}
                style={{
                    height: "500px",
                    width: "100%"
                }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                
                
                <Polyline positions={positions}
                    pathOptions={{
                        color: "blue",
                        weight: 2,
                        opacity: 1
                    }}
                />
            </MapContainer>

        </div>
    );
}