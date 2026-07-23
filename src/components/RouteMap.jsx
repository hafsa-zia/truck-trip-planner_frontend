import {
    MapContainer,
    TileLayer,
    Polyline,
    Marker,
    Popup
} from "react-leaflet";
import L from "leaflet";
export default function RouteMap({ trip }) {

    if (!trip?.coordinates?.length) {
        return null;
    }

    const positions = trip.coordinates
    .flat()
    .map(([lng, lat]) => [lat, lng]);
const greenIcon = new L.Icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const yellowIcon = new L.Icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const redIcon = new L.Icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
    console.log("Current:", trip.current_coordinates);
    console.log("Pickup:", trip.pickup_coordinates);
    console.log("Dropoff:", trip.dropoff_coordinates);
    console.log("Total Points:", positions.length);
    console.log("Positions:", positions);
    console.log("new",JSON.stringify(trip.coordinates));

    return (

        <div
            className="
                bg-white
                p-6
                rounded-2xl
                border
                border-slate-200
                shadow-xl
            "
        >

            <div className="mb-5">

                <h2
                    className="
                        text-2xl
                        font-bold
                        text-slate-900
                    "
                >
                    Route Map
                </h2>

                <p
                    className="
                        text-slate-500
                        mt-1
                    "
                >
                    Visualize your optimized truck route
                </p>

            </div>


            <div
                className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                "
            >

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


                    <Polyline
                        positions={positions}
                        pathOptions={{
                            color: "#2563eb",
                            weight: 5,
                            opacity: 0.9
                        }}
                    />


                    <Marker
    position={[
        trip.current_coordinates[1],
        trip.current_coordinates[0]
    ]}
    icon={greenIcon}
>
    <Popup>Current Location</Popup>
</Marker>

<Marker
    position={[
        trip.pickup_coordinates[1],
        trip.pickup_coordinates[0]
    ]}
    icon={yellowIcon}
>
    <Popup>Pickup Location</Popup>
</Marker>

<Marker
    position={[
        trip.dropoff_coordinates[1],
        trip.dropoff_coordinates[0]
    ]}
    icon={redIcon}
>
    <Popup>Dropoff Location</Popup>
</Marker>


                    <Marker
                        position={[
                            trip.dropoff_coordinates[1],
                            trip.dropoff_coordinates[0]
                        ]}
                    >
                        <Popup>
                            🔴 Dropoff Location
                        </Popup>
                    </Marker>


                </MapContainer>

            </div>

        </div>

    );
}